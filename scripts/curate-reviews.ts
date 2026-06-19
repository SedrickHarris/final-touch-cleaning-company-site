// scripts/curate-reviews.ts
// Step 2 of the GBP review pipeline (mirrors the Sirius Systems setup).
//
// Interactive curation CLI. Reads data/google-reviews.staged.json (output of
// fetch-reviews.ts) and walks each NEW review (not already in
// data/google-reviews.json). For each one:
//   [y] approve  →  add with verified: true + permissionToPublish: true
//   [n] skip     →  do not include
//   [e] edit     →  override the displayed reviewer name, then approve
// On approve/edit you are also prompted for the display fields Final Touch renders:
//   reviewDate  (e.g. "May 2026" — defaults to the review's create month/year)
//   city        (e.g. "Clark County, NV" — optional)
//
// Final output: data/google-reviews.json. Only this file is committed.
// Previously-approved reviews are preserved and never re-prompted.
//
// If zero reviews end up approved, top-level `verified` stays false so the site
// renders the neutral trust fallback instead of an empty review block.

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const ROOT = process.cwd();
const STAGED_PATH = path.join(ROOT, 'data', 'google-reviews.staged.json');
const FINAL_PATH = path.join(ROOT, 'data', 'google-reviews.json');

// Matches lib/google-reviews.ts (VerifiedReview / ReviewsData).
type Review = {
  id: string;
  reviewerName: string;
  avatarUrl: string | null;
  reviewText: string;
  starCount: 1 | 2 | 3 | 4 | 5;
  reviewDate: string;
  publishedAt: string;
  city: string;
  reviewUrl: string | null;
  verified: boolean;
  permissionToPublish: boolean;
};

type Summary = {
  averageRating: number | null;
  totalReviewCount: number | null;
  lastFetchedAt: string | null;
};

type StagedFile = {
  fetchedAt: string;
  placeId: string | null;
  placeUrl: string | null;
  summary: Summary;
  reviews: Review[];
};

type FinalFile = {
  verified: boolean;
  lastVerifiedAt: string | null;
  source: string;
  placeId: string | null;
  placeUrl: string | null;
  writeReviewUrl: string | null;
  summary: Summary | null;
  reviews: Review[];
};

function stars(n: number): string {
  return `${'★'.repeat(n)}${'☆'.repeat(5 - n)}`;
}

function defaultReviewDate(publishedAt: string): string {
  if (!publishedAt) return '';
  const d = new Date(publishedAt);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

function ask(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise((resolve) => rl.question(prompt, (ans) => resolve(ans)));
}

async function main(): Promise<void> {
  if (!fs.existsSync(STAGED_PATH)) {
    console.error(`\n❌  No staged reviews file at ${STAGED_PATH}.`);
    console.error('   Run `npm run fetch-reviews` first.\n');
    process.exit(1);
  }

  const staged = JSON.parse(fs.readFileSync(STAGED_PATH, 'utf8')) as StagedFile;

  // Load existing curated file if present; otherwise start from a neutral fallback.
  let existing: FinalFile = {
    verified: false,
    lastVerifiedAt: null,
    source: 'google-business-profile',
    placeId: null,
    placeUrl: null,
    writeReviewUrl: null,
    summary: null,
    reviews: [],
  };
  if (fs.existsSync(FINAL_PATH)) {
    existing = { ...existing, ...(JSON.parse(fs.readFileSync(FINAL_PATH, 'utf8')) as Partial<FinalFile>) };
  }

  const existingIds = new Set(existing.reviews.map((r) => r.id));
  const newReviews = staged.reviews.filter((r) => !existingIds.has(r.id));

  console.log(`\nStaged total:     ${staged.reviews.length}`);
  console.log(`Already approved: ${existingIds.size}`);
  console.log(`New to curate:    ${newReviews.length}`);

  if (newReviews.length === 0) {
    console.log('\nNothing to do.\n');
    return;
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const newlyApproved: Review[] = [];

  for (let i = 0; i < newReviews.length; i++) {
    const r = newReviews[i];
    console.log('');
    console.log(`[${i + 1}/${newReviews.length}] ${r.reviewerName}`);
    console.log(`Rating: ${stars(r.starCount)} (${r.starCount}/5)`);
    console.log(`Text:   ${r.reviewText || '(no comment)'}`);

    const action = (await ask(rl, 'Action: [y] approve / [n] skip / [e] edit name: ')).trim().toLowerCase();
    if (action !== 'y' && action !== 'e') {
      console.log('→ skipped');
      continue;
    }

    let reviewerName = r.reviewerName;
    if (action === 'e') {
      const newName = (await ask(rl, `Display name (blank = keep "${r.reviewerName}"): `)).trim();
      reviewerName = newName || r.reviewerName;
    }

    const dateDefault = defaultReviewDate(r.publishedAt);
    const dateAns = (await ask(rl, `Review date (blank = "${dateDefault}"): `)).trim();
    const reviewDate = dateAns || dateDefault;
    const city = (await ask(rl, 'City (blank = none, e.g. "Clark County, NV"): ')).trim();

    newlyApproved.push({
      ...r,
      reviewerName,
      reviewDate,
      city,
      verified: true,
      permissionToPublish: true,
    });
    console.log('→ approved');
  }

  rl.close();

  const allApproved = [...existing.reviews, ...newlyApproved];

  const final: FinalFile = {
    // verified: true only when at least one review is approved. Each approved review
    // carries verified + permissionToPublish by construction (see lib/google-reviews.ts).
    verified: allApproved.length > 0,
    lastVerifiedAt: new Date().toISOString(),
    source: existing.source ?? 'google-business-profile',
    placeId: staged.placeId ?? existing.placeId,
    placeUrl: staged.placeUrl ?? existing.placeUrl,
    writeReviewUrl: existing.writeReviewUrl,
    summary: {
      averageRating: staged.summary.averageRating,
      totalReviewCount: staged.summary.totalReviewCount,
      lastFetchedAt: staged.summary.lastFetchedAt,
    },
    reviews: allApproved,
  };

  fs.writeFileSync(FINAL_PATH, JSON.stringify(final, null, 2));

  console.log('');
  console.log('---');
  console.log(`Approved this session: ${newlyApproved.length}`);
  console.log(`Total approved now:    ${allApproved.length}`);
  console.log(`Wrote:                 data/google-reviews.json`);
  console.log('');
  console.log('To publish:');
  console.log('  git add data/google-reviews.json');
  console.log('  git commit -m "reviews: curate GBP reviews"');
  console.log('  git push\n');
}

main().catch((err) => {
  console.error('\n❌  Curation failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});

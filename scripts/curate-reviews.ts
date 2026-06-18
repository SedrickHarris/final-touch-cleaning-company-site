// scripts/curate-reviews.ts
//
// Interactive CLI curation step. Reads data/google-reviews.staged.json,
// prompts you to approve/skip/edit each review, then writes
// data/google-reviews.json with verified: true on approved reviews.
//
// Usage (PowerShell from repo root):
//   npm run curate-reviews
//
// Keys: y = approve, n = skip, e = edit name then approve, q = quit

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// Launched via `npm run curate-reviews` from the repo root, so cwd is the project
// root. Use cwd rather than __dirname: Node 24 runs this .ts file as an ES module
// (native type stripping + ESM detection), where __dirname is undefined.
const ROOT = process.cwd();
const STAGED_PATH = path.join(ROOT, 'data', 'google-reviews.staged.json');
const OUTPUT_PATH = path.join(ROOT, 'data', 'google-reviews.json');

type StagedReview = {
  id: string;
  reviewerName: string;
  avatarUrl: string | null;
  reviewText: string;
  starCount: 1 | 2 | 3 | 4 | 5;
  publishedAt: string;
  reviewDate: string;
  city: string;
  reviewUrl: string | null;
  verified: boolean;
  permissionToPublish: boolean;
};

type StagedFile = {
  fetchedAt: string;
  placeId: string;
  summary: {
    averageRating: number | null;
    totalReviewCount: number | null;
    lastFetchedAt: string | null;
  };
  reviews: StagedReview[];
};

function prompt(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

async function main() {
  console.log('\n📋  Final Touch GBP Reviews — Curation\n');

  if (!fs.existsSync(STAGED_PATH)) {
    console.error('❌  data/google-reviews.staged.json not found.\n   Run: npm run fetch-reviews\n');
    process.exit(1);
  }

  const staged: StagedFile = JSON.parse(fs.readFileSync(STAGED_PATH, 'utf8'));

  if (!staged.reviews.length) {
    console.log('ℹ️   No reviews in the staged file.\n');
    process.exit(0);
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let existingApproved: StagedReview[] = [];
  if (fs.existsSync(OUTPUT_PATH)) {
    const existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'));
    existingApproved = (existing.reviews ?? []).filter(
      (r: StagedReview) => r.verified && r.permissionToPublish
    );
  }

  const approvedIds = new Set(existingApproved.map((r) => r.id));
  const approved: StagedReview[] = [...existingApproved];

  console.log(`   ${staged.reviews.length} review(s) in staged file.`);
  if (existingApproved.length > 0) {
    console.log(`   ${existingApproved.length} previously approved review(s) preserved.`);
  }
  console.log('\n   Keys: [y] approve  [n] skip  [e] edit name then approve  [q] quit\n');
  console.log('─'.repeat(60));

  let quit = false;

  for (const review of staged.reviews) {
    if (quit) break;

    if (approvedIds.has(review.id)) {
      console.log(`\n⏭   Already approved: "${review.reviewerName}" — skipping.`);
      continue;
    }

    const stars = '★'.repeat(review.starCount) + '☆'.repeat(5 - review.starCount);
    const date = formatDate(review.publishedAt);

    console.log(`\n👤  ${review.reviewerName}`);
    console.log(`⭐  ${stars}  (${review.starCount}/5)  |  ${date}`);
    if (review.reviewText) {
      const words = review.reviewText.split(' ');
      let line = '💬  ';
      for (const word of words) {
        if ((line + word).length > 80) { console.log(line); line = '    ' + word + ' '; }
        else { line += word + ' '; }
      }
      if (line.trim()) console.log(line);
    } else {
      console.log('💬  (no text — rating only)');
    }

    let action = '';
    while (!['y', 'n', 'e', 'q'].includes(action)) {
      action = (await prompt(rl, '\n   Action [y/n/e/q]: ')).trim().toLowerCase();
    }

    if (action === 'q') {
      quit = true;
      console.log('\n⚠️   Quit without saving.\n');
      rl.close();
      process.exit(0);
    }

    if (action === 'n') { console.log('   ⏭  Skipped.'); continue; }

    let displayName = review.reviewerName;
    if (action === 'e') {
      const edited = (await prompt(rl, `   Display name [current: "${displayName}"]: `)).trim();
      if (edited) displayName = edited;
    }

    const cityInput = (await prompt(rl, '   City/area label [default: Clark County, NV]: ')).trim();
    const city = cityInput || 'Clark County, NV';
    const reviewDate = formatDate(review.publishedAt);

    approved.push({ ...review, reviewerName: displayName, reviewDate, city, verified: true, permissionToPublish: true });
    console.log(`   ✅  Approved: "${displayName}" from ${city}`);
  }

  rl.close();

  if (approved.length === 0) {
    console.log('\nℹ️   No reviews approved. google-reviews.json not updated.\n');
    process.exit(0);
  }

  const avg = approved.reduce((sum, r) => sum + r.starCount, 0) / approved.length;
  const averageRating = Math.round(avg * 10) / 10;

  const output = {
    verified: true,
    lastVerifiedAt: new Date().toISOString(),
    source: 'google-business-profile',
    placeId: staged.placeId,
    placeUrl: 'https://www.google.com/maps?cid=5303198646776788086',
    writeReviewUrl: 'https://g.page/r/CXZ0dloSv5hJEBI/review',
    summary: { averageRating, totalReviewCount: staged.summary.totalReviewCount, lastFetchedAt: staged.summary.lastFetchedAt },
    reviews: approved,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`\n✅  Wrote ${approved.length} approved review(s) to data/google-reviews.json`);
  console.log(`   Average rating: ${averageRating} / 5`);
  console.log('\n   Next: git add data/google-reviews.json && git commit -m "reviews: curate GBP reviews"\n');
}

main().catch((err) => {
  console.error('\n❌  Curation failed:', err.message ?? err);
  process.exit(1);
});

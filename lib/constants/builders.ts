// Canonical list of builder post-construction-cleaning leaf pages.
// Single source of truth for the sibling chips rendered on every builder leaf
// page (each page maps over this list, filtering out its own href). Order is
// the build order. chipLabel matches the established chip wording per builder.
export const BUILDERS = [
  {
    href: '/builders/toll-brothers-post-construction-cleaning',
    chipLabel: 'Toll Brothers Post-Construction Cleaning',
  },
  {
    href: '/builders/pulte-homes-post-construction-cleaning',
    chipLabel: 'Pulte Homes Post-Construction Cleaning',
  },
  {
    href: '/builders/dr-horton-post-construction-cleaning',
    chipLabel: 'D.R. Horton Post-Construction Cleaning',
  },
  {
    href: '/builders/lennar-post-construction-cleaning',
    chipLabel: 'Lennar Post-Construction Cleaning',
  },
  {
    href: '/builders/kb-home-post-construction-cleaning',
    chipLabel: 'KB Home Post-Construction Cleaning',
  },
  {
    href: '/builders/taylor-morrison-post-construction-cleaning',
    chipLabel: 'Taylor Morrison Post-Construction Cleaning',
  },
  {
    href: '/builders/tri-pointe-post-construction-cleaning',
    chipLabel: 'Tri Pointe Post-Construction Cleaning',
  },
  {
    href: '/builders/century-communities-post-construction-cleaning',
    chipLabel: 'Century Communities Post-Construction Cleaning',
  },
  {
    href: '/builders/taylor-morrison-ascension-post-construction-cleaning',
    chipLabel: 'Taylor Morrison at Ascension',
  },
  {
    href: '/builders/shea-homes-post-construction-cleaning',
    chipLabel: 'Shea Homes Post-Construction Cleaning',
  },
] as const;

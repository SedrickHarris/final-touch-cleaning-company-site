# Image Relocation Map

Images under `public/images/` were relocated into folders by real aspect ratio (measured from pixel dimensions, 2% tolerance). Filenames are unchanged; only the folder changed. All moves were done with `git mv`.

## Ratio buckets

| Folder | Ratio | Files moved |
|---|---|---|
| `images/16x9/` | about 1.778, e.g. 1672x941 | 62 |
| `images/16x10/` | 1.600, e.g. 1586x992 | 7 |
| `images/4x3/` | 1.333, e.g. 1448x1086 | 5 |
| `images/portrait-9x11/` | about 0.818, e.g. 1636x2000 | 1 |
| **Total** | | **75** |

## Exceptions left in place

- `public/images/logo/**` (1 file, 1x1) - non-content asset
- `public/images/favicons/**` (2 files, 1x1) - non-content asset
- `app/favicon.ico` and the default Next.js SVGs in `public/` (next.svg, globe.svg, file.svg, window.svg, vercel.svg)

## Naming convention going forward

New images go to `public/images/<ratio>/<category>/` based on their real pixel dimensions (not filename guesses). Ratio folders: `16x9`, `16x10`, `4x3`, `portrait-9x11`, `1x1`. Reference them as `/images/<ratio>/<category>/<filename>`.

## Old path to new path

| Old path | New path |
|---|---|
| `images/builders/builders-post-construction-cleaning-hub-hero-image.webp` | `images/16x9/builders/builders-post-construction-cleaning-hub-hero-image.webp` |
| `images/builders/century-communities-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/century-communities-post-construction-cleaning-hero-image.webp` |
| `images/builders/cleaning-process-commercial-cleaning-hero-image.webp` | `images/16x9/builders/cleaning-process-commercial-cleaning-hero-image.webp` |
| `images/builders/dr-horton-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/dr-horton-post-construction-cleaning-hero-image.webp` |
| `images/builders/kb-home-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/kb-home-post-construction-cleaning-hero-image.webp` |
| `images/builders/lennar-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/lennar-post-construction-cleaning-hero-image.webp` |
| `images/builders/pricing-commercial-cleaning-hero-image.webp` | `images/16x9/builders/pricing-commercial-cleaning-hero-image.webp` |
| `images/builders/pulte-homes-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/pulte-homes-post-construction-cleaning-hero-image.webp` |
| `images/builders/reviews-commercial-cleaning-hero-image.webp` | `images/16x9/builders/reviews-commercial-cleaning-hero-image.webp` |
| `images/builders/shea-homes-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/shea-homes-post-construction-cleaning-hero-image.webp` |
| `images/builders/taylor-morrison-ascension-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/taylor-morrison-ascension-post-construction-cleaning-hero-image.webp` |
| `images/builders/taylor-morrison-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/taylor-morrison-post-construction-cleaning-hero-image.webp` |
| `images/builders/toll-brothers-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/toll-brothers-post-construction-cleaning-hero-image.webp` |
| `images/builders/tri-pointe-post-construction-cleaning-hero-image.webp` | `images/16x9/builders/tri-pointe-post-construction-cleaning-hero-image.webp` |
| `images/heroes/clark-county-cleaning-service-area-hero.webp` | `images/16x9/heroes/clark-county-cleaning-service-area-hero.webp` |
| `images/heroes/cleaning-service-faq-las-vegas-hero.webp` | `images/16x9/heroes/cleaning-service-faq-las-vegas-hero.webp` |
| `images/heroes/cleaning-services-las-vegas-clark-county-hero.webp` | `images/16x9/heroes/cleaning-services-las-vegas-clark-county-hero.webp` |
| `images/heroes/commercial-cleaning-industries-hub-hero-image.webp` | `images/16x9/heroes/commercial-cleaning-industries-hub-hero-image.webp` |
| `images/heroes/contact-final-touch-cleaning-company-hero.webp` | `images/16x9/heroes/contact-final-touch-cleaning-company-hero.webp` |
| `images/heroes/family-owned-cleaning-company-las-vegas-hero.webp` | `images/16x9/heroes/family-owned-cleaning-company-las-vegas-hero.webp` |
| `images/heroes/final-touch-cleaning-services-las-vegas-hero.webp` | `images/16x9/heroes/final-touch-cleaning-services-las-vegas-hero.webp` |
| `images/heroes/free-cleaning-quote-las-vegas-hero.webp` | `images/16x9/heroes/free-cleaning-quote-las-vegas-hero.webp` |
| `images/heroes/locations/boulder-city-commercial-cleaning-hero.webp` | `images/16x9/heroes/locations/boulder-city-commercial-cleaning-hero.webp` |
| `images/heroes/locations/clark-county-commercial-cleaning-service-area-hero.webp` | `images/16x9/heroes/locations/clark-county-commercial-cleaning-service-area-hero.webp` |
| `images/heroes/locations/clark-county-nv-commercial-cleaning-hero.webp` | `images/16x9/heroes/locations/clark-county-nv-commercial-cleaning-hero.webp` |
| `images/heroes/locations/henderson-commercial-cleaning-hero.webp` | `images/16x9/heroes/locations/henderson-commercial-cleaning-hero.webp` |
| `images/heroes/locations/las-vegas-commercial-cleaning-hero.webp` | `images/16x9/heroes/locations/las-vegas-commercial-cleaning-hero.webp` |
| `images/heroes/locations/north-las-vegas-commercial-cleaning-hero.webp` | `images/16x9/heroes/locations/north-las-vegas-commercial-cleaning-hero.webp` |
| `images/industries/law-firm-cleaning-henderson-nv-hero-image.webp` | `images/16x9/industries/law-firm-cleaning-henderson-nv-hero-image.webp` |
| `images/industries/law-firm-cleaning-las-vegas-nv-hero-image.webp` | `images/16x9/industries/law-firm-cleaning-las-vegas-nv-hero-image.webp` |
| `images/industries/law-firm-cleaning-north-las-vegas-nv-hero-image.webp` | `images/16x9/industries/law-firm-cleaning-north-las-vegas-nv-hero-image.webp` |
| `images/industries/medical-office-cleaning-henderson-nv-hero-image.webp` | `images/16x9/industries/medical-office-cleaning-henderson-nv-hero-image.webp` |
| `images/industries/medical-office-cleaning-las-vegas-nv-hero-image.webp` | `images/16x9/industries/medical-office-cleaning-las-vegas-nv-hero-image.webp` |
| `images/industries/medical-office-cleaning-north-las-vegas-nv-hero-image.webp` | `images/16x9/industries/medical-office-cleaning-north-las-vegas-nv-hero-image.webp` |
| `images/industries/property-management-cleaning-henderson-nv-hero-image.webp` | `images/16x9/industries/property-management-cleaning-henderson-nv-hero-image.webp` |
| `images/industries/property-management-cleaning-las-vegas-nv-hero-image.webp` | `images/16x9/industries/property-management-cleaning-las-vegas-nv-hero-image.webp` |
| `images/industries/property-management-cleaning-north-las-vegas-nv-hero-image.webp` | `images/16x9/industries/property-management-cleaning-north-las-vegas-nv-hero-image.webp` |
| `images/industries/restaurant-cleaning-henderson-nv-hero-image.webp` | `images/16x9/industries/restaurant-cleaning-henderson-nv-hero-image.webp` |
| `images/industries/restaurant-cleaning-las-vegas-nv-hero-image.webp` | `images/16x9/industries/restaurant-cleaning-las-vegas-nv-hero-image.webp` |
| `images/industries/restaurant-cleaning-north-las-vegas-nv-hero-image.webp` | `images/16x9/industries/restaurant-cleaning-north-las-vegas-nv-hero-image.webp` |
| `images/industries/retail-store-cleaning-henderson-nv-hero-image.webp` | `images/16x9/industries/retail-store-cleaning-henderson-nv-hero-image.webp` |
| `images/industries/retail-store-cleaning-las-vegas-nv-hero-image.webp` | `images/16x9/industries/retail-store-cleaning-las-vegas-nv-hero-image.webp` |
| `images/industries/retail-store-cleaning-north-las-vegas-nv-hero-image.webp` | `images/16x9/industries/retail-store-cleaning-north-las-vegas-nv-hero-image.webp` |
| `images/locations/aliante-north-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/aliante-north-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/anthem-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/anthem-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/arts-district-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/arts-district-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/boulder-city-commercial-cleaning-location-card-image.webp` | `images/4x3/locations/boulder-city-commercial-cleaning-location-card-image.webp` |
| `images/locations/cadence-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/cadence-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/centennial-hills-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/centennial-hills-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/clark-county-commercial-cleaning-location-card-image.webp` | `images/4x3/locations/clark-county-commercial-cleaning-location-card-image.webp` |
| `images/locations/downtown-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/downtown-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/green-valley-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/green-valley-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/green-valley-ranch-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/green-valley-ranch-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/henderson-commercial-cleaning-location-card-image.webp` | `images/4x3/locations/henderson-commercial-cleaning-location-card-image.webp` |
| `images/locations/inspirada-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/inspirada-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/lake-las-vegas-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/lake-las-vegas-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/las-vegas-commercial-cleaning-location-card-image.webp` | `images/4x3/locations/las-vegas-commercial-cleaning-location-card-image.webp` |
| `images/locations/macdonald-highlands-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/macdonald-highlands-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/nellis-area-north-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/nellis-area-north-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/north-las-vegas-commercial-cleaning-location-card-image.webp` | `images/4x3/locations/north-las-vegas-commercial-cleaning-location-card-image.webp` |
| `images/locations/paradise-las-vegas-strip-commercial-cleaning-hero-image.webp` | `images/16x9/locations/paradise-las-vegas-strip-commercial-cleaning-hero-image.webp` |
| `images/locations/seven-hills-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/seven-hills-henderson-commercial-cleaning-hero-image.webp` |
| `images/locations/southern-highlands-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/southern-highlands-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/spring-valley-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/spring-valley-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/summerlin-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/summerlin-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/sunrise-manor-las-vegas-commercial-cleaning-hero-image.webp` | `images/16x9/locations/sunrise-manor-las-vegas-commercial-cleaning-hero-image.webp` |
| `images/locations/tuscany-village-henderson-commercial-cleaning-hero-image.webp` | `images/16x9/locations/tuscany-village-henderson-commercial-cleaning-hero-image.webp` |
| `images/owners/team.webp` | `images/portrait-9x11/owners/team.webp` |
| `images/services/commercial-office-cleaning-las-vegas-nv-final-touch.webp` | `images/16x10/services/commercial-office-cleaning-las-vegas-nv-final-touch.webp` |
| `images/services/deep-cleaning-baseboards-las-vegas-nv-final-touch.webp` | `images/16x10/services/deep-cleaning-baseboards-las-vegas-nv-final-touch.webp` |
| `images/services/janitorial-services-las-vegas-nv-final-touch.webp` | `images/16x10/services/janitorial-services-las-vegas-nv-final-touch.webp` |
| `images/services/move-in-cleaning-las-vegas-nv-final-touch.webp` | `images/16x10/services/move-in-cleaning-las-vegas-nv-final-touch.webp` |
| `images/services/move-out-cleaning-las-vegas-nv-final-touch.webp` | `images/16x10/services/move-out-cleaning-las-vegas-nv-final-touch.webp` |
| `images/services/post-construction-cleanup-las-vegas-nv-final-touch.webp` | `images/16x10/services/post-construction-cleanup-las-vegas-nv-final-touch.webp` |
| `images/services/retail-space-cleaning-las-vegas-nv-final-touch.webp` | `images/16x10/services/retail-space-cleaning-las-vegas-nv-final-touch.webp` |

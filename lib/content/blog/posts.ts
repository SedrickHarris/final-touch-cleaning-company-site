import type { BlogPost } from './types';

// Published posts only. Planned posts live in docs/site-os/blog-launch-list.md,
// never here, so no link, card, or chip can point at a page that does not exist.
//
// Inline text in `p` and `ul` supports [label](/path) links and **bold** only.

export const posts: ReadonlyArray<BlogPost> = [
  {
    slug: 'what-should-be-cleaned-after-construction-work',
    categorySlug: 'post-construction-cleaning',
    title: 'What Should Be Cleaned After Construction Work?',
    excerpt:
      'A practical walkthrough of what post-construction cleanup covers, from ceilings to floors, and how to keep fine dust from coming back.',
    metaTitle: 'What Should Be Cleaned After Construction Work?',
    metaDescription:
      'A guide to what post-construction cleaning covers, from ceilings to floors, and how to keep fine dust from coming back. Request a free quote.',
    status: 'published',
    featured: true,
    publishedAt: '2026-11-17',
    pillar: { label: 'Post-Construction Cleanup', href: '/services/post-construction-cleanup' },
    relatedSlugs: [],
    blocks: [
      {
        type: 'p',
        text: 'After construction, cleanup should cover far more than debris and dirty floors. Ceilings, walls, vents, light fixtures, glass, cabinets, equipment, and floors all need to be checked for fine construction dust and residue. Depending on the project, the work may also include removing protective film, stickers, paint drips, adhesive, and grout haze.',
      },
      {
        type: 'p',
        text: 'For a commercial property, the exact checklist should reflect the work performed, the surfaces installed, and the scope agreed upon with your cleaning company. A restaurant tenant improvement has different requirements than an office remodel or a retail build-out.',
      },
      {
        type: 'p',
        // OSHA 10 sentence is owner-confirmed (docs/site-os/owner-confirmed-facts.md). No TODO-VERIFY.
        text: "We're [Scott and Nicole Maland](/our-team), owners of Final Touch Cleaning Company, and we do about 85% of the physical cleaning ourselves. Our team holds an OSHA 10 Construction Certification. Our interest in construction cleanup began when we helped Nicole's father build and clean up several of his homes. Today we mostly clean commercial tenant improvements and remodels across Southern Nevada, including restaurants, a coffee shop, a wine tasting lounge, [retail spaces](/services/retail-space-cleaning), and [large offices](/services/commercial-office-cleaning).",
      },
      {
        type: 'p',
        text: 'This guide is written for general contractors, project managers, superintendents, and commercial property managers who need [post-construction cleaning](/services/post-construction-cleanup) done right. One thing those projects have taught us: a space can look nearly finished and still need substantial detail cleaning before handover.',
      },

      { type: 'h2', id: 'start-with-the-scope-and-a-walkthrough', text: 'Start With the Scope and a Walkthrough' },
      {
        type: 'p',
        text: 'Every project we take on has an individualized scope of work agreed upon with the general contractor. During the walkthrough, we identify what needs cleaning, discuss existing conditions, and clarify who is responsible for anything outside the agreed scope. Because we also do rough cleans, that can include debris removal.',
      },
      { type: 'p', text: 'The areas below are the starting point for that conversation.' },

      { type: 'h2', id: 'what-areas-need-cleaning-after-construction', text: 'What Areas Need Cleaning After Construction?' },
      { type: 'h3', text: 'Ceilings, High Vents, and Overhead Features' },
      {
        type: 'p',
        text: 'We work from the top down, so we evaluate accessible ceiling features, high vents, light fixtures, and architectural elements before cleaning anything beneath them.',
      },
      {
        type: 'p',
        text: 'High dusting is one of the most commonly missed parts of post-construction cleanup. If dust is left overhead, a space may look clean at eye level while dust keeps circulating through the building.',
      },
      { type: 'h3', text: 'Walls, Doors, Frames, and Trim' },
      {
        type: 'p',
        text: 'The first thing we check when we walk into a project is dust collection on the walls. It tells us how much fine construction dust we are dealing with and how to plan the job.',
      },
      {
        type: 'p',
        text: 'We also evaluate doors, frames, trim, and ledges for settled dust and construction residue. Our process removes loose dust before applying water or cleaning products. When someone wets a dusty surface first, the result is streaking.',
      },
      { type: 'h3', text: 'Windows, Glass, and Window Frames' },
      {
        type: 'p',
        text: 'Windows and interior glass may need attention for dust, fingerprints, stickers, adhesive, or paint residue. The scope should state which glass surfaces are included and whether specialty window cleaning is needed. On one larger office project, we brought in a window cleaning company from our BNI chapter to handle the interior windows and a glass conference wall.',
      },
      {
        type: 'p',
        text: 'Paint drips on window frames are a common issue. We evaluate each finish rather than assuming one aggressive removal method works everywhere.',
      },
      { type: 'h3', text: 'Cabinets, Drawers, Shelving, and Fixtures' },
      {
        type: 'p',
        text: 'A clean-looking room does not always mean the cabinets, equipment, and work surfaces are ready for use. Depending on the project, the scope may include:',
      },
      {
        type: 'ul',
        items: [
          'Cabinet exteriors and interiors',
          'Drawers and shelving',
          'Counters and installed fixtures',
          'Desks, chairs, and other furniture',
          'Equipment surfaces and accessible ledges',
        ],
      },
      { type: 'h3', text: 'Floors' },
      {
        type: 'p',
        text: "Floors are the last step in our top-to-bottom process. We vacuum thoroughly before any wet floor cleaning, because mopping over loose construction dust spreads it and creates more work. We also inspect for paint drips, grout haze, adhesive, and other residue that may need separate attention.",
      },

      { type: 'h2', id: 'why-a-broom-clean-is-not-enough', text: 'Why a Broom-Clean Is Not Enough' },
      {
        type: 'p',
        text: 'Many clients assume a basic cleanup from the construction crew leaves a space ready for use. Removing obvious debris is not the same as removing fine construction dust, which settles on walls, inside HVAC registers, on light fixtures, and on high architectural elements even when the floor looks fine.',
      },
      { type: 'p', text: 'Here is the short version of [our cleaning process](/cleaning-process):' },
      {
        type: 'ul',
        items: [
          'HEPA-filtered vacuuming, which we consider essential for any post-construction clean because it captures fine dust instead of pushing it back into the air',
          'Microfiber cloths to lift dust off surfaces',
          'A top-to-bottom sequence on every job',
          'Loose-dust removal before any wet cleaning',
        ],
      },
      {
        type: 'p',
        text: 'The sequence matters as much as the tools. Cleaning the floors first and then disturbing dust overhead undoes the work you just did.',
      },

      { type: 'h2', id: 'the-three-stages-of-post-construction-cleaning', text: 'The Three Stages of Post-Construction Cleaning' },
      {
        type: 'p',
        text: 'A rough clean, final clean, and touch-up clean serve different purposes. Knowing which stage your project needs keeps the scope and expectations aligned.',
      },
      { type: 'h3', text: 'Rough Clean' },
      {
        type: 'p',
        text: 'A rough clean is a functional cleanup during construction or remodeling. It usually happens after the messy trades like framing, drywall, and initial painting finish a phase, and before finish work or final inspections begin. Depending on the agreement, it can include debris removal and initial dust cleanup. The goal is to support the next phase of the project, not to deliver a final finish.',
      },
      { type: 'h3', text: 'Final Clean' },
      {
        type: 'p',
        text: 'The final clean is the detailed phase after all building work, touch-ups, and trade fixes are 100% complete. We work through the agreed scope from top to bottom to prepare the space for a client walkthrough, occupancy, or handover. Scheduling matters here. If cutting, drilling, or other dust-producing work continues afterward, some areas will need cleaning again.',
      },
      { type: 'h3', text: 'Touch-Up Clean' },
      {
        type: 'p',
        text: 'A touch-up clean is a short, targeted visit after punch list repairs or final trade activity, or just before a walkthrough or move-in day. It addresses what happened after the main clean. Drilling a hole in a wall after the final clean, for example, creates new dust that was not there when we finished.',
      },

      { type: 'cta' },

      { type: 'h2', id: 'paint-drips-grout-haze-and-other-stubborn-residue', text: 'Paint Drips, Grout Haze, and Other Stubborn Residue' },
      {
        type: 'p',
        text: 'Some construction messes go beyond routine dust removal. We regularly find paint drips on floors and window frames and grout haze left after tile work.',
      },
      {
        type: 'p',
        text: "Timing matters with grout haze. It is generally recommended to clean it off no sooner than the third day after the tile is set and no later than ten days after. Wait too long and it becomes much harder to remove, so follow your tile and grout manufacturer's guidance.",
      },
      { type: 'p', text: 'When a mess is substantial, we contact the general contractor and give two options:' },
      {
        type: 'ul',
        items: [
          'Have the responsible trade come back and clean up their own work',
          'Authorize us to handle the additional cleaning for an extra charge',
        ],
      },
      { type: 'p', text: 'We would rather settle that question directly than quietly expand the scope.' },
      { type: 'h3', text: 'Tools and Products That Can Damage New Surfaces' },
      {
        type: 'p',
        text: 'New finishes are expensive, and the wrong method can cause a bigger problem than the residue did.',
      },
      {
        type: 'ul',
        items: [
          'Razor blades can scratch or damage surfaces if they are not used correctly.',
          'Cleaning products used outside of what they were designed for can harm finishes.',
          'Wetting or wiping before vacuuming spreads fine dust instead of removing it.',
        ],
      },
      { type: 'p', text: 'Removing a mess should never come at the expense of the surface underneath it.' },

      { type: 'h2', id: 'why-dust-can-come-back-after-a-professional-clean', text: 'Why Dust Can Come Back After a Professional Clean' },
      {
        type: 'p',
        text: 'The question we hear most is whether all the dust will be gone when we finish. We work to remove construction dust from the agreed cleaning areas, but we cannot guarantee that no dust will appear afterward. Several causes are outside our control:',
      },
      {
        type: 'ul',
        items: [
          'Dust already sitting in HVAC vents',
          'HVAC filters that have not been replaced',
          'Subcontractors returning to drill or finish more work',
          'Doors propped open after the clean',
          'Ceiling tiles that are not cut and set properly, which lets ceiling dust or insulation fall through the gaps',
        ],
      },
      {
        type: 'p',
        text: 'We saw this on a wine tasting lounge project. Gaps in the ceiling tiles, air filters that were not changed, contractors continuing to work after our clean, and drilling that left dust on the floor all kept fine dust recirculating. The cleaning was not the problem. The sequencing was.',
      },
      {
        type: 'p',
        text: 'The lesson is that cleaning and controlling the remaining dust sources are two different responsibilities. If dust-producing work continues, the cleanup plan has to account for it.',
      },

      { type: 'h2', id: 'real-projects-what-good-handoffs-look-like', text: 'Real Projects: What Good Handoffs Look Like' },
      { type: 'h3', text: 'An 8,000 Square Foot HVAC Company Office' },
      {
        type: 'p',
        text: "This two-story office, kitchen, and lobby space showed the value of a good handoff. The general contractor's crew had already vacuumed dust from the floors, cleaned liquid stains from the tile, and removed most stickers from the new equipment. That let us focus on detailed final cleaning.",
      },
      {
        type: 'p',
        text: 'As we do on every job site, we took photos and videos first to document the starting condition. Then we started upstairs and worked from ceilings to walls, desks, chairs, equipment, and finally floors.',
      },
      {
        type: 'p',
        text: 'We had been on site only about 30 minutes when the general contractor and superintendent were already complimenting our work and had called the facility manager to share their reaction. The project took roughly 33 total labor hours. That is combined crew time, not 33 hours of elapsed time.',
      },
      { type: 'h3', text: 'A Coffee Shop Remodel With a Late Start' },
      {
        type: 'p',
        text: 'On one coffee shop remodel, our start time was pushed back because other subcontractors needed to finish first. The job still had to be done that night. We adjusted our sequence and started cleaning while the subcontractors were still working, staying out of their way and keeping our top-to-bottom protocol.',
      },
      {
        type: 'p',
        text: 'When trades and cleaners overlap, clear communication is essential. We need to know which areas are ready for cleaning, where subcontractors are still working, what work could create more dust, and which areas may need another pass before handover.',
      },

      { type: 'h2', id: 'southern-nevada-conditions-that-affect-the-work', text: 'Southern Nevada Conditions That Affect the Work' },
      {
        type: 'p',
        text: 'Cleaning up after construction in Southern Nevada comes with a few local challenges.',
      },
      {
        type: 'ul',
        items: [
          'Summer heat makes the job harder when the power is off or HVAC work is still underway.',
          'Wind and dust blow in every time trades, deliveries, or visitors open the doors, which can make a freshly cleaned space dusty again before handover.',
        ],
      },
      {
        type: 'p',
        text: 'For a commercial project here, access, utilities, HVAC availability, and remaining trade activity all belong in the planning conversation.',
      },
      {
        type: 'p',
        text: 'We provide post-construction cleaning across [Southern Nevada](/services/post-construction-cleanup/clark-county), including [Las Vegas](/services/post-construction-cleanup/las-vegas), [Henderson](/services/post-construction-cleanup/henderson), [North Las Vegas](/services/post-construction-cleanup/north-las-vegas), and [Boulder City](/services/post-construction-cleanup/boulder-city).',
      },

      { type: 'h2', id: 'who-handles-what', text: 'Who Handles What' },
      {
        type: 'p',
        text: "Clear responsibilities prevent most disputes. We settle them during the walkthrough and in conversation before we start, and each project's scope is agreed upon with the general contractor.",
      },
      {
        type: 'p',
        text: 'Biohazards and hazardous materials are a different category. Those need a specialist, not a standard cleaning crew.',
      },

      { type: 'h2', id: 'how-to-prepare-for-a-smoother-post-construction-clean', text: 'How to Prepare for a Smoother Post-Construction Clean' },
      {
        type: 'p',
        text: 'The most useful preparation is a clear walkthrough and an honest conversation about the condition of the project. Before the final clean, we recommend you:',
      },
      {
        type: 'ul',
        items: [
          'Confirm which trades are finished and what work remains',
          'Identify any remaining drilling, cutting, sanding, or other dust-producing work',
          'Agree on the cleaning scope, including interior cabinets, glass, equipment, and high areas',
          'Clarify who is responsible for debris removal',
          'Point out paint residue, grout haze, adhesive, and protective film',
          'Replace HVAC filters and make sure ceiling tiles are properly cut and set',
          'Discuss power, HVAC availability, site access, and scheduling',
          'Decide whether a separate touch-up visit may be needed',
          'Flag any hazardous materials or biohazards that require a specialist',
          'Keep doors closed once the clean is done',
        ],
      },

      { type: 'h2', id: 'our-strongest-opinion-on-post-construction-cleaning', text: 'Our Strongest Opinion on Post-Construction Cleaning' },
      {
        type: 'p',
        text: 'Post-construction cleaning is detailed work, and skipping a single step can mean a call back. There are no shortcuts that hold up. Vacuum before you wipe, work from the top down, and take photos before you start. We follow the same process on every project because it is the one that works.',
      },

      { type: 'h2', id: 'ready-to-schedule-your-post-construction-cleaning', text: 'Ready to Schedule Your Post-Construction Cleaning?' },
      {
        type: 'p',
        // The article's second link to /services/post-construction-cleanup is left as
        // plain text: that URL is already linked once in the intro and again by the sidebar.
        text: 'If you are a general contractor, project manager, superintendent, or property manager in Southern Nevada, we would be glad to walk your project and define a scope that fits your handover schedule. [Request a Free Quote](/free-quote) or learn more about our post-construction cleanup services.',
      },

      {
        type: 'faq',
        heading: 'Frequently Asked Questions',
        footer: 'Have more questions? See [our full FAQ](/faq).',
        items: [
          {
            q: 'Can you remove all of the dust after construction?',
            a: 'We clean thoroughly, but we cannot guarantee that all dust will be gone. Dust in HVAC vents, filters that have not been replaced, subcontractors returning after the clean, and doors propped open can all reintroduce it.',
          },
          {
            q: 'Can you clean while other trades are still on site?',
            a: 'Yes, when the schedule requires it. We have started cleaning while subcontractors were still finishing, and we work around them while keeping our standards. It works best when the overlap is coordinated.',
          },
          {
            q: 'What is the difference between a rough clean and a final clean?',
            a: 'A rough clean happens during construction and is mainly functional, often including debris removal. A final clean happens after all building work and trade fixes are complete and prepares the space for a walkthrough, handover, or occupancy.',
          },
          {
            q: 'Who is responsible for cleaning grout haze and paint drips?',
            a: 'Ideally, the trade that made the mess. If the mess is substantial, we give the general contractor the option of having the trade return or having us clean it for an extra charge.',
          },
          {
            q: 'Do you clean up biohazards or hazardous materials?',
            a: 'No. Those require a specialist.',
          },
        ],
      },
    ],
  },
];

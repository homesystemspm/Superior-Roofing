const buildSiteUrl = (import.meta.env.VITE_SITE_URL || 'https://superior-roofing.invalid').replace(/\/$/, '');

const imageSet = (slug) => ({
  src: `/images/projects/${slug}-lg.jpg`,
  srcSet: `/images/projects/${slug}-sm.jpg 640w, /images/projects/${slug}-lg.jpg 1440w`
});

export const site = {
  name: 'Texas Superior Roofing',
  legalName: 'Texas Superior Roofing, LLC',
  phoneDisplay: '(214) 232-4450',
  phoneHref: 'tel:+12142324450',
  founded: 2011,
  locality: 'Arlington',
  region: 'TX',
  postalCode: '76016',
  localMarket: 'Arlington and the DFW Metroplex',
  localMarketShort: 'DFW Metroplex',
  siteUrl: buildSiteUrl,
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',
  bbbUrl: 'https://www.bbb.org/us/tx/arlington/profile/roofing-contractors/texas-superior-roofing-llc-0825-235975792',
  buildzoomUrl: 'https://www.buildzoom.com/contractor/texas-superior-roofing-llc',
  metaDescription:
    'Texas Superior Roofing serves Arlington and the DFW Metroplex with residential roofing, commercial roofing, storm restoration, and metal detail work.',
  heroImage: imageSet('stone-estate-black-roof'),
  heroImageAlt: 'Large North Texas stone home with a dark new roof under a clear blue sky.',
  socialImage: '/images/projects/stone-estate-black-roof-lg.jpg'
};

export const topFacts = [
  'Founded in 2011',
  'Arlington-based',
  'Serving the DFW Metroplex',
  'BBB Accredited'
];

export const services = [
  {
    title: 'Residential Roof Replacement',
    eyebrow: 'Residential',
    summary:
      'Full roof replacement for homes across Arlington and the surrounding DFW market, with a focus on durable shingle systems and clean curb appeal.',
    bullets: ['Architectural shingle replacements', 'Complex rooflines and steep slopes', 'Clean jobsite and final walkthrough']
  },
  {
    title: 'Storm Damage Response',
    eyebrow: 'Restoration',
    summary:
      'Inspection-first storm response for homes affected by hail, wind, or aging roof failures, with a scope built around what the roof actually needs.',
    bullets: ['Post-storm inspections', 'Damage documentation', 'Repair versus replacement guidance']
  },
  {
    title: 'Commercial Roofing Support',
    eyebrow: 'Commercial',
    summary:
      'Roofing support for commercial properties and large footprints where planning, access, and sequencing matter as much as materials.',
    bullets: ['Commercial reroofing support', 'Large-surface coordination', 'Project communication from scope to completion']
  },
  {
    title: 'Metal Roofing Details',
    eyebrow: 'Metalwork',
    summary:
      'Portfolio-backed standing seam accents, porch roofs, chimney caps, and custom metal details that sharpen both protection and finish quality.',
    bullets: ['Standing seam porch and accent roofs', 'Custom chimney cap work', 'Metal pavilion and specialty details']
  }
];

export const galleryItems = [
  {
    slug: 'stone-estate-black-roof',
    title: 'Luxury estate roof replacement',
    category: 'Architectural shingles',
    summary: 'Dark architectural shingle roof on a large stone residence.',
    alt: 'Large stone residence with a dark architectural shingle roof and manicured front lawn.',
    ...imageSet('stone-estate-black-roof')
  },
  {
    slug: 'estate-gray-aerial',
    title: 'Estate aerial overview',
    category: 'Drone photography',
    summary: 'Aerial capture showing a completed gray shingle roof on a large North Texas home.',
    alt: 'Drone view of a large brick estate with a completed gray shingle roof and pool behind the home.',
    ...imageSet('estate-gray-aerial')
  },
  {
    slug: 'charcoal-front-elevation',
    title: 'Front elevation refresh',
    category: 'Residential roofing',
    summary: 'Ground-level front elevation featuring a clean charcoal shingle finish.',
    alt: 'Front view of a two-story home with a newly finished charcoal roof and stone facade.',
    ...imageSet('charcoal-front-elevation')
  },
  {
    slug: 'red-standing-seam-aerial',
    title: 'Standing seam roof system',
    category: 'Metal roofing',
    summary: 'Aerial metal roof installation with a deep red standing seam finish.',
    alt: 'Aerial view of a red standing seam metal roof on a large home with winding driveway.',
    ...imageSet('red-standing-seam-aerial')
  },
  {
    slug: 'bronze-standing-seam-entry',
    title: 'Entry metal accent',
    category: 'Metal details',
    summary: 'Bronze standing seam entry roof paired with masonry and timber details.',
    alt: 'Front porch with bronze standing seam metal roof, stone facade, and ladders during detail work.',
    ...imageSet('bronze-standing-seam-entry')
  },
  {
    slug: 'farmhouse-wraparound-gray-roof',
    title: 'Wraparound porch replacement',
    category: 'Residential roofing',
    summary: 'Farmhouse roof replacement with a broad wraparound porch and dormers.',
    alt: 'Farmhouse with wraparound porch and completed gray roof under bright skies.',
    ...imageSet('farmhouse-wraparound-gray-roof')
  },
  {
    slug: 'yard-sign-dfw',
    title: 'DFW jobsite presence',
    category: 'Local service',
    summary: 'Yard sign on-site during a residential roofing project in the DFW area.',
    alt: 'Texas Superior Roofing yard sign in front of a completed residential roofing project.',
    ...imageSet('yard-sign-dfw')
  },
  {
    slug: 'chimney-cap-installation',
    title: 'Custom chimney cap work',
    category: 'Metal details',
    summary: 'Measured chimney cap installation captured during fit-up.',
    alt: 'Technician measuring a large dark metal chimney cap on top of a brick chimney.',
    ...imageSet('chimney-cap-installation')
  },
  {
    slug: 'shingle-install-progress',
    title: 'Installation in progress',
    category: 'Project execution',
    summary: 'Roofing crew placing shingles over fresh underlayment during active construction.',
    alt: 'Roofing crew installing shingles over underlayment on a large roof deck.',
    ...imageSet('shingle-install-progress')
  },
  {
    slug: 'modern-standing-seam-home',
    title: 'Modern standing seam system',
    category: 'Metal roofing',
    summary: 'Standing seam roofing on a modern white-brick home with clean lines and multiple planes.',
    alt: 'Modern white-brick home with dark standing seam metal roof viewed from above.',
    ...imageSet('modern-standing-seam-home')
  },
  {
    slug: 'pavilion-metal-roof',
    title: 'Outdoor living roof detail',
    category: 'Metal details',
    summary: 'Metal pavilion roof and stone chimney detail for an outdoor living area.',
    alt: 'Outdoor pavilion with bright metal roof, stone chimney, and timber framing.',
    ...imageSet('pavilion-metal-roof')
  },
  {
    slug: 'charcoal-roof-topdown',
    title: 'Finished shingle system',
    category: 'Drone photography',
    summary: 'Top-down drone shot highlighting ridge lines, slopes, and finished shingle layout.',
    alt: 'Top-down drone view of a completed charcoal shingle roof with pool visible nearby.',
    ...imageSet('charcoal-roof-topdown')
  }
];

export const faqItems = [
  {
    question: 'What areas does Texas Superior Roofing serve?',
    answer:
      'Public business listings and jobsite materials identify Texas Superior Roofing as Arlington-based and serving the wider DFW Metroplex.'
  },
  {
    question: 'What types of roofing projects are shown in the gallery?',
    answer:
      'The current gallery shows residential roof replacements, aerial project captures, standing seam metal details, chimney cap work, and active installation progress.'
  },
  {
    question: 'Can I submit an online request today?',
    answer:
      'Yes, the form is ready for production wiring. If the final submission endpoint has not been configured yet, the site falls back to a clear call-first message instead of faking a successful submission.'
  },
  {
    question: 'Do you publish unverified claims on the site?',
    answer:
      'No. This build intentionally removes unverified reviews, certifications, social profiles, and warranty claims until they are confirmed from authoritative sources.'
  }
];

export function getBusinessSchema(pathname = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': ['RoofingContractor', 'LocalBusiness'],
    name: site.legalName,
    brand: site.name,
    description: site.metaDescription,
    foundingDate: `${site.founded}`,
    telephone: site.phoneDisplay,
    url: new URL(pathname, site.siteUrl).href,
    areaServed: [
      {
        '@type': 'City',
        name: 'Arlington'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Dallas-Fort Worth Metroplex'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: 'US'
    },
    sameAs: [site.bbbUrl].filter(Boolean)
  };
}

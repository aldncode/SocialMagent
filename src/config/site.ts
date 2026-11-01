/**
 * SITE SETTINGS
 * ---------------------------------------------------------------------------
 * This is the one file to edit for brand details, contact details, social
 * links, newsletter settings, form endpoints and analytics.
 *
 * Anything marked TODO needs your input before launch.
 */

export const site = {
  /* ----------------------------- Brand basics ----------------------------- */
  name: 'Social Magent',
  shortName: 'Magent',
  tagline: 'Marketing and analytics careers, made practical',
  description:
    'Free resources, practical training and honest hiring support for digital marketing, social media and marketing analytics talent.',
  niche:
    'Digital marketing, social media and marketing analytics talent and training',
  url: 'https://socialmagent.online',
  locale: 'en_IN',
  language: 'en',

  /* ------------------------------- Founder -------------------------------- */
  founder: {
    // TODO: Replace "Your Name" with your full name as you want it shown.
    name: 'Your Name',
    role: 'Founder',
    shortBio:
      'I started Social Magent to make marketing careers easier to understand and easier to enter, with practical resources and straight answers.',
    // TODO: Personalise this with your real background and story. Keep it honest.
    longBio:
      'Social Magent started with a simple observation: a lot of marketing career advice is either too abstract to use or too polished to trust. I wanted to build the resource I wished existed while I was learning: clear explanations, practical templates and straight answers about hiring. This is a new, independent brand, so I am being careful about what I claim and open about what is still being built. Right now the focus is on free resources, useful conversations and a talent network that never charges candidates. Training and employer partnerships will grow from there.',
  },

  /* ------------------------------- Contact -------------------------------- */
  email: 'hello@socialmagent.online',

  /* ------------------------------ Social links ---------------------------- */
  // TODO: Add your LinkedIn URL. Leave a value empty to hide that link.
  social: {
    linkedin: '',
    x: '',
    instagram: '',
    youtube: '',
  },

  /* ------------------------------- Newsletter ----------------------------- */
  /**
   * TODO: Paste your Beehiiv, Kit (ConvertKit), Mailchimp or other form action
   * URL below. It must be a form POST endpoint (the URL the provider gives you
   * for a hosted form). Leave empty to show a clearly labelled placeholder and
   * a mailto fallback while you set it up.
   */
  newsletter: {
    action: '',
    method: 'post' as 'post' | 'get',
    emailFieldName: 'email',
    // Optional hidden fields required by some providers, e.g. { embed: 'true' }.
    hiddenFields: {} as Record<string, string>,
    // Shown under the form once it is connected.
    consentNote:
      'By subscribing you agree to receive occasional emails from Social Magent. You can unsubscribe at any time.',
  },

  /* -------------------------------- Forms --------------------------------- */
  /**
   * TODO: Paste the POST endpoint for each form (Formspree, Tally, Google
   * Forms, Basin, etc.). If left empty, the form falls back to opening the
   * visitor's email app and shows a clear setup note. No form data is stored
   * on this website.
   */
  forms: {
    talentNetworkEndpoint: '',
    hiringEndpoint: '',
    contactEndpoint: '',
  },

  /* ------------------------------- Analytics ------------------------------ */
  /**
   * Analytics is OFF by default. The consent notice only appears when it is
   * switched on. Both supported options are cookieless, privacy-friendly
   * services.
   *
   * - 'cloudflare': add your Cloudflare Web Analytics token below.
   * - 'plausible': add your domain below (script loads from plausible.io).
   */
  analytics: {
    provider: 'none' as 'none' | 'cloudflare' | 'plausible',
    // TODO: Only needed if provider is 'cloudflare'.
    cloudflareToken: '',
    plausibleDomain: 'socialmagent.online',
  },

  /* --------------------------------- Legal -------------------------------- */
  legal: {
    lastUpdated: '1 November 2026',
    lastUpdatedIso: '2026-11-01',
    jurisdiction: 'India',
    // TODO: Replace with your city/state for the legal pages.
    city: 'Your City, State, India',
    // TODO: Add a named grievance contact if you need one for Indian law.
    grievanceContact: 'Your Name',
  },
} as const;

/* Handy derived values used across the site. */
export const socialLinks = [
  { label: 'LinkedIn', href: site.social.linkedin },
  { label: 'X (Twitter)', href: site.social.x },
  { label: 'Instagram', href: site.social.instagram },
  { label: 'YouTube', href: site.social.youtube },
].filter((link) => link.href.length > 0);

export const analyticsEnabled =
  site.analytics.provider === 'plausible' ||
  (site.analytics.provider === 'cloudflare' &&
    site.analytics.cloudflareToken.length > 0);

export const mailtoSubscribe = `mailto:${site.email}?subject=${encodeURIComponent(
  'Newsletter signup',
)}&body=${encodeURIComponent(
  'Hi Social Magent, please add me to the newsletter. My email is: ',
)}`;

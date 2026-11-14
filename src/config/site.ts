// Site configuration — single source of truth for identity and integration values.
// All values start empty; fill them in and the UI reveals the matching elements.

export const site = {
  // TODO: Official brand / trading name as it should appear in copy
  brand: '',

  // TODO: Founder full name (founder blocks show a neutral "Founder" label until set)
  founderName: '',

  // TODO: Public contact email address
  email: '',

  // TODO: Public contact phone number
  phone: '',

  // TODO: LinkedIn company or profile URL
  linkedin: '',

  // TODO: Form submission endpoint (e.g. Formspree / Basin / worker URL). Form shows a notice until set.
  FORM_ENDPOINT: '',

  // TODO: External booking URL (e.g. Calendly). Contact page shows the form only until set.
  BOOKING_URL: '',
};

export type SiteConfig = typeof site;

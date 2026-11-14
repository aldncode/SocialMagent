// All page copy and service content lives here (plus src/config/site.ts).
// Plain, specific language for owners of small and mid-size businesses in India.

export interface ServiceItem {
  id: string;
  navLabel: string;
  title: string;
  cardText: string;
  meta: {
    title: string;
    description: string;
  };
  who: string;
  does: string[];
  gets: string[];
  cta: string;
}

export const services: ServiceItem[] = [
  {
    id: 'lead-generation',
    navLabel: 'Lead generation and appointment scheduling',
    title: 'Lead generation and appointment scheduling',
    cardText: 'Capture every enquiry, follow up on time, and fill your calendar with qualified appointments.',
    meta: {
      title: 'Lead generation and appointment scheduling — Social Magent',
      description:
        'Forms, follow-ups and appointment booking set up for growing Indian businesses, so fewer enquiries go cold.',
    },
    who: 'Businesses that get enquiries through ads, referrals, WhatsApp or their website, but lose track of them. Common when sales runs on personal memory rather than a shared system.',
    does: [
      'Set up enquiry forms and landing pages that feed into one shared list',
      'Route new leads to the right person by SMS, email or WhatsApp alert',
      'Send automatic follow-up sequences until someone replies or opts out',
      'Offer self-serve booking links with reminders to cut no-shows',
      'Report where leads come from and which sources turn into meetings',
    ],
    gets: [
      'One place to see every open enquiry and its next step',
      'Faster first response without someone watching the inbox all day',
      'A booking link that fills your calendar instead of ping-pong emails',
      'A simple monthly view of leads, appointments and drop-off points',
    ],
    cta: 'Book a free 30-minute audit',
  },
  {
    id: 'automation',
    navLabel: 'AI and business workflow automation',
    title: 'AI and business workflow automation',
    cardText: 'Remove the copy-paste work between your tools so your team spends time on decisions, not data entry.',
    meta: {
      title: 'AI and business workflow automation — Social Magent',
      description:
        'Practical automation of repetitive back-office work for small and mid-size businesses — no hype, fixed scope.',
    },
    who: 'Teams repeating the same steps across spreadsheets, email and two or more tools every week. Typical when growth has outpaced the manual process but a full hire is not justified yet.',
    does: [
      'Map the repetitive workflow and quantify where the time goes',
      'Connect your existing tools so data moves without manual re-entry',
      'Draft routine documents and replies with AI, always with human review',
      'Build approval and hand-off steps so nothing sits unanswered',
      'Document what runs, who owns it, and how to switch it off',
    ],
    gets: [
      'Fewer hours spent on copy-paste and status chasing',
      'Consistent outputs because the steps are the same every time',
      'A written map of the process before anything is automated',
      'Controls and review points so errors are caught by people, not shipped',
    ],
    cta: 'Book a free 30-minute audit',
  },
  {
    id: 'managed-it',
    navLabel: 'Managed IT',
    title: 'Managed IT',
    cardText: 'Day-to-day IT support, device management and vendor coordination for teams without a full-time IT desk.',
    meta: {
      title: 'Managed IT services — Social Magent',
      description:
        'Helpdesk, device setup, access management and vendor coordination for growing businesses that need IT handled.',
    },
    who: 'Small and mid-size teams without a full-time IT person, where founders or office managers end up fixing printers and resetting passwords themselves.',
    does: [
      'Run a helpdesk for staff issues by email and phone during working hours',
      'Set up new joiners and off-board leavers with accounts and devices',
      'Keep operating systems and business apps patched on a fixed schedule',
      'Manage passwords, permissions and multi-factor authentication',
      'Track assets and coordinate with your internet, software and hardware vendors',
    ],
    gets: [
      'One point of contact for day-to-day IT problems',
      'New starters productive on day one without ad-hoc setup',
      'A clear record of devices, licences and who has access to what',
      'Fewer recurring issues because patching and checks run on a schedule',
    ],
    cta: 'Book a free 30-minute audit',
  },
  {
    id: 'cloud-security',
    navLabel: 'Cloud and cybersecurity',
    title: 'Cloud and cybersecurity',
    cardText: 'Baseline cloud hygiene: security reviews, backups, access control, patching, monitoring and staff awareness.',
    meta: {
      title: 'Cloud and cybersecurity baseline services — Social Magent',
      description:
        'Security reviews, backups, access control, patching, monitoring and staff awareness for growing businesses.',
    },
    who: 'Businesses moving work to cloud tools, or handling customer and employee data, who need the basics done properly and reviewed regularly — not a one-off certificate on the wall.',
    does: [
      'Review cloud accounts, sharing settings and admin access',
      'Set up and test backups of critical files and business systems',
      'Enforce access control: least privilege, MFA and joiner/leaver checks',
      'Keep systems patched on a planned schedule with exceptions tracked',
      'Watch for baseline alerts and run short staff awareness sessions',
    ],
    gets: [
      'A written record of your current security posture and open gaps',
      'Backups you can actually restore, tested on a schedule',
      'Access rights that match people’s roles, reviewed regularly',
      'Staff who know how to spot and report suspicious messages',
    ],
    cta: 'Book a free 30-minute audit',
  },
];

export const serviceSelectOptions = [
  ...services.map((s) => ({ label: s.title, value: s.id })),
  { label: 'Not sure yet', value: 'unsure' },
];

export const processSteps = [
  {
    index: '1',
    title: 'Audit',
    text: 'We map where you lose leads, time and money.',
  },
  {
    index: '2',
    title: 'Build',
    text: 'We set up the fixes in fixed-scope sprints.',
  },
  {
    index: '3',
    title: 'Run',
    text: 'We manage and improve them, with a monthly report.',
  },
];

export const home = {
  meta: {
    title: 'Social Magent — fewer missed leads, less manual work, fewer IT headaches',
    description:
      'Social Magent helps growing Indian businesses fill their calendar, automate repetitive work and keep their systems running securely.',
  },
  hero: {
    title: 'Fewer missed leads. Less manual work. Fewer IT headaches.',
    lead: 'Social Magent helps growing Indian businesses fill their calendar, automate repetitive work and keep their systems running securely.',
    primaryCta: 'Book a free 30-minute audit',
    secondaryCta: 'See services',
  },
  whatWeDo: {
    overline: 'What we do',
    title: 'Four services. One job: keep your business moving.',
    intro: 'Pick the problem that costs you the most today. We can start there and add the rest later.',
  },
  process: {
    overline: 'How it works',
    title: 'A simple three-step engagement',
    intro: 'No long discovery phase. We look, we build, we keep it running.',
  },
  founder: {
    overline: 'Who you deal with',
    title: 'Work directly with the founder',
    // TODO: Replace with the real founder story once the name is set in src/config/site.ts
    story:
      'Every engagement is led by the founder — not handed to a junior after the first meeting. You get straight answers on scope, cost and what is realistic for a business your size.',
    photoAlt: 'Photo placeholder',
  },
  cta: {
    title: 'Start with a free 30-minute audit',
    text: 'We look at where you are losing leads, time or money and tell you what we would fix first — no obligation.',
    buttonLabel: 'Book a free 30-minute audit',
  },
};

export const about = {
  meta: {
    title: 'About — Social Magent',
    description:
      'How Social Magent works with growing Indian businesses: founder-led, fixed-scope builds, honest about what we are today.',
  },
  hero: {
    title: 'About Social Magent',
    lead: 'A small, founder-led practice for growing businesses that need lead flow, automation and IT handled without the agency theatre.',
  },
  story: {
    overline: 'Founder story',
    title: 'Why this practice exists',
    // TODO: Replace with the real founder story once the name is set in src/config/site.ts
    paragraphs: [
      'Most small and mid-size businesses do not have a technology problem. They have a follow-through problem: enquiries arrive and go cold, the same data is typed into three tools, and nobody owns the systems until something breaks.',
      'Social Magent was set up to fix that follow-through. We start with a short audit of where leads, hours and money leak, build the fixes in fixed-scope sprints, then stay on to run and improve them.',
      'The work is deliberately practical. No long strategy decks, no retainer that never ends, and no claims we cannot back with a report you can read yourself.',
    ],
  },
  howWeWork: {
    overline: 'How we work',
    title: 'Clear scope, fixed sprints, monthly reporting',
    items: [
      {
        title: 'Fixed scope',
        text: 'Every build is agreed in writing before it starts — what is in, what is out, and what it costs.',
      },
      {
        title: 'Your tools first',
        text: 'We work with the software you already pay for where we can, rather than forcing a new stack.',
      },
      {
        title: 'Plain reporting',
        text: 'A short monthly report: what ran, what changed, what needs a decision from you.',
      },
      {
        title: 'Easy to stop',
        text: 'Systems are documented and owned by you. If we part ways, nothing is held hostage.',
      },
    ],
  },
  today: {
    overline: 'What we are today',
    title: 'An honest picture',
    // TODO: Update this wording as the business grows (team size, sectors, capacity)
    paragraphs: [
      'Social Magent is a young practice. We work with a small number of clients at a time so the founder stays involved in every engagement.',
      'We do not publish client logos, case studies or performance statistics we cannot stand behind yet. What we can show you is how we work, what a typical engagement looks like, and references on request once there is a client happy to give them.',
      'If that sounds like the right stage for you — hands-on help, clear scope, no inflated promises — the free audit is the easiest way to find out.',
    ],
  },
  cta: {
    title: 'Talk to us about your setup',
    text: 'Thirty minutes, no pitch deck. We tell you what we would fix first.',
    buttonLabel: 'Book a free 30-minute audit',
  },
};

export const contact = {
  meta: {
    title: 'Contact — book a free 30-minute audit — Social Magent',
    description:
      'Book a free 30-minute audit or send a short message. Social Magent works with growing businesses across India.',
  },
  hero: {
    title: 'Book a free 30-minute audit',
    lead: 'Tell us where you are losing leads, time or money. We will tell you what we would fix first — no obligation.',
  },
  booking: {
    title: 'Pick a time that suits you',
    text: 'Choose a slot on the calendar and we will confirm by email.',
    buttonLabel: 'Open booking calendar',
  },
  form: {
    title: 'Send a message',
    intro: 'Prefer to write first? Fill this in and we will reply within one business day.',
    submitLabel: 'Send message',
    consent:
      'I agree that Social Magent may use these details to reply to my enquiry, as described in the privacy policy.',
    // TODO: Set FORM_ENDPOINT in src/config/site.ts to enable submissions
    notConnectedTitle: 'Form not connected yet',
    notConnectedText: 'The contact form is not accepting submissions yet. Please check back shortly or use the booking option above.',
  },
  // TODO: Fill founderName in src/config/site.ts to show a real name here
  direct: {
    overline: 'Or reach us directly',
    title: 'Contact details',
    note: 'We reply within one business day, Monday to Friday.',
  },
};

export const footerCopy = {
  tagline: 'Lead generation, automation, managed IT and cloud security for growing Indian businesses.',
  groups: {
    services: 'Services',
    company: 'Company',
    legal: 'Legal',
  },
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export const legal = {
  privacy: {
    meta: {
      title: 'Privacy policy — Social Magent',
      description: 'How Social Magent handles personal information submitted through this website.',
    },
    updated: 'Last updated: to be confirmed',
    // TODO: Owner to review and complete before launch
    sections: [
      {
        heading: 'What we collect',
        text: 'If you contact us through the form on this site, we collect the details you submit: name, company, role, email, phone number, service interest and message. We may also receive your IP address and browser details in standard server logs.',
      },
      {
        heading: 'Why we use it',
        text: 'To reply to your enquiry, schedule an audit if you request one, and keep a record of our correspondence. We do not sell personal information.',
      },
      {
        heading: 'How long we keep it',
        text: 'Enquiry records are kept only as long as needed to respond and for ordinary business record-keeping, then deleted or anonymised.',
      },
      {
        heading: 'Your rights',
        text: 'You can ask what personal data we hold about you, request a correction, or ask us to delete it, by contacting us through the contact page.',
      },
      {
        heading: 'Changes',
        text: 'We may update this policy. The current version and date will always appear on this page.',
      },
    ],
    reviewNote: 'This is a starter template and must be reviewed by the owner before launch.',
  },
  terms: {
    meta: {
      title: 'Terms of use — Social Magent',
      description: 'Terms of use for the Social Magent website.',
    },
    updated: 'Last updated: to be confirmed',
    // TODO: Owner to review and complete before launch
    sections: [
      {
        heading: 'Using this site',
        text: 'You may browse this site and contact us through the forms provided. Do not attempt to interfere with the site or attempt unauthorised access to any systems.',
      },
      {
        heading: 'Information on this site',
        text: 'We aim to keep the information accurate, but it is provided for general guidance only and is not a substitute for advice tailored to your business. Service scope and cost are always agreed separately in writing.',
      },
      {
        heading: 'No guarantees',
        text: 'Nothing on this site is a guarantee of business results, system availability or security outcomes. Any commitments made to you will be in your signed agreement, not on this website.',
      },
      {
        heading: 'Links to other sites',
        text: 'Where we link to third-party sites (for example a booking calendar), their terms apply to your use of those sites.',
      },
      {
        heading: 'Changes',
        text: 'We may update these terms. The current version and date will always appear on this page.',
      },
    ],
    reviewNote: 'This is a starter template and must be reviewed by the owner before launch.',
  },
};

export const notFound = {
  meta: {
    title: 'Page not found — Social Magent',
    description: 'The page you requested could not be found.',
  },
  title: 'Page not found',
  text: 'The page you are looking for does not exist or has moved.',
  linkLabel: 'Back to home',
};

export const styleguideMeta = {
  title: 'Style guide — Social Magent',
  description: 'Internal design system reference. Not indexed.',
};

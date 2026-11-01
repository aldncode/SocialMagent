/**
 * FREE RESOURCES
 * ---------------------------------------------------------------------------
 * Edit or add cards here. Each card needs a title, description and href.
 *
 * gated: true means the button points to the newsletter page instead of a
 * direct download. Replace these starter PDFs with your own files in
 * public/downloads/ when they are ready.
 *
 * TODO: Replace the starter PDFs and resource descriptions with your own.
 */

export interface Resource {
  title: string;
  description: string;
  href: string;
  /** A short label such as "PDF", "Notion template" or "Email course". */
  format: string;
  /** Groups the resource on the page. */
  category: string;
  /** When true, the card links to /newsletter/ instead of a file. */
  gated?: boolean;
}

export const resources: Resource[] = [
  {
    title: 'Marketing CV checklist',
    description:
      'A calm, one-page check to run before you send a CV for a marketing, social media or analytics role.',
    href: '/downloads/marketing-cv-checklist.pdf',
    format: 'PDF',
    category: 'Careers',
  },
  {
    title: 'Social media audit worksheet',
    description:
      'Questions that help you review an account, spot what is missing and choose one useful test for next month.',
    href: '/downloads/social-media-audit-worksheet.pdf',
    format: 'PDF',
    category: 'Social media',
  },
  {
    title: 'Analytics weekly review template',
    description:
      'A short structure for turning weekly numbers into a clear summary, a decision and a next action.',
    href: '/downloads/analytics-weekly-review.pdf',
    format: 'PDF',
    category: 'Analytics',
  },
  {
    title: 'Marketing interview question bank',
    description:
      'Practice questions for planning, measurement and collaboration, plus thoughtful questions to ask the interviewer.',
    href: '/downloads/interview-question-bank.pdf',
    format: 'PDF',
    category: 'Careers',
  },
  {
    title: 'Portfolio case study template',
    description:
      'A simple structure for showing the brief, the thinking, the work and what you would measure. Delivered by email.',
    href: '/newsletter/',
    format: 'PDF',
    category: 'Careers',
    gated: true,
  },
  {
    title: 'Your first 90 days in a marketing role',
    description:
      'A practical planning sheet for the first three months in a new marketing or analytics job. Delivered by email.',
    href: '/newsletter/',
    format: 'PDF',
    category: 'Careers',
    gated: true,
  },
];

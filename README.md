# Social Magent

A fast, static website for **Social Magent** — marketing and analytics careers, made practical.

Built with **Astro 7** and plain CSS. There is no server runtime, no database and no paid dependency. The site is designed to deploy on **Cloudflare Pages** as a fully static build.

---

## 1. Run it locally

Requirements: **Node.js 22.23.4 or newer** (the version is pinned in `.nvmrc`, `.node-version`, `package.json` and the README).

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

Useful commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static site into `dist/` and create the `/sitemap.xml` alias |
| `npm run preview` | Preview the built site locally |
| `npm run check` | Type-check Astro and TypeScript files |

---

## 2. Project structure

```text
.
├── astro.config.mjs          Site URL, sitemap and build settings
├── package.json              Scripts and dependencies
├── .nvmrc / .node-version    Pinned Node version (22.23.4)
├── public/
│   ├── downloads/            Starter PDF resources (replace these)
│   ├── images/               Social share image + icons
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── _headers              Cloudflare Pages security headers
├── scripts/
│   └── postbuild.mjs         Copies sitemap-index.xml to sitemap.xml
├── src/
│   ├── assets/
│   │   ├── blog/             Blog hero images
│   │   └── images/           Founder photo placeholder
│   ├── components/           Header, footer, newsletter, cards, forms, SEO…
│   ├── config/
│   │   └── site.ts           ← EDIT THIS FILE FOR BRAND SETTINGS
│   ├── content/
│   │   └── blog/             Markdown blog posts
│   ├── content.config.ts     Blog frontmatter schema
│   ├── data/
│   │   └── resources.ts      ← EDIT THIS FILE FOR RESOURCE CARDS
│   ├── layouts/
│   │   └── BaseLayout.astro  Page shell, metadata, JSON-LD
│   ├── lib/
│   │   └── blog.ts           Blog helpers (dates, tags, reading time)
│   ├── pages/                Every page, RSS and robots.txt
│   └── styles/
│       └── global.css        ← EDIT VARIABLES HERE FOR THE PALETTE
└── dist/                     Generated at build time (do not edit)
```

---

## 3. Change brand settings

Almost everything lives in **`src/config/site.ts`**:

- Brand name, tagline, description and niche
- Founder name, role and bio
- Contact email
- Social links (LinkedIn, X, Instagram, YouTube)
- Newsletter form settings
- Candidate, hiring and contact form endpoints
- Analytics settings
- Legal page dates and jurisdiction

Every placeholder is marked with a `TODO` comment.

**Also change the domain in two places** if it changes:

1. `src/config/site.ts` → `url`
2. `astro.config.mjs` → `site`

To change the founder photo, replace `src/assets/images/founder-placeholder.jpg` with a square JPG or PNG of the same filename. It is used on the homepage, about page and blog author box.

To change the palette, edit the CSS variables at the top of `src/styles/global.css`.

---

## 4. Add a blog post

1. Create a Markdown file in `src/content/blog/`, for example `my-new-post.md`.
2. Add frontmatter like this:

```markdown
---
title: "My new post"
description: "A short summary used in search results, social cards and the blog index."
pubDate: 2026-11-10
updatedDate: 2026-11-12
author: "Your Name"
tags: ["Careers", "Analytics"]
heroImage: "../../assets/blog/hero-analytics.jpg"
draft: false
sources:
  - title: "Example source"
    url: "https://example.com/"
---

Your article starts here.

## A heading

Write in normal Markdown.
```

3. The post is automatically included in the blog index, tag pages, RSS feed, sitemap and related posts.
4. **Drafts:** set `draft: true` to keep a post out of the build entirely. The two files beginning with `sample-draft` are examples of this. They are not published.
5. **Reading time and table of contents** are generated automatically. The table of contents appears when a post has enough H2/H3 headings.
6. **Hero images:** put images in `src/assets/blog/` and reference them with a relative path from the Markdown file. Astro optimises them at build time.

---

## 5. Connect the newsletter

The reusable signup component is `src/components/NewsletterSignup.astro`.

1. In your newsletter provider (Beehiiv, Kit/ConvertKit, Mailchimp, etc.), create a hosted form and copy its **form action URL**.
2. Paste it into `src/config/site.ts`:

```ts
newsletter: {
  action: 'https://your-provider.example/subscribe',
  method: 'post',
  emailFieldName: 'email', // the provider's email field name
  hiddenFields: {},        // add provider-specific hidden fields if needed
  consentNote: '...',
}
```

3. If your provider requires extra hidden fields, add them to `hiddenFields`.
4. If your provider only gives you a JavaScript embed (rather than a form POST URL), you will need to put that embed into `NewsletterSignup.astro` instead. Keep the same visible heading and privacy note.
5. Until an action URL is set, the site shows a clearly labelled placeholder and a working `mailto:` fallback. This is intentional.

Some providers require a double opt-in and show their own confirmation page. That is handled by the provider, not by this site.

---

## 6. Connect the candidate, hiring and contact forms

The endpoints are in `src/config/site.ts`:

```ts
forms: {
  talentNetworkEndpoint: '',
  hiringEndpoint: '',
  contactEndpoint: '',
}
```

The easiest route is **Formspree**:

1. Create a form in Formspree and copy its endpoint, e.g. `https://formspree.io/f/xxxxxxx`.
2. Paste it into the relevant field above.
3. Submit a test entry and check it arrives.

The forms already include a `_subject` hidden field and a `_gotcha` honeypot, which Formspree understands. Other services (Tally, Google Forms, Basin, etc.) may need different field names or an embed instead of a raw form POST. If you use Google Forms, you will usually need to replace the form markup (or use its `entry.XXXX` field names) in the relevant page.

While an endpoint is empty, the form shows a visible setup note and falls back to opening the visitor's email app. No form data is stored on this website.

**Please note:** candidate fees are never charged. Keep that promise if you change the form copy or process.

---

## 7. Analytics (optional, off by default)

Analytics is off. The notice only appears when it is enabled.

In `src/config/site.ts`:

```ts
analytics: {
  provider: 'cloudflare', // 'none' | 'cloudflare' | 'plausible'
  cloudflareToken: 'your-token',
  plausibleDomain: 'socialmagent.online',
}
```

- **Cloudflare Web Analytics:** add your beacon token to `cloudflareToken`.
- **Plausible:** set `provider: 'plausible'` and confirm `plausibleDomain`.

Both are intended to be cookieless. A small dismissible notice is shown when analytics is active. You can change its wording in `src/components/ConsentNotice.astro`.

---

## 8. Deploy on Cloudflare Pages

1. Push the repository to GitHub (see below).
2. In Cloudflare Pages, create a project from the GitHub repository.
3. Use these build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22.23.4`
4. Set `NODE_VERSION=22.23.4` in the Pages project's environment variables (Cloudflare does not always read `.nvmrc` from the build image).
5. Deploy. The site is fully static; no adapter or server runtime is needed.
6. Add `socialmagent.online` as a custom domain in Cloudflare Pages and follow the DNS instructions.

The build also generates:

- `/sitemap-index.xml` (from `@astrojs/sitemap`)
- `/sitemap.xml` (a copy of the sitemap index, created by `scripts/postbuild.mjs`)
- `/robots.txt` (generated by `src/pages/robots.txt.ts`, pointing to `/sitemap.xml`)
- `/rss.xml` (generated by `src/pages/rss.xml.ts`)

Draft posts are excluded from every one of these.

---

## 9. Push to GitHub (triggers a Cloudflare Pages redeploy)

From the project folder:

```bash
git status
git add -A
git commit -m "Replace starter page with Astro site"
git push origin main
```

If Cloudflare Pages is connected to the `main` branch, the push starts a new deployment automatically. You can also trigger a deploy manually from the Cloudflare Pages dashboard.

---

## 10. Placeholders and TODO list

Search the code for `TODO` to find these in context.

**Brand and content**

- [ ] Replace `Your Name` with the founder's full name in `src/config/site.ts`.
- [ ] Personalise the founder story / long bio in `src/config/site.ts`.
- [ ] Replace `src/assets/images/founder-placeholder.jpg` with a real photo.
- [ ] Add the LinkedIn URL (and optional X, Instagram, YouTube URLs) in `src/config/site.ts`.
- [ ] Review the five published starter blog posts; edit or delete them.
- [ ] Replace or delete the two `sample-draft` posts. They are `draft: true` and are not built.
- [ ] Replace the starter PDFs in `public/downloads/` and update `src/data/resources.ts`.
- [ ] Review the default social share image (`public/images/og-default.png`) and icons.

**Connections**

- [ ] Connect the newsletter action URL in `src/config/site.ts` (Beehiiv, Kit, etc.).
- [ ] Add the talent network form endpoint.
- [ ] Add the hiring form endpoint.
- [ ] Add the contact form endpoint.
- [ ] If enabling analytics: set the provider and Cloudflare token or Plausible domain.

**Legal and launch**

- [ ] Have the privacy policy, terms and disclaimer reviewed by a qualified Indian legal professional.
- [ ] Replace the placeholder city and grievance contact in `src/config/site.ts`.
- [ ] Confirm the legal "last updated" date.
- [ ] Confirm the contact email and domain in `src/config/site.ts` and `astro.config.mjs`.
- [ ] Confirm the founder photo licence and any images you add.
- [ ] Test every form endpoint with a real submission before launch.

**Cloudflare**

- [ ] Set `NODE_VERSION=22.23.4` in Cloudflare Pages.
- [ ] Connect the custom domain and confirm HTTPS.

---

## Notes on the build

- The site is fully static: `output` is the default static mode, and there is no Cloudflare adapter.
- Blog content uses Astro content collections. The schema is in `src/content.config.ts`.
- JSON-LD for Organization, WebSite, Person, Article and BreadcrumbList is generated in `src/layouts/BaseLayout.astro` and the blog post page.
- Images in `src/assets/` are optimised to WebP by Astro's Sharp image service.
- No testimonials, client logos, awards, statistics, salary figures or income claims are included. Do not add invented proof when you edit the copy.

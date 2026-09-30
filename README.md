# Alchemy Recyclers website

Static website for [alchemyrecycling.co.in](https://alchemyrecycling.co.in), built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # builds the site into dist/
npm run preview  # serves dist/ locally
```

## Where things live

| What | Where |
| --- | --- |
| Phone, email, address, services, materials, FAQs | `src/data/site.ts` |
| Pages | `src/pages/` |
| Blog posts (Markdown) | `src/content/blog/` |
| Images | `src/assets/` (auto-optimised at build) |
| Files copied as-is (CNAME, brochure, favicon, social image) | `public/` |

## Add a blog post

Create `src/content/blog/my-post-slug.md`:

```md
---
title: 'Post title (under ~60 characters)'
description: 'One or two sentences, under 160 characters.'
pubDate: 2026-10-01
tags: ['e-waste', 'vadodara']
cover: '../../assets/img/e-scrap.webp'
coverAlt: 'Describe the image'
---

Your content here.
```

Tag pages, the sitemap and the RSS feed update automatically.

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.

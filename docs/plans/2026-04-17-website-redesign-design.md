# Chavurat Or'Leans Website Redesign

**Date:** 2026-04-17
**Status:** Approved

## Summary

Redesign chavuratorleans.com from Google Sites to a static HTML site with Decap CMS for zero-code editing. Hosted on Netlify (free tier) with custom domain. Same content, dramatically better aesthetics.

## Architecture

- **3 HTML pages**: `index.html`, `donate.html`, `join.html`
- **1 shared CSS file**: `css/styles.css`
- **Decap CMS**: `/admin/` for visual content editing via GitHub
- **Hosting**: Netlify free tier, connected to `chavuratorleans/website` GitHub repo
- **Domain**: chavuratorleans.com DNS pointed to Netlify (free SSL)

## Color Palette (from logo)

| Role              | Color     | Usage                              |
|-------------------|-----------|------------------------------------|
| Background        | `#FBF3E4` | Page background                    |
| Primary/headings  | `#6B3A6B` | Nav, headings, footer              |
| Accent            | `#E8A629` | Buttons, links, highlights         |
| Warm highlight    | `#E87D4A` | Hover states, decorative accents   |
| Body text         | `#4A3A4A` | Paragraph text                     |
| Light accent      | `#F5E6C8` | Card backgrounds, section dividers |

## Typography

- **Headings**: Playfair Display (warm serif, Google Fonts)
- **Body**: Source Sans 3 (clean sans-serif, Google Fonts)

## Pages

### Homepage (`index.html`)
1. **Nav bar** — Logo + 3 links (Home, Donate, Join Our List)
2. **Hero** — Logo image centered, tagline "We were expecting you!", warm gradient or cream bg
3. **Welcome** — Short paragraph about Shabbat (coffee, people, services, lunch)
4. **Values** — 4 cards in a responsive grid:
   - Kid Forward
   - For Everyone
   - A Welcoming Home
   - Rooted in Tradition
   - Plus "The More, The More" as a closing statement
5. **Shabbat Schedule** — Simple callout: 1st Shabbat at Touro, others in homes
6. **Google Calendar embed**
7. **CTAs** — "Join Our List" + "Support Us" buttons
8. **Footer** — Email, copyright

### Donate Page (`donate.html`)
1. **Nav bar** (shared)
2. **Header** — "Support Chavurat Or'Leans" + cost-per-Shabbat note ($500)
3. **Non-Tax Deductible section** — Zelle (chavuratorleans@gmail.com), check (contact Ben)
4. **Tax Deductible section** — Mazlo form iframe embed + DAF info (Beloved Builders Inc, EIN 47-3898186)
5. **Footer** (shared)

### Join Page (`join.html`)
1. **Nav bar** (shared)
2. **Header** — Welcoming text
3. **Google Form embed** (existing form)
4. **Footer** (shared)

## Decap CMS

- **Admin UI** at `/admin/index.html`
- **Config** at `/admin/config.yml`
- **Content files**: YAML files in `content/` directory
  - `content/home.yml` — welcome text, tagline, values, schedule
  - `content/donate.yml` — donation text, links, DAF info
  - `content/join.yml` — welcome text
  - `content/site.yml` — site-wide settings (email, footer text)
- **Auth**: Netlify Identity (free, built-in GitHub OAuth)
- HTML templates read from these YAML files via a small JS script that loads and renders content

## File Structure

```
chavuratorleans-website/
├── index.html
├── donate.html
├── join.html
├── css/
│   └── styles.css
├── images/
│   ├── logo.png
│   └── logo-banner.png
├── js/
│   └── content-loader.js    # Reads YAML content files, renders into page
├── content/
│   ├── home.yml
│   ├── donate.yml
│   ├── join.yml
│   └── site.yml
├── admin/
│   ├── index.html           # Decap CMS admin panel
│   └── config.yml           # CMS field definitions
└── docs/
    └── plans/
        └── 2026-04-17-website-redesign-design.md
```

## GitHub / Hosting Setup

- **Repo**: `chavuratorleans/website` (GitHub)
- **Netlify**: Connect to GitHub repo, auto-deploy on push
- **Domain**: Update chavuratorleans.com DNS (CNAME or Netlify DNS)
- **CMS Auth**: Enable Netlify Identity + Git Gateway

## Key Links to Preserve

- Mazlo donate: `https://donate.mazloweb.com/donate/UkVbPpwdkzRd6qbpNnWKST`
- Google Form: existing form ID `1FAIpQLScF1w6HLL-CdemDTAHvtVl2iLs_kOeWfdKKsR74unxl2fnOmA`
- Google Calendar: `chavuratorleans@gmail.com`
- Contact: `benjamin.horwitz@gmail.com` (Ben Horwitz)
- Zelle: `chavuratorleans@gmail.com`
- Fiscal sponsor: Beloved Builders Inc., EIN 47-3898186

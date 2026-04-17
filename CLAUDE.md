# Chavurat Or'Leans Website

## Overview
Community website for Chavurat Or'Leans, a welcoming, kid-forward New Orleans community Shabbat group. Static HTML/CSS/JS site with YAML-driven content and Decap CMS.

## Tech Stack
- **Static HTML/CSS/JS** — no build step, no framework
- **YAML content files** loaded at runtime via vanilla JS + [js-yaml CDN](https://cdn.jsdelivr.net/npm/js-yaml@4)
- **Decap CMS** (`/admin/`) with Netlify Identity + git-gateway backend
- **Netlify** free tier hosting (auto-deploys from GitHub `main` branch)
- **GitHub repo**: `chavuratorleans/website` (collaborator: `bhorwitz-ahd`)

## Project Structure
```
index.html          # Homepage
donate.html         # Donations page
join.html           # Join contact list page (Google Form embed)
css/styles.css      # Single shared stylesheet (~1200 lines)
js/content-loader.js # YAML→DOM content loader (supports data-content, data-repeat, data-field, data-href, data-src)
content/
  site.yml          # Site-wide content (name, email, footer)
  home.yml          # Homepage content (tagline, values, FAQs, schedule, seasonal image)
  donate.yml        # Donate page content (methods, amounts, Mazlo link)
  join.yml          # Join page content (heading, intro)
admin/
  index.html        # Decap CMS entry point
  config.yml        # CMS config (git-gateway, collections)
images/
  logo.png          # Main logo (transparent background)
  logo-banner.png   # Banner logo (transparent background)
  seasonal-flyer.png # Seasonal dates flyer (rotated each season)
```

## Color Palette (from logo)
```css
--bg: #FBF3E4;           /* Warm cream background */
--primary: #6B3A6B;       /* Deep purple */
--primary-light: #8B5A8B; /* Light purple */
--accent: #E8A629;        /* Gold */
--warm: #E87D4A;          /* Orange */
--text: #4A3A4A;          /* Dark purple-brown */
--light: #F5E6C8;         /* Light gold */
```

## Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Source Sans 3 (sans-serif)

## Content System
Content is stored in YAML files under `content/` and loaded client-side:
- `data-content="key"` — simple text/HTML injection
- `data-repeat="array_key"` — clone template for each array item
- `data-field="field_name"` — populate field within a repeated item
- `data-href="key"` — bind href attribute
- `data-src="key"` — bind iframe src
- HTML is supported in YAML values (used for FAQ answer hyperlinks)

Pages call `initContent('content/site.yml', 'content/<page>.yml')` to merge site-wide and page-specific content.

## Key Design Decisions
- **"We were expecting you!"** is a standalone animated tagline banner above the hero (delayed fade-in)
- **Hero** is side-by-side: logo left, welcome text right
- **Events band**: 2-column section with seasonal flyer + schedule info
- **Value cards**: colored top borders (purple, gold, orange, light purple) — no icons
- **"The more, the more"**: dark purple accent band with gold headline (pull-quote style)
- **CTA** positioned above FAQs for better conversion flow
- **FAQs**: 2-column grid on desktop, accordion with one-open-at-a-time behavior, 13 Q&As
- **No photos**: intentional — Shabbat observance considerations, no permissions yet
- **No Google Calendar embed**: removed since seasonal flyer already shows upcoming dates

## CMS Access
- Admin URL: https://chavuratorleans.netlify.app/admin/
- Auth: Netlify Identity (invite-only, configured in Netlify dashboard)
- Backend: git-gateway (commits directly to GitHub `main` branch)

## Deployment
- Push to `main` → Netlify auto-deploys (~1 min)
- Preview locally: `python3 -m http.server 8080` from project root
- Domain: chavuratorleans.com (DNS not yet switched from Google Sites)

## Open Items
- DNS switch from Google Sites to Netlify (when ready to go live on domain)
- CMS config needs updating to include newer fields (seasonal_image, faqs list, etc.)
- Hebrew word accents on value cards considered but deferred
- Photo integration deferred pending Shabbat observance discussion + permissions
- Individual contact emails (Mia, Ben, Ellie) — currently all route to chavuratorleans@gmail.com

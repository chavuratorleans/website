# Chavurat Or'Leans Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a warm, beautiful static website for Chavurat Or'Leans to replace their Google Sites page, with CMS for zero-code content editing.

**Architecture:** Pure static HTML/CSS/JS — no framework, no build step. 3 pages sharing one stylesheet. Content in YAML files loaded by a small JS script at runtime. Sveltia CMS (actively maintained Decap CMS fork) for visual editing. Hosted on Netlify free tier.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, js-yaml (CDN), Sveltia CMS (CDN), Google Fonts (Playfair Display + Source Sans 3), Netlify + Netlify Identity.

**Project root:** `C:\Users\bhorw\chavurah\projects\chavuratorleans-website`

**GitHub:** `chavuratorleans/website`

---

### Task 1: Project Scaffolding + Git Init

**Files:**
- Create: `.gitignore`
- Create: `README.md`
- Copy: logo files into `images/`

**Step 1: Initialize git repo**

```bash
cd /c/Users/bhorw/chavurah/projects/chavuratorleans-website
git init
git config user.email "chavuratorleans@gmail.com"
git config user.name "Chavurat Or'Leans"
```

**Step 2: Create .gitignore**

```
.DS_Store
Thumbs.db
*.swp
.env
```

**Step 3: Copy logo files**

```bash
mkdir -p images
cp "/c/Users/bhorw/Downloads/Logo-20260417T193947Z-3-001/Logo/ChavuratOrleans Logo.png" images/logo.png
cp "/c/Users/bhorw/Downloads/Logo-20260417T193947Z-3-001/Logo/Chavurah Logo Banner.png" images/logo-banner.png
```

**Step 4: Create README.md**

```markdown
# Chavurat Or'Leans Website

Static website for [Chavurat Or'Leans](https://www.chavuratorleans.com), a community Shabbat in New Orleans.

## Editing Content

Go to `yoursite.com/admin/` to edit page content visually.

## Local Development

Just open `index.html` in a browser. No build step required.
```

**Step 5: Commit**

```bash
git add .
git commit -m "chore: project scaffolding with logo assets"
```

---

### Task 2: Shared CSS Stylesheet

**Files:**
- Create: `css/styles.css`

Build the complete shared stylesheet using CSS custom properties for the logo-derived palette. Mobile-first responsive design.

**Step 1: Create `css/styles.css`**

Key sections to include:
- CSS custom properties (colors from logo, typography, spacing)
- Reset/base styles
- Navigation (sticky, cream bg, logo left, links right, mobile hamburger)
- Hero section (centered logo, tagline, gradient backdrop)
- Values grid (2x2 on desktop, stacked on mobile, card style with light accent bg)
- Section layouts (alternating full-width and contained)
- Donation sections (two-column cards for tax/non-tax)
- Form embed containers (responsive iframe wrappers)
- Buttons (primary = gold accent, hover = warm orange)
- Footer (purple bg, cream text)
- Responsive breakpoints: 480px, 768px, 1024px
- Smooth scroll behavior
- Subtle animations (fade-in on scroll, button hover transitions)

**Color variables:**

```css
:root {
  --bg: #FBF3E4;
  --primary: #6B3A6B;       /* purple from logo */
  --accent: #E8A629;        /* gold sun rays */
  --warm: #E87D4A;          /* orange sun */
  --text: #4A3A4A;          /* dark purple-gray */
  --light: #F5E6C8;         /* soft gold for cards */
  --white: #FFFFFF;
  --primary-light: #8B5A8B; /* lighter purple for hover */
}
```

**Step 2: Verify in browser**

Open any HTML file that links the stylesheet — confirm custom properties load, fonts render.

**Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: shared stylesheet with logo-derived color palette"
```

---

### Task 3: Content YAML Files

**Files:**
- Create: `content/home.yml`
- Create: `content/donate.yml`
- Create: `content/join.yml`
- Create: `content/site.yml`

**Step 1: Create content files**

`content/site.yml` — shared site-wide content:
```yaml
name: "Chavurat Or'Leans"
email: "chavuratorleans@gmail.com"
contact_name: "Ben Horwitz"
contact_email: "benjamin.horwitz@gmail.com"
footer_text: "Chavurat Or'Leans — New Orleans Community Shabbat"
calendar_email: "chavuratorleans@gmail.com"
```

`content/home.yml`:
```yaml
tagline: "We were expecting you!"
welcome_heading: "Welcome to Chavurat Or'Leans!"
welcome_text: "Good coffee, great people, joyful services, and a delicious lunch. Our Chavurah is explicitly welcoming of queer, interfaith, & racially diverse families, & individuals of all ages & identities. We're excited to spend Shabbat together!"
values:
  - title: "We are kid forward"
    text: "We create kid-facing opportunities and celebrate the inclusion of kids in all spaces. We welcome the noise, creativity, and unpredictability that children bring."
  - title: "We are for everyone"
    text: "We are a safe and explicitly welcoming space for all who are interested in joining us, including interfaith, racially diverse, and LGBTQ+ families and individuals of all identities and ages."
  - title: "We are a welcoming home"
    text: "\"We were expecting you.\" We anticipate everyone's arrival with warmth and joy. Whether it is your first time or you regularly join us, this community exists for you and because of you."
  - title: "We are rooted in tradition"
    text: "We are multi-denominational. We embrace varying levels of observance and welcome community members to share their traditions. We offer opportunities to practice traditional prayer and ritual, while cultivating ruach (spirit) and kavana (intention)."
more_text: "We believe \"The more, the more.\" Our offerings add to the robustness, depth, and fullness of Jewish life in New Orleans. We honor the importance of synagogues and clergy, and present opportunities to enhance participation and sense of belonging across our greater Jewish community."
schedule_heading: "Join Us for Shabbat"
schedule_items:
  - "1st Shabbat of the month at Touro Synagogue"
  - "Other Shabbatot in members' homes"
schedule_note: "Please sign up for our listserv to find out details and locations of upcoming events."
```

`content/donate.yml`:
```yaml
heading: "Support Chavurat Or'Leans"
intro: "Each Shabbat costs about $500. Any and all contributions are welcomed and appreciated."
non_tax_heading: "Non-Tax Deductible Donations"
non_tax_methods:
  - method: "Zelle"
    detail: "chavuratorleans@gmail.com"
  - method: "Check"
    detail: "Contact Ben Horwitz at benjamin.horwitz@gmail.com"
tax_heading: "Tax Deductible Donations"
tax_intro: "To make a tax deductible donation, click the button below or use the form."
tax_link: "https://donate.mazloweb.com/donate/UkVbPpwdkzRd6qbpNnWKST"
daf_text: "If you'd like to make a tax-deductible donation through a Donor-Advised Fund, please donate to Beloved Builders, Inc. (EIN: 47-3898186) and note that the donation is for Chavurat Or'Leans."
fiscal_note: "Chavurat Or'Leans is a fiscally sponsored project of Beloved Builders Inc., a 501(c)(3) nonprofit organization."
```

`content/join.yml`:
```yaml
heading: "Join Our Community"
intro: "Sign up for our contact list to receive updates about upcoming Shabbat gatherings, events, and community news."
form_id: "1FAIpQLScF1w6HLL-CdemDTAHvtVl2iLs_kOeWfdKKsR74unxl2fnOmA"
```

**Step 2: Commit**

```bash
git add content/
git commit -m "feat: YAML content files for all pages"
```

---

### Task 4: Content Loader JS

**Files:**
- Create: `js/content-loader.js`

A small vanilla JS module that:
1. Fetches a YAML file from `content/`
2. Parses it with js-yaml (loaded from CDN)
3. Populates DOM elements that have `data-content` attributes

**Step 1: Create `js/content-loader.js`**

```javascript
// Loads YAML content files and populates elements with data-content attributes.
// Usage: <span data-content="welcome_heading"></span>
// Nested: <span data-content="values.0.title"></span>
// Lists are handled by template elements with data-template attributes.

async function loadContent(yamlPath) {
  const response = await fetch(yamlPath);
  const text = await response.text();
  return jsyaml.load(text);
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    if (current == null) return null;
    return current[key];
  }, obj);
}

function populatePage(data) {
  // Simple text content
  document.querySelectorAll('[data-content]').forEach(el => {
    const value = getNestedValue(data, el.dataset.content);
    if (value != null) {
      el.innerHTML = value;
    }
  });

  // Repeat templates for arrays
  document.querySelectorAll('[data-repeat]').forEach(template => {
    const arrayPath = template.dataset.repeat;
    const items = getNestedValue(data, arrayPath);
    if (!Array.isArray(items)) return;

    const parent = template.parentElement;
    items.forEach(item => {
      const clone = template.cloneNode(true);
      clone.removeAttribute('data-repeat');
      clone.style.display = '';
      clone.querySelectorAll('[data-field]').forEach(el => {
        const value = item[el.dataset.field];
        if (value != null) el.innerHTML = value;
      });
      parent.appendChild(clone);
    });
    template.remove();
  });
}

async function initContent(...yamlPaths) {
  const allData = {};
  for (const path of yamlPaths) {
    const data = await loadContent(path);
    Object.assign(allData, data);
  }
  populatePage(allData);
  // Remove loading state
  document.body.classList.add('content-loaded');
}
```

**Step 2: Commit**

```bash
git add js/content-loader.js
git commit -m "feat: YAML content loader for dynamic page population"
```

---

### Task 5: Homepage (`index.html`)

**Files:**
- Create: `index.html`

**Step 1: Build complete homepage HTML**

Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta, title, fonts, stylesheet -->
</head>
<body>
  <nav><!-- Logo + links --></nav>
  <header class="hero"><!-- Logo image + tagline --></header>
  <section class="welcome"><!-- Welcome text --></section>
  <section class="values"><!-- 4 value cards via data-repeat --></section>
  <section class="more"><!-- "The more, the more" statement --></section>
  <section class="schedule"><!-- Shabbat schedule + calendar embed --></section>
  <section class="cta"><!-- Join + Donate buttons --></section>
  <footer><!-- Email, copyright --></footer>

  <script src="https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.min.js"></script>
  <script src="js/content-loader.js"></script>
  <script>initContent('content/site.yml', 'content/home.yml');</script>
</body>
</html>
```

The Google Calendar embed:
```html
<iframe src="https://calendar.google.com/calendar/embed?src=chavuratorleans%40gmail.com&ctz=America%2FChicago"
        style="border:0" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
```

**Step 2: Open in browser and verify**

- All content renders from YAML
- Responsive at mobile/tablet/desktop widths
- Logo displays correctly
- Navigation works
- Calendar embed loads
- CTA buttons link to donate.html and join.html

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: homepage with values, schedule, and calendar"
```

---

### Task 6: Donate Page (`donate.html`)

**Files:**
- Create: `donate.html`

**Step 1: Build donate page HTML**

Structure:
- Shared nav (same as homepage)
- Header with heading + intro text
- Two-card layout: Non-Tax Deductible | Tax Deductible
- Mazlo iframe embed below tax-deductible section
- Fiscal sponsor note
- Shared footer

The Mazlo embed:
```html
<iframe src="https://donate.mazloweb.com/donate/UkVbPpwdkzRd6qbpNnWKST"
        width="100%" height="600" frameborder="0"></iframe>
```

**Step 2: Verify in browser**

- Both donation method sections render
- Mazlo iframe loads
- Links are correct (Zelle email, contact email)
- DAF info displays

**Step 3: Commit**

```bash
git add donate.html
git commit -m "feat: donate page with tax-deductible and non-tax sections"
```

---

### Task 7: Join Page (`join.html`)

**Files:**
- Create: `join.html`

**Step 1: Build join page HTML**

Structure:
- Shared nav
- Header with welcoming text
- Google Form iframe embed
- Shared footer

The Google Form embed:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScF1w6HLL-CdemDTAHvtVl2iLs_kOeWfdKKsR74unxl2fnOmA/viewform?embedded=true"
        width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```

**Step 2: Verify in browser**

- Google Form loads in iframe
- Page is welcoming and clean

**Step 3: Commit**

```bash
git add join.html
git commit -m "feat: join page with Google Form embed"
```

---

### Task 8: Visual Polish Pass

**Files:**
- Modify: `css/styles.css`
- Modify: all HTML files as needed

**Step 1: Review all 3 pages in browser at multiple widths**

Check and fix:
- Mobile nav (hamburger menu works)
- Card spacing and alignment
- Font sizes at each breakpoint
- Button hover states
- Footer consistency
- Image sizing (logo not too large/small)
- Iframe responsiveness
- Smooth scrolling between sections
- Fade-in animations on scroll (if added)

**Step 2: Commit**

```bash
git add -A
git commit -m "style: visual polish and responsive fixes"
```

---

### Task 9: Sveltia CMS Setup

**Files:**
- Create: `admin/index.html`
- Create: `admin/config.yml`

**Step 1: Create `admin/index.html`**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Content Manager</title>
  <link href="https://cdn.jsdelivr.net/npm/@sveltia/cms/dist/sveltia-cms.css" rel="stylesheet" />
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@sveltia/cms/dist/sveltia-cms.js"></script>
</body>
</html>
```

**Step 2: Create `admin/config.yml`**

Define collections for each YAML content file. Fields match the YAML structure so CMS edits update the right files.

```yaml
backend:
  name: github
  repo: chavuratorleans/website
  branch: main

media_folder: "images"
public_folder: "/images"

collections:
  - name: "settings"
    label: "Site Settings"
    files:
      - name: "site"
        label: "Site Info"
        file: "content/site.yml"
        fields:
          - { name: "name", label: "Site Name", widget: "string" }
          - { name: "email", label: "Email", widget: "string" }
          - { name: "contact_name", label: "Contact Name", widget: "string" }
          - { name: "contact_email", label: "Contact Email", widget: "string" }
          - { name: "footer_text", label: "Footer Text", widget: "string" }

  - name: "pages"
    label: "Pages"
    files:
      - name: "home"
        label: "Homepage"
        file: "content/home.yml"
        fields:
          - { name: "tagline", label: "Tagline", widget: "string" }
          - { name: "welcome_heading", label: "Welcome Heading", widget: "string" }
          - { name: "welcome_text", label: "Welcome Text", widget: "text" }
          - name: "values"
            label: "Our Values"
            widget: "list"
            fields:
              - { name: "title", label: "Title", widget: "string" }
              - { name: "text", label: "Description", widget: "text" }
          - { name: "more_text", label: "The More The More Text", widget: "text" }
          - { name: "schedule_heading", label: "Schedule Heading", widget: "string" }
          - name: "schedule_items"
            label: "Schedule Items"
            widget: "list"
            field: { name: "item", label: "Item", widget: "string" }
          - { name: "schedule_note", label: "Schedule Note", widget: "text" }

      - name: "donate"
        label: "Donate Page"
        file: "content/donate.yml"
        fields:
          - { name: "heading", label: "Heading", widget: "string" }
          - { name: "intro", label: "Intro Text", widget: "text" }
          - { name: "non_tax_heading", label: "Non-Tax Section Heading", widget: "string" }
          - name: "non_tax_methods"
            label: "Non-Tax Methods"
            widget: "list"
            fields:
              - { name: "method", label: "Method", widget: "string" }
              - { name: "detail", label: "Detail", widget: "string" }
          - { name: "tax_heading", label: "Tax Section Heading", widget: "string" }
          - { name: "tax_intro", label: "Tax Intro", widget: "text" }
          - { name: "tax_link", label: "Donation Link", widget: "string" }
          - { name: "daf_text", label: "DAF Text", widget: "text" }
          - { name: "fiscal_note", label: "Fiscal Note", widget: "text" }

      - name: "join"
        label: "Join Page"
        file: "content/join.yml"
        fields:
          - { name: "heading", label: "Heading", widget: "string" }
          - { name: "intro", label: "Intro Text", widget: "text" }
          - { name: "form_id", label: "Google Form ID", widget: "string" }
```

**Step 3: Commit**

```bash
git add admin/
git commit -m "feat: Sveltia CMS admin panel for visual content editing"
```

---

### Task 10: Push to GitHub + Deploy to Netlify

**Step 1: Add remote and push**

```bash
git remote add origin https://github.com/chavuratorleans/website.git
git branch -M main
git push -u origin main
```

**Step 2: Connect Netlify**

Manual steps (done by user in browser):
1. Go to netlify.com, sign up/log in with GitHub (chavuratorleans account)
2. "Add new site" → "Import an existing project" → select `chavuratorleans/website`
3. Build command: (leave blank — no build step)
4. Publish directory: `/` (root)
5. Deploy

**Step 3: Enable Netlify Identity (for CMS auth)**

1. In Netlify dashboard → Site settings → Identity → Enable Identity
2. Under Registration → Invite only
3. Under Services → Git Gateway → Enable
4. Invite yourself (chavuratorleans@gmail.com) as a user

**Step 4: Configure custom domain**

1. In Netlify → Domain settings → Add custom domain → `chavuratorleans.com`
2. Follow DNS instructions (either Netlify DNS or CNAME record)
3. HTTPS will auto-provision via Let's Encrypt

**Step 5: Test CMS**

1. Go to `yoursite.netlify.app/admin/`
2. Log in with Netlify Identity
3. Edit a value, save, verify it commits to GitHub and site updates

---

### Task 11: Final Verification

**Step 1: Test all pages on live URL**

- Homepage renders all content from YAML
- Values cards display correctly
- Calendar embed works
- Donate page Mazlo iframe loads
- Join page Google Form loads
- Navigation works across all pages
- Mobile responsive on phone
- CMS login and editing works

**Step 2: Commit any final fixes**

```bash
git add -A
git commit -m "fix: final adjustments from live testing"
git push
```

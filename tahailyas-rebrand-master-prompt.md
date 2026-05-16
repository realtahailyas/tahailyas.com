# tahailyas.com — Master Rebrand Specification

> **Instructions for Claude Code:** This is a complete rebrand spec for an existing static HTML site. Read this entire document before writing any code. Execute in the phases listed at the bottom. Ask for clarification ONLY if something blocks implementation — otherwise build directly from this spec.

---

## 1. Project Context

**Site:** tahailyas.com
**Owner:** Taha Ilyas (Pakistan-based solo founder)
**Current stack:** Static HTML/CSS/JS, pages at `/index.html`, `/about.html`, `/case-studies.html`, `/insights.html`, `/proof.html`, `/contact.html`
**Current positioning:** "Meta Ads Growth Operator for E-commerce Brands" (single-service consultant)
**Goal:** Reposition from single-service consultant → **multi-product founder** who builds AI products and runs a Meta Ads agency among other ventures.

**Constraint:** Preserve existing SEO authority for Meta Ads keywords. Do NOT lose existing ranking pages — migrate them via 301 redirects, do not delete content silently.

**Stack decision:** Keep static HTML/CSS (vanilla JS where needed). Reason: existing site is static, fast, SEO-friendly, no need to overcomplicate. If a build tool is required for partials (header/footer reuse), use a minimal static site generator OR plain HTML with shared includes — your choice, but stay static.

---

## 2. New Positioning (Locked)

**Positioning statement (internal, not on site):**
Taha Ilyas is an independent founder building AI products and growth systems. He ships SaaS tools, mobile apps, voice agents, and web properties — while running a Meta Ads agency that scales e-commerce brands.

**Public tagline:** Founder building AI products & growth systems.

**Brand attributes:**
- Builder, not influencer
- Operator, not theorist
- Multi-bet, but focused (not "I do everything" — "I ship things that work")
- Casual confidence, no hype, no fake metrics
- Pakistan-based, globally serving

**Tone & voice:**
- Direct, plain English. Short sentences. No marketing fluff.
- Reference real ventures, real numbers, real stacks. Avoid vague claims.
- First-person ("I") on personal pages, neutral on venture cards.
- No emoji-heavy content. No "🚀" hype. Maximum one or two restrained icons per page.
- No phrases like "revolutionizing", "cutting-edge", "next-gen", "game-changer".

**What NOT to do:**
- Do NOT make this look like a portfolio template. It's a founder site, not a Webflow showcase.
- Do NOT invent metrics. Use only the metrics listed in this doc.
- Do NOT dilute identity by giving every venture equal weight — Optivio Chatbot, Optivio Automation, CertForge, and Optivio Media are primary. Rank & rent and internal tools are secondary.
- Do NOT remove Meta Ads content — relocate it to `/work-with-me`.

---

## 3. Site Architecture

### Pages

| URL | Purpose | Priority |
|---|---|---|
| `/` (`index.html`) | Hero, ventures grid, stack, CTA | Primary |
| `/ventures.html` | Full portfolio of all builds | Primary (NEW) |
| `/about.html` | Founder story, journey | Primary (REWRITE) |
| `/work-with-me.html` | Services menu: Meta Ads (primary), AI consulting, build-for-hire | Primary (NEW — replaces old Meta Ads positioning) |
| `/writing.html` | Articles/insights hub | Secondary (RENAME from `/insights.html`) |
| `/now.html` | Current focus, build-in-public | Optional |
| `/contact.html` | Booking, email, socials | Primary |

### Navigation (top bar, in order)

`Home` · `Ventures` · `About` · `Writing` · `Work With Me` · `Contact`

Mobile: hamburger menu, same order.

### Redirects (CRITICAL — handle in `_redirects`, `.htaccess`, or hosting config)

```
/case-studies      → /work-with-me#case-studies   (301)
/case-studies.html → /work-with-me.html#case-studies (301)
/proof             → /work-with-me#proof          (301)
/proof.html        → /work-with-me.html#proof     (301)
/insights          → /writing                     (301)
/insights.html     → /writing.html                (301)
```

Old article URLs under `/insights/*` must redirect to `/writing/*` preserving slugs.

---

## 4. Ventures Data (Single Source of Truth)

Store this as a JSON or JS data file (e.g., `/data/ventures.json`) and consume on both `/index.html` (featured grid) and `/ventures.html` (full grid). Cards must read from one source.

```json
[
  {
    "id": "optivio-chatbot",
    "name": "Optivio Chatbot",
    "tagline": "AI sales assistant for e-commerce stores",
    "description": "Embeddable AI chat widget that captures leads, answers product questions, and converts visitors into customers. Plans from free to $99/mo.",
    "status": "live",
    "url": "https://chatbot.tahailyas.com",
    "stack": ["Next.js 14", "Supabase", "OpenAI GPT-4o-mini", "Polar.sh", "Vercel"],
    "category": "saas",
    "featured": true,
    "order": 1
  },
  {
    "id": "optivio-automation",
    "name": "Optivio Automation",
    "tagline": "AI voice receptionists for US local service businesses",
    "description": "24/7 AI phone agents for dental clinics, HVAC companies, and med spas. Books appointments, captures leads, never misses a call. Starting $500/mo.",
    "status": "live",
    "url": "https://optivioautomation.com",
    "stack": ["Retell AI", "Twilio", "n8n", "Next.js 14", "Brevo"],
    "category": "agency",
    "featured": true,
    "order": 2
  },
  {
    "id": "certforge",
    "name": "CertForge",
    "tagline": "Smart certification exam prep, starting with AWS Cloud Practitioner",
    "description": "Mobile app with intelligent weakness detection and adaptive question routing. Real readiness scoring, full mock exams, action-driven learning.",
    "status": "launching",
    "url": "#",
    "stack": ["React Native", "Expo SDK 54", "Supabase", "TypeScript", "AdMob"],
    "category": "mobile",
    "featured": true,
    "order": 3
  },
  {
    "id": "optivio-media",
    "name": "Optivio Media",
    "tagline": "Structured Meta Ads for e-commerce brands",
    "description": "Campaign architecture, creative testing, controlled scaling for $3k+/month e-commerce brands across UAE and Australia. Multiple 5-figure accounts.",
    "status": "live",
    "url": "https://optiviomedia.online",
    "stack": ["Meta Ads", "CAPI", "Shopify", "GA4"],
    "category": "agency",
    "featured": true,
    "order": 4,
    "metrics": {
      "ad_spend": "$40k+",
      "purchases": "2,679",
      "cpa": "$14.94",
      "roas": "4.18x"
    }
  },
  {
    "id": "rank-rent",
    "name": "Rank & Rent Portfolio",
    "tagline": "Local service lead-gen sites in US markets",
    "description": "SEO-optimized service sites ranking for high-intent local searches, monetized by renting lead flow to local businesses.",
    "status": "growing",
    "url": "https://cedarrapidswaterdamagepro.com",
    "stack": ["Static HTML", "Local SEO", "Google Business"],
    "category": "web",
    "featured": false,
    "order": 5
  },
  {
    "id": "instagram-leadgen",
    "name": "Instagram Lead Gen System",
    "tagline": "Internal outreach automation — 25 accounts, 300 DMs/day",
    "description": "Custom-built pipeline: keyword → SerpAPI → Instagram URL extraction → Apify scraping → lead scoring → personalized DM generation → tracking dashboard.",
    "status": "internal",
    "url": null,
    "stack": ["SerpAPI", "Apify", "Custom dashboard", "n8n"],
    "category": "tool",
    "featured": false,
    "order": 6
  }
]
```

**Status badge colors:**
- `live` → green
- `launching` → amber/yellow
- `growing` → blue
- `internal` → grey
- `archived` → muted grey (for future use)

---

## 5. Page-by-Page Specification

### 5.1 Home (`/index.html`)

**Sections (in order):**

**Section 1 — Hero**
- Eyebrow: `Founder · Builder · Operator`
- H1: `Founder building AI products & growth systems.`
- Subline (2 lines): `Independent founder from Pakistan. I ship AI chatbots, voice agents, mobile apps, and lead-gen sites — and run a Meta Ads agency scaling e-commerce brands.`
- Primary CTA: `Explore Ventures →` (links to `/ventures.html`)
- Secondary CTA: `Work With Me` (links to `/work-with-me.html`)
- Three stat strip below (preserve existing style):
  - `4+ Products Shipped`
  - `5-Figure Ad Accounts Managed`
  - `Solo. Pakistan-based. Global Clients.`

**Section 2 — Featured Ventures**
- H2: `What I'm Building`
- Subhead: `A portfolio of AI products and growth systems. Each one solves a real problem for a specific audience.`
- Grid: 4 featured ventures (Optivio Chatbot, Optivio Automation, CertForge, Optivio Media) as cards. Each card:
  - Status badge (top right)
  - Venture name (H3)
  - Tagline
  - 2-line description
  - Stack pills (3-4 visible)
  - "View →" link (external, opens in new tab) OR "Learn more" if no public URL
- Below grid: text link `See all ventures →` to `/ventures.html`

**Section 3 — How I Work**
- H2: `How I Operate`
- Three-column layout:
  - **Ship in public.** Most of what I build, I build openly. You can see the products live, not just on a slide.
  - **Operator, not theorist.** Every system I sell, I run myself first. Meta Ads, cold outreach, AI agents — all stress-tested on my own work.
  - **Solo, full stack.** I write the code, run the campaigns, talk to the customers. Smaller surface area, faster iteration.

**Section 4 — Selected Work (Proof)**
- H2: `Proof`
- Single featured case study (the existing one): UAE e-commerce brand — CPA $38 → $16, ROAS 1.4x → 3.8x, $18k/mo spend, 60 days.
- Stat strip:
  - `58% CPA Reduction`
  - `3.8x ROAS Achieved`
  - `$18k+ Monthly Spend`
  - `60 Days to Results`
- CTA: `Read full case study →` to `/work-with-me.html#case-studies`

**Section 5 — CTA Block**
- H2: `Want to work together?`
- Sub: `I take on a small number of Meta Ads engagements and selective AI build projects. If your business is a fit, let's talk.`
- CTA: `Book a Call →` to `/contact.html`

**Footer (all pages):**
- Left: `© 2026 Taha Ilyas. Founder & Builder.`
- Middle nav: About · Ventures · Writing · Work With Me · Contact
- Right: Social links (LinkedIn, X, Instagram, GitHub if applicable)

---

### 5.2 Ventures (`/ventures.html`) — NEW

**Sections:**

**Hero**
- H1: `Ventures`
- Subline: `Everything I've built or am actively running. Live products, growing properties, internal tools.`

**Filter bar (optional, simple JS)**
- `All` · `SaaS` · `Agency` · `Mobile` · `Web` · `Tool`
- Click filters to show/hide cards by `category` field.

**Grid: All 6 ventures**
- Same card design as home, but show ALL ventures (including non-featured ones).
- Sort by `order` field.
- Internal tools (`status: internal`) still display but with no external link and a grey badge.

**Detail expansion (optional):**
- Each card clickable to open inline detail panel (or anchor link to detail section below the grid).
- Detail includes: full description, full stack, role (e.g., "Founder, Builder, Operator"), status updates if any.

**Bottom CTA:**
- `Working on something I should know about? →` to `/contact.html`

---

### 5.3 About (`/about.html`) — REWRITE

**Hero**
- H1: `About Taha`
- Subline: `Founder, builder, and operator from Pakistan. I run Optivio Media and ship AI products on the side — except the side keeps growing.`

**Section: The Short Version**
- 3 paragraphs, plain English:

> I started in performance marketing — Meta Ads for e-commerce brands. That work became Optivio Media, which now manages 5-figure ad accounts for brands across the UAE and Australia.

> Somewhere along the way I realised the same systems thinking that scales ad accounts also builds products. So I started shipping: an AI sales assistant (Optivio Chatbot), AI voice receptionists for US service businesses (Optivio Automation), a certification prep app (CertForge), and a portfolio of rank-and-rent web properties.

> Everything I build, I run myself. No team to hide behind. If a Meta Ads system is on this site, it's because I'm using it on a real client account. If a chatbot is on this site, I wrote the code.

**Section: What I Care About**
- Three short blocks:
  - **Building over talking.** I'd rather ship a small thing that works than write a thread about a big thing that doesn't.
  - **Systems over hacks.** Tactics expire. Structure compounds.
  - **Independence.** Solo by design. The work and the ownership stay in one place.

**Section: Stack**
- Brief mention of tools I actually use: Next.js, Supabase, Vercel, OpenAI/Claude, n8n, Retell AI, React Native/Expo, Meta Ads Manager.

**Section: Where to Find Me**
- LinkedIn, X, Instagram (handles), email.

**Section: Where I'm Based**
- One line: `Karachi, Pakistan. Working with brands and clients globally.`

**Bottom CTA:**
- `Work with me →` to `/work-with-me.html`

---

### 5.4 Work With Me (`/work-with-me.html`) — NEW

This page absorbs the old Case Studies + Proof pages and adds service menu.

**Hero**
- H1: `Work With Me`
- Subline: `I take on a small number of engagements at a time. Here's what I offer and how it works.`

**Section: Services**
Three service cards, in order:

**1. Meta Ads for E-commerce (Optivio Media)** — PRIMARY
- Tagline: `Structured ad systems for $3k+/month e-commerce brands.`
- Description: Full Meta Ads management — campaign architecture, creative testing, scaling, tracking. UAE and international.
- Format: Monthly retainer
- Best fit: E-com brands spending $3k–$50k/month
- CTA: `Book a Strategy Call →`

**2. AI Build Projects**
- Tagline: `Chatbots, voice agents, automation systems — built and deployed.`
- Description: Custom AI implementations using the same stack behind Optivio Chatbot and Optivio Automation. Setup, integration, training data, hosting.
- Format: Fixed scope projects or monthly
- Best fit: Businesses wanting AI deployed by someone who ships their own products
- CTA: `Discuss a Project →`

**3. Operator Consulting**
- Tagline: `Audit your ad account, your funnel, or your AI stack.`
- Description: One-off paid audits and consulting calls. No ongoing commitment. You bring a problem, I bring a structured opinion.
- Format: Single engagement
- CTA: `Book a Consult →`

**Section: Case Studies** (anchor `#case-studies`)
- H2: `Case Studies`
- Featured case study (existing UAE brand) full write-up — preserve content from current `/case-studies.html`.
- Stats grid same as home.
- Add 1-2 more if more cases exist, otherwise leave room for future.

**Section: Proof** (anchor `#proof`)
- H2: `Proof`
- Preserve existing performance metrics from current `/proof.html`:
  - ~$40,000 ad spend
  - 2,679 purchases
  - $14.94 CPA
  - 4.18x ROAS
  - ~$167k conversion value
- Screenshots if available.

**Section: Process**
Reuse existing 3-step process content:
1. **Audit** — Full account audit
2. **Rebuild Structure** — Restructure with 3-tier architecture
3. **Scale With Control** — Controlled budget increases

**Section: Fit Check**
Reuse existing "Is This For You?" content (both columns).

**Bottom CTA:**
- `Book a Strategy Call →` to `/contact.html`

---

### 5.5 Writing (`/writing.html`) — RENAME from Insights

**Hero**
- H1: `Writing`
- Subline: `Essays and frameworks on Meta Ads scaling, AI products, and solo founder operations.`

**Filter tabs (optional):**
- `All` · `Meta Ads` · `AI / Building` · `Operations`

**Article grid:**
- Migrate ALL existing articles from `/insights.html` and `/insights/*` to `/writing/*` (preserve slugs after the directory).
- Card layout: title, 1-line excerpt, category tag, date, read time, "Read →" link.

**Newsletter callout:**
- Box at top or sidebar: `Scaling System — my LinkedIn newsletter for e-com founders on Meta Ads.` Link to LinkedIn newsletter.

---

### 5.6 Now (`/now.html`) — OPTIONAL

Inspired by `nownownow.com` — current focus, updated periodically.

**Hero**
- H1: `What I'm Working On Now`
- Subline: `Updated [DATE]. Subject to change.`

**Sections:**
- **Shipping:** what's in active build/launch (CertForge launch, Optivio Automation cold email, etc.)
- **Running:** existing things keeping the lights on (Optivio Media clients, Optivio Chatbot users)
- **Learning:** what I'm reading/exploring
- **Not doing:** explicit list of things I'm saying no to right now (paid ads for own products, Upwork bidding, hiring, etc.)

Include a "Last updated" timestamp. If maintaining this is too much overhead, skip this page.

---

### 5.7 Contact (`/contact.html`)

**Hero**
- H1: `Let's Talk`
- Subline: `Best way to reach me is a call. For everything else, email works.`

**Primary CTA:**
- Big button: `Book a Strategy Call →` (Calendly embed or link)

**Secondary contact:**
- Email: hello@tahailyas.com (or actual email)
- LinkedIn: linkedin.com/in/tahailyas
- X: @tahailyas (or actual handle)

**Optional contact form:**
- Name, Email, What's this about (dropdown: Meta Ads, AI Build, Consulting, Other), Message

**Response time note:**
- One line: `I usually respond within 24 hours on weekdays.`

---

## 6. SEO Specification

### Per-page meta

**Home (`/`)**
- Title: `Taha Ilyas — Founder building AI products & growth systems`
- Description: `Independent founder shipping AI chatbots, voice agents, mobile apps, and running a Meta Ads agency for e-commerce brands. Based in Pakistan, working globally.`
- Keywords: `Taha Ilyas, AI founder, Meta Ads, AI chatbot, voice agent, Optivio Media, solo founder Pakistan`

**Ventures (`/ventures.html`)**
- Title: `Ventures — Products & systems built by Taha Ilyas`
- Description: `Portfolio of AI products and growth systems by Taha Ilyas: Optivio Chatbot, Optivio Automation, CertForge, Optivio Media, and more.`

**About (`/about.html`)**
- Title: `About Taha Ilyas — Founder, builder, operator`
- Description: `Solo founder from Pakistan. Runs Optivio Media (Meta Ads), builds AI products, ships independently. Read the full story.`

**Work With Me (`/work-with-me.html`)**
- Title: `Work With Taha Ilyas — Meta Ads, AI builds, operator consulting`
- Description: `Meta Ads management for e-commerce ($3k+/month), AI chatbot and voice agent builds, and one-off audits. Selective engagements only.`

**Writing (`/writing.html`)**
- Title: `Writing — Taha Ilyas on Meta Ads, AI products, and solo founder operations`
- Description: `Essays on Meta Ads scaling, building AI products solo, and operating multiple ventures.`

**Contact (`/contact.html`)**
- Title: `Contact Taha Ilyas`
- Description: `Book a strategy call or send an email. Response within 24 hours on weekdays.`

### Open Graph & Twitter Cards

For every page:
- `og:title` = page title
- `og:description` = page description
- `og:url` = canonical URL
- `og:type` = `website` (home, ventures) or `profile` (about) or `article` (writing posts)
- `og:image` = `/images/og-image.jpg` (regenerate this to reflect new positioning — show Taha + venture logos OR keep the existing photo with updated text overlay)
- `twitter:card` = `summary_large_image`
- `twitter:site` = `@tahailyas` (use actual handle)

### Canonical tags

Every page must have `<link rel="canonical" href="https://tahailyas.com/[path]">`.

### Schema markup (JSON-LD)

**Site-wide (on every page, in `<head>`):**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Taha Ilyas",
  "url": "https://tahailyas.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tahailyas.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Home + About page — Person schema (REPLACES current single-service Person schema):**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Taha Ilyas",
  "url": "https://tahailyas.com",
  "image": "https://tahailyas.com/images/taha.png",
  "jobTitle": "Founder, AI Product Builder, Meta Ads Operator",
  "description": "Independent founder building AI products and growth systems. Owner of Optivio Media (Meta Ads agency) and Optivio Automation (AI voice agents). Builder of Optivio Chatbot and CertForge.",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Optivio Media",
      "url": "https://optiviomedia.online"
    },
    {
      "@type": "Organization",
      "name": "Optivio Automation",
      "url": "https://optivioautomation.com"
    }
  ],
  "sameAs": [
    "https://linkedin.com/in/tahailyas",
    "https://instagram.com/tahailyasofficial",
    "https://x.com/tahailyas",
    "https://facebook.com/tahailyas"
  ],
  "knowsAbout": [
    "Meta Ads",
    "Facebook Ads",
    "E-commerce scaling",
    "AI chatbots",
    "AI voice agents",
    "SaaS development",
    "Mobile app development",
    "Performance marketing",
    "Campaign architecture",
    "Funnel optimization"
  ],
  "nationality": "Pakistani",
  "homeLocation": {
    "@type": "Place",
    "name": "Karachi, Pakistan"
  }
}
```

**Ventures page — ItemList schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ventures by Taha Ilyas",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Optivio Chatbot",
        "url": "https://chatbot.tahailyas.com",
        "applicationCategory": "BusinessApplication",
        "description": "AI sales assistant for e-commerce stores"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Organization",
        "name": "Optivio Automation",
        "url": "https://optivioautomation.com",
        "description": "AI voice receptionists for US local service businesses"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "MobileApplication",
        "name": "CertForge",
        "applicationCategory": "EducationApplication",
        "description": "Certification exam prep app, starting with AWS Cloud Practitioner",
        "operatingSystem": "Android"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Organization",
        "name": "Optivio Media",
        "url": "https://optiviomedia.online",
        "description": "Meta Ads agency scaling e-commerce brands"
      }
    }
  ]
}
```

**Work With Me page — Service schema (one per service):**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Meta Ads Management",
  "provider": {
    "@type": "Person",
    "name": "Taha Ilyas"
  },
  "areaServed": ["United Arab Emirates", "Australia", "United States", "Worldwide"],
  "description": "Structured Meta Ads systems for e-commerce brands spending $3,000+/month. Campaign architecture, creative testing, controlled scaling."
}
```

**Writing posts — Article schema** (per post):

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post title]",
  "author": {
    "@type": "Person",
    "name": "Taha Ilyas",
    "url": "https://tahailyas.com/about.html"
  },
  "datePublished": "[ISO date]",
  "image": "[post image URL]"
}
```

**Breadcrumbs (every non-home page):**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://tahailyas.com"},
    {"@type":"ListItem","position":2,"name":"[Current page]","item":"[current URL]"}
  ]
}
```

### Sitemap

Generate fresh `/sitemap.xml` including:
- All new pages
- All writing posts (migrated from insights)
- Updated `lastmod` dates
- Priority: home = 1.0, ventures/work-with-me/about = 0.9, writing = 0.8, individual posts = 0.7

Submit to Google Search Console after deploy.

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://tahailyas.com/sitemap.xml
```

### Internal linking strategy

- Home links to: Ventures (3x — hero CTA, grid CTA, footer), Work With Me (2x — hero CTA, bottom CTA), About (1x — section), Writing (1x — footer)
- Ventures links to: each external venture (with `rel="noopener"`), back to home, to Contact
- About links to: Work With Me (bottom CTA), Ventures (mention in story)
- Work With Me links to: each case study anchor, Contact (3+ times)
- Writing posts link to: relevant Work With Me service, related posts, About

### Keywords map

Each page targets specific clusters:

| Page | Primary | Secondary |
|---|---|---|
| Home | Taha Ilyas, AI founder Pakistan | Meta Ads founder, AI product builder |
| Ventures | Taha Ilyas products, Optivio products | AI chatbot for ecommerce, AI voice receptionist |
| About | About Taha Ilyas, who is Taha Ilyas | Solo founder Pakistan, Optivio Media founder |
| Work With Me | Meta Ads agency UAE, hire Meta Ads operator | AI chatbot consultant, AI voice agent setup |
| Writing | Meta Ads scaling, ecommerce Meta Ads | Campaign architecture, funnel structure |
| Contact | Contact Taha Ilyas, book Meta Ads call | — |

---

## 7. Design System

**Preserve the existing aesthetic — do NOT redesign from scratch.** The current site is clean, dark, professional. Carry that forward and extend it.

### Colors (CSS variables)

Use existing variables; if not defined, establish:

```css
:root {
  --bg-primary: #0a0a0a;        /* near-black background */
  --bg-secondary: #141414;      /* card background */
  --bg-elevated: #1c1c1c;       /* hover/elevated state */
  --border: #2a2a2a;            /* subtle borders */
  --text-primary: #f5f5f5;      /* main text */
  --text-secondary: #a3a3a3;    /* muted text */
  --text-tertiary: #6b6b6b;     /* footnotes, labels */
  --accent: #ffffff;            /* primary accent — keep monochrome */
  --status-live: #22c55e;       /* green */
  --status-launching: #f59e0b;  /* amber */
  --status-growing: #3b82f6;    /* blue */
  --status-internal: #6b7280;   /* grey */
}
```

**Inspect existing CSS first** — if the current site uses different values, preserve them. Do not introduce new color tokens unnecessarily.

### Typography

- Inspect current site's font stack and preserve it. If it's a generic stack, upgrade to:
  - **Display/Headings:** A distinctive serif or geometric sans (e.g., `Fraunces`, `PP Editorial New`, `Söhne`, `Suisse Int'l`). NOT Inter, NOT system-ui.
  - **Body:** A refined neutral sans (e.g., `Söhne`, `Geist`, `IBM Plex Sans`). Same caveat — avoid generic Inter.
- Sizes: established type scale (e.g., 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 / 80).
- Letter-spacing: tighter on display, normal on body.

### Components needed

1. **Navigation bar** — sticky on scroll, hamburger on mobile
2. **Venture card** — used on home and ventures page
3. **Status badge** — pill with colored dot + label
4. **Stack pill** — small pill for tech names
5. **Stat block** — large number + label, used in proof sections
6. **Service card** — used on work-with-me page
7. **Article card** — used on writing page
8. **CTA button** — primary (filled) and secondary (outline)
9. **Section divider** — subtle, consistent across pages

### Layout

- Max-width container: ~1200px
- Generous vertical spacing between sections (96px+ desktop, 64px mobile)
- Grid: 12-column with consistent gutter (24-32px)
- Ventures grid: 2 columns desktop, 1 column mobile

### Motion

- Restrained. One staggered fade-in on hero load.
- Card hover: subtle border lift + slight background lighten.
- No parallax. No scroll-jacking. No splash screens.

---

## 8. Technical Requirements

- **Performance:** Lighthouse score 95+ on all categories. Inline critical CSS, defer non-critical JS, lazy-load below-fold images.
- **Accessibility:** WCAG AA. Proper heading hierarchy, alt text on all images, sufficient contrast, keyboard navigable.
- **Mobile:** Fully responsive, tested down to 360px width.
- **Browsers:** Last 2 versions of Chrome, Safari, Firefox, Edge.
- **Images:** Serve WebP with JPG fallback. Optimize all images (TinyPNG-level compression).
- **No tracking scripts** unless explicitly added. If GA4 / Plausible is on current site, preserve it.
- **No cookie banner needed** if no tracking is set; if tracking exists, add minimal banner.

---

## 9. Asset Inventory Needed

Before launch, prepare:
- [ ] Updated OG image reflecting new positioning (1200×630)
- [ ] Favicon (existing one is fine if it works)
- [ ] Headshot of Taha (existing `taha.png` works, but consider a fresh one)
- [ ] Logo/wordmark for each venture (Optivio Chatbot, Optivio Automation, CertForge, Optivio Media) — if not available, use clean typography
- [ ] Screenshots for `proof` section (existing ones from `/proof.html`)
- [ ] Case study supporting visuals

If any asset is missing, use a clean text placeholder (e.g., venture name in display font on a colored block) rather than blocking implementation.

---

## 10. Implementation Order (Phases)

Execute in this order. Do not skip phases.

### Phase 1 — Foundation
1. Set up new file structure
2. Create shared `/data/ventures.json`
3. Build component library (cards, badges, buttons) in CSS
4. Build shared header/footer (use HTML includes or vanilla JS template if no SSG)

### Phase 2 — Core Pages
5. Build `/index.html` (new home)
6. Build `/ventures.html`
7. Build `/about.html` (rewrite)
8. Build `/work-with-me.html`
9. Build `/contact.html`

### Phase 3 — Content Pages
10. Rename `/insights.html` → `/writing.html`, update content/navigation
11. Migrate individual article pages from `/insights/*` to `/writing/*`

### Phase 4 — SEO & Redirects
12. Implement all 301 redirects
13. Add schema JSON-LD to every page
14. Generate new `/sitemap.xml`
15. Update `/robots.txt`
16. Update all canonical tags

### Phase 5 — Optional
17. Build `/now.html` (only if Taha confirms he'll maintain it)

### Phase 6 — Pre-launch Checklist
18. Lighthouse audit (all pages)
19. Mobile responsive check (360px, 768px, 1024px, 1440px)
20. Test all internal links
21. Test all external links (open in new tab where appropriate)
22. Validate all schema with Google Rich Results Test
23. Validate sitemap
24. Test redirects from old URLs

### Phase 7 — Post-launch
25. Submit updated sitemap to Google Search Console
26. Submit to Bing Webmaster Tools
27. Update LinkedIn profile, Crunchbase, and other entity references with new positioning
28. Update Open Graph cache (Facebook debugger, LinkedIn post inspector)

---

## 11. What Success Looks Like

After this rebrand:
- A visitor lands on the home page and within 5 seconds understands: **Taha is a founder who builds AI products and runs a Meta Ads agency.** Not just an ads guy.
- Meta Ads remains a strong, findable offering — but is one of several, not the entire identity.
- Each venture has a clean, individual story but they all share one builder behind them.
- Existing SEO authority is preserved (no broken URLs, all redirects working).
- The site is fast, accessible, and feels intentional — not a Webflow template.

---

## 12. Open Questions for Taha (resolve before Phase 5+)

1. Should `/now.html` exist? Commit to updating monthly or skip.
2. Are there additional rank-and-rent domains to feature besides `cedarrapidswaterdamagepro.com`?
3. Email address to use on Contact page (`hello@tahailyas.com`?)
4. Calendly link to embed on Contact?
5. Are there additional case studies beyond the UAE one? If so, content needed.
6. Final social handles (verify X / Instagram / LinkedIn URLs).

If any of these are blockers during build, use sensible placeholders and flag for replacement.

---

**End of specification. Begin Phase 1.**

# CLAUDE.md

Personal site for **Taha Ilyas** — Pakistan-based AI Engineer & Product Builder. Positions Taha primarily as an engineer who ships AI applications, automation systems, and mobile/web products (TChess, ChessReel, CertForge, Instagram Outreach Automation, Optivio Chatbot), with Optivio Automation and Optivio Media (Meta Ads agency) as secondary/supporting ventures — not as a single-service consultant or agency landing page. Deployed at **tahailyas.com** (GitHub Pages, custom domain via `CNAME`).

The current state is the result of a full rebrand spec'd in `tahailyas-rebrand-master-prompt.md`, followed by a second positioning pass (2026-08-13) that re-centered the site on AI engineering/product work over Meta Ads. SEO authority from the old Meta-Ads-only positioning is preserved via meta-refresh redirects, not deleted.

## Stack

Plain static site — no build tooling, no framework, no package manager.

- **HTML** — hand-written, one file per page, shared nav/footer copy-pasted across pages
- **CSS** — single `css/style.css` (~2.1k lines, design tokens via `:root` variables; gold `#c8a865` on near-black)
- **JS** — single `js/main.js` (~210 lines, vanilla DOM). Includes a venture-grid renderer that fetches `data/ventures.json`.
- **Data** — `data/ventures.json` documents all projects/ventures as a reference. As of the "Hard-code ventures" commit, `index.html` and `ventures.html` render project cards as hardcoded HTML (`[data-static-ventures]`) rather than fetching the JSON, so the JSON and the markup must be kept in sync manually when a project changes. `js/main.js` still contains a legacy fetch-based renderer for `[data-ventures="featured"|"all"]` (unused by current markup, kept for backwards compatibility).
- **Fonts** — Google Fonts `Inter`
- **SEO** — JSON-LD (WebSite, Person, ItemList, Service, Article, Blog, BreadcrumbList, FAQPage, ContactPage), Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Hosting** — GitHub Pages with `CNAME` → `tahailyas.com`. No `.htaccess` / `_redirects` — all redirects are meta-refresh stubs.

## Site map

```
/
├── index.html              Home — hero, featured ventures, how I operate, proof, CTA
├── ventures.html           All ventures with category filter (NEW)
├── about.html              Founder story (REWRITE)
├── work-with-me.html       Services + Case Studies (#case-studies) + Proof (#proof) (NEW)
├── writing.html            Articles hub (renamed from insights.html)
├── contact.html            Booking, email, FAQ
├── writing/
│   ├── meta-ads-shopify-structure.html
│   ├── reducing-cpa-meta-ads.html
│   └── meta-pixel-capi-setup.html
├── data/ventures.json      Source of truth for ventures
├── css/style.css           All site styles
├── js/main.js              Nav, fade-in observer, counters, venture renderer, filter
├── images/                 1.png … 6.png (Meta Ads proof screenshots, unused/orphaned), taha.png, tchess-1/2/3.png (real TChess mobile app UI), tchess-web.jpg (real TChess web app home, captured 2026-08-22 from tchess.app/home), chessreel-dashboard.jpg (real ChessReel Autopilot dashboard, captured 2026-08-22 from the live dashboard — sensitive pages like Settings/System/Logs were intentionally skipped)
├── favicon.svg
├── CNAME                   tahailyas.com
├── robots.txt
├── sitemap.xml
├── SCHEMA_LINKS_DOCUMENTATION.md   Older reference doc; partially superseded by the schema in current pages
└── tahailyas-rebrand-master-prompt.md   The rebrand spec — keep for reference

# Redirect stubs (kept for SEO continuity — do NOT delete):
├── case-studies.html       → /work-with-me.html#case-studies
├── proof.html              → /work-with-me.html#proof
├── insights.html           → /writing.html
└── insights/*.html         → /writing/*.html  (one stub per article)
```

## Navigation (shared across every page)

```
Home · Projects · About · Writing · Work With Me · Contact
```

Note: the nav *label* is "Projects" but the underlying file/URL is still `ventures.html` (kept for SEO/link continuity — do not rename the file).

The nav is duplicated inline in every HTML file (no templates). When changing nav links, you must edit:
- 6 root pages (`index.html`, `ventures.html`, `about.html`, `writing.html`, `work-with-me.html`, `contact.html`)
- 3 article pages under `writing/` (note these use `../` relative paths)

The 4 redirect stubs (`case-studies.html`, `proof.html`, `insights.html`, plus 3 inside `insights/`) have no nav and don't need updating.

## Footer (shared)

```
© 2026 Taha Ilyas. Founder & Builder.
About · Projects · Writing · Work With Me · Contact · LinkedIn
```

## Ventures / Projects data flow

- `data/ventures.json` documents the canonical list of 8 projects, in priority order: TChess, ChessReel, CertForge, Instagram Outreach Automation, Optivio Chatbot (featured — AI/product work), then Optivio Automation, Optivio Media, Rank & Rent (secondary — growth/business-experience work, positioned as supporting proof, not the primary offer).
- Cards are **hardcoded HTML** in `index.html` (6 featured — TChess, ChessReel, CertForge, Instagram Outreach Automation, Optivio Chatbot, Optivio Automation; Optivio Media and Rank & Rent are intentionally left off the homepage) and `ventures.html` (all 8, with Problem/What I Built/Result fields via `.venture-card__field`). On `ventures.html`, Optivio Media and Rank & Rent sit below a `.subsection-divider` ("Other Experience — Growth & Business Systems") and use `.venture-card--secondary` to mute their stat block. `js/main.js` still contains `[data-ventures="featured"|"all"]` JSON-fetch rendering as legacy/unused fallback.
- The filter bar on `ventures.html` uses `[data-filter]` with `data-cat` attributes (`all`, `mobile`, `saas`, `tool`, `agency`, `web`); `wireStaticFilter` in `js/main.js` also hides/shows `.subsection-divider` rows based on whether anything in their group matches the active filter.
- **To add or update a project, edit the hardcoded card markup in `index.html`/`ventures.html` AND `data/ventures.json`** to keep them in sync.
- Card status uses `status-badge--<status>` (`live` green, `launching` amber, `growing` blue, `internal` grey, `archived` muted).
- **Positioning note (2026-08-22):** Meta Ads / Optivio Media was intentionally sidelined site-wide in favor of the AI Engineer & Product Builder identity — it remains visible as secondary "Growth & Business Experience" proof (not deleted), but no longer competes visually or narratively with the AI/software/automation work. See `.subsection-divider` usage on `ventures.html`, the condensed Growth & Business Experience section on `work-with-me.html` (replaces the old full-page Case Studies + Proof sections; still anchors `#case-studies`/`#proof` for the redirect stubs), the reordered/divided article list on `writing.html`, and the homepage's "What Can Be Automated" section (`index.html`, replaces the old homepage Writing teaser, which was 100% Meta Ads articles).

## Design system (`css/style.css` `:root`)

- Palette: `--bg #0a0a0a`, card `--bg-card #141414`, gold accent `--accent #c8a865`, text `--text #e8e8e8` / muted `#999` / dark `#666`
- Font: Inter (400–800)
- Radii: `--radius 8px`, `--radius-lg 16px`
- Max container width: `1200px`
- Components added for the rebrand: `.venture-card`, `.status-badge`, `.stack-pill`, `.service-card`, `.operate-card`, `.filter-bar`, `.now-block`, `.story` (all at the bottom of `style.css` under the `REBRAND COMPONENTS` header).

## JS behaviors (`js/main.js`)

- `.nav` gets `.scrolled` after `scrollY > 50`
- `.nav__burger` toggles `.nav__links.active` and locks body scroll
- IntersectionObserver adds `.visible` to `.fade-in` / `.fade-in-left` / `.fade-in-right`
- `[data-count]` animates a counter on first view
- Active nav highlighting based on current page filename
- Smooth scroll for `a[href^="#"]` anchors
- **Venture grid renderer** — fetches `data/ventures.json`, builds cards, optional category filter on ventures.html

## SEO & redirects

GitHub Pages has no server-side redirect support. Old URLs are preserved as HTML stubs that combine:
1. `<meta http-equiv="refresh" content="0; url=…">`
2. `<link rel="canonical" href="new URL">`
3. `<script>window.location.replace(…)</script>` fallback
4. `<meta name="robots" content="noindex, follow">`
5. A visible link for users without JS

These stubs are 5 files in root + 3 inside `insights/`. **Do not delete them** — they preserve inbound link equity.

JSON-LD schema is inline per page; major types in use:
- `WebSite` — every page
- `Person` — home + about
- `ItemList` — home (featured) + ventures (full)
- `Service` — work-with-me (one per offering)
- `Blog` + `BlogPosting` — writing.html
- `Article` — each article in `writing/`
- `BreadcrumbList` — every non-home page
- `FAQPage`, `ContactPage` — contact.html

`sitemap.xml` lists 6 root pages + 3 articles. **Update it when adding pages or articles.** Old `/insights/*` and `/case-studies` / `/proof` URLs are intentionally excluded.

## External ventures referenced from this site

- `https://optiviomedia.online` — Meta Ads agency
- `https://chatbot.tahailyas.com` — Optivio Chatbot SaaS
- `https://optivioautomation.com` — AI voice agents
- `https://cedarrapidswaterdamagepro.com` — Rank & rent property
- LinkedIn, X (`@tahailyas`), Instagram (`@tahailyasofficial`), Crunchbase, Medium, GitHub

## Working in this repo

- **Editing pages**: nav, footer, and JSON-LD blocks are repeated inline. Update all relevant HTML files when changing those.
- **Adding a project/venture**: cards are hardcoded — add the `<article class="venture-card">` block to `ventures.html` (and to `index.html` too if it should be featured), and add a matching entry to `data/ventures.json` for reference.
- **Adding an article**: create `writing/<slug>.html` (copy structure of existing articles — use `../` paths in nav/footer/CSS). Then add an `<article class="insight-card">` to `writing.html` and a `<url>` entry to `sitemap.xml`.
- **Mobile**: spec calls for 360px+ support. The CSS has breakpoints at 900px, 600px, 360px. Test those when changing layouts.
- **No build step**: open the HTML files directly or serve the directory (`python -m http.server`, etc.). Required: when running locally, serve over HTTP (not `file://`) so `fetch('data/ventures.json')` works.
- **Deploy**: push to `main`. GitHub Pages serves the site from the repo root.

## Conventions

- Pages link with `.html` suffixes (`about.html`, not `/about`)
- Canonical URLs use bare `tahailyas.com/<page>.html`
- Sitemap and `lastmod` dates are maintained manually
- Voice on personal pages: first-person, direct, no marketing fluff, no emojis, no hype words ("revolutionizing", "cutting-edge", etc.)
- Tone is set by `tahailyas-rebrand-master-prompt.md` §2 — re-read before writing new copy

## Reference docs

- `tahailyas-rebrand-master-prompt.md` — full rebrand specification (positioning, page-by-page content, SEO, design system, phases). Keep as the source of truth when extending.
- `SCHEMA_LINKS_DOCUMENTATION.md` — catalog of URLs used in older JSON-LD `sameAs` arrays. Largely superseded; safe to update or replace.

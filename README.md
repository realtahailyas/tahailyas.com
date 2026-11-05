# tahailyas.com

Personal site of **Taha Ilyas**, React Native and full-stack TypeScript engineer, open to remote roles: projects, case studies, resume and contact.

![HTML5](https://img.shields.io/badge/HTML5-static-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-vanilla-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Live: https://tahailyas.com

## Features

- **Projects showcase**: TChess, DareClock, Brick Breaker, chess content automation and more, with problem / what I built / result for each, and a category filter.
- **Case studies** on TChess, DareClock and chess content automation, plus a one-page resume PDF (`assets/Taha_Ilyas_Resume.pdf`, phone number removed).
- **SEO**: inline JSON-LD (Person, WebSite, ItemList, BreadcrumbList, FAQPage, ContactPage), Open Graph and Twitter cards, hand-maintained `sitemap.xml` and `robots.txt`.
- **Link equity kept through a rebrand**: old URLs (`/proof`, `/insights/*`, `/writing*`, `/work-with-me`) are meta-refresh + canonical stubs that point to the new pages.
- **No build step, no framework**: hand-written HTML, one stylesheet, one small vanilla JS file.

## Tech stack

HTML · CSS (design tokens in `:root`) · vanilla JavaScript · Google Fonts (Inter) · GitHub Pages with a custom domain (`CNAME`)

## Run locally

Serve the folder over HTTP (opening files with `file://` breaks the `fetch` of `data/ventures.json`):

```bash
git clone https://github.com/realtahailyas/tahailyas.com.git
cd tahailyas.com
python -m http.server 8000   # http://localhost:8000
```

Deploy: push to `main`; GitHub Pages serves the repo root.

## Project structure

```
index.html            home
ventures.html         projects (nav label "Projects")
case-studies.html     product engineering case studies
about.html            experience, education, stack
contact.html          email, LinkedIn, GitHub, resume, FAQ
proof.html insights.html insights/ writing.html writing/ work-with-me.html   redirect stubs (keep for SEO)
assets/               public resume PDF (no phone number)
data/ventures.json    project data (keep in sync with the HTML cards)
css/style.css         all styles
js/main.js            nav, scroll animations, counters, project filter
images/               screenshots, app icons, portrait, OG image
CNAME sitemap.xml robots.txt favicon.svg
```

## License

Code is [MIT](LICENSE) © 2026 Taha Ilyas. The written content, portrait and screenshots are © Taha Ilyas and are not covered by the MIT license.

## Author

[Taha Ilyas](https://github.com/realtahailyas) · https://tahailyas.com

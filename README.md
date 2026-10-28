# tahailyas.com

Personal site of **Taha Ilyas**, AI engineer and product builder: projects, services, writing and contact.

![HTML5](https://img.shields.io/badge/HTML5-static-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-vanilla-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Live: https://tahailyas.com

## Features

- **Projects showcase**: TChess, ChessReel, CertForge, Optivio Chatbot and more, with problem / what I built / result for each, and a category filter.
- **Services page** with a fit check and booking CTA.
- **Writing**: long-form articles on Meta Ads structure, CPA reduction and Pixel/CAPI setup.
- **SEO**: inline JSON-LD (Person, WebSite, ItemList, Service, Article, BreadcrumbList, FAQPage), Open Graph and Twitter cards, hand-maintained `sitemap.xml` and `robots.txt`.
- **Link equity kept through a rebrand**: old URLs (`/proof`, `/case-studies`, `/insights/*`) are meta-refresh + canonical stubs that point to the new pages.
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
about.html            founder story
work-with-me.html     services, plus #case-studies and #proof anchors
writing.html          articles hub
contact.html          booking, email, FAQ
writing/              articles
insights/ insights.html case-studies.html proof.html   redirect stubs (keep for SEO)
data/ventures.json    project data
css/style.css         all styles
js/main.js            nav, scroll animations, counters, project filter
images/               screenshots and portrait
docs/                 reference notes (schema links)
CNAME sitemap.xml robots.txt favicon.svg
```

## License

Code is [MIT](LICENSE) © 2026 Taha Ilyas. The written content, portrait and screenshots are © Taha Ilyas and are not covered by the MIT license.

## Author

[Taha Ilyas](https://github.com/realtahailyas) · https://tahailyas.com

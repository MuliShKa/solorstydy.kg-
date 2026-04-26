<div align="center">

<br>

```
 ___  ___  _     __   ____  ___  ____  _  _  ____  _  _ 
/ __)/ _ \( )   /__\ (  _ \/ __)(_  _)( )( )(  _ \( \/ )
\__ \( (_) ))(__ /(__)\ )   /\__ \ )( ) \/ ( )(_) )\  / 
(___/ \___/(____(__)(__)(_)\_)(___/(__) \__/ (____/ (__) 
```

### ✦ Solar Study — Client Landing Page ✦

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?style=flat-square&logo=swiper&logoColor=white)

</div>

<br>

---

## What is this

Landing page built for **Solar Study KR** — an educational agency that helps students from Kyrgyzstan, Kazakhstan, Uzbekistan and Tajikistan get into top universities in South Korea and the USA.

Multi-page static site. No frameworks, no bundlers. Just clean HTML/CSS/JS.

---

## Stack

```
HTML5          — semantic markup, multi-page structure
CSS3           — fully custom, no utility frameworks
Vanilla JS     — DOM manipulation, gallery logic
jQuery 3.6     — CDN, used for lightweight interactions
Swiper.js      — touch-friendly image sliders
Owl Carousel 2 — secondary carousel component
Font Awesome 6 — icon kit (social buttons, UI icons)
Google Fonts   — Montserrat · Playfair Display · Raleway
```

---

## Pages

| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Main landing page |
| `SolarStudy.kr/bachelor.html` | `/bachelor` | Bachelor's degree info |
| `SolarStudy.kr/master.html` | `/master` | Master's degree info |
| `SolarStudy.kr/mentor.html` | `/mentor` | Language courses |
| `SolarStudy.kr/services.html` | `/services` | Pricing & services |

---

## Structure

```
📁 SolarStudy/
│
├── 📄 index.html
│
├── 📁 css/
│   └── index.css           ← main styles
│
├── 📁 js/
│   └── index.js            ← gallery + interactions
│
├── 📁 img/                 ← photos, reviews, university logos
│
└── 📁 SolarStudy.kr/
    ├── bachelor.html
    ├── master.html
    ├── mentor.html
    ├── services.html
    │
    ├── 📁 css/
    │   └── style.css
    │
    └── 📁 favicon/
        ├── apple-touch-icon.png
        ├── favicon-32x32.png
        ├── favicon-16x16.png
        └── site.webmanifest
```

---

## Key features

- **Pure CSS hamburger menu** — no JS for nav toggle
- **Swiper.js gallery** — reviews & invitation letters slider with touch support
- **Floating social dock** — expandable WhatsApp / Telegram / Instagram / YouTube buttons
- **Profile card with tabs** — About / Countries / Contacts, tab switching in vanilla JS
- **Fully responsive** — mobile-first layout

---

## Run locally

```bash
git clone https://gitlab.com/selftype/vibe-project
cd vibe-project

# just open in browser — zero build step
open index.html
```

No `npm install`. No build process. All external libs load from CDN.

---

## CDN deps

| Library | Version | Source |
|---|---|---|
| jQuery | 3.6.0 | `code.jquery.com` |
| Swiper.js | latest | `unpkg.com` |
| Owl Carousel | 2.3.4 | `cdnjs.cloudflare.com` |
| Font Awesome | 6 | `kit.fontawesome.com` |
| Google Fonts | — | `fonts.googleapis.com` |

---

## Screenshots

> _(add your own)_

| Mobile | Desktop |
|---|---|
| ![mobile](./img/screenshot-mobile.png) | ![desktop](./img/screenshot-desktop.png) |

---

<div align="center">

built by [@pubfnmain](https://t.me/pubfnmain) &nbsp;·&nbsp; client: Solar Study KR &nbsp;·&nbsp; 2024

</div>

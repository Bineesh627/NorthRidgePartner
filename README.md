# Northridge Partners – landing page (React + Vite)

React version of the Northridge Partners landing page. Desktop-first, fully responsive.

## Run it

```bash
npm install
npm run dev        # development server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Needs Node 18+ (20 or newer recommended).

## Deploy (Vercel)

Import the project; Vercel detects Vite automatically.
Build command `npm run build`, output directory `dist`.

## Project structure

```
src/
  main.jsx              entry: fonts, Bootstrap, styles, renders <App />
  App.jsx               page = list of sections
  components/           one file per section (Navbar, Hero, Solutions, ...)
  data/content.js       ALL text content + nav links (edit copy here)
  hooks/useSectionNav.js  smooth scrolling, active menu item, mobile menu close
  styles/main.css       the site's own CSS (Bootstrap is loaded from npm)
  assets/               photos and the HerAmbition logo
```

## Common edits

- **Change text, stats, menu items** → `src/data/content.js`
- **Add / remove a menu link** → edit `NAV_LINKS` in `content.js`; its `href` must match a section's `id`
- **Swap a photo** → replace the file in `src/assets/` (keep the same name)
- **Colours and spacing** → `src/styles/main.css` (brand colours are CSS variables at the top)

## Still to do

- Replace the `#` links for LinkedIn, Instagram, Privacy Policy and Terms of Service
  (marked with `TODO` in `components/Footer.jsx`)

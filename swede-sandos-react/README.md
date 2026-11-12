# Swede Sando's — React business concept website

A responsive, interactive concept website for a hypothetical affordable sandwich shop in Lindsborg, Kansas. Built for a Shark Tank-style entrepreneurship class presentation.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

For a production build: `npm run build`.

## Features

- Responsive photo-led hero carousel with manual controls and timed rotation.
- Scroll-triggered reveal animations across sections and cards, with reduced-motion support.
- Menu filtering with an individually assigned photograph for each menu item.
- Interactive sandwich builder: bread, protein, cheese, sauce and extras update the displayed price.
- Three fixed mystery rewards with one-card-per-visit reveal and qualifying-purchase conditions.
- Revenue scenario playground, SWOT tabs and team/business sections.

## Project structure

```text
swede-sandos-react/
├── public/
│   └── images/                 # Organized folders for future local photography
├── src/
│   ├── components/
│   │   ├── layout/              # Header/footer components can be extracted here
│   │   ├── sections/            # Page sections can be extracted here
│   │   ├── SandwichBuilder.jsx
│   │   └── SandwichBuilder.css
│   ├── data/
│   │   └── menu.js              # Menu content and unique image assignments
│   ├── hooks/                   # Shared hooks
│   ├── styles/
│   │   └── App.css              # Global responsive styles and animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Photography

Menu items now have distinct photo URLs instead of cycling through four repeated images. The photos are remotely hosted and require an internet connection. See `public/images/README.md` for the local image workflow and folder guide. Replace URLs with local `/images/...` paths when approved photographs are available.

## Important project notes

- This is a hypothetical class-project business, not a live restaurant or ordering service.
- The sandwich builder is a frontend demonstration; it does not submit orders or collect payments.
- Mystery rewards are demonstration coupons only. A qualifying purchase is required by the proposed offer terms; no real coupon is issued.
- Original team financial estimates are retained and are not audited forecasts.
- Some visual elements and photo sources are placeholders to be replaced with the team's approved logo and images.

## Dependencies

React, React DOM, Vite, Lucide React and Framer Motion. The current scroll-reveal implementation uses the browser's Intersection Observer and CSS transitions, so it does not depend on Framer Motion at runtime; Framer Motion is included for future richer motion work.

# Premium Portfolio (React + TypeScript + Tailwind + Framer Motion)

Minimal, sleek, premium single-page portfolio with:
- Sticky animated navbar + active section highlight
- Smooth scrolling between sections (TypeScript)
- Scroll-triggered entrance animations (Framer Motion)
- Skills progress indicators animate on view
- Project cards with glow + 3D hover tilt
- Dark mode-first palette + subtle animated gradient background

## Run locally

From `E:\Shafy Khan\projects\portfolio`:

```bash
npm install
npm run dev
```

Build + preview:

```bash
npm run build
npm run preview
```

## Customize content

Edit:
- `src/data.ts` (name, links, skills, projects)

## Structure

- `index.html` – Vite entry
- `src/main.tsx` – React bootstrap
- `src/App.tsx` – Sections (Hero/About/Skills/Projects/Contact)
- `src/components/*` – Reusable UI pieces
- `src/hooks/*` – TypeScript scroll + active section logic
- `src/index.css` – Tailwind + premium global styles


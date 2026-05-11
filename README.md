# Habit Tracker

A small web app for tracking habits over time. It is built with React and TypeScript and is still early in development (currently a shell UI with a header and week navigation placeholders).

## Prerequisites

- [Node.js](https://nodejs.org/) **20** or newer (LTS recommended)
- npm (bundled with Node)

## Getting started

From the project root (after cloning or unpacking the repo), install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually [http://localhost:5173](http://localhost:5173)).

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the dev server with hot module replacement |
| `npm run build`   | Typecheck and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally for testing   |
| `npm run lint`    | Run ESLint on the project                        |

## Tech stack

- **React 19** with **TypeScript**
- **Vite 8** for bundling and dev tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) for styling — global styles live in `src/index.css`
- **React Compiler** enabled in `vite.config.ts` (Babel preset) for automatic memoization where applicable

## Project layout

```
src/
  App.tsx           # Root layout and main screens
  main.tsx          # React entry point
  index.css         # Tailwind import + base body styles
  components/       # Reusable UI pieces (e.g. Button)
```

Static assets referenced from HTML can go in `public/`.

## Contributing notes

- Match existing formatting and component patterns when adding features.
- Run `npm run lint` before submitting changes when practical.

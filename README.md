# iamvs2002 — personal site

Single-page portfolio: interactive [Sketch.js](https://github.com/soulwire/sketch.js) canvas, header logo, slide-out menu, and modals for bio, work history, education, startups, highlights, and outbound links.

**Live:** [iamvs-2002.github.io](https://iamvs-2002.github.io/)

---

## Stack

| Layer | Choice |
| ----- | ------ |
| UI | React 18, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 (Vite plugin) |
| Graphics | Sketch.js |
| Icons | Font Awesome (React) |
| Hosting | GitHub Pages (static `dist/`) |

---

## Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** 9+

---

## Getting started

```bash
git clone https://github.com/iamvs-2002/iamvs-2002.github.io.git
cd iamvs-2002.github.io
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Edit files and save; the dev server hot-reloads.

---

## Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` / `npm start` | Dev server (Vite) |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch (GitHub Pages) |
| `npm run preview` | Serve `dist/` locally (test the real bundle) |
| `npm run lint` | ESLint |

Before opening a PR, run **`npm run build`** and **`npm run lint`** so CI and reviewers see a clean tree.

---

## Project layout (short)

| Path | Role |
| ---- | ---- |
| `src/App.tsx` | Canvas, header, menu, modal routing |
| `src/data/portfolio.ts` | All site copy, navigation, work/education/projects/highlights data, `SITE_URL` |
| `src/components/` | Modals, menu, footer, `ModalShell` |
| `public/` | Favicons, manifest, `work/` and `highlights/` images |
| `index.html` | HTML shell; Vite injects bundled JS/CSS in production |

---

## Configuration

| Concern | Where |
| ------- | ----- |
| Public site URL | `src/data/portfolio.ts` (`meta.siteUrl`), meta tags in `index.html`, absolute URLs in `public/site.webmanifest` |
| Asset base path | `vite.config.ts` → `base` (use `"/"` for `https://USER.github.io/`) |

Keep these in sync when the deploy URL changes.

---

## Deploy (GitHub Pages)

This repo is a **user site**: **`username.github.io`** → served from **`https://iamvs-2002.github.io/`** with **`base: "/"`**.

GitHub Pages serves **static files only**. It does **not** run `npm run build`. You must build locally (or in CI) and publish the **`dist/`** output.

### One-time: Pages settings

1. Repo **Settings → Pages**.
2. **Build and deployment → Source:** **Deploy from a branch**.
3. **Branch:** **`gh-pages`**, folder **`/ (root)`** (not `main`).

### Each release

```bash
npm run deploy
```

(Equivalent: `npm run build` then `gh-pages -d dist`; `gh-pages` is a dev dependency.)

`gh-pages` updates the **`gh-pages`** branch with the contents of **`dist/`** and pushes to `origin`. After a minute, the live site should match.

### If the site shows a blank page or MIME errors

The live site must use the **built** `index.html` (it references `/assets/*.js`), not the dev `index.html` (which references `/src/main.tsx`). That means Pages must serve **`gh-pages`** (built assets), not **`main`** (source). Fix: run the commands above and confirm **Settings → Pages** uses **`gh-pages`**.

---

## Contributing

This repository is a **personal portfolio**. External contributions are welcome for small, clear improvements—bug fixes, accessibility, performance, typos, or documentation—provided they do not change the owner’s biographical content without discussion.

1. **Fork** the repository and create a **branch** from `main` (e.g. `fix/menu-focus`).
2. Make focused changes; **match existing** patterns (TypeScript, Tailwind, component structure).
3. Run **`npm run lint`** and **`npm run build`**; fix any errors.
4. Open a **pull request** with a short description of *what* and *why*.
5. For **content** that is clearly personal (bio, jobs, projects), open an **issue first** so expectations are aligned.

Issues and PRs that only adjust third-party dependencies without a security or bugfix reason may be declined.

---

## Menu → modals

| Menu item | Behavior |
| --------- | -------- |
| About | Profile, socials, bio (`AboutModal`) |
| Work experience | Résumé-style list (`WorkExperienceModal`, `portfolio.work`) |
| Education | Degree and coursework (`EducationModal`, `portfolio.education`) |
| Startups/projects | Products and links (`ProjectsModal`, `portfolio.projects`) |
| Highlights | Events and links (`HighlightsModal`, `portfolio.highlights`) |
| Blog | External → Hashnode |
| Let’s Connect | `mailto:` |

Header and menu logo URLs use `portfolio.meta.siteUrl` (exported as `SITE_URL`).

---

## Where to edit content

| What | Where |
| ---- | ----- |
| Canonical / SEO URL | `src/data/portfolio.ts` (`meta.siteUrl`), `index.html`, `public/site.webmanifest` |
| Everything else (hero, menu, socials, about, work, education, projects, highlights) | `src/data/portfolio.ts` |
| Optional video embeds (projects / highlights) | `portfolio.ts` — `video` field (`PortfolioVideo`: YouTube id, Vimeo id, or `file` with `/media/...` under `public/`) |
| Background color palette | `src/components/Colors.tsx` |

Shared modal UI: `ModalShell.tsx`.

---

## Static assets

### `public/work/` — company logos (work experience)

Referenced as `/work/...` in code:

| File | Company |
| ---- | ------- |
| `blogvault.png` | BlogVault |
| `acm.png` | ACM, LNMIIT |
| `atomei.jpeg` | Atom EI |
| `gpcssip.jpeg` | Gurugram Police Cyber Cell |
| `engineerHub.png` | engineerHUB |

LNMIIT TA uses a hosted logo URL in `portfolio.ts` (`work.entries`). Missing images fall back to a placeholder in the UI.

### `public/highlights/` — highlight images

| File | Highlight |
| ---- | --------- |
| `hackzurich.jpeg` | HackZurich |
| `hackercup.jpg` | Meta Hacker Cup |
| `checkedit.jpg` | Checked It |

Missing files fall back to icons from `portfolio.highlights` entries.

### `public/og-image.png` — social share card

1200×630 Open Graph / Twitter card (`og:image` + `twitter:image` in `index.html`).
Regenerate with the ImageMagick script at `.freebuff/og-make.sh` (requires a
headshot at `src/assets/img/vaibhav.jpeg`).

---

## GitHub profile README (optional)

If you use the special [`username/username`](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) profile repository, keep its **live URL** and branding aligned with `portfolio.meta.siteUrl` and this README.

---

## License

MIT — see [LICENSE](./LICENSE).

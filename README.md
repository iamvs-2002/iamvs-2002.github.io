# iamvs2002 — personal site

Minimal single-page site: random pastel background, [Sketch.js](https://github.com/soulwire/sketch.js) brush strokes on pointer movement, header logo, and a slide-out menu with modals for bio, résumé-style sections, and outbound links.

**Live:** [iamvs-2002.github.io](https://iamvs-2002.github.io/)

## Stack

| Layer    | Choice |
| -------- | ------ |
| UI       | React 18, TypeScript |
| Build    | Vite 6 |
| Styling  | Tailwind CSS 4 (Vite plugin) |
| Graphics | Sketch.js |
| Icons    | Font Awesome (React) |

## Scripts

```bash
npm install     # dependencies
npm run dev     # local dev server
npm run build   # production build → dist/
npm run preview # serve dist locally
npm run lint    # ESLint
```

## Menu → modals & links

| Menu item | Behavior |
| --------- | -------- |
| About | Profile, socials, short bio (`AboutModal`) |
| Work experience | Roles and summaries (`WorkExperienceModal`, data in `src/data/workExperience.ts`) |
| Education | LNMIIT degree (`EducationModal`) |
| Startups/projects | Needle, MoveOnFromYourEx, URL2Mockup (`ProjectsModal`, `src/data` inline) |
| Highlights | HackZurich, Hacker Cup, Checked It (`HighlightsModal`, `src/data/highlights.ts`) |
| Blog | External → Hashnode |
| Let’s Connect | `mailto:` |

Header logo and menu logo link to the canonical site URL from `src/site.ts`.

## Where to edit content

| What | Where |
| ---- | ----- |
| Deploy / canonical URL | `src/site.ts`, `index.html`, `public/site.webmanifest` |
| Work history | `src/data/workExperience.ts` |
| Highlights (copy + links) | `src/data/highlights.ts` |
| Startups/projects list | `src/components/ProjectsModal.tsx` (`projects` array) |
| About copy | `src/components/AboutModal.tsx` |
| Education copy | `src/components/EducationModal.tsx` |
| Background color pool | `src/components/Colors.tsx` |

Shared modal chrome lives in `ModalShell.tsx`.

## Static assets

### `public/work/` — company logos (work experience)

Use these filenames (paths in code are `/work/...`):

| File | Company |
| ---- | ------- |
| `blogvault.png` | BlogVault (SDE + intern) |
| `acm.png` | ACM, LNMIIT |
| `atomei.jpeg` | Atom EI |
| `gpcssip.jpeg` | Gurugram Police Cyber Cell |
| `engineerHub.png` | engineerHUB |

The LNMIIT teaching-assistant row uses a hosted LNMIIT logo URL in `workExperience.ts` (no local file). Missing or broken images show a briefcase placeholder.

### `public/highlights/` — event / org marks

| File | Highlight |
| ---- | --------- |
| `hackzurich.jpeg` | HackZurich |
| `hackercup.jpg` | Meta Hacker Cup |
| `checkedit.jpg` | Checked It |

Missing files fall back to Font Awesome icons (`src/data/highlights.ts`).

## GitHub profile `README`

If you use the special [`username/username`](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) repo on GitHub, copy from [`GITHUB_PROFILE_README.md`](./GITHUB_PROFILE_README.md) into that repo’s root `README.md` (keep the project site README here unchanged).

## License

MIT — see [LICENSE](./LICENSE).

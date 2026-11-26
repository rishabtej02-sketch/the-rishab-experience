# The Rishab Experience

A responsive editorial portfolio for G. Rishab Tej. Next.js App Router, React, TypeScript, Tailwind CSS, GSAP/ScrollTrigger, Lenis, and an on-demand React Three Fiber scene. All project illustrations are original SVG/CSS compositions. No generated portraits, stock project screenshots, or copied template components are used.

## Run locally

Node.js 24 LTS is recommended. Dependencies are pinned in `package.json` and `package-lock.json`.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production preview:

```sh
npm run build
npm start
```

The Windows sandbox initially stalled the Turbopack compile; webpack provides a supported alternative. There is no API key or backend dependency.

## Architecture and editing

- `src/data/portfolio.ts`: name, approved contact links, experience, education, project narratives, evidence notes, disciplines, and thinking stages.
- `src/app/page.tsx`: six homepage chapters.
- `src/app/work/[slug]/page.tsx`: statically generated case studies; add an entry to the data file to add a route.
- `src/app/profile/page.tsx`: motion-free recruiter summary and CV downloads.
- `src/components/MotionShell.tsx`: loads `DesktopMotion.tsx` only for desktop fine-pointer devices with motion enabled. GSAP and Lenis are absent from mobile startup. The desktop module uses scoped GSAP animations and one shared GSAP/Lenis ticker; contexts, ticker callbacks, and listeners clean up on route changes.
- `src/components/ConnectionScene.tsx`: dynamically imported, demand-rendered Three.js knot. Loaded only when a visitor chooses 3D, avoiding WebGL costs for ordinary reading.
- `src/app/globals.css`: visual tokens, original art, responsive layouts, reduced-motion and print styles.
- `public/cv/`: three edited public CV summaries. The supplied originals are intentionally excluded.

The four discipline panels use native `details`. Process tabs support arrows, Home, End, and keyboard focus. Menus, links, and 3D rotation work without a pointer. Native scrolling is retained on touch devices and for reduced-motion preferences. Server-rendered content remains readable without animation or JavaScript. No forced horizontal scrolling or scroll locks are used.

## Content and privacy

The three supplied institutional CVs and the user’s project brief are source materials. The Rockwell employer name was explicitly corrected by the user to **Rockwell Industries Limited** on November 22, 2026.

The case studies cite their sources and label the scope of reported figures. Next Step HR draws on the offer, work log, and campaign review. The Austridge Group draws on project records and the public service pages. Hyderabad Pickleball Association is based on the project brief, with individual attribution and metrics still awaiting confirmation.

The site lists the public email address, telephone number, and LinkedIn profile approved by Rishab. GitHub points to the connected account. Original CVs contain private identifiers; do not copy them into `public/` or commit them. Public summaries omit academic IDs, age, gender, institution phone/email, and grades.

To regenerate the summaries with Python + ReportLab:

```sh
node --input-type=module -e "import {person,experience} from './src/data/portfolio.ts'; import fs from 'node:fs'; fs.mkdirSync('tmp',{recursive:true}); fs.writeFileSync('tmp/cv-data.json',JSON.stringify({education:person.education,experience}));"
python scripts/generate-cvs.py
```

The Python renderer also contains audience-specific project highlights; update these when changing CV content. Inspect rendered PDFs after regeneration.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
# Start the production server, then:
npx playwright test
```

Browser tests cover project routes, process tabs, mobile navigation, keyboard access, reduced motion, responsive overflow, PDF responses, client errors, axe accessibility, and lazy 3D loading. Install Playwright Chromium with `npx playwright install chromium` if needed.

See [VERIFICATION.md](VERIFICATION.md) for measured results and remaining publication/content limitations.

## Deployment

The Vercel project `the-rishab-experience` exists in the `agency-one` team, with the Next.js framework preset and Node 24. Build command: `npm run build`. Upload source plus the lockfile and `public/`; exclude `tmp/`, `.next/`, `node_modules/`, original CVs, and local reports.

The [protected preview](https://the-rishab-experience-gtdo3gxdt-agency-one.vercel.app) is READY, deployed from source commit `0e18f12` and verified on November 23, 2026. Vercel sign-in may be required. See `VERIFICATION.md` for deployment and hosted-check details. Source control remains local; no GitHub repository is connected.

Deploy future **previews** without a production domain or promotion. With the deployment REST API, omit `target` for a preview and verify that the response target is null. Production publishing requires Rishab’s approval.

Preview deployments use `noindex, nofollow`. Vercel production deployments allow indexing by default and publish canonical links, robots.txt, and the sitemap for https://the-rishab-experience.vercel.app. Set `PORTFOLIO_INDEXABLE=false` to pause production indexing or `PORTFOLIO_INDEXABLE=true` to simulate production indexing in a local build.

## References and licensing

Reviewed November 22, 2026. Implementation is original; no repository design or asset files were copied.

- [Next.js](https://github.com/vercel/next.js) — App Router, static case-study routes, metadata; MIT.
- [GSAP](https://github.com/greensock/GSAP) and [official React/ScrollTrigger skills](https://github.com/greensock/gsap-skills) — scoped lifecycle cleanup and purposeful scroll-linked transforms. GSAP uses its Standard License; skill repository is MIT.
- [Lenis](https://github.com/darkroomengineering/lenis) — official GSAP ticker integration; MIT.
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) — React 19-compatible version 9, demand rendering and selective 3D; MIT. Three.js is MIT.
- [Motion](https://github.com/motiondivision/motion), [Motion Primitives](https://github.com/ibelick/motion-primitives), and [Magic UI](https://github.com/magicuidesign/magicui) — studied component transitions and interaction restraint. Not installed or copied because CSS/GSAP covers this project’s needs. Their repositories declare MIT licensing.
- [Codrops OneElementScroll](https://github.com/codrops/OneElementScroll) — inspiration for a continuous visual motif; MIT. No source or imagery reused.
- [Nim](https://github.com/ibelick/nim) — studied separation of content and presentation; no code reused and no license assumed for reuse.
- Space Grotesk is self-hosted through Fontsource; font license: SIL Open Font License.

No analytics, external runtime fonts, contact-form storage, or tracking scripts are included.

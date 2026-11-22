# Local verification

The portfolio has a working production build and local preview at `http://127.0.0.1:3000`.

## Build and source checks

- Production webpack build: passed. Homepage, recruiter profile, five case studies, and not-found route generated successfully.
- TypeScript: passed.
- ESLint: passed with no warnings.
- Content integrity: three tests passed for project links, source labels, the approved Rockwell correction, contact boundaries, and real CV files.
- The three public CV summaries render as one-page PDFs. Visual review and text scanning confirmed omission of academic identifiers, age/gender, institutional telephone, and institutional email.

## Browser checks

Chromium automation and visual inspection cover desktop (1440px), tablet (768px), and mobile (375px).

- Project navigation, next-project links, process tabs, arrow-key navigation, mobile menu, and skip link.
- All five case-study routes and three PDF downloads.
- Interactive NarrativeX and creative-scoring component diagrams.
- Lazy 3D activation, keyboard-accessible rotation button, and closing the scene.
- Reduced-motion behavior, horizontal-overflow checks, and axe WCAG 2 A/AA + 2.1 AA scans on the homepage, recruiter page, and representative case studies.
- No client page errors were recorded in the tested navigation flow.
- The initial pickleball-cover contrast issue and wordmark accessible-name mismatch were corrected.

Automated browser tests are in `tests/browser.spec.ts`. Run `npm run test:e2e` with the production server running. If using an existing Chromium installation, set `PLAYWRIGHT_EXECUTABLE_PATH` to its executable; otherwise install the Playwright-managed browser.

## Performance

Lighthouse 13.6.0, mobile simulation, local production server, no concurrent browser tests during the final measurement:

| Measure | Result |
| --- | --- |
| Performance | 81 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 60 |
| First contentful paint | 0.8 s |
| Largest contentful paint | 0.8 s |
| Total blocking time | 810 ms |
| Cumulative layout shift | 0 |
| Speed index | 1.9 s |

The practical mobile performance target of 90 was not reached in this local run. JavaScript startup remains the main cost. Desktop GSAP/Lenis code is dynamically loaded only on suitable devices; the Three.js scene is loaded only on request. The initial uncontended score was 78 before this optimization. These are local lab results, not deployed field measurements.

The preview is deliberately `noindex, nofollow`, which lowers the SEO score. Enable indexing only for an approved production release, and configure the actual canonical domain and sitemap then.

## Publication and content limitations

- Vercel preview deployment is blocked by a 403 team authorization error for the connected `agency-one` scope. No remote deployment or production-domain publication has been made.
- The GitHub connector identifies the account but returns no accessible repositories. Source control is local; no remote repository is claimed.
- No public email address has been approved. LinkedIn is the working contact CTA; GitHub links to the connected account.
- Hyderabad Pickleball Association, Next Step HR, and Austridge are clearly labeled project overviews. Dates, formal titles, tool details, and numerical results remain to be confirmed.
- The original CVs and all private source renders remain outside tracked/public output.

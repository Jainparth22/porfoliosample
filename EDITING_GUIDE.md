# Your Portfolio Editing Guide

Live site: https://porfoliosample-zeta.vercel.app/  |  Repo: github.com/Jainparth22/porfoliosample

Almost everything you change lives in **`src/data/`**. A few visual pieces (hero diagram, tech strip, contact line, theme colors) live in `src/components/` or `src/app/` and are listed below.

## The 30-second workflow
1. Open the folder in VS Code and edit a file.
2. Preview: `npm run dev`, then open http://localhost:3000 (first time: `npm install`; needs Node.js LTS).
3. Publish: commit and push to `main`. Vercel redeploys automatically in about a minute.

```bash
git add -A
git commit -m "Update projects"
git push origin main
```

If the site fails to build, Vercel keeps showing the old version. Open the failed deployment in the Vercel dashboard to read the error; it names the file and line. The usual cause is a missing comma, quote or bracket.

## What the page contains (top to bottom)
Hero, tech strip, 01 Shipped (dark panel), 02 Machine learning, 03 Experience, 04 All work, 05 Skills, 06 Education and credentials, 07 How I work, 08 Contact. A Light/Dark toggle is in the top bar.

## Which file controls what

| What you see on the site | File | What to edit |
|---|---|---|
| Large hero quote | `src/data/personal.ts` | `pullQuote` |
| The 4 big numbers under the hero | `src/data/personal.ts` | `stats` |
| Hero paragraph, buttons, "Live now" links | `src/components/sections/Hero.tsx` | the text; "Live now" is built from projects that have a `live:` link |
| Hero diagram (Client, API, Redis, Celery, DB) | `src/components/ui/HeroDiagram.tsx` | the `<text>` labels |
| Scrolling tech strip | `src/components/ui/Marquee.tsx` | the `items` list |
| Name, email, phone, social links | `src/data/personal.ts` | `personalInfo` |
| 01 Shipped | `src/data/projects.ts` | every project with a `live:` link appears here automatically |
| 02 Machine learning | `src/components/sections/Research.tsx` | the `slugs` list (repo names to feature) |
| 04 All work and its tabs | `src/data/projects.ts`, tabs in `AllWork.tsx` | `projects`; `tabs` |
| 03 Experience | `src/data/experience.ts` | `experiences` |
| 05 Skills (plain text lines) | `src/data/skills.ts` | `skillCategories` (title and skills; `color` is unused) |
| 06 Degrees and IITM progress | `src/data/education.ts` | `degrees`, `iitmMilestones` |
| 06 Certificates | `src/data/certifications.ts` | `certifications` (`color` is unused) |
| 06 Badges and coding profiles | `src/data/badges.ts` | `badges`, `codingProfiles` |
| 07 How I work (your LinkedIn text) | `src/data/personal.ts` | `aboutIntro`, `aboutSections`, `aboutStack`, `aboutClosing` |
| 08 Contact heading | `src/components/sections/Contact.tsx` | the heading text |
| Browser tab title and link preview | `src/app/layout.tsx` | `metadata` |
| Section order | `src/app/page.tsx` | the list of `<Section />` lines |
| Menu links | `src/components/layout/Nav.tsx` | `links` |
| Colors (light and dark) | `src/app/globals.css` | the variables under `:root` (light) and `.dark` (dark) |
| Fonts | `src/app/layout.tsx` | the three font imports |

## Add something
Copy an existing block, paste it below, change the values. Keep the comma after the closing `}`.

**Project** (`projects.ts`). Only the first five fields are required.
```ts
{
  title: "My New Project",
  description: "One or two sentences. Shown in the All work list.",
  longDescription: "The core idea in a sentence or two. Shown large on case studies.",
  tech: ["FastAPI", "Redis", "Docker"],
  github: "https://github.com/Jainparth22/my-new-project",
  live: "https://my-demo.vercel.app",        // delete this line if there is no demo
  category: ["backend"],                      // featured | ml | backend | distributed | coursework
  status: "demo",                             // production | demo | learning
  highlights: ["Point 1", "Point 2", "Point 3", "Point 4"],  // first 3 show, the rest sit under "More detail"
  showcase: "What a visitor should look at first.",          // shown under "More detail"
},
```
Order in the list is the order shown, so put the best first. A project with a `live:` link is promoted to the big "Shipped" panel; keep that to your best three.

**Optional visual fields** (add any of these to a project to get richer case-study blocks):
```ts
metrics: [{ value: "53", label: "REST endpoints" }, { value: "12", label: "tables" }, { value: "14", label: "screens" }],
flow: ["Client", "API", "Cache", "Queue", "Database"],
flowNote: "One line explaining the flow or its fallbacks.",
chartTitle: "Score by milestone",
chart: [{ label: "Baseline", value: 0.70 }, { label: "Final", value: 0.83, highlight: true }],
chartMin: 0.6,
chartMax: 0.9,
chartMark: { label: "Cutoff 0.80", value: 0.80 },   // optional vertical marker
```
Use exactly three `metrics` (the layout is three columns). `chartMin` and `chartMax` set the bar scale. The last chart item is not special unless it has `highlight: true`. The Research and Shipped sections show these; the All work list does not.

**Certificate** (`certifications.ts`): `category` must be `'iitm'`, `'workshop'`, `'course'` or `'hackerrank'`.
```ts
{ title: 'Course name', issuer: 'Issuer', platform: 'Platform', year: 'Dec 2026',
  category: 'course', color: 'text-emerald-400',
  verifyUrl: 'https://...', skills: ['Skill 1'] },
```
The `color` and `skills` fields are required by the type but not displayed. `verifyUrl` makes the title a link.

**Badge** (`badges.ts`, in `badges`): copy an entry; add `url: 'https://...'` if you have a public link (not displayed yet unless you add it to `Credentials.tsx`).

**Experience** (`experience.ts`): copy one block; the first item is shown first. `logo` and `color` are unused.

**Skill group** (`skills.ts`): add a string to a `skills: [...]` list, or copy a whole group (`title`, `color`, `bgColor`, `skills`).

**Tech strip words** (`Marquee.tsx`): add or remove names in `items`.

**A new filter tab in All work**: add the name to `ProjectCategory` in `projects.ts`, add a line to `tabs` in `AllWork.tsx`, then tag projects with it in `category`.

## Remove something
Delete the whole `{ ... },` block, or comment it out to keep it for later:
```ts
// { title: 'Old project', ... },
```
To hide a whole section, delete its line in `src/app/page.tsx` and its link in `Nav.tsx`. The file can stay.
To remove a demo link that is down, delete its `live:` line. The project then leaves the Shipped panel and the hero "Live now" row, so add `live:` back when it is up.

## Update something
- **Round numbers**: GfG and LeetCode are deliberately round (950+ and 200+). Search the project for `950+` and `200+` to find every spot (`personal.ts`, `badges.ts`).
- **Hero stats**: edit `stats` in `personal.ts`. Keep each label short; the cards are small. `value` and `suffix` are shown together; `color` is unused.
- **Phone or email**: `personalInfo` in `personal.ts` (shown in Contact). To hide the phone, delete its `<a href={`tel:...`}>` block in `Contact.tsx`.
- **Profile URLs**: `url:` inside `codingProfiles` in `badges.ts` (check the LeetCode and HackerRank ones).
- **Portfolio URL**: `portfolio` in `personalInfo` (currently the Vercel address).
- **Colors**: in `globals.css`, each variable is three numbers (red green blue). Change `--accent` for the highlight color in light mode and again under `.dark` for dark mode.
- **Dark Shipped panel**: it uses `--inv`, `--invfg`, `--invmute`, `--invrule`.
- **No emojis on purpose**: keep entries plain text so the site reads as hand-made.

## Search tips (VS Code: Ctrl+Shift+F)
- `TODO` finds notes to yourself.
- A repo name finds its project block.
- `live:` lists every project that appears in Shipped.

## Safe-edit rules
1. `projects.ts` uses double quotes; other data files use single quotes. Inside a string, an apostrophe needs care: use double quotes around it, or write `\'`.
2. Every item ends with a comma. Every `[` and `{` must be closed.
3. Don't rename the field names on the left (`title`, `tech`, `category`...).
4. Change one thing, preview, then the next.
5. If you break something: `git checkout -- <file>` restores the last committed version.

## Things to keep honest
- Only list certificates you hold a file for (the ML Specialization is intentionally just Supervised ML).
- Keep MPOnline described as a training-focused internship.
- Check every live link works before sharing the site (Placement Portal on Fly.io and Healthcare on Railway were not responding on 18 Nov 2026).
- Do not publish demo passwords or student IDs in READMEs.
- After a big change, open the live site on your phone in both light and dark mode.

## Where your source facts live
`CS Record/Consolidated Data/` holds the verified facts: education, experience, projects (09 is the full catalog), certificates, badges, GitHub repos, discrepancies and links. Update those first, then copy changes into `src/data/`.

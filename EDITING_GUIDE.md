# Your Portfolio Editing Guide

Everything you normally change lives in **`src/data/`**. You almost never need to touch the `.tsx` files in `src/components/`.

## The 30-second workflow
1. Open the folder in VS Code and edit a file in `src/data/`.
2. Preview: `npm run dev`, then open http://localhost:3000 (first time: `npm install`; needs Node.js LTS).
3. Publish: commit and push to `main`. Vercel redeploys automatically in about a minute.

```bash
git add -A
git commit -m "Update projects"
git push origin main
```

If the site fails to build, the error names the file and line. The usual cause is a missing comma, quote or bracket.

## Which file controls what

| What you see on the site | File | What to edit |
|---|---|---|
| Name, email, phone, links, typing roles, hero summary, hero numbers, achievements | `src/data/personal.ts` | `personalInfo`, `achievements`, `stats` |
| Degrees, IITM milestones, campus activities | `src/data/education.ts` | `degrees`, `iitmMilestones`, `campusActivities` |
| Internship and open-source cards | `src/data/experience.ts` | `experiences` |
| Project cards and filter tabs | `src/data/projects.ts` | `projects` |
| Skill groups and pills | `src/data/skills.ts` | `skillCategories` |
| Certificate cards and filter tabs | `src/data/certifications.ts` | `certifications` |
| AWS/ServiceNow badges, GfG/LeetCode/HackerRank cards | `src/data/badges.ts` | `badges`, `codingProfiles` |
| Tab title and link-preview text | `src/app/layout.tsx` | `metadata` |
| Section order | `src/app/page.tsx` | the list of `<Section />` lines |
| Menu links | `src/components/layout/Navbar.tsx` | `navLinks` |
| About paragraph text | `src/components/sections/About.tsx` | the paragraphs (plain text) |

## Add something
Copy an existing block, paste it below, change the values. Keep the comma after the closing `}`.

**Project** (`projects.ts`)
```ts
{
  title: 'My New Project',
  description: 'One or two sentences on what it does.',
  longDescription: 'The core idea (optional).',
  tech: ['FastAPI', 'Redis', 'Docker'],
  github: 'https://github.com/Jainparth22/my-new-project',
  live: 'https://my-demo.vercel.app',   // delete this line if there is no demo
  category: ['featured', 'backend'],     // featured | ml | backend | distributed | coursework
  featured: true,                        // star + glow; remove for a normal card
  status: 'production',                  // production | demo | learning
  highlights: ['Specialty point 1', 'Specialty point 2', 'Specialty point 3'],
  showcase: 'What a visitor should look at first.',
},
```
Cards in the list appear in the order written, so put the best first. The "Featured" tab is the default view.

**Certificate** (`certifications.ts`): `category` must be `'iitm'`, `'workshop'`, `'course'` or `'hackerrank'`.
```ts
{ title: 'Course name', issuer: 'Issuer', platform: 'Platform', year: 'Dec 2026',
  category: 'course', color: 'text-emerald-400',
  verifyUrl: 'https://...', skills: ['Skill 1', 'Skill 2'] },
```

**Badge** (`badges.ts`, in `badges`): copy any entry; add `url: 'https://...'` to show a "View badge" link.

**Experience** (`experience.ts`): copy one block. `color` is `'cyan'` or `'violet'`; the first item is the newest.

**Skill** (`skills.ts`): add a string to the `skills: [...]` list of a group, or copy a whole group for a new category (title, color, bgColor, skills).

**Typing roles** (`personal.ts`, `roles`): add or remove strings.

**A new filter tab** (projects): add the name to `ProjectCategory` in `projects.ts`, then add a tab line in `src/components/sections/Projects.tsx`, plus a color and label in `ProjectCard.tsx`.

## Remove something
Delete the whole `{ ... },` block, or comment it out to keep it for later:
```ts
// { title: 'Old project', ... },
```
To hide a whole section, delete its line in `src/app/page.tsx` (and its menu link in `Navbar.tsx`). The files can stay.

## Update something
- **Numbers**: GfG and LeetCode are deliberately round (950+ and 200+). Change them in `personal.ts` (`stats`, `achievements`, `summary`), `badges.ts` (`codingProfiles`) and `About.tsx`. Search the project for `950+` to find every spot.
- **Add a live link to a project**: add `live: 'https://...'` to it. The "Run locally" label turns into a "Live Demo" link.
- **Phone or email**: `personalInfo` in `personal.ts` (shown on About and Contact). To hide the phone, delete the `<a href={`tel:...`}>` blocks in `About.tsx` and `Contact.tsx`.
- **Profile URLs**: `url:` inside `codingProfiles` in `badges.ts` (check the LeetCode and HackerRank ones).
- **Colors**: classes like `text-cyan-400` and `border-violet-400/20` are Tailwind colors. Swap the color name (emerald, orange, sky, amber...).
- **No emojis on purpose**: the site is kept free of emoji icons so it reads as hand-made. Keep new entries plain text.

## Search tips (VS Code: Ctrl+Shift+F)
- `Deploy coming soon` / `Run locally`: label on projects without a live link.
- `TODO`: nothing is marked yet; use it for your own notes.
- A project's repo name finds its card quickly.

## Safe-edit rules
1. Strings use single quotes `'...'`. An apostrophe inside needs a backslash: `'Parth\'s app'`, or use double quotes.
2. Every item ends with a comma. Every `[` and `{` must be closed.
3. Don't rename the field names on the left (`title`, `tech`, `category`...).
4. Change one thing, preview, then the next.
5. If you break something: `git checkout -- <file>` restores the last committed version.

## Things to keep honest
- Only list certificates you hold a file for (the ML Specialization card is intentionally Supervised ML only).
- Keep MPOnline described as a training-focused internship.
- Do not publish demo passwords or student IDs in READMEs.
- After a big change, open the live site on your phone too.

## Where your source facts live
`CS Record/Consolidated Data/` has the verified facts for education, internship, projects, certificates, badges, GitHub repos and open discrepancies. Update those first, then copy changes into `src/data/`.

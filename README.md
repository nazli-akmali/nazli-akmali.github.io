# nazli-akmali.github.io

My portfolio, served by GitHub Pages at <https://nazli-akmali.github.io/>
(English) and <https://nazli-akmali.github.io/de/> (Deutsch).

Plain HTML, CSS and JavaScript. No build step.

| File | Purpose |
| --- | --- |
| `index.html` | English page |
| `de/index.html` | German page (keep in sync with the English one) |
| `projects.js` | Product projects shown on both pages, with `en` / `de` text |
| `site.css` | Shared design system, copied **unchanged** from the `project-showcase` skill so every project page looks the same |
| `portfolio.css` | Portfolio-only additions (portrait, experience, project cards, skills) |
| `main.js` | Renders the project cards, top-bar behaviour |
| `images/` | Profile photo and other images |
| `<project>/` | A project's showcase (landing page, `/app/` demo, case study), built in the project repo. Don't edit by hand |

## Projects

Project repos are private. Their showcase pages live here instead, one folder
per project, so they're served at `https://nazli-akmali.github.io/<repo-name>/`.
Each folder is a build output copied from the project repo (it contains a
`.showcase-build` marker); the sources stay in the project's `site/` folder.

**Adding a project**

1. Build its showcase with the `project-showcase` skill. In the project repo,
   `python3 site/build.py --publish` copies it into `<repo-name>/` here.
2. Add an entry to `projects.js` with that URL in `page` (and `caseStudy`,
   `image` if it has them).
3. Commit and push this repo. Don't turn on GitHub Pages in the project repo:
   it would take over the same URL.

**Updating a project**

Change the project, run `python3 site/build.py --publish` in its repo again,
then commit and push both repos. Or ask Claude to update the showcase with the
`project-showcase` skill.

## Adding the profile photo

Save it as `images/profile.jpg` (portrait, about 4:5), then in both
`index.html` and `de/index.html` replace the `NA` placeholder inside
`.portrait` as described in the `PHOTO` / `FOTO` comment.

## Updating the design

If `site.css` changes in the skill, copy it here again so the portfolio and
project pages stay consistent. Put portfolio-only styles in `portfolio.css`.

## Preview locally

```bash
python3 -m http.server 8000
```

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

## Adding a project

1. Build its showcase with the `project-showcase` skill and turn on Pages in
   that repo. It's served at `https://nazli-akmali.github.io/<repo-name>/`.
2. Add an entry to `projects.js` with that URL in `page`, and optionally a
   screenshot URL in `image`.

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

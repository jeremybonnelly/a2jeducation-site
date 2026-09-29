# a2jeducation.org

This is the website of the Access to Justice Education Initiative (A2JEI). It is a single static page, hosted free on GitHub Pages.

## What's in this folder

| File / folder | What it is |
|---|---|
| `index.html` / `fr/index.html` | **The English / French text is here.** Edit this file to change the wording. |
| `css/styles.css` | Colours, fonts and layout. The brand colours are at the top, under `:root`. |
| `js/main.js` | Small interactions: the menu, highlighting the current section, fade-in effects. You shouldn't need to touch it. |
| `assets/img/` | A2JEI logos, favicon, and the preview image shown when someone shares the link. |
| `assets/logos/` | Partner logos. |
| `assets/report/` | The report cover and the report PDF. |
| `fonts/` | The Figtree font, hosted with the site so visitors aren't tracked by Google Fonts. |
| `CNAME` | Tells GitHub Pages to serve the site at a2jeducation.org. **Don't delete it.** |
| `.nojekyll` | Tells GitHub to publish the files exactly as they are. |

## Common updates

**Replace a report cover.** Save the new image over `assets/report/cover.jpg` (English) or `assets/report/cover-fr.jpg` (French), keeping the same name. About 850 × 1100 px works best.

**Replace a PDF.** Save the new file over the old one with exactly the same name:
- English report: `assets/report/building-the-a2j-lawyer.pdf`
- French report: `assets/report/former-les-juristes-pour-l-acces-a-la-justice.pdf`
- Course outline and resources: `assets/course/a2j-course-outline-part1-en.pdf` and `assets/course/a2j-plan-de-cours-partie1-fr.pdf`

**Change some text.** Open `index.html` (English) or `fr/index.html` (French) in a text editor such as VS Code or TextEdit (in plain-text mode). Use Find to locate the sentence and change only the words between the tags.

**Preview your changes.** Double-click `index.html` to open it in your browser.

**Publish your changes.** Upload the changed files to the GitHub repository. The live site updates within about a minute.

## Still to do

Nothing outstanding.

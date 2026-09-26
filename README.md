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

**Replace the report cover.** Save the real cover as `assets/report/cover.png`, keeping exactly that name, and overwrite the placeholder. A JPG works too: save it as `cover.jpg`, then in `index.html` change `cover.png` to `cover.jpg`. For best results, use a width of about 850 px.

**Add the report PDF.** Save it as `assets/report/building-the-a2j-lawyer.pdf`. The download button already points to that file.

**Change some text.** Open `index.html` in a text editor such as VS Code or TextEdit (in plain-text mode). Use Find to locate the sentence and change only the words between the tags.

**Preview your changes before publishing.** Double-click `index.html` to open it in your browser. Everything works this way except the language toggle.

**Publish your changes.** Upload the changed files to the GitHub repository (see the publishing guide). The live site updates within about a minute.

## Still to do

- [ ] Final cover → `assets/report/cover.png`
- [ ] Report PDF → `assets/report/building-the-a2j-lawyer.pdf`
- [ ] French cover → `assets/report/cover-fr.png`
- [ ] French report PDF → `assets/report/former-les-juristes-pour-l-acces-a-la-justice.pdf`

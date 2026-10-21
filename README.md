# Visvaa Personal Portfolio

A five-page portfolio built with HTML5, CSS3 and vanilla JavaScript. No frameworks.

## Structure
```
personal-portfolio/
  index.html  about.html  projects.html  skills.html  contact.html
  css/style.css
  js/script.js
  README.md
```

## Run in VS Code
1. Open the folder in VS Code (File > Open Folder).
2. Install the Live Server extension.
3. Right-click `index.html` and choose "Open with Live Server". Or just double-click `index.html`.

## Edit your content
- Name, text, education: edit the HTML files. Header and footer are repeated in every page, so change them in all five.
- Project links: replace the "add your URL here" lines in `projects.html` and `index.html` with real `<a>` links.
- Email: change the sample address in `contact.html`.
- Colors and spacing: edit the variables at the top of `css/style.css`.

## Contact form limitation
The form is validated in the browser only. It does NOT send or store messages. To deliver real messages you need a backend or a form service (for example Formspree or Netlify Forms).

## Test keyboard accessibility
- Press Tab from the top: the first stop is "Skip to main content". Press Enter to jump to the content.
- Tab through links, buttons and form fields. A yellow focus ring must always be visible.
- Narrow the window below 768px: Tab to "Menu", press Enter or Space to open it, press Escape to close it.
- On the contact page, submit an empty form: errors appear and focus moves to the first invalid field.

## Validate and run Lighthouse
- HTML: paste each page at https://validator.w3.org/#validate_by_input, or use the "W3C Web Validator" extension.
- Lighthouse: open the page in Chrome, press F12, open the Lighthouse tab, tick Accessibility and SEO, then Analyze.
- Fix anything reported. A score is only valid after you run it; none is claimed here.

## Requirement checklist
| Requirement | Where |
|---|---|
| Semantic header, nav, main, section, article, aside, footer | all pages |
| figure and figcaption | `index.html` |
| address, time, form, label | `contact.html`, `about.html`, footer |
| lang, one h1 per page, skip link | every page |
| Visible focus, reduced motion, contrast | `css/style.css` |
| aria-expanded menu, validation, aria-live status | `js/script.js`, `contact.html` |
| Unique title and meta description | every page `<head>` |
| Responsive, mobile-first, Grid and Flexbox | `css/style.css` |

---

# Advanced CSS3 upgrade

## What changed
- `css/style.css`: rewritten with design tokens and a dark theme. HTML content is unchanged except for the new theme button, a small head script and a "Skills at a glance" section on the home page.
- `js/script.js`: added the theme toggle and menu closing after a link is chosen. The form code is unchanged.

## Advanced CSS3 features
- CSS custom properties for colors, fonts, spacing, radius, shadows, borders and layout widths.
- Light and dark themes: `:root[data-theme="dark"]` only redefines variables. The theme follows the system setting until the user picks one, then it is saved in `localStorage`.
- `clamp()` for type and padding, `min()` for widths, `minmax()` with `repeat(auto-fit, ...)` for card grids.
- CSS Grid: hero, card grids, two-column layouts. Flexbox: header, nav, buttons, tags.
- Selectors: `:is()`, `:where()`, `:focus-visible`, `:not(:empty)`, attribute selectors such as `[aria-pressed]`.
- Mobile-first breakpoints at 30em (480px), 48em (768px), 64em (1024px) and 90em.
- One page-load animation on the hero, transitions on buttons, cards and fields, and `prefers-reduced-motion` support.

## Run with Live Server
Open the `personal-portfolio` folder in VS Code, right-click `index.html`, choose "Open with Live Server". Test with DevTools (F12, then the device toolbar) at 320px, 768px and 1280px.

## Verification checklist
- [ ] Theme button switches themes, and the choice survives a refresh.
- [ ] Menu opens with Enter or Space, closes with Escape and after choosing a link.
- [ ] No horizontal scrollbar at 320px.
- [ ] Focus ring visible in both themes.
- [ ] Contact form errors readable in both themes.
- [ ] Project and skill grids reflow from 1 to 2 to 3 or more columns.

## Upload to your existing GitHub repository
1. Copy the updated files over your existing project folder.
2. In the terminal, inside the folder: `git status` to see the changes.
3. `git add .`
4. `git commit -m "Add advanced CSS3 responsive layout and dark mode"`
5. `git push`
6. Open the repository on GitHub and confirm the new commit appears. Submit the repository link.

# Davidson Siga, portfolio

Source for [sigadavid96.github.io](https://sigadavid96.github.io/), the portfolio of Davidson Siga, Senior Data Scientist at Humana building agentic LLM systems in production.

The site is designed as a lecture-hall chalkboard: a slate board, Computer Modern type (the LaTeX typeface), and each company or university name rubbed in its brand color.

## Run it locally

Requires Node.js 18 or newer.

```bash
git clone https://github.com/sigadavid96/sigadavid96.github.io.git
cd sigadavid96.github.io
npm install
npm run dev        # http://localhost:4321
```

`npm run build` writes the static site to `dist/`, and `npm run preview` serves that build.

## Edit the content

All text lives in `src/config.ts`:

| Key | What it controls |
|---|---|
| `mainResults` | The four headline results at the top of the page |
| `abstract`, `business` | The Abstract section |
| `experience` | Work: each role with its projects, key skills, bullets and result line |
| `honors` | Honors and awards |
| `research` | AI Projects |
| `certificate`, `education` | Education, including coursework, instructors and TA roles |
| `toolbox`, `wheel` | The Notation table, and the logo wheel behind it |
| `orgs` | Brand colors and logos for every company and university |

Employer work is described by AI technique and business area only. Don't name internal use cases, data types or clients.

## How it's built

- **[Astro 5](https://astro.build/)**, one static page. The styling is hand-written CSS in `src/styles/global.css` and in each component.
- **Fonts:** [CM Unicode](https://cm-unicode.sourceforge.io/) (Computer Modern), subset and self-hosted in `public/fonts/`. A subset of [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math) supplies the math symbols (→ ≈ ∞ θ).
- **Chalk effects:** SVG filters (`#chalk`, `#chalk-soft`, `#chalk-line`) defined in `src/pages/index.astro`.
- **Logos:** recoloured chalk-white versions of each company's own mark, in `public/logos/`. The tool logos on the wheel behind the Notation table come from [Simple Icons](https://simpleicons.org) (CC0), in `public/logos/tools/`.
- **Interactions:** a small inline script handles the λ toggle, the section tracker in the bottom tray, and drawing and erasing chalk.

```
src/
├── components/   Hero, Definition, Abstract, Experience, Honors, Projects, Education, Footer, Tray, Org, Brace
├── pages/        index.astro (page shell, SVG filters, script)
├── styles/       global.css (tokens, board, smears, tray)
└── config.ts     all content
public/
├── fonts/        CM Unicode and Latin Modern Math subsets (woff2)
└── logos/        company marks; tools/ holds the wheel icons
PRODUCT.md        who the site is for, and its content rules
DESIGN.md         the visual system: colors, type, components
```

## Deployment

Every push to `main` builds and deploys the site through GitHub Actions (`.github/workflows/deploy.yml`). It's usually live within a minute.

## Credits and license

- Site code: [MIT](LICENSE).
- CM Unicode: SIL Open Font License. Latin Modern Math: GUST Font License.
- Company and university names and logos are trademarks of their owners. They appear here only to identify where Davidson worked and studied.

Contact: [sigadavid96@gmail.com](mailto:sigadavid96@gmail.com) · [LinkedIn](https://www.linkedin.com/in/davidsonsiga) · [GitHub](https://github.com/sigadavid96)

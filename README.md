# WhataHotel! proposal site

Luxury travel proposals as typed data (`src/data/promo-N.ts`) + one React app. Deploy on Netlify.

### Social / Open Graph previews

Crawlers often **do not run JavaScript**, so they only see the first HTML document. After each `npm run build`, **`scripts/generate-promo-html.ts`** writes `dist/promo/<id>/index.html` per entry in `promos.ts`, with `og:image` / `twitter:image` set to the **hero (or thumbnail)** URL — not the logo in the root `index.html`.

Netlify sets **`URL`** during build; the script uses it for `og:url` / canonical links. Local builds fall back to `http://localhost:8888` with a console warning.

---

## Netlify Agents

**Project context:** paste the full text of [`docs/netlify-agent-project-context.txt`](docs/netlify-agent-project-context.txt) into Netlify **Site configuration → Agent runs → Project context** (character limit ~3000). It includes **copy conventions** (Exclusive Perks, Rate Comparisons, `gift` titles) so agents do not reintroduce removed headings. The same block is embedded in [`docs/whatahotel-design-ssot.md`](docs/whatahotel-design-ssot.md) under *Netlify Project Context* — keep file and SSOT in sync when rules change.

**Cursor / other AI:** see root [`AGENTS.md`](AGENTS.md) and [`.cursor/rules/whatahotel-proposal-copy.mdc`](.cursor/rules/whatahotel-proposal-copy.mdc).

Create a Netlify agent from the CLI with a prompt and target branch (see [`netlify agents:create`](https://cli.netlify.com/commands/agents/)):

```bash
netlify agents:create -p "Create a new promo and follow docs/whatahotel-design-ssot.md." --branch main
```

**Branch policy for this repo:** production deploys track **`main`**. Have the agent work on **`main`** unless you intentionally use a short-lived branch:

- **Directly on `main`:** `--branch main` so the agent’s commits land on the default branch Netlify (and CI) expect.
- **Feature branch first:** use e.g. `--branch promo-12-updates`, then open a PR **into `main`** and merge before relying on the production site.

Add the booking URL, promo id, client, or other details in the same prompt (or in a follow-up) so the agent has what the SSOT extraction workflow expects.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

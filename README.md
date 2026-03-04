# Redocmi

A compact blog application (Angular front-end), aligned with Redocmi. Design-first; backend can be added later.

## What’s included

- **Layout**: Header (logo + nav), main content, footer. Branding: Redocmi.
- **Home**: Hero (“Hello, Redocmi”), short about, recent thoughts, experiments teaser.
- **Thoughts**: List of posts and detail page (mock data).
- **Experiments**: List of experiments (mock data).
- **Work**: Placeholder page for projects.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Output: `dist/redocmi/`.

## Next steps (backend)

- Replace `ThoughtService` / `ExperimentService` with HTTP calls to your API.
- Add routes and endpoints for thoughts and experiments.
- Optionally add auth and CMS or markdown-based content.

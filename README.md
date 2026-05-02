# Superior Roofing

Production-ready static marketing site for Texas Superior Roofing.

## Requirements

- Node.js 22+
- PowerShell 5+ on Windows for local image processing

## Quick start

1. Copy the exported project photos into `assets/source_photos/raw/`.
2. Process the gallery assets:

```powershell
npm run process-images
```

3. Install dependencies and start local dev:

```powershell
npm install
npm run dev
```

4. Create a production build:

```powershell
npm run build
npm run preview
```

## Environment

- `VITE_SITE_URL`
  - Final public origin for canonical tags, sitemap generation, and local-business schema.
  - Defaults to `https://superior-roofing.invalid` for local build safety.
- `VITE_CONTACT_ENDPOINT`
  - Optional HTTPS endpoint for contact form submissions.
  - If omitted, the form stays visible but falls back to a truthful “call us” state.

## Repo notes

- The live site is bootstrapped from a local HTML prototype and a local photo export.
- Only verified public business facts are published in the site copy.
- Unverified details are tracked in `MISSING_INFO.md` and `CONTENT_GAPS.md`.

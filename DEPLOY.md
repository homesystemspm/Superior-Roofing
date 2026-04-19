# Deploy

## Environment

- `VITE_SITE_URL`
  - Required before final production launch.
  - Example: `https://www.your-final-domain.com`
- `VITE_CONTACT_ENDPOINT`
  - Optional but required for live form submissions.
  - Must accept JSON `POST` requests over HTTPS.

## Local workflow

1. Copy the raw photo export into `assets/source_photos/raw/`.
2. Run `npm run process-images`.
3. Run `npm install`.
4. Run `npm run build`.
5. Run `npm run preview` and verify the built output locally.

## Production checklist

1. Set `VITE_SITE_URL` to the final public origin.
2. Set `VITE_CONTACT_ENDPOINT` if live webform submission is desired.
3. Run `npm run build`.
4. Upload the contents of `dist/` to the hosting platform.
5. Confirm:
   - canonical tags resolve to the live domain
   - `robots.txt` and `sitemap.xml` are present
   - contact form behavior matches the configured endpoint state
   - no broken links or image references remain

## Hosting notes

- This is a static Vite site and can be deployed to any static host that serves the `dist/` folder.
- If the site is hosted behind a custom domain, DNS and SSL remain external configuration steps.
- If no form endpoint is configured, the site still works and truthfully falls back to phone-first contact.

## External handoff items

- Final public domain and DNS cutover
- Live contact endpoint credentials or provider configuration
- Any paid email, CRM, or marketing integrations
- Final legal review of privacy/terms copy if desired

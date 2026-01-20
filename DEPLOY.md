# Deployment

## Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/02-repos-browser)

Or manually:

```bash
npm install -g vercel
vercel
```

## Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mk-knight23/02-repos-browser)

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

## Manual

```bash
npm run build
# Upload dist/ folder to any static host
```

## Environment Variables

No environment variables required.

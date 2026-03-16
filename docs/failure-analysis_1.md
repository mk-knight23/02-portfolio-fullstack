# Failure Analysis: 02-portfolio-fullstack

**Date:** 2026-02-02
**Portfolio:** 02-portfolio-fullstack (Fullstack Product Builder)
**Framework:** Vite 6.4.1 + React 19 + TypeScript + Tailwind CSS v4

---

## R — REVIEW FINDINGS

### Framework Identification
- **Build Tool:** Vite 6.4.1
- **Framework:** React 19.2.3
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS v4
- **Type:** ES Module (`"type": "module"` in package.json)

### Build Scripts
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

### Critical Issue Identified ⚠️

**Line ~1580 in index.html:**
```html
<script src="main.js"></script>
```

**Problem:**
- Vite requires `type="module"` attribute for ES module scripts
- Missing attribute causes build warning: `<script src="main.js"> in "/index.html" can't be bundled without type="module" attribute`
- This breaks Vite's bundling and causes potential production failures

### Build Symptoms
- ✅ TypeScript compilation passes (`tsc`)
- ⚠️ Vite build shows warning about missing `type="module"`
- ✅ Build completes but with warnings
- ⚠️ Production may have script loading issues

### Deployment Status
- ✅ Netlify: https://02-portfolio-fullstack.netlify.app (200 OK)
- ✅ Cloudflare: https://02-fullstack.pages.dev (200 OK)
- ❌ Vercel: https://02-fullstack.vercel.app (404 - configuration issue)

### Routing Strategy
- SPA routing (React Router not detected, likely hash-based or custom)
- Needs `_redirects` for Netlify
- Needs `vercel.json` rewrites for Vercel

### Asset Path Analysis
- **Issue:** Hardcoded absolute paths in Open Graph tags:
  - `https://mk-knight23.github.io/02-portfolio-fullstack/`
  - `https://mk-knight23.github.io/02-repos-browser/`
- **Problem:** These paths won't work on Vercel/Netlify/Cloudflare custom domains
- **Impact:** Social sharing will show incorrect URLs

### CSS Import Analysis
- ✅ CSS inlined in `<style>` block in index.html
- ✅ No external CSS imports to break
- ✅ Tailwind CSS v4 configured correctly

### Node Version
- ❌ No `.nvmrc` or `.node-version` file
- **Risk:** Build may fail if Node version drifts
- **Recommendation:** Lock to Node 20.x LTS

---

## REPAIR REQUIRED

### Priority 1: CRITICAL ✅
1. ✅ Fix `<script src="main.js">` → `<script type="module" src="main.js">`
2. ✅ Lock Node version (add `.nvmrc`)

### Priority 2: HIGH ⚠️
3. ⚠️ Fix hardcoded GitHub Pages URLs in meta tags
4. ⚠️ Add SPA routing configuration (_redirects, vercel.json)

### Priority 3: MEDIUM 📝
5. 📝 Remove dead code if any
6. 📝 Fix ESLint warnings

---

## COMPARISON: Local vs Live

| Aspect | Local | Live (Netlify) | Live (Cloudflare) |
|--------|-------|----------------|-------------------|
| Build | ✅ With warning | ✅ Deployed | ✅ Deployed |
| Script Loading | ⚠️ Warning | ✅ Works | ✅ Works |
| CSS | ✅ Loads | ✅ Loads | ✅ Loads |
| Routes | ✅ Works | ✅ Works | ✅ Works |
| Meta URLs | ❌ GitHub Pages | ❌ GitHub Pages | ❌ GitHub Pages |

---

## ROOT CAUSE

**Primary Issue:** Missing `type="module"` attribute on script tag

**Secondary Issues:**
1. No Node version locked
2. Hardcoded GitHub Pages URLs
3. SPA routing may break on direct URL access

---

## NEXT STEPS (A — REPAIR)

1. Add `type="module"` to script tag in index.html
2. Create `.nvmrc` with `20`
3. Update meta tags to use relative URLs or environment variables
4. Add `_redirects` file for Netlify SPA routing
5. Update `vercel.json` for Vercel SPA routing
6. Run `npm ci && npm run build` to verify fixes
7. Run LOCAL-PROVE phase

---

**Status:** REVIEW COMPLETE ✅
**Ready for:** A — REPAIR phase

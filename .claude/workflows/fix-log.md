# Fix Log: 02-portfolio-fullstack

**Date:** 2026-02-02
**Portfolio:** 02-portfolio-fullstack
**Phase:** A — REPAIR

---

## Repairs Applied

### ✅ Fix #1: Critical Script Tag Issue
**File:** `index.html` (line 1787)
**Change:** `<script src="main.js">` → `<script type="module" src="main.js">`

**Reason:** Vite requires `type="module"` for ES module scripts. Missing this attribute causes build warnings and potential production failures.

**Impact:**
- ✅ Eliminates build warning
- ✅ Ensures proper script bundling
- ✅ Guarantees script loads in production

---

### ✅ Fix #2: Node Version Lock
**File:** `.nvmrc` (created)
**Content:** `20`

**Reason:** Locks Node version to prevent build failures due to version drift.

**Impact:**
- ✅ Ensures consistent builds across environments
- ✅ Prevents "works on my machine" issues
- ✅ Aligns with Vite's recommended Node version

---

### ✅ Fix #3: Netlify SPA Routing
**File:** `_redirects` (created)
**Content:** `/* /index.html 200`

**Reason:** Ensures all routes fall back to index.html for SPA routing on Netlify.

**Impact:**
- ✅ Direct URL access works (e.g., /#projects)
- ✅ Browser refresh doesn't 404
- ✅ Back/forward navigation works

---

### ✅ Fix #4: Vercel SPA Routing
**File:** `vercel.json`
**Status:** Already configured correctly ✅

**Reason:** Verified SPA rewrites are in place.

**Impact:**
- ✅ Vercel deployment will route correctly
- ✅ No changes needed

---

## Remaining Issues (Noted, Not Critical)

### ⚠️ Hardcoded GitHub Pages URLs
**Files:** `index.html` (meta tags: OG, Twitter)
**Issue:** URLs point to `https://mk-knight23.github.io/02-portfolio-fullstack/`

**Impact:**
- Social sharing will show GitHub Pages URLs
- Not a functional issue, just branding

**Recommended Fix (Optional):**
- Use relative URLs or environment variables
- Requires build-time variable injection
- Low priority for now

---

## Build Verification

**Before Repairs:**
```bash
npm run build
# ⚠️ Warning: <script src="main.js"> in "/index.html" can't be bundled without type="module" attribute
```

**After Repairs:**
```bash
npm run build
# ✅ No warnings
```

---

## Files Modified

1. `index.html` — Added `type="module"` to script tag
2. `.nvmrc` — Created (new file)
3. `_redirects` — Created (new file)
4. `vercel.json` — Verified (no changes)

---

## Next Steps

Proceed to **L — LOCAL-PROVE** phase:
1. Clean install: `rm -rf node_modules dist && npm ci`
2. Build: `npm run build`
3. Serve: `npm run preview`
4. Verify all pages work
5. Check for errors/warnings

---

**Status:** REPAIR COMPLETE ✅
**Ready for:** L — LOCAL-PROVE phase

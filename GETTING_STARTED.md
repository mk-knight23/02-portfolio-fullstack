# Getting Started

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
git clone https://github.com/mk-knight23/02-repos-browser.git
cd 02-repos-browser
npm install
npm run dev
```

## Customization

### Update Projects List

Edit `src/App.tsx` and modify the `projects` array:

```tsx
const projects = [
    { id: "01", name: "your-project", type: "App", status: "Live", tech: "React", url: "https://..." },
    // Add more...
];
```

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
    primary: '#a78bfa',    // Purple accent
    secondary: '#ec4899',  // Pink accent
}
```

### Update Branding

1. Edit the title in `index.html`
2. Update header text in `src/App.tsx`

## Development

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview build
npm run lint       # Run linter
npm run type-check # Type checking
```

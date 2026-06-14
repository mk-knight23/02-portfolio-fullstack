// ───────────────────────────────────────────────────────────────
// CINEMATIC ASSET MANIFEST
// Central registry of every video / image slot used by the site.
// Drop your AI-generated files into /public/media/ using the exact
// file names below and they appear automatically. Until a file
// exists, an animated gradient fallback is shown — so the site
// always looks complete, even with no assets yet.
// ───────────────────────────────────────────────────────────────

export interface MediaSlot {
  /** Stable key referenced in components. */
  id: string;
  /** Human label shown in the media drop-in guide. */
  label: string;
  /** Path served from /public. Replace the file to swap the asset. */
  src: string;
  /** "video" | "image" */
  kind: "video" | "image";
}

const base = "/media";

export const videoSlots = {
  hero: {
    id: "hero",
    label: "Hero — full-screen background loop",
    src: `${base}/hero-bg.mp4`,
    kind: "video",
  },
  manifesto: {
    id: "manifesto",
    label: "Philosophy / About — section background loop",
    src: `${base}/manifesto-bg.mp4`,
    kind: "video",
  },
  showcase: {
    id: "showcase",
    label: "Projects / Work — section background loop",
    src: `${base}/showcase-bg.mp4`,
    kind: "video",
  },
  footer: {
    id: "footer",
    label: "Footer — full-screen background loop",
    src: `${base}/footer-bg.mp4`,
    kind: "video",
  },
} satisfies Record<string, MediaSlot>;

export const imageSlots = {
  poster: {
    id: "poster",
    label: "Hero poster (shown before video loads)",
    src: `${base}/hero-poster.jpg`,
    kind: "image",
  },
} satisfies Record<string, MediaSlot>;

export type VideoSlotId = keyof typeof videoSlots;

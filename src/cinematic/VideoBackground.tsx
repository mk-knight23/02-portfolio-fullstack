import { useState } from "react";
import type { MediaSlot } from "./assets";
import { imageSlots } from "./assets";

interface VideoBackgroundProps {
  slot: MediaSlot;
  /** CSS gradient overlay rendered above the video for legibility. */
  overlay?: string;
  /** Extra className for the wrapper. */
  className?: string;
  /** Show the animated gradient even when a video exists (debug). */
  forceFallback?: boolean;
}

const DEFAULT_OVERLAY =
  "linear-gradient(to bottom, rgba(8,8,14,0.55) 0%, rgba(8,8,14,0.35) 45%, rgba(8,8,14,0.78) 100%)";

/**
 * Full-bleed background video with a graceful animated-gradient
 * fallback. If the asset file is missing, `onError` swaps to the
 * fallback automatically so the layout never breaks.
 */
export function VideoBackground({
  slot,
  overlay = DEFAULT_OVERLAY,
  className = "",
  forceFallback = false,
}: VideoBackgroundProps) {
  const [failed, setFailed] = useState(forceFallback);

  return (
    <div
      className={`cine-bg ${className}`}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}
    >
      {!failed ? (
        <video
          src={slot.src}
          poster={imageSlots.poster.src}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setFailed(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      ) : (
        <div className="cine-bg-fallback" style={{ position: "absolute", inset: 0 }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: overlay }} />
    </div>
  );
}

import { Icon } from './Icon';

/**
 * Gray rectangle placeholder for images — indicates size and proportion.
 * Use where an image would go but we don't have assets.
 * Pass video={true} for video thumbnails to show a centered play icon.
 * Pass prompt for a description suitable as an AI image-generation prompt (Nanobanana, etc.).
 */
const ASPECT_CLASSES = {
  video: "aspect-video",       // 16:9 — hero, banner, wide
  square: "aspect-square",     // 1:1 — cards, thumbnails
  "4/3": "aspect-[4/3]",       // 4:3 — recipe cards
  "3/4": "aspect-[3/4]",       // 3:4 — portrait, profile
  "2/1": "aspect-[2/1]",       // 2:1 — landscape feature
};

export function ImagePlaceholder({ aspect = "video", className = "", fill = false, video = false, prompt = "" }) {
  const aspectClass = ASPECT_CLASSES[aspect] || "aspect-video";
  return (
    <div
      className={`bg-neutral-200 flex flex-col items-center justify-center text-neutral-500 shrink-0 overflow-hidden p-3 ${
        fill ? "w-full h-full min-w-0 min-h-0" : `w-full ${aspectClass}`
      } ${className}`}
      aria-hidden
    >
      {!fill ? (
        <>
          {video && (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/30 text-white mb-2 shrink-0">
              <Icon name="play" size={28} />
            </span>
          )}
          {prompt ? (
            <span className="text-[10px] leading-tight text-center line-clamp-4 max-h-full overflow-hidden px-1" style={{ fontFamily: "ui-monospace, monospace" }}>
              {prompt}
            </span>
          ) : !video ? (
            <span className="opacity-60">—</span>
          ) : null}
        </>
      ) : prompt ? (
        <span className="text-[9px] leading-tight text-center line-clamp-2 overflow-hidden px-1 w-full" style={{ fontFamily: "ui-monospace, monospace" }}>
          {prompt}
        </span>
      ) : null}
    </div>
  );
}

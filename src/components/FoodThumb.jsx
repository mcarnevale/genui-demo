import { FOOD_IMAGES } from '../data';

export function FoodThumb({ foodKey, name, gradient, emoji, size = "md" }) {
  const px = size === "sm" ? 40 : size === "lg" ? 64 : 48;
  const photo = foodKey ? FOOD_IMAGES[foodKey] : null;
  if (photo) {
    return (
      <div style={{ width: px, height: px, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
        <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  const dims = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";
  return (
    <div className={`${dims} rounded-lg shrink-0 flex items-center justify-center`} style={{ background: gradient }}>
      <span className={textSize}>{emoji}</span>
    </div>
  );
}

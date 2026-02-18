import { FOOD_IMAGES } from '../data';

export function FoodThumb({ foodKey, name, gradient, emoji, size = "md" }) {
  const px = size === "sm" ? 40 : size === "lg" ? 64 : 48;
  const photo = foodKey ? FOOD_IMAGES[foodKey] : null;
  return (
    <div style={{ width: px, height: px, borderRadius: 8, overflow: "hidden", flexShrink: 0 }} className="bg-neutral-200">
      {photo ? (
        <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <div className="w-full h-full bg-neutral-200" aria-hidden />
      )}
    </div>
  );
}

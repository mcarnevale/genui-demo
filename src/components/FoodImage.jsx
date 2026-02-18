import { FOOD_IMAGES } from '../data';

/** Renders food as an image when available, otherwise gradient + emoji fallback */
export function FoodImage({ foodKey, name, gradient, emoji, className = "" }) {
  const src = foodKey ? FOOD_IMAGES[foodKey] : null;
  return (
    <div className={`overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={name || foodKey} className="w-full h-full object-cover block" />
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ background: gradient }}>
          <span className="text-2xl">{emoji}</span>
        </div>
      )}
    </div>
  );
}

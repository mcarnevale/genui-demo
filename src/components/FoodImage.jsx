import { FOOD_IMAGES } from '../data';
import { ImagePlaceholder } from './ImagePlaceholder';

/** Renders food as an image when available, otherwise gray placeholder (indicates image dimensions) */
export function FoodImage({ foodKey, name, gradient, emoji, className = "" }) {
  const src = foodKey ? FOOD_IMAGES[foodKey] : null;
  return (
    <div className={`overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={name || foodKey} className="w-full h-full object-cover block" />
      ) : (
        <ImagePlaceholder fill className="w-full h-full rounded-none" prompt={`A picture of ${name || foodKey || 'the dish'}`} />
      )}
    </div>
  );
}

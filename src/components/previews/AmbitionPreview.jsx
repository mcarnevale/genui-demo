import { lerp3, clamp } from '../../utils/color';
import { RecipeRow } from '../RecipeRow';

export function AmbitionPreview({ value }) {
  const allRecipes = ["hotdog","burger","queso","wings","chicken","salmon","ribs","pork","brisket","wholehog"];
  const startIdx = Math.floor(lerp3(value, 0, 2, 5));
  const count = lerp3(value, 3, 4, 5);
  const visible = allRecipes.slice(startIdx, startIdx + Math.ceil(count));
  const highlightIdx = Math.floor(count / 2);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-gray-500">
          {value < 0.33 ? "Quick Cooks" : value < 0.66 ? "Weekend Projects" : "Serious Smoke"}
        </span>
        <span className="text-[10px] text-gray-400">{visible.length} recipes</span>
      </div>
      {visible.map((food, i) => {
        const op = i < count ? 1 : clamp((count - i) * 3, 0, 1);
        return <div key={food} style={{ opacity: op }}><RecipeRow food={food} highlight={i === highlightIdx} /></div>;
      })}
    </div>
  );
}

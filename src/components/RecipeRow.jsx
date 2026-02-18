import { FOOD } from '../data';
import { FoodThumb } from './FoodThumb';

export function RecipeRow({ food, highlight, compact }) {
  const f = FOOD[food];
  return (
    <div className="flex items-center gap-3 rounded-lg p-2.5 transition-all duration-150"
      style={{ backgroundColor: highlight ? "#FFF8F0" : "white", border: highlight ? "1px solid #FFE0B2" : "1px solid #F0F0F0" }}>
      <FoodThumb foodKey={food} emoji={f.emoji} gradient={f.gradient} size={compact ? "sm" : "md"} />
      <div className="flex-1 min-w-0">
        <div className={`font-medium text-gray-800 truncate ${compact ? "text-xs" : "text-sm"}`}>{f.name}</div>
        <div className="text-xs text-gray-400">{f.time}</div>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0" style={{ backgroundColor: f.tagColor+"18", color: f.tagColor }}>{f.tag}</span>
    </div>
  );
}

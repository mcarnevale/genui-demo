import { lerp3, clamp } from '../../utils/color';
import { FOOD } from '../../data';
import { FoodThumb } from '../FoodThumb';

const EXPLORATION_ITEMS = [
  { food: "ribs",      sub: "Made 12 times",                    type: "fav" },
  { food: "chicken",   sub: "Made 8 times",                     type: "fav" },
  { food: "salmon",    sub: "Similar to your favorites",        type: "suggest" },
  { food: "macncheese",sub: "Crowd-pleaser for game day",       type: "suggest" },
  { food: "thaifish",  sub: "Trending this week",               type: "discover" },
  { food: "gochujang", sub: "Korean x Southern fusion",         type: "discover" },
  { food: "mole",      sub: "From Oaxacan tradition",           type: "discover" },
  { food: "asado",     sub: "Argentine wood-fire technique",    type: "discover" },
];

export function ExplorationPreview({ value }) {
  const headerText = value < 0.33 ? "Your Favorites" : value < 0.66 ? "Suggested for You" : "New Discoveries";
  const sliceEnd = lerp3(value, 2.2, 4.5, 8);

  return (
    <div>
      <div className="text-sm font-semibold text-gray-700 mb-2">{headerText}</div>
      <div className="space-y-1.5">
        {EXPLORATION_ITEMS.slice(0, Math.ceil(sliceEnd)).map((item, i) => {
          const op = i < sliceEnd ? 1 : clamp((sliceEnd - i) * 3, 0, 1);
          const isNew = item.type === "discover" || item.type === "suggest";
          const f = FOOD[item.food];
          return (
            <div key={item.food} className="flex items-center gap-2.5 p-2 rounded-lg" style={{
              opacity: op, backgroundColor: isNew && value > 0.3 ? "#FFF8E1" : "#F8F8F8",
              border: isNew && value > 0.3 ? "1px solid #FFE082" : "1px solid #F0F0F0",
            }}>
              <FoodThumb foodKey={item.food} emoji={f.emoji} gradient={f.gradient} size="sm" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-800 truncate">{f.name}</div>
                <div className="text-[10px] text-gray-400">{item.sub}</div>
              </div>
              {isNew && value > 0.4 && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0" style={{
                  backgroundColor: item.type === "suggest" ? "#E3F2FD" : "#E8F5E9",
                  color: item.type === "suggest" ? "#1565C0" : "#2E7D32",
                }}>{item.type === "suggest" ? "Try it" : "New"}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

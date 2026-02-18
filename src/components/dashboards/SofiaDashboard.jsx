import { FoodThumb } from '../FoodThumb';
import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';
import { BROWSE, SEASONAL_NOTES } from '../../data/recipeBrowse';

const TRENDING = ["beetroot", "cauliflwr", "gochujang"];
const SHARED = ["mole", "pizza", "peach"];
const SEASONAL = ["macncheese", "burger", "queso"];

export function SofiaDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick, noNav }) {
  const t = "#2D3B2D";
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="flex-1 p-5 pb-20 max-w-lg mx-auto overflow-auto">
        {/* Trending This Week — masonry-style */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: t }}>Trending This Week</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {TRENDING.slice(0, 3).map((key, i) => {
              const f = FOOD[key];
              if (!f) return null;
              const wide = i === 0;
              return (
                <button key={`${key}-${i}`} type="button" onClick={() => onRecipeClick?.(key)} className={`shrink-0 rounded-2xl overflow-hidden shadow-sm text-left ${wide ? "w-48" : "w-36"}`} style={{ border: "1px solid #E8E6E0" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className={`w-full ${wide ? "aspect-video" : "aspect-square"}`} />
                  <div className="p-3 bg-white">
                    <div className="font-medium text-sm" style={{ color: t }}>{f.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">{BROWSE[key]?.saves || "1.2K"} saves</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium" style={{ backgroundColor: "rgba(168,192,151,0.3)", color: t }}>Vegan</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Most Shared on Traeger */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: t }}>Most Shared on Traeger</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {SHARED.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="shrink-0 w-36 rounded-xl overflow-hidden text-left" style={{ border: "1px solid #E8E6E0" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-[4/3] w-full" />
                  <div className="p-2 bg-white">
                    <div className="text-xs font-medium truncate" style={{ color: t }}>{f.name}</div>
                    <div className="text-[10px] text-gray-400">{BROWSE[key]?.shares || "892"} shares</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seasonal Right Now */}
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: t }}>Seasonal Right Now</h3>
          <div className="flex gap-3">
            {SEASONAL.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="flex-1 flex gap-2 p-3 rounded-xl text-left" style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}>
                  <FoodThumb foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} size="sm" />
                  <div className="min-w-0">
                    <div className="text-xs font-medium truncate" style={{ color: t }}>{f.name}</div>
                    <div className="text-[10px] text-gray-400">{SEASONAL_NOTES[key] || "Peak season"}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {!noNav && (
        <nav className="sticky bottom-0 left-0 right-0 z-10 flex justify-around py-4 border-t bg-white w-full">
          {[
            { icon: "home", label: "Home" },
            { icon: "discover", label: "Discover" },
            { icon: "grill", label: "Grill" },
            { icon: "help", label: "Help" },
            { icon: "planner", label: "Plan" },
            { icon: "camera", label: "My Cooks" },
            { icon: "recipes", label: "Recipes" },
          ].map(({ icon, label }) => (
            <button key={label} onClick={label === "Recipes" ? onRecipesTabClick : label === "Grill" ? onGrillTabClick : label === "Help" ? onHelpTabClick : label === "Plan" ? onPlannerTabClick : label === "Discover" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1 text-sm font-light" style={{ color: label === "Discover" ? a : "#888" }}>
              <Icon name={icon} size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

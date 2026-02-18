import { FoodThumb } from '../FoodThumb';
import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const FLAVOR_PINS = ["Korean", "Argentine", "Southern", "Japanese"];
const BOOKMARKS = ["gochujang", "mole", "thaifish"];

export function CaseyDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick, noNav }) {
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5EDE8" }}>
      <div className="flex-1 p-5 pb-20 max-w-lg mx-auto overflow-auto">
        {/* Flavor Map — stylized world pins */}
        <div className="mb-6 p-4 rounded-2xl" style={{ backgroundColor: "white", border: `2px solid ${a}30`, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: "#3A2A20" }}>Flavor Map</h3>
          <div className="flex flex-wrap gap-2">
            {FLAVOR_PINS.map((cuisine, i) => (
              <span key={cuisine} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: i < 2 ? a + "25" : "#E8E0D8", color: i < 2 ? a : "#666" }}>
                {cuisine} {i < 2 ? "✓" : ""}
              </span>
            ))}
          </div>
          <p className="text-xs mt-2 opacity-70" style={{ color: "#3A2A20" }}>Tap a cuisine to explore recipes</p>
        </div>

        {/* This Week's Inspiration */}
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-3" style={{ color: "#3A2A20" }}>This Week&apos;s Inspiration</h3>
          <button type="button" onClick={() => onRecipeClick?.("asado")} className="w-full rounded-2xl overflow-hidden shadow-md text-left" style={{ border: `2px solid ${a}30` }}>
            <FoodImage foodKey="asado" name={FOOD.asado?.name} gradient={FOOD.asado?.gradient || "linear-gradient(135deg,#8B4020,#5C2A10)"} emoji="🔥" className="aspect-video w-full" />
            <div className="p-5" style={{ backgroundColor: "white" }}>
              <div className="font-bold text-lg" style={{ color: "#3A2A20" }}>Argentine Asado Platter</div>
              <p className="text-sm mt-2 opacity-80" style={{ color: "#3A2A20" }}>In Argentina, asado isn&apos;t just grilling — it&apos;s a daylong gathering. Here&apos;s how to bring that to your backyard.</p>
            </div>
          </button>
        </div>

        {/* Your Bookmarks */}
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-3" style={{ color: "#3A2A20" }}>Your Bookmarks</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {BOOKMARKS.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="shrink-0 w-32 rounded-xl overflow-hidden text-left" style={{ backgroundColor: "white", border: "1px solid #E0D8D0" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-square w-full" />
                  <div className="p-2 text-center">
                    <div className="text-xs font-medium truncate" style={{ color: "#3A2A20" }}>{f.name}</div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: a + "20", color: a }}>{key === "gochujang" || key === "mole" ? "Fusion" : "World"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seasonal + Local */}
        <div>
          <h3 className="text-sm font-bold mb-3" style={{ color: "#3A2A20" }}>Seasonal + Local</h3>
          <button type="button" onClick={() => onRecipeClick?.("cauliflwr")} className="w-full p-4 rounded-xl text-left hover:opacity-95 transition-opacity" style={{ backgroundColor: "white", border: "1px solid #E0D8D0" }}>
            <p className="text-sm" style={{ color: "#3A2A20" }}>
              <strong>Smoked cauliflower + gochujang glaze</strong> — Bridges two of your favorite flavor profiles. Peak season for both.
            </p>
          </button>
        </div>
      </div>

      {!noNav && (
        <nav className="sticky bottom-0 left-0 right-0 z-10 flex justify-around py-4 border-t bg-white w-full">
          {[
            { icon: "discover", label: "Explore" },
            { icon: "cook", label: "Cook" },
            { icon: "recipes", label: "Recipes" },
            { icon: "help", label: "Help" },
            { icon: "planner", label: "Plan" },
          ].map(({ icon, label }) => (
            <button key={label} onClick={label === "Cook" ? onGrillTabClick : label === "Recipes" ? onRecipesTabClick : label === "Help" ? onHelpTabClick : label === "Plan" ? onPlannerTabClick : label === "Explore" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1 text-sm font-medium" style={{ color: label === "Explore" ? a : "#888" }}>
              <Icon name={icon} size={22} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

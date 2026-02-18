import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const FAVORITES = ["ribs", "peach", "macncheese", "chicken"];
const SUGGESTION = "wings";

export function TomLindaDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick, noNav }) {
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFFBF5" }}>
      <div className="flex-1 p-6 pb-20 max-w-lg mx-auto overflow-auto">
        {/* This Weekend — planning focus */}
        <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: persona.color, border: `2px solid ${a}40` }}>
          <h3 className="text-lg font-bold mb-2" style={{ color: t }}>This Weekend</h3>
          <p className="text-base mb-3 opacity-90" style={{ color: t }}>Sunday Family Dinner</p>
          <div className="flex gap-4 mb-3">
            <span className="text-sm font-medium" style={{ color: t }}>6 guests</span>
            <span className="text-sm opacity-75" style={{ color: t }}>Menu: 2 of 3 planned</span>
          </div>
          <button className="px-4 py-2 rounded-xl font-semibold text-sm" style={{ backgroundColor: a, color: "white" }}>View Timeline</button>
        </div>

        {/* Your Favorites — large cards, 4 across */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4" style={{ color: "#5C4A3A" }}>Your Favorites</h3>
          <div className="grid grid-cols-2 gap-4">
            {FAVORITES.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-2xl overflow-hidden shadow-md text-left w-full" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-square w-full" />
                  <div className="p-4">
                    <div className="font-bold text-base" style={{ color: "#5C4A3A" }}>{f.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{f.time} · Serves 6</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Weather */}
        <div className="mb-8 p-4 rounded-xl" style={{ backgroundColor: "#F5EDE4" }}>
          <p className="text-sm" style={{ color: "#5C4A3A" }}>Sunny, 74°F — Perfect for grilling this weekend.</p>
        </div>

        {/* Something New to Try */}
        <div>
          <h3 className="text-lg font-bold mb-3" style={{ color: "#5C4A3A" }}>Something New to Try</h3>
          {(() => {
            const f = FOOD[SUGGESTION];
            if (!f) return null;
            return (
              <button type="button" onClick={() => onRecipeClick?.(SUGGESTION)} className="w-full rounded-2xl overflow-hidden shadow-lg text-left" style={{ border: "2px solid rgba(196,154,108,0.3)" }}>
                <FoodImage foodKey={SUGGESTION} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-video w-full" />
                <div className="p-5 bg-white">
                  <div className="font-bold text-lg" style={{ color: "#5C4A3A" }}>{f.name}</div>
                  <p className="text-sm text-gray-600 mt-1">Your neighbors the Parkers just tried these. Might be a hit at your next cookout.</p>
                </div>
              </button>
            );
          })()}
        </div>
      </div>

      {!noNav && (
        <nav className="sticky bottom-0 left-0 right-0 z-10 flex justify-around py-5 border-t bg-white w-full">
          {[
            { icon: "home", label: "Home" },
            { icon: "grill", label: "Grill" },
            { icon: "recipes", label: "Recipes" },
            { icon: "help", label: "Help" },
            { icon: "planner", label: "Planner" },
            { icon: "content", label: "Content" },
          ].map(({ icon, label }) => (
            <button key={label} onClick={label === "Recipes" ? onRecipesTabClick : label === "Grill" ? onGrillTabClick : label === "Help" ? onHelpTabClick : label === "Planner" ? onPlannerTabClick : label === "Content" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1.5 text-base font-medium" style={{ color: a }}>
              <Icon name={icon} size={26} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

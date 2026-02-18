import { FoodThumb } from '../FoodThumb';
import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const INSPIRING = ["salmon", "mole", "gochujang"];
const SUGGESTION = "thaifish";

export function PriyaDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick, noNav }) {
  const t = "#5C3A1E";
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFF8F0" }}>
      <div className="flex-1 p-5 pb-20 max-w-lg mx-auto overflow-auto">
        {/* What's Inspiring Cooks This Week — carousel */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: t }}>What&apos;s Inspiring Cooks This Week</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {INSPIRING.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="shrink-0 w-40 rounded-xl overflow-hidden shadow-md text-left" style={{ border: "1px solid rgba(232,151,107,0.3)" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-[4/3] w-full" />
                  <div className="p-3 bg-white">
                    <div className="font-semibold text-sm" style={{ color: t }}>{f.name}</div>
                    <div className="text-xs text-amber-700 mt-0.5">{f.tag}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Your Active Learning */}
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "#F5EDE4", border: "1px solid rgba(232,151,107,0.2)" }}>
          <h3 className="text-sm font-semibold mb-2" style={{ color: t }}>Your Active Learning</h3>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "60%", backgroundColor: a }} />
            </div>
            <span className="text-sm font-medium" style={{ color: t }}>60%</span>
          </div>
          <p className="text-sm mt-2 opacity-80" style={{ color: t }}>Mastering Smoke Profiles</p>
        </div>

        {/* Continue Where You Left Off */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: t }}>Continue Where You Left Off</h3>
          {(() => {
            const f = FOOD[SUGGESTION];
            if (!f) return null;
            return (
              <button type="button" onClick={() => onRecipeClick?.(SUGGESTION)} className="w-full flex gap-4 p-4 rounded-xl text-left" style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <FoodThumb foodKey={SUGGESTION} name={f.name} gradient={f.gradient} emoji={f.emoji} size="lg" />
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: t }}>{f.name}</div>
                  <div className="text-sm text-amber-700 mt-0.5">{f.tag} · {f.time}</div>
                  <span className="mt-2 text-sm font-medium" style={{ color: a }}>Resume →</span>
                </div>
              </button>
            );
          })()}
        </div>

        {/* Smart suggestion */}
        <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(232,151,107,0.15)", border: "1px dashed rgba(232,151,107,0.4)" }}>
          <p className="text-sm" style={{ color: t }}>
            <strong>In season now:</strong> Persimmons pair beautifully with smoked pork tenderloin — or try smoked persimmon with burrata for a pescatarian twist.
          </p>
        </div>
      </div>

      {!noNav && (
        <nav className="sticky bottom-0 left-0 right-0 z-10 flex justify-around py-4 border-t bg-white w-full">
          {[
            { icon: "home", label: "Home" },
            { icon: "discover", label: "Discover" },
            { icon: "grill", label: "Grill" },
            { icon: "recipes", label: "Recipes" },
            { icon: "help", label: "Help" },
            { icon: "planner", label: "Plan" },
          ].map(({ icon, label }) => (
            <button key={label} onClick={label === "Recipes" ? onRecipesTabClick : label === "Grill" ? onGrillTabClick : label === "Help" ? onHelpTabClick : label === "Plan" ? onPlannerTabClick : label === "Discover" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1 text-sm" style={{ color: label === "Discover" ? a : "#888" }}>
              <Icon name={icon} size={22} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

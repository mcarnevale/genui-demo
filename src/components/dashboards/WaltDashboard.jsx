import { FoodThumb } from '../FoodThumb';
import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const RECIPES = ["brisket", "ribs", "pork", "chicken"];
const SUGGESTION = "mole";

export function WaltDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1614" }}>
      {/* Grill status / Good day — minimal, large */}
      <div className="p-8 text-center">
        <p className="text-xl opacity-80 mb-1" style={{ color: t }}>Good day for a long cook.</p>
        <p className="text-sm opacity-50" style={{ color: t }}>Sunny, 74°F</p>
      </div>

      {/* Your Recipes — 4 large cards, just name + photo */}
      <div className="flex-1 px-6 pb-6 max-w-lg mx-auto">
        <h3 className="text-lg font-bold mb-4" style={{ color: t }}>Your Recipes</h3>
        <div className="grid grid-cols-2 gap-4">
          {RECIPES.map(key => {
            const f = FOOD[key];
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-2xl overflow-hidden text-left w-full" style={{ border: `2px solid ${a}30` }}>
                <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-square w-full" />
                <div className="p-4 text-center">
                  <div className="font-bold text-lg" style={{ color: t }}>{f.name.replace(/^Smoked |^Crispy |^Whole Packer |^Baby Back |^Pulled |^Classic /i, "").split(/ shoulder| thighs/i)[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Something Worth Trying — single respectful suggestion */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-3" style={{ color: t }}>Something Worth Trying</h3>
          {(() => {
            const f = FOOD[SUGGESTION];
            if (!f) return null;
            return (
              <button type="button" onClick={() => onRecipeClick?.(SUGGESTION)} className="w-full rounded-2xl overflow-hidden text-left" style={{ border: `1px solid ${a}40`, backgroundColor: "#251F1C" }}>
                <div className="flex gap-4 p-4">
                  <FoodThumb foodKey={SUGGESTION} name={f.name} gradient={f.gradient} emoji={f.emoji} size="lg" />
                  <div className="flex-1">
                    <div className="font-bold text-base" style={{ color: t }}>{f.name}</div>
                    <p className="text-sm mt-1 opacity-70" style={{ color: t }}>A pitmaster in Austin is doing something interesting with lamb shoulder. Thought you&apos;d want to see it.</p>
                  </div>
                </div>
              </button>
            );
          })()}
        </div>
      </div>

      <nav className="flex justify-around py-5 border-t" style={{ borderColor: "#2A2520" }}>
        {[
          { icon: "grill", label: "Grill" },
          { icon: "recipes", label: "Recipes" },
          { icon: "help", label: "Help" },
          { icon: "planner", label: "Weekend" },
          { icon: "content", label: "Pit" },
        ].map(({ icon, label }) => (
          <button key={label} onClick={label === "Recipes" ? onRecipesTabClick : label === "Grill" ? onGrillTabClick : label === "Help" ? onHelpTabClick : label === "Weekend" ? onPlannerTabClick : label === "Pit" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1.5 text-base font-medium" style={{ color: t }}>
            <Icon name={icon} size={26} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

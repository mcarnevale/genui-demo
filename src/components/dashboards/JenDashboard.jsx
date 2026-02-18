import { FoodThumb } from '../FoodThumb';
import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const ROTATION = ["chicken", "burger", "pizza", "wings", "salmon", "queso"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export function JenDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFFBF5" }}>
      <div className="flex-1 p-5 max-w-lg mx-auto">
        {/* Tonight's Cook — speed first */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Tonight&apos;s Cook</h3>
          <button type="button" onClick={() => onRecipeClick?.("chicken")} className="w-full flex gap-4 p-4 rounded-xl text-left" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
            <FoodThumb foodKey="chicken" name={FOOD.chicken.name} gradient={FOOD.chicken.gradient} emoji={FOOD.chicken.emoji} size="lg" />
            <div className="flex-1">
              <div className="font-bold" style={{ color: "#5C4020" }}>Smoked Chicken Thighs</div>
              <div className="text-sm text-gray-500">~45 min total</div>
              <span className="mt-2 inline-block px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: a, color: "white" }}>Start</span>
            </div>
          </button>
        </div>

        {/* This Week — Mon–Fri row */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">This Week</h3>
          <div className="flex gap-2">
            {DAYS.map((day, i) => (
              <div key={day} className="flex-1 p-3 rounded-xl text-center" style={{ backgroundColor: i === 1 ? "white" : "#F5EDE4", border: i === 1 ? `2px solid ${a}` : "1px solid #E0D5C8" }}>
                <div className="text-xs font-medium text-gray-500">{day}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: i === 1 ? a : "#666" }}>{i === 1 ? "Chicken" : i === 0 ? "—" : "Fill In"}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rotation — compact horizontal scroll */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Your Rotation</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {ROTATION.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="shrink-0 w-28 rounded-xl overflow-hidden text-left" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-square w-full" />
                  <div className="p-2 text-center">
                    <div className="text-xs font-semibold truncate" style={{ color: "#5C4020" }}>{f.name.split(" ").slice(0, 2).join(" ")}</div>
                    <span className="mt-1 text-[10px] font-medium" style={{ color: a }}>Cook This</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal discovery nudge */}
        <button type="button" onClick={() => onRecipeClick?.("salmon")} className="mt-6 w-full p-3 rounded-lg text-left hover:opacity-90 transition-opacity" style={{ backgroundColor: "rgba(212,167,106,0.12)" }}>
          <p className="text-xs" style={{ color: "#5C4020" }}>This smoked salmon takes the same 40 minutes as your go-to chicken thighs.</p>
        </button>
      </div>

      <nav className="flex justify-around py-3 border-t bg-white">
        {["cook", "recipes", "help", "planner", "content"].map((iconName, i) => (
          <button key={iconName} onClick={i === 0 ? onGrillTabClick : i === 1 ? onRecipesTabClick : i === 2 ? onHelpTabClick : i === 3 ? onPlannerTabClick : i === 4 ? onContentTabClick : undefined} className="p-2 flex items-center justify-center" style={{ color: a }}><Icon name={iconName} size={22} /></button>
        ))}
      </nav>
    </div>
  );
}

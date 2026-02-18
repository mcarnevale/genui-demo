import { FoodThumb } from '../FoodThumb';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const QUICK_WINS = ["hotdog", "queso", "chicken"];

export function MarcusDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="flex-1 p-6 max-w-lg mx-auto">
        {/* What Should I Cook? — primary CTA */}
        <button
          className="w-full py-5 rounded-2xl font-bold text-lg mb-8 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
          style={{ backgroundColor: a, color: "white" }}
        >
          <Icon name="cook" size={28} />
          What Should I Cook?
        </button>

        {/* Your Journey — progress tracker */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-4" style={{ color: "#333" }}>Your Journey</h3>
          <div className="flex items-center gap-3">
            {["Burgers ✓", "Chicken ✓", "Pulled Pork"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: i < 2 ? a + "30" : "#E0E0E0", color: i < 2 ? a : "#999" }}
                >
                  {i < 2 ? "✓" : "3"}
                </div>
                <span className="text-sm font-medium" style={{ color: i < 2 ? "#333" : "#666" }}>{step}</span>
                {i < 2 && <span className="text-gray-400">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Wins — large recipe cards */}
        <div>
          <h3 className="text-base font-semibold mb-4" style={{ color: "#333" }}>Quick Wins</h3>
          <div className="space-y-4">
            {QUICK_WINS.map(key => {
              const f = FOOD[key];
              if (!f) return null;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onRecipeClick?.(key)}
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-colors cursor-pointer w-full text-left"
                  style={{ backgroundColor: "white" }}
                >
                  <FoodThumb foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} size="lg" />
                  <div className="flex-1">
                    <div className="font-semibold" style={{ color: "#333" }}>{f.name}</div>
                    <div className="text-sm text-gray-500">{f.time} · {f.tag}</div>
                  </div>
                  <span className="text-gray-400">→</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom nav — four labeled items */}
      <nav className="flex justify-around py-4 border-t bg-white">
        {[
          { icon: "cook", label: "Cook" },
          { icon: "recipes", label: "Recipes" },
          { icon: "help", label: "Help" },
          { icon: "content", label: "Learn" },
          { icon: "planner", label: "Plan" },
        ].map(({ icon, label }) => (
          <button key={label} onClick={label === "Recipes" ? onRecipesTabClick : label === "Cook" ? onGrillTabClick : label === "Help" ? onHelpTabClick : label === "Plan" ? onPlannerTabClick : label === "Learn" ? onContentTabClick : undefined} className="flex flex-col items-center gap-1 text-sm" style={{ color: a }}>
            <Icon name={icon} size={22} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

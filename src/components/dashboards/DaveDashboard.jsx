import { FoodImage } from '../FoodImage';
import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const ROTATION = ["ribs", "brisket", "pork", "chicken", "wings", "burger"];

export function DaveDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1C1210" }}>
      {/* Grill status — dominates when active */}
      <div className="p-4 border-b" style={{ borderColor: "#2A1F1A", backgroundColor: "#251A15" }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono uppercase tracking-wider opacity-60" style={{ color: t }}>Grill Status</span>
          <span className="text-xs font-mono opacity-50" style={{ color: t }}>— Offline (Demo)</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {["Probe 1", "Probe 2", "Ambient"].map((label, i) => (
            <div key={label} className="py-2 px-3 rounded" style={{ backgroundColor: "#0F0A08" }}>
              <div className="text-[10px] font-mono uppercase opacity-50 mb-1" style={{ color: t }}>{label}</div>
              <div className="text-lg font-mono font-bold" style={{ color: a }}>{i === 2 ? "72°F" : "—"}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Rotation — horizontal scroll of small cards */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="text-xs font-medium uppercase tracking-wider opacity-50 mb-2" style={{ color: t }}>Your Rotation</div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {ROTATION.map(key => {
            const f = FOOD[key];
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="shrink-0 w-24 rounded-lg overflow-hidden text-left" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,107,53,0.2)" }}>
                <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-square w-full" />
                <div className="p-2 text-center">
                  <div className="text-[10px] font-semibold truncate" style={{ color: t }}>{f.name.replace(/^Smoked |^Crispy |^Classic /i, "").split(" ")[0]}</div>
                  <div className="text-[9px] font-mono opacity-60" style={{ color: t }}>{f.time}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Conditions */}
        <div className="mt-6 p-3 rounded-lg" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-xs font-medium uppercase tracking-wider opacity-50 mb-2" style={{ color: t }}>Conditions</div>
          <div className="flex gap-4 text-xs font-mono">
            <span style={{ color: t }}>Humidity 42%</span>
            <span style={{ color: t }}>Wind 8 mph</span>
            <span style={{ color: t }}>Ambient 72°F</span>
          </div>
        </div>
      </div>

      {/* Bottom nav — icons only, minimal */}
      <nav className="flex justify-around py-3 border-t" style={{ borderColor: "#2A1F1A", backgroundColor: "#0F0A08" }}>
        {["grill", "recipes", "help", "planner", "content"].map((iconName, i) => (
          <button key={iconName} onClick={i === 0 ? onGrillTabClick : i === 1 ? onRecipesTabClick : i === 2 ? onHelpTabClick : i === 3 ? onPlannerTabClick : i === 4 ? onContentTabClick : undefined} className="p-2 opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center" style={{ color: t }}><Icon name={iconName} size={22} /></button>
        ))}
      </nav>
    </div>
  );
}

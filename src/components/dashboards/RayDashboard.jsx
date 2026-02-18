import { Icon } from '../Icon';
import { FOOD } from '../../data/food';

const COOK_LOG = [
  { date: "Feb 14", recipe: "Whole Packer Brisket", score: "2nd Place", key: "brisket" },
  { date: "Feb 10", recipe: "Baby Back Ribs", score: "—", key: "ribs" },
  { date: "Feb 7", recipe: "Pulled Pork Shoulder", score: "3rd Place", key: "pork" },
];

export function RayDashboard({ persona, onRecipeClick, onRecipesTabClick, onGrillTabClick, onHelpTabClick, onPlannerTabClick, onContentTabClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Next Competition — or telemetry when cooking */}
      <div className="p-4 border-b" style={{ borderColor: "#1A1A1A", backgroundColor: "#111" }}>
        <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-1" style={{ color: t }}>Next Competition</div>
        <div className="text-lg font-bold" style={{ color: a }}>Houston Livestock Show</div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-mono" style={{ color: t }}>Mar 15–17 · Brisket, Ribs</span>
          <span className="text-sm font-mono font-bold" style={{ color: a }}>27 days</span>
        </div>
      </div>

      {/* Cook Log */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-3" style={{ color: t }}>Cook Log</div>
        <div className="space-y-2">
          {COOK_LOG.map((entry, i) => (
            <button key={i} type="button" onClick={() => onRecipeClick?.(entry.key)} className="w-full flex justify-between items-center py-3 px-4 rounded text-left" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
              <div>
                <div className="font-mono text-sm" style={{ color: t }}>{entry.date}</div>
                <div className="font-medium" style={{ color: t }}>{entry.recipe}</div>
              </div>
              <div className="text-right">
                {entry.score !== "—" && <span className="text-xs font-mono" style={{ color: a }}>{entry.score}</span>}
                <div className="text-xs font-mono opacity-60 mt-1" style={{ color: t }}>Review →</div>
              </div>
            </button>
          ))}
        </div>

        {/* Conditions — hyper-local weather */}
        <div className="mt-6 p-4 rounded" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-2" style={{ color: t }}>Conditions</div>
          <div className="grid grid-cols-2 gap-2 text-sm font-mono">
            <span style={{ color: t }}>Wind 8 mph NE</span>
            <span style={{ color: t }}>Barometer 30.12</span>
            <span style={{ color: t }}>Humidity 42%</span>
            <span style={{ color: t }}>Ambient 72°F</span>
          </div>
        </div>
      </div>

      <nav className="flex justify-around py-2 border-t" style={{ borderColor: "#1A1A1A", backgroundColor: "#0A0A0A" }}>
        {["grill", "recipes", "help", "planner", "content"].map((iconName, i) => (
          <button key={iconName} onClick={i === 0 ? onGrillTabClick : i === 1 ? onRecipesTabClick : i === 2 ? onHelpTabClick : i === 3 ? onPlannerTabClick : i === 4 ? onContentTabClick : undefined} className="p-2 opacity-60 hover:opacity-100 flex items-center justify-center" style={{ color: t }}><Icon name={iconName} size={20} /></button>
        ))}
      </nav>
    </div>
  );
}

import { NUTRITION_OPTIONS } from '../constants/nutrition';

export function NutritionSelector({ selected, onChange }) {
  const toggle = (item) => {
    if (item === "No Preference") return onChange(["No Preference"]);
    const f = selected.filter(s => s !== "No Preference");
    onChange(f.includes(item) ? f.filter(s => s !== item) : [...f, item]);
  };
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {NUTRITION_OPTIONS.map(opt => {
        const a = selected.includes(opt);
        return (
          <button key={opt} onClick={() => toggle(opt)} className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
            style={{ backgroundColor: a ? "#5C4020" : "#F5F0EB", color: a ? "#FFF8F0" : "#5C4020", border: a ? "2px solid #5C4020" : "2px solid #E0D5C8" }}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

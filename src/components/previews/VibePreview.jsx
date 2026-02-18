import { lerp3, lerp3Color } from '../../utils/color';
import { FOOD } from '../../data';

export function VibePreview({ value }) {
  const bg = lerp3Color(value, "#1C1210", "#FFF8F0", "#FAFAFA");
  const cardBg = lerp3Color(value, "#2A1F1A", "#FFFFFF", "#FFFFFF");
  const text = lerp3Color(value, "#FFE0C0", "#5C4020", "#333333");
  const accent = lerp3Color(value, "#FF6B35", "#C49A6C", "#9E9E9E");
  const border = lerp3Color(value, "#3A2A1A", "#F0E0D0", "#EEEEEE");
  const fw = value < 0.33 ? 800 : value < 0.66 ? 500 : 300;
  const br = lerp3(value, 4, 12, 8);
  const shadow = value < 0.33 ? "0 2px 8px rgba(0,0,0,0.4)" : value < 0.66 ? "0 2px 12px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.06)";
  const headerName = value < 0.33 ? "THE PIT" : value < 0.66 ? "My Kitchen" : "traeger";
  const foodKey = value < 0.33 ? "ribs" : value < 0.66 ? "chicken" : "cauliflwr";
  const f = FOOD[foodKey];

  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: bg, padding: 16, transition: "all 0.15s" }}>
      <div className="flex items-center justify-between mb-4">
        <span style={{ color: text, fontWeight: fw, fontSize: 16, letterSpacing: value < 0.33 ? "0.08em" : "0" }}>{headerName}</span>
        <div className="flex flex-col gap-1">
          {[100,70,40].map(w => <div key={w} style={{ height: 2, width: w + "%", minWidth: 8, maxWidth: 20, backgroundColor: accent, borderRadius: 1 }} />)}
        </div>
      </div>

      <div style={{ backgroundColor: cardBg, borderRadius: br, border: `1px solid ${border}`, boxShadow: shadow, overflow: "hidden", transition: "all 0.15s" }}>
        <div className="flex items-center" style={{ height: 48, background: f.gradient }}>
          <span className="text-2xl ml-3">{f.emoji}</span>
          <span className="text-white font-bold text-xs ml-2 drop-shadow">{f.name}</span>
        </div>
        <div style={{ padding: 12 }}>
          <div style={{ color: text, fontWeight: Math.min(fw, 600), fontSize: 13 }}>{f.name}</div>
          <div style={{ color: accent, fontSize: 11, fontWeight: 400 }}>{f.time}</div>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="flex-1 text-center" style={{ padding: "8px 0", borderRadius: br * 1.5, backgroundColor: accent, color: value < 0.33 ? "#1A0A00" : "#FFF", fontWeight: Math.min(fw, 600), fontSize: 12, letterSpacing: value < 0.33 ? "0.08em" : "0.02em", transition: "all 0.15s" }}>
          {value < 0.33 ? "FIRE IT UP" : value < 0.66 ? "Start Cooking" : "begin"}
        </div>
        <div style={{ padding: "8px 16px", borderRadius: br * 1.5, border: `1px solid ${accent}40`, color: accent, fontSize: 12, fontWeight: 400, transition: "all 0.15s" }}>
          {value < 0.33 ? "LOG" : value < 0.66 ? "Save" : "save"}
        </div>
      </div>
    </div>
  );
}

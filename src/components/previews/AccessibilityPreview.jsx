import { lerp3, clamp, lerp3Color } from '../../utils/color';

export function AccessibilityPreview({ value }) {
  const tempSize = lerp3(value, 28, 42, 68);
  const labelSize = lerp3(value, 10, 13, 18);
  const pad = lerp3(value, 12, 18, 28);
  const gap = lerp3(value, 6, 12, 20);
  const bg = lerp3Color(value, "#1A1A1A", "#FAFAFA", "#FFFFFF");
  const text = lerp3Color(value, "#E0E0E0", "#333333", "#111111");
  const sec = lerp3Color(value, "#888888", "#888888", "#444444");
  const multiOp = clamp(1 - (value - 0.2) / 0.3, 0, 1);

  return (
    <div className="rounded-xl overflow-hidden shadow-md" style={{ backgroundColor: bg, padding: pad, transition: "all 0.15s" }}>
      <div className="text-center" style={{ marginBottom: gap }}>
        <div className="font-bold" style={{ fontSize: tempSize, color: text, lineHeight: 1.1, transition: "font-size 0.15s" }}>225°F</div>
        <div style={{ fontSize: labelSize, color: sec, marginTop: 4, transition: "font-size 0.15s" }}>Target: 225°F</div>
      </div>
      <div className="text-center rounded-lg py-2" style={{ backgroundColor: "#4CAF5020", marginBottom: gap }}>
        <span className="font-semibold" style={{ fontSize: lerp3(value, 11, 14, 20), color: "#4CAF50" }}>
          {value > 0.7 ? "ON TRACK" : "On Track"}
        </span>
      </div>
      {value < 0.6 && (
        <div className="space-y-1.5" style={{ opacity: multiOp }}>
          {[
            { label: "Probe 1 (Flat)", temp: "168°F", target: "203°F", rate: "+4°/hr" },
            { label: "Probe 2 (Point)", temp: "172°F", target: "203°F", rate: "+5°/hr" },
            { label: "Ambient", temp: "227°F", target: "225°F", rate: "" },
            { label: "Pellet Level", temp: "62%", target: "", rate: "~4 hrs remain" },
          ].map(p => (
            <div key={p.label} className="flex justify-between" style={{ color: sec, fontSize: 10 }}>
              <span>{p.label}</span>
              <span>{p.temp}{p.target && ` / ${p.target}`} {p.rate && <span className="opacity-60">{p.rate}</span>}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

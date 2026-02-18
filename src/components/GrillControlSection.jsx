import { useState } from 'react';
import { Icon } from './Icon';

/** Demo grill state - simulate active cook or idle */
const DEMO_STATE = {
  connected: true,
  currentTemp: 228,
  targetTemp: 225,
  phase: "smoke",
  elapsed: "2:14",
  remaining: "~3:45",
  probe1: 165,
  probe1Target: 203,
  probe2: null,
  probe2Target: null,
  pelletLevel: 72,
  ambient: 72,
  humidity: 42,
  status: "on_track",
};

/** Demo cook — what's on the grill (personas show varying detail) */
const DEFAULT_COOK = { name: "Smoked Chicken Thighs", targetTemp: 203 };

/** Dave: Multi-probe view, horizontal bars, 60-min graph, pellet level. Instrument panel. */
function DaveGrillControl({ persona, currentCook }) {
  const t = persona.textColor;
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#1C1210" }}>
      <div className="flex justify-between items-baseline mb-2">
        <div className="text-xs font-mono uppercase tracking-wider opacity-50" style={{ color: t }}>Grill Status</div>
        <div className="text-[10px] font-mono uppercase" style={{ color: t }}>{cook.name}</div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {["Probe 1", "Probe 2", "Ambient", "Target"].map((label, i) => (
          <div key={label} className="py-2 px-3 rounded text-center" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-[10px] font-mono uppercase opacity-50 mb-1" style={{ color: t }}>{label}</div>
            <div className="text-lg font-mono font-bold" style={{ color: a }}>
              {i === 0 ? DEMO_STATE.probe1 : i === 1 ? "—" : i === 2 ? DEMO_STATE.currentTemp : DEMO_STATE.targetTemp}°F
            </div>
          </div>
        ))}
      </div>
      {/* Progress bars for probes */}
      <div className="space-y-2 mb-4">
        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1" style={{ color: t }}><span>Probe 1</span><span>165 / 203°F</span></div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#0F0A08" }}>
            <div className="h-full rounded-full bg-orange-500/80" style={{ width: `${(DEMO_STATE.probe1 / DEMO_STATE.probe1Target) * 100}%` }} />
          </div>
        </div>
      </div>
      {/* 60-min graph placeholder */}
      <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,107,53,0.15)" }}>
        <div className="text-[10px] font-mono uppercase opacity-50 mb-2" style={{ color: t }}>Last 60 min</div>
        <div className="h-16 flex items-end gap-0.5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="flex-1 rounded-sm opacity-70" style={{ height: `${40 + Math.sin(i / 4) * 30 + (i % 5) * 5}%`, backgroundColor: a }} />
          ))}
        </div>
      </div>
      <div className="flex justify-between text-xs font-mono" style={{ color: t }}>
        <span>Elapsed {DEMO_STATE.elapsed}</span>
        <span>ETA {DEMO_STATE.remaining}</span>
      </div>
      <div className="mt-4 p-3 rounded-lg flex justify-between items-center" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-xs font-mono" style={{ color: t }}>Pellet Level</span>
        <span className="text-sm font-mono font-bold" style={{ color: a }}>{DEMO_STATE.pelletLevel}%</span>
      </div>
    </div>
  );
}

/** Priya: Large circular gauge, phases timeline, Coach toggle, Details panel */
function PriyaGrillControl({ persona, currentCook }) {
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;
  const [showDetails, setShowDetails] = useState(false);
  const [coachOn, setCoachOn] = useState(false);

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFF8F0" }}>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium" style={{ color: "#5C3A1E" }}>{cook.name}</p>
        <button onClick={() => setCoachOn(!coachOn)} className={`text-xs px-3 py-1.5 rounded-full ${coachOn ? '' : 'opacity-60'}`} style={{ backgroundColor: a + "25", color: "#5C3A1E" }}>
          Coach {coachOn ? "On" : "Off"}
        </button>
      </div>
      <div className="flex flex-col items-center py-6">
        <div className="w-48 h-48 rounded-full flex items-center justify-center border-4" style={{ borderColor: a, backgroundColor: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#5C3A1E" }}>{DEMO_STATE.currentTemp}</div>
            <div className="text-sm opacity-70" style={{ color: "#5C3A1E" }}>°F</div>
          </div>
        </div>
        <div className="mt-4 flex gap-8">
          <div className="flex items-center gap-1">
            <span className="rounded-full w-2 h-2" style={{ backgroundColor: a }} />
            <span className="text-sm" style={{ color: "#5C3A1E" }}>Preheat</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="rounded-full w-2 h-2 bg-amber-500" />
            <span className="text-sm font-medium" style={{ color: "#5C3A1E" }}>Smoke</span>
          </div>
          <div className="flex items-center gap-1 opacity-50">
            <span className="rounded-full w-2 h-2 bg-gray-300" />
            <span className="text-sm">Hold</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 rounded-xl mb-4" style={{ backgroundColor: "white", border: "1px solid rgba(232,151,107,0.2)" }}>
        <div className="h-2 rounded-full overflow-hidden bg-gray-100">
          <div className="h-full rounded-full" style={{ width: "38%", backgroundColor: a }} />
        </div>
        <p className="text-sm mt-2" style={{ color: "#5C3A1E" }}>Smoke phase — building flavor</p>
      </div>
      {coachOn && (
        <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: a + "15", border: `1px solid ${a}30` }}>
          <p className="text-sm" style={{ color: "#5C3A1E" }}>You're 2 hours in. The bark should be setting. Look for a dark mahogany color and a slight crust.</p>
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)} className="text-sm font-medium" style={{ color: a }}>{showDetails ? "Hide" : "Show"} probe details</button>
      {showDetails && (
        <div className="mt-3 p-4 rounded-xl space-y-2" style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex justify-between text-sm"><span>Probe 1</span><span style={{ color: a }}>{DEMO_STATE.probe1}°F → 203°F</span></div>
        </div>
      )}
    </div>
  );
}

/** Tom & Linda: Huge temp, current + target, "on track" plain language, progress bar */
function TomLindaGrillControl({ persona, currentCook }) {
  const t = persona.textColor;
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FFFBF5" }}>
      <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
        <p className="text-lg font-semibold mb-2" style={{ color: "#5C4A3A" }}>{cook.name}</p>
        <div className="text-7xl font-bold mb-2" style={{ color: "#5C4A3A" }}>{DEMO_STATE.currentTemp}°</div>
        <div className="text-2xl font-medium opacity-70 mb-4" style={{ color: "#5C4A3A" }}>Target {DEMO_STATE.targetTemp}°</div>
        <div className="px-6 py-3 rounded-2xl text-lg font-semibold" style={{ backgroundColor: "rgba(34,197,94,0.2)", color: "#166534" }}>On Track</div>
        <p className="text-base mt-4 opacity-80" style={{ color: "#5C4A3A" }}>{cook.name} — looking great. About 45 minutes to go. Plenty of time to set the table.</p>
      </div>
      <div className="p-4 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
        <div className="flex justify-between text-sm mb-2">
          <span style={{ color: "#5C4A3A" }}>Time remaining</span>
          <span className="font-semibold" style={{ color: a }}>{DEMO_STATE.remaining}</span>
        </div>
        <div className="h-4 rounded-full overflow-hidden bg-gray-100">
          <div className="h-full rounded-full" style={{ width: "38%", backgroundColor: a }} />
        </div>
      </div>
    </div>
  );
}

/** Marcus: Color-coded gauge (blue/green/amber), plain-language status, What's Happening? button */
function MarcusGrillControl({ persona, currentCook }) {
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;
  const gaugeColor = "#22c55e";

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="flex flex-col items-center py-8">
        <p className="text-lg font-semibold mb-4" style={{ color: "#333" }}>{cook.name}</p>
        <div className="w-56 h-56 rounded-full flex items-center justify-center border-8" style={{ borderColor: gaugeColor, backgroundColor: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div className="text-center">
            <div className="text-5xl font-bold" style={{ color: "#333" }}>{DEMO_STATE.currentTemp}</div>
            <div className="text-sm text-gray-500 mt-1">Target {DEMO_STATE.targetTemp}°F</div>
          </div>
        </div>
        <div className="mt-6 px-6 py-4 rounded-2xl max-w-sm text-center" style={{ backgroundColor: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.3)" }}>
          <p className="text-lg font-medium" style={{ color: "#166534" }}>You're in the zone — looking good</p>
        </div>
      </div>
      <button className="w-full py-4 rounded-2xl font-semibold text-lg border-2 mt-4" style={{ borderColor: a, color: a }}>What's Happening?</button>
      <p className="text-sm text-gray-500 mt-4 text-center">Grill holding steady at 225°F. {cook.name} — internal temp climbing as expected.</p>
    </div>
  );
}

/** Jen: Large temp, simple status, single timer. Efficient. */
function JenGrillControl({ persona, currentCook }) {
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFFBF5" }}>
      <div className="flex flex-col items-center py-8">
        <p className="text-base font-semibold mb-4" style={{ color: "#5C4020" }}>{cook.name}</p>
        <div className="text-6xl font-bold mb-2" style={{ color: "#5C4020" }}>{DEMO_STATE.currentTemp}°</div>
        <div className="text-lg font-medium mb-6" style={{ color: "#5C4020" }}>Cooking — 22 min left</div>
        <div className="w-full max-w-xs py-6 rounded-2xl flex flex-col items-center" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
          <div className="text-4xl font-mono font-bold" style={{ color: a }}>22:00</div>
          <div className="text-sm text-gray-500 mt-1">countdown</div>
        </div>
      </div>
    </div>
  );
}

/** Ray: Multi-probe dashboard, sparklines, rate of change, pure data */
function RayGrillControl({ persona, currentCook }) {
  const t = persona.textColor;
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  const probes = [
    { label: "Flat", current: 165, target: 203, rate: "+12/h" },
    { label: "Point", current: 158, target: 203, rate: "+14/h" },
    { label: "Ambient", current: 228, target: 225, rate: "—" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-xs font-mono uppercase" style={{ color: a }}>{cook.name}</span>
        <span className="text-[10px] font-mono" style={{ color: t }}>{DEMO_STATE.probe1}→{cook.targetTemp || 203}°F</span>
      </div>
      <div className="grid gap-3 mb-4">
        {probes.map((p, i) => (
          <div key={p.label} className="p-4 rounded" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-mono uppercase" style={{ color: a }}>{p.label}</span>
              <span className="text-xs font-mono" style={{ color: t }}>{p.rate}</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-2xl font-mono font-bold" style={{ color: a }}>{p.current}</span>
              <span className="text-sm font-mono opacity-60" style={{ color: t }}>→ {p.target}°F</span>
            </div>
            <div className="h-6 flex items-end gap-0.5">
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="flex-1 rounded-sm" style={{ height: `${30 + (j % 4) * 10 + Math.sin(j) * 5}%`, backgroundColor: a + "60" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 rounded" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
        <div><span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>Elapsed</span><div className="font-mono font-bold" style={{ color: t }}>{DEMO_STATE.elapsed}</div></div>
        <div><span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>ETA</span><div className="font-mono font-bold" style={{ color: a }}>{DEMO_STATE.remaining}</div></div>
        <div><span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>Ambient</span><div className="font-mono" style={{ color: t }}>{DEMO_STATE.ambient}°F</div></div>
        <div><span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>Humidity</span><div className="font-mono" style={{ color: t }}>{DEMO_STATE.humidity}%</div></div>
      </div>
    </div>
  );
}

/** Sofia: Minimal, elegant gauge, thin stroke, camera button */
function SofiaGrillControl({ persona, currentCook }) {
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-light" style={{ color: "#2D3B2D" }}>{cook.name}</p>
        <button className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: a + "25", color: "#2D3B2D" }}><Icon name="camera" size={22} /></button>
      </div>
      <div className="flex flex-col items-center py-6">
        <div className="w-44 h-44 rounded-full flex items-center justify-center border-2" style={{ borderColor: "rgba(168,192,151,0.5)", backgroundColor: "white" }}>
          <div className="text-4xl font-light" style={{ color: "#2D3B2D" }}>{DEMO_STATE.currentTemp}°</div>
        </div>
        <p className="text-sm mt-4 font-light" style={{ color: "#2D3B2D" }}>Smoking — 40 min remaining</p>
      </div>
      <div className="flex-1 p-4 rounded-xl" style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}>
        <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
          <div className="h-full rounded-full" style={{ width: "40%", backgroundColor: a }} />
        </div>
      </div>
    </div>
  );
}

/** Walt: Single massive number, target, "On Track". Scroll for details. */
function WaltGrillControl({ persona, currentCook }) {
  const t = persona.textColor;
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#1A1614" }}>
      <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
        <p className="text-xl font-semibold mb-4" style={{ color: t }}>{cook.name}</p>
        <div className="text-8xl font-bold" style={{ color: t }}>{DEMO_STATE.currentTemp}</div>
        <div className="text-3xl font-medium opacity-70 mt-2" style={{ color: t }}>Target {DEMO_STATE.targetTemp}</div>
        <div className="text-2xl font-semibold mt-6" style={{ color: a }}>On Track</div>
      </div>
      <div className="p-4 rounded-xl space-y-3" style={{ backgroundColor: "#251F1C", border: `1px solid ${a}30` }}>
        <div className="flex justify-between text-lg">
          <span style={{ color: t }}>Elapsed</span>
          <span style={{ color: t }}>{DEMO_STATE.elapsed}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span style={{ color: t }}>Est. remaining</span>
          <span style={{ color: t }}>{DEMO_STATE.remaining}</span>
        </div>
      </div>
    </div>
  );
}

/** Casey: Teal gauge, phase descriptions, Technique Spotlight card */
function CaseyGrillControl({ persona, currentCook }) {
  const a = persona.accent;
  const cook = currentCook || DEFAULT_COOK;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#F5EDE8" }}>
      <div className="flex flex-col items-center py-6">
        <p className="text-base font-semibold mb-2" style={{ color: "#3A2A20" }}>{cook.name}</p>
        <div className="w-48 h-48 rounded-full flex items-center justify-center border-4" style={{ borderColor: a, backgroundColor: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div className="text-4xl font-bold" style={{ color: "#3A2A20" }}>{DEMO_STATE.currentTemp}°</div>
        </div>
        <p className="text-sm mt-4" style={{ color: "#3A2A20" }}>Smoke phase — building flavor layers</p>
      </div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {["Preheat", "Smoke", "Hold"].map((phase, i) => (
          <span key={phase} className={`px-4 py-2 rounded-full text-sm shrink-0 ${i === 1 ? "font-medium" : "opacity-60"}`} style={{ backgroundColor: i === 1 ? a + "25" : "#E8E0D8", color: "#3A2A20" }}>{phase}</span>
        ))}
      </div>
      <div className="p-4 rounded-xl" style={{ backgroundColor: "white", border: `2px solid ${a}30` }}>
        <h4 className="text-sm font-bold mb-2" style={{ color: "#3A2A20" }}>Technique Spotlight</h4>
        <p className="text-sm" style={{ color: "#3A2A20" }}>Low-and-slow at 225°F is perfect for smoke penetration. Your gochujang glaze will caramelize without burning — the sweet spot for Korean-style ribs.</p>
      </div>
    </div>
  );
}

const GRILL_CONTROLS = {
  dave: DaveGrillControl,
  priya: PriyaGrillControl,
  "tom-linda": TomLindaGrillControl,
  marcus: MarcusGrillControl,
  jen: JenGrillControl,
  ray: RayGrillControl,
  sofia: SofiaGrillControl,
  walt: WaltGrillControl,
  casey: CaseyGrillControl,
};

/** Persona-aware grill control section. */
export function GrillControlSection({ persona, currentCook }) {
  const pid = persona?.id || "dave";
  const Control = GRILL_CONTROLS[pid] || DaveGrillControl;
  return <Control persona={persona} currentCook={currentCook} />;
}

import { useState } from 'react';
import { FoodImage } from './FoodImage';
import { ImagePlaceholder } from './ImagePlaceholder';
import { FOOD } from '../data/food';

/** Dave: Weekend cook scheduler — Sat/Sun time blocks. No weeknights. */
function DavePlanner({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  const weekendSlots = [
    { day: "Saturday", times: ["10:00 AM", "2:00 PM", "6:00 PM"] },
    { day: "Sunday", times: ["11:00 AM", "4:00 PM"] },
  ];

  const scheduled = { "Sat-10": "ribs", "Sat-6": "chicken", "Sun-11": "brisket" };

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#1C1210" }}>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-4" style={{ color: t }}>Weekend Cook Schedule</div>
      <div className="space-y-6">
        {weekendSlots.map(({ day, times }) => (
          <div key={day}>
            <div className="text-sm font-mono font-bold mb-2" style={{ color: a }}>{day}</div>
            <div className="space-y-2">
              {times.map((time) => {
                const key = `${day.slice(0, 3)}-${time.split(" ")[0]}`;
                const foodKey = scheduled[key];
                const f = foodKey ? FOOD[foodKey] : null;
                return (
                  <div key={time} className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs font-mono w-16 shrink-0" style={{ color: t }}>{time}</span>
                    {f ? (
                      <button onClick={() => onRecipeClick?.(foodKey)} className="flex-1 flex items-center gap-2 text-left">
                        <FoodImage foodKey={foodKey} name={f.name} gradient={f.gradient} emoji={f.emoji} className="w-10 h-10 rounded shrink-0" />
                        <span className="text-sm font-mono" style={{ color: t }}>{f.name}</span>
                      </button>
                    ) : (
                      <span className="text-xs font-mono opacity-50" style={{ color: t }}>— Open slot —</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs font-mono opacity-50 mt-6" style={{ color: t }}>Tap slot to add recipe. Timeline auto-calculates.</p>
    </div>
  );
}

/** Priya: Project-based "Upcoming Cooks" — events with guest count, menu building. */
function PriyaPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;
  const t = "#5C3A1E";

  const projects = [
    { name: "Saturday Dinner Party", date: "Feb 22", guests: 6, mains: ["salmon"], sides: ["macncheese"], status: "2 of 3 planned" },
    { name: "Date Night Cook", date: "Feb 28", guests: 2, mains: ["mole"], sides: [], status: "Planning" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFF8F0" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: t }}>Upcoming Cooks</h2>
      <div className="space-y-4">
        {projects.map((proj, i) => (
          <div key={proj.name} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid rgba(232,151,107,0.2)" }}>
            <ImagePlaceholder aspect="video" className="rounded-t-xl" prompt={`A picture of a dinner party table with grilled dishes`} />
            <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold" style={{ color: t }}>{proj.name}</h3>
                <p className="text-sm opacity-70" style={{ color: t }}>{proj.date} · {proj.guests} guests</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: a + "20", color: t }}>{proj.status}</span>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium opacity-70" style={{ color: t }}>Main:</span>
                {proj.mains.map((k) => {
                  const f = FOOD[k];
                  return f ? <button key={k} onClick={() => onRecipeClick?.(k)} className="ml-2 text-sm font-medium" style={{ color: a }}>{f.name}</button> : null;
                })}
                {proj.mains.length === 0 && <span className="ml-2 text-sm opacity-60" style={{ color: t }}>Add main</span>}
              </div>
              <div>
                <span className="text-xs font-medium opacity-70" style={{ color: t }}>Sides:</span>
                {proj.sides.map((k) => {
                  const f = FOOD[k];
                  return f ? <button key={k} onClick={() => onRecipeClick?.(k)} className="ml-2 text-sm" style={{ color: t }}>{f.name}</button> : null;
                })}
                {proj.sides.length === 0 && <span className="ml-2 text-sm opacity-60" style={{ color: t }}>Add side</span>}
              </div>
            </div>
            <button className="mt-4 text-sm font-medium" style={{ color: a }}>View timeline →</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-3 rounded-lg" style={{ backgroundColor: "rgba(232,151,107,0.15)" }}>
        <p className="text-sm" style={{ color: t }}><strong>In season:</strong> Persimmons pair beautifully with smoked pork — or try smoked persimmon with burrata.</p>
      </div>
    </div>
  );
}

/** Tom & Linda: Events with guest count, menu builder, unified timeline. Primary feature. */
function TomLindaPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;

  const events = [
    { name: "Sunday Family Dinner", date: "Feb 23", guests: 6, menu: { main: "ribs", sides: ["macncheese", "wings"], dessert: "peach" }, timelineReady: true },
    { name: "Neighborhood Cookout", date: "Mar 2", guests: 12, menu: { main: "pork", sides: ["queso", "wings"], dessert: null }, timelineReady: false },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FFFBF5" }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: "#5C4A3A" }}>Your Events</h2>
      <div className="space-y-6">
        {events.map((ev) => (
          <div key={ev.name} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: `2px solid ${a}40` }}>
            <ImagePlaceholder aspect="2/1" className="rounded-t-xl" prompt={`A picture of a backyard cookout spread with ribs and sides`} />
            <div className="p-6">
            <h3 className="text-lg font-bold mb-1" style={{ color: "#5C4A3A" }}>{ev.name}</h3>
            <p className="text-base mb-4 opacity-80" style={{ color: "#5C4A3A" }}>{ev.date} · {ev.guests} guests</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#5C4A3A" }}>Main</span>
                {ev.menu.main && FOOD[ev.menu.main] && <button onClick={() => onRecipeClick?.(ev.menu.main)} className="block font-semibold mt-1" style={{ color: a }}>{FOOD[ev.menu.main].name}</button>}
              </div>
              <div>
                <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#5C4A3A" }}>Sides</span>
                <div className="mt-1 space-y-1">
                  {ev.menu.sides?.map((k) => FOOD[k] ? <button key={k} onClick={() => onRecipeClick?.(k)} className="block text-sm" style={{ color: "#5C4A3A" }}>{FOOD[k].name}</button> : <span key={k} className="text-sm" style={{ color: "#5C4A3A" }}>{k}</span>) || []}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#5C4A3A" }}>Dessert</span>
                {ev.menu.dessert && FOOD[ev.menu.dessert] && <button onClick={() => onRecipeClick?.(ev.menu.dessert)} className="block font-semibold mt-1" style={{ color: a }}>{FOOD[ev.menu.dessert].name}</button>}
                {!ev.menu.dessert && <span className="text-sm opacity-60">—</span>}
              </div>
            </div>
            {ev.timelineReady && (
              <div className="p-4 rounded-xl" style={{ backgroundColor: "#F5EDE4" }}>
                <h4 className="text-sm font-bold mb-2" style={{ color: "#5C4A3A" }}>Timeline</h4>
                <ul className="text-sm space-y-1" style={{ color: "#5C4A3A" }}>
                  <li>Saturday eve: Rub ribs, refrigerate</li>
                  <li>8:00 AM Sun: Fire grill, ribs on</li>
                  <li>11:30 AM: Mac & cheese on</li>
                  <li>12:00 PM: Prep sides, peach cobbler on</li>
                  <li>1:00 PM: Serve</li>
                </ul>
              </div>
            )}
            <button className="mt-4 px-4 py-2 rounded-xl font-semibold text-sm" style={{ backgroundColor: a, color: "white" }}>Edit Menu</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Marcus: Plan Your Next Cook — pick recipe, pick day, prep checklist. Game Day Mode. */
function MarcusPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;
  const [mode, setMode] = useState("single");

  const nextCook = { recipe: "pork", day: "Saturday, Feb 22" };
  const f = FOOD[nextCook.recipe];

  const checklist = [
    "Buy ingredients (pork shoulder, rub, buns)",
    "Prep rub — mix night before",
    "Preheat grill 7:00 AM",
    "Pork on by 7:30 AM",
    "Expected done: ~5 PM",
  ];

  const gameDayRecipes = ["queso", "wings", "burger"];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setMode("single")} className={`px-4 py-2 rounded-xl font-medium text-sm ${mode === "single" ? "" : "opacity-60"}`} style={{ backgroundColor: mode === "single" ? a + "25" : "#E8E8E8", color: mode === "single" ? "#333" : "#666" }}>Plan Your Next Cook</button>
        <button onClick={() => setMode("gameday")} className={`px-4 py-2 rounded-xl font-medium text-sm ${mode === "gameday" ? "" : "opacity-60"}`} style={{ backgroundColor: mode === "gameday" ? a + "25" : "#E8E8E8", color: mode === "gameday" ? "#333" : "#666" }}>Game Day Mode</button>
      </div>

      {mode === "single" && (
        <>
          <h2 className="text-lg font-bold mb-4" style={{ color: "#333" }}>Your Next Cook</h2>
          {f && (
            <button onClick={() => onRecipeClick?.(nextCook.recipe)} className="flex items-center gap-4 p-4 rounded-2xl mb-6 w-full text-left" style={{ backgroundColor: "white", border: "2px solid #EEE" }}>
              <FoodImage foodKey={nextCook.recipe} name={f.name} gradient={f.gradient} emoji={f.emoji} className="w-16 h-16 rounded-xl shrink-0" />
              <div className="flex-1">
                <div className="font-bold" style={{ color: "#333" }}>{f.name}</div>
                <div className="text-sm text-gray-500">{nextCook.day}</div>
              </div>
            </button>
          )}
          <h3 className="text-sm font-bold mb-3" style={{ color: "#333" }}>Prep Checklist</h3>
          <ul className="space-y-2">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "white" }}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${i < 2 ? "bg-green-100 text-green-700" : ""}`}>{i < 2 ? "✓" : ""}</span>
                <span className="text-sm" style={{ color: i < 2 ? "#666" : "#333" }}>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full py-4 rounded-2xl font-semibold" style={{ backgroundColor: a, color: "white" }}>Change Recipe</button>
        </>
      )}

      {mode === "gameday" && (
        <>
          <h2 className="text-lg font-bold mb-4" style={{ color: "#333" }}>Game Day — Ready by Kickoff</h2>
          <p className="text-sm mb-4" style={{ color: "#666" }}>Pick 2–3 crowd-pleasers. We'll time everything for kickoff.</p>
          <div className="space-y-3">
            {gameDayRecipes.map((key) => {
              const rf = FOOD[key];
              return rf ? (
                <button key={key} onClick={() => onRecipeClick?.(key)} className="flex items-center gap-4 p-4 rounded-2xl w-full text-left" style={{ backgroundColor: "white", border: "1px solid #EEE" }}>
                  <FoodImage foodKey={key} name={rf.name} gradient={rf.gradient} emoji={rf.emoji} className="w-12 h-12 rounded-lg shrink-0" />
                  <span className="font-medium" style={{ color: "#333" }}>{rf.name}</span>
                  <span className="text-sm text-gray-500 ml-auto">{rf.time}</span>
                </button>
              ) : null;
            })}
          </div>
        </>
      )}
    </div>
  );
}

/** Jen: Mon–Fri grid, fill from rotation. Generate Grocery List. Smart suggestions. */
function JenPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;
  const ROTATION = ["chicken", "burger", "pizza", "wings", "salmon", "queso"];

  const week = [
    { day: "Mon", key: null },
    { day: "Tue", key: "chicken" },
    { day: "Wed", key: null },
    { day: "Thu", key: "salmon" },
    { day: "Fri", key: "pizza" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFFBF5" }}>
      <h2 className="text-base font-bold mb-4" style={{ color: "#5C4020" }}>This Week</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {week.map(({ day, key }) => (
          <div key={day} className="p-3 rounded-xl text-center" style={{ backgroundColor: key ? "white" : "#F5EDE4", border: key ? `2px solid ${a}` : "1px solid #E0D5C8" }}>
            <div className="text-xs font-medium text-gray-500">{day}</div>
            {key && FOOD[key] ? (
              <button onClick={() => onRecipeClick?.(key)} className="text-xs font-semibold mt-1 truncate block w-full" style={{ color: "#5C4020" }}>{FOOD[key].name.split(" ").slice(0, 2).join(" ")}</button>
            ) : (
              <button className="text-xs font-medium mt-1" style={{ color: a }}>Fill In</button>
            )}
          </div>
        ))}
      </div>
      <div className="mb-6 p-3 rounded-lg" style={{ backgroundColor: "rgba(212,167,106,0.12)" }}>
        <p className="text-xs" style={{ color: "#5C4020" }}>Making chicken Tue? Wednesday could be chicken tacos with no extra cook time.</p>
      </div>
      <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Quick Add</div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {ROTATION.filter((k) => !week.some((w) => w.key === k)).slice(0, 4).map((key) => {
          const f = FOOD[key];
          return f ? (
            <button key={key} onClick={() => onRecipeClick?.(key)} className="shrink-0 px-3 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: "white", border: "1px solid #E0D5C8", color: "#5C4020" }}>{f.name.split(" ").slice(0, 2).join(" ")}</button>
          ) : null;
        })}
      </div>
      <button className="mt-6 w-full py-4 rounded-xl font-semibold" style={{ backgroundColor: a, color: "white" }}>Generate Grocery List</button>
    </div>
  );
}

/** Ray: Competition calendar + turn-in timeline. Practice cook blocks for weekends. */
function RayPlanner({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  const nextComp = { name: "Houston Livestock Show", date: "Mar 15–17", category: "Brisket, Ribs", turnIn: "12:00" };

  const timeline = [
    { time: "12:00", note: "Judges" },
    { time: "11:45", note: "Box" },
    { time: "10:30", note: "Rest" },
    { time: "10:00", note: "Pull" },
    { time: "6:00", note: "Wrap" },
    { time: "12:00 AM", note: "Fire" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-3" style={{ color: a }}>Next Competition</div>
      <div className="p-4 rounded mb-4" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
        <div className="font-mono font-bold" style={{ color: a }}>{nextComp.name}</div>
        <div className="text-sm font-mono mt-1" style={{ color: t }}>{nextComp.date} · {nextComp.category}</div>
      </div>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2" style={{ color: t }}>Turn-in timeline (backward from {nextComp.turnIn})</div>
      <div className="space-y-2 mb-6">
        {timeline.map((row, i) => (
          <div key={i} className="flex justify-between font-mono text-sm" style={{ color: t }}>
            <span>{row.time}</span>
            <span style={{ color: a }}>{row.note}</span>
          </div>
        ))}
      </div>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2" style={{ color: t }}>Practice — This Weekend</div>
      <div className="space-y-2">
        <button onClick={() => onRecipeClick?.("brisket")} className="w-full flex justify-between items-center p-3 rounded text-left" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <span style={{ color: t }}>Sat · Brisket</span>
          <span className="text-xs font-mono" style={{ color: a }}>12 hrs</span>
        </button>
        <button onClick={() => onRecipeClick?.("ribs")} className="w-full flex justify-between items-center p-3 rounded text-left" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <span style={{ color: t }}>Sun · Ribs</span>
          <span className="text-xs font-mono" style={{ color: a }}>5 hrs</span>
        </button>
      </div>
    </div>
  );
}

/** Sofia: Content calendar — recipe + date + Content Plan. Seasonal suggestions. */
function SofiaPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;
  const t = "#2D3B2D";

  const planned = [
    { recipe: "beetroot", date: "Feb 24", contentPlan: "Reels — overhead flat lay, microgreens" },
    { recipe: "cauliflwr", date: "Feb 28", contentPlan: "Blog — step-by-step, golden hour" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: t }}>Your Content Calendar</h2>
      <div className="space-y-4">
        {planned.map((p, i) => {
          const f = FOOD[p.recipe];
          return f ? (
            <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}>
              <div className="flex gap-4">
                <FoodImage foodKey={p.recipe} name={f.name} gradient={f.gradient} emoji={f.emoji} className="w-20 h-20 rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <button onClick={() => onRecipeClick?.(p.recipe)} className="font-semibold text-left" style={{ color: t }}>{f.name}</button>
                  <p className="text-sm text-gray-500 mt-0.5">{p.date}</p>
                  <p className="text-xs mt-2 italic" style={{ color: a }}>{p.contentPlan}</p>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(168,192,151,0.2)" }}>
        <p className="text-sm font-medium mb-1" style={{ color: t }}>Seasonal</p>
        <p className="text-sm" style={{ color: t }}>Delicata squash is peaking. Three photogenic recipes using it this week.</p>
      </div>
      <p className="text-xs mt-4 opacity-70" style={{ color: t }}>You've shared 3 grain bowls this month — smoked beet tartare would break the pattern.</p>
    </div>
  );
}

/** Walt: Minimal "This Weekend" — 1–2 slots. Prep Reminders. */
function WaltPlanner({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;

  const slots = [
    { day: "Saturday", recipe: "brisket" },
    { day: "Sunday", recipe: null },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#1A1614" }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: t }}>This Weekend</h2>
      <div className="space-y-4">
        {slots.map((slot) => {
          const f = slot.recipe ? FOOD[slot.recipe] : null;
          return (
            <div key={slot.day} className="p-5 rounded-xl" style={{ backgroundColor: "#251F1C", border: `1px solid ${a}30` }}>
              <div className="text-sm font-semibold mb-2" style={{ color: t }}>{slot.day}</div>
              {f ? (
                <button onClick={() => onRecipeClick?.(slot.recipe)} className="text-lg font-bold" style={{ color: t }}>{f.name}</button>
              ) : (
                <button className="text-base opacity-70" style={{ color: t }}>Tap to add</button>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: "#251F1C", border: `1px solid ${a}30` }}>
        <h3 className="text-base font-semibold mb-2" style={{ color: t }}>Prep Reminder</h3>
        <p className="text-base" style={{ color: t }}>If you're doing brisket Saturday, rub it Friday night for a better bark.</p>
      </div>
    </div>
  );
}

/** Casey: Theme-based — Korean BBQ Night, Argentine Asado, etc. Suggested menus. */
function CaseyPlanner({ persona, onRecipeClick }) {
  const a = persona.accent;
  const [theme, setTheme] = useState("korean");

  const themes = {
    korean: { name: "Korean BBQ Night", main: "gochujang", sides: ["cauliflwr"], drink: "Soju or rice beer" },
    argentine: { name: "Argentine Asado", main: "asado", sides: ["mole"], drink: "Malbec" },
    fusion: { name: "Fusion Feast", main: "thaifish", sides: ["queso", "wings"], drink: "Sake cocktail" },
    plant: { name: "Plant-Forward Gathering", main: "cauliflwr", sides: ["beetroot"], drink: "Sparkling agua fresca" },
  };

  const current = themes[theme];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#F5EDE8" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: "#3A2A20" }}>Your Next Cookout</h2>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {Object.keys(themes).map((k) => (
          <button key={k} onClick={() => setTheme(k)} className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium ${theme === k ? "" : "opacity-60"}`} style={{ backgroundColor: theme === k ? a + "25" : "#E8E0D8", color: "#3A2A20" }}>{themes[k].name}</button>
        ))}
      </div>
      {current && (
        <div className="p-5 rounded-2xl mb-4" style={{ backgroundColor: "white", border: `2px solid ${a}30` }}>
          <h3 className="font-bold mb-4" style={{ color: "#3A2A20" }}>{current.name}</h3>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#3A2A20" }}>Main</span>
              {FOOD[current.main] && <button onClick={() => onRecipeClick?.(current.main)} className="block font-semibold mt-0.5" style={{ color: a }}>{FOOD[current.main].name}</button>}
            </div>
            <div>
              <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#3A2A20" }}>Sides</span>
              <div className="mt-0.5 space-y-1">
                {current.sides.map((k) => FOOD[k] && <button key={k} onClick={() => onRecipeClick?.(k)} className="block text-sm" style={{ color: "#3A2A20" }}>{FOOD[k].name}</button>)}
              </div>
            </div>
            <div>
              <span className="text-xs font-medium uppercase opacity-70" style={{ color: "#3A2A20" }}>Drink</span>
              <p className="text-sm mt-0.5" style={{ color: "#3A2A20" }}>{current.drink}</p>
            </div>
          </div>
          {theme === "korean" && (
            <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: a + "15" }}>
              <p className="text-xs" style={{ color: "#3A2A20" }}><strong>Prep:</strong> Gochujang marinade — start 24 hours ahead for best flavor.</p>
            </div>
          )}
        </div>
      )}
      <button className="w-full py-3 rounded-xl font-semibold" style={{ backgroundColor: a, color: "white" }}>Swap an element</button>
    </div>
  );
}

const PLANNER_SECTIONS = {
  dave: DavePlanner,
  priya: PriyaPlanner,
  "tom-linda": TomLindaPlanner,
  marcus: MarcusPlanner,
  jen: JenPlanner,
  ray: RayPlanner,
  sofia: SofiaPlanner,
  walt: WaltPlanner,
  casey: CaseyPlanner,
};

/** Persona-aware Meal Planner section. */
export function MealPlannerSection({ persona, onRecipeClick }) {
  const pid = persona?.id || "dave";
  const Planner = PLANNER_SECTIONS[pid] || DavePlanner;
  return <Planner persona={persona} onRecipeClick={onRecipeClick} />;
}

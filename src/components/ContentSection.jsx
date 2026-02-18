import { ImagePlaceholder } from './ImagePlaceholder';

/** Dave: "From the Pit" — single long-form card, craft-focused, minimal. */
function DaveContent({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;

  const article = {
    title: "The Science of Smoke Rings",
    summary: "A deep dive into nitric oxide, myoglobin, and why that pink band matters to pitmasters.",
    type: "Long Read",
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#1C1210" }}>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-3" style={{ color: t }}>From the Pit</div>
      <article className="rounded-lg overflow-hidden" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
        <ImagePlaceholder aspect="2/1" className="w-full" prompt="A picture of a cross-section of smoked brisket showing the pink smoke ring" />
        <div className="p-4">
          <span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>{article.type}</span>
          <h2 className="text-base font-mono font-bold mt-1 mb-2" style={{ color: t }}>{article.title}</h2>
          <p className="text-sm font-mono opacity-80" style={{ color: t }}>{article.summary}</p>
        </div>
      </article>
      <p className="text-xs font-mono opacity-50 mt-4" style={{ color: t }}>Offset vs. pellet for competition brisket — coming next week.</p>
    </div>
  );
}

/** Priya: Feed mixing formats — technique videos, articles, interviews, cultural histories. Diverse. */
function PriyaContent({ persona }) {
  const t = "#5C3A1E";
  const a = persona.accent;

  const items = [
    { type: "video", title: "Smoking with Mole — Oaxacan Technique", tag: "2 min", aspect: "video", badge: "12K cooks", prompt: "A picture of Oaxacan mole paste in a traditional clay pot" },
    { type: "article", title: "Pitmaster Interview: Tea-Smoked Trout", tag: "8 min read", aspect: "4/3", badge: "Technique", prompt: "A picture of tea-smoked trout on a wooden board" },
    { type: "article", title: "The Smoke Traditions of South America", tag: "Long Form", aspect: "video", badge: null, prompt: "A picture of an Argentine asado grill with meat smoking" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFF8F0" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: t }}>Curated for You</h2>
      <div className="space-y-5">
        {items.map((item, i) => (
          <article key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid rgba(232,151,107,0.2)" }}>
            <div className="relative">
              <ImagePlaceholder aspect={item.aspect} prompt={item.prompt} />
              <span className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}>{item.tag}</span>
              {item.badge && <span className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: a + "90", color: "white" }}>{item.badge}</span>}
            </div>
            <div className="p-4">
              <h3 className="font-semibold" style={{ color: t }}>{item.title}</h3>
              <span className="text-xs mt-1" style={{ color: a }}>Tap to explore →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Tom & Linda: Social, hosting-focused. "What Other Hosts Are Cooking," seasonal. */
function TomLindaContent({ persona }) {
  const t = "#5C4A3A";
  const a = persona.accent;

  const items = [
    { title: "What Other Hosts Are Cooking This Weekend", image: "video", desc: "Popular entertaining menus", prompt: "A picture of grilled appetizers and mains on an outdoor table" },
    { title: "Memorial Day Menu Ideas", image: "4/3", desc: "Three-course grilled dinner", prompt: "A picture of a Memorial Day grill spread with ribs, corn, and coleslaw" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FFFBF5" }}>
      <h2 className="text-xl font-bold mb-4" style={{ color: t }}>Content for Hosts</h2>
      <div className="space-y-6">
        {items.map((item, i) => (
          <article key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: "2px solid rgba(196,154,108,0.2)" }}>
            <ImagePlaceholder aspect={item.image} prompt={item.prompt} />
            <div className="p-5">
              <h3 className="text-lg font-bold" style={{ color: t }}>{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Marcus: "Learn" — structured series "Your First 5 Cooks," short-form tips. */
function MarcusContent({ persona }) {
  const t = "#2D3B2D";
  const a = persona.accent;

  const series = [
    { num: 1, title: "Burgers", learned: "Temperature basics", done: true },
    { num: 2, title: "Chicken", learned: "Smoke flavor", done: true },
    { num: 3, title: "Pulled Pork", learned: "Timing & rest", done: false },
    { num: 4, title: "Ribs", learned: "Wrapping", done: false },
    { num: 5, title: "Brisket", learned: "The full journey", done: false },
  ];

  const tips = [
    { title: "3 Things Every New Griller Gets Wrong", aspect: "video", prompt: "A picture of a thermometer in meat on a grill" },
    { title: "The Only Rub Recipe You Need to Start", aspect: "square", prompt: "A picture of spice rub in small bowls" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <h2 className="text-xl font-bold mb-4" style={{ color: t }}>Your First 5 Cooks</h2>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {series.map((s) => (
          <div key={s.num} className={`shrink-0 w-28 p-3 rounded-xl text-center ${s.done ? "" : "opacity-60"}`} style={{ backgroundColor: s.done ? a + "20" : "#E8E8E8" }}>
            <div className="text-2xl font-bold" style={{ color: s.done ? a : "#999" }}>{s.num}</div>
            <div className="text-sm font-medium" style={{ color: t }}>{s.title}</div>
            <div className="text-[10px] mt-0.5" style={{ color: "#666" }}>{s.learned}</div>
            {s.done && <span className="text-xs">✓</span>}
          </div>
        ))}
      </div>
      <h3 className="text-base font-bold mt-6 mb-3" style={{ color: t }}>Quick Tips</h3>
      <div className="space-y-4">
        {tips.map((tip, i) => (
          <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #E0E0E0" }}>
            <ImagePlaceholder aspect={tip.aspect} prompt={tip.prompt} />
            <div className="p-4">
              <h4 className="font-semibold" style={{ color: t }}>{tip.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Jen: Minimal — single "New This Week" card, short and practical. */
function JenContent({ persona }) {
  const t = "#5C4020";
  const a = persona.accent;

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFFBF5" }}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">New This Week</h2>
      <article className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
        <ImagePlaceholder aspect="4/3" prompt="A picture of marinade bowls with chicken and vegetables" />
        <div className="p-4">
          <h3 className="font-bold" style={{ color: t }}>5 Weeknight Marinades That Work on Any Protein</h3>
          <p className="text-sm text-gray-500 mt-1">Same 40 minutes as your go-to chicken. Rotate through the week.</p>
        </div>
      </article>
      <div className="mt-6 p-3 rounded-lg" style={{ backgroundColor: "rgba(212,167,106,0.12)" }}>
        <p className="text-xs" style={{ color: t }}>The Freezer-to-Traeger Cheat Sheet — thaw times and temps.</p>
      </div>
    </div>
  );
}

/** Ray: Almost nonexistent — competition results, rule changes, technical. */
function RayContent({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;

  const items = [
    { title: "Houston Livestock Show — Results Posted", type: "Event" },
    { title: "Post-Oak vs. Hickory: A Thermal Analysis", type: "Technical" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#0F0A08" }}>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-3" style={{ color: t }}>Competition & Technical</div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="p-4 rounded" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
            <span className="text-[10px] font-mono uppercase opacity-50" style={{ color: t }}>{item.type}</span>
            <h3 className="text-sm font-mono mt-1" style={{ color: t }}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Sofia: Core feature — feed of recipe videos, creator spotlights, technique tutorials, trend reports. */
function SofiaContent({ persona }) {
  const t = "#2D3B2D";
  const a = persona.accent;

  const items = [
    { title: "Smoked Desserts Are Having a Moment", tag: "TikTok Trend", aspect: "video", platform: "Reels", prompt: "A picture of smoked peaches with ice cream" },
    { title: "Creator Spotlight: @smokeandlens", tag: "Food Blogger", aspect: "3/4", platform: "Blog", prompt: "A picture of a food blogger with smoked brisket" },
    { title: "Best Angles for Shooting Smoked Food", tag: "Technique", aspect: "4/3", platform: "Reels", prompt: "A picture of smoked ribs from the side" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: t }}>Discover</h2>
      <div className="space-y-5">
        {items.map((item, i) => (
          <article key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}>
            <div className="relative">
              <ImagePlaceholder aspect={item.aspect} prompt={item.prompt} />
              <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: a + "80", color: "white" }}>{item.platform}</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold" style={{ color: t }}>{item.title}</h3>
              <span className="text-xs text-gray-500">{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Walt: "From the Pit" — 1–2 items, long-form, pitmaster profiles, oral histories. */
function WaltContent({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;

  const items = [
    { title: "Running a BBQ Joint at 60", subtitle: "A profile of a pitmaster in Memphis", aspect: "3/4", prompt: "A picture of a pitmaster tending an offset smoker" },
    { title: "The Story Behind Central Texas Post-Oak", subtitle: "Tradition and craft", aspect: "2/1", prompt: "A picture of post oak trees and barbecue pits in Central Texas" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#1A1614" }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: t }}>From the Pit</h2>
      <div className="space-y-6">
        {items.map((item, i) => (
          <article key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "#251F1C", border: `1px solid ${a}30` }}>
            <ImagePlaceholder aspect={item.aspect} prompt={item.prompt} />
            <div className="p-5">
              <h3 className="text-lg font-bold" style={{ color: t }}>{item.title}</h3>
              <p className="text-base mt-1 opacity-80" style={{ color: t }}>{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Casey: Richest — world tour, technique videos, cultural deep-dives, flavor paths. */
function CaseyContent({ persona }) {
  const t = "#3A2A20";
  const a = persona.accent;

  const flavorPaths = [
    { name: "The Smoke Traditions of South America", aspect: "video", prompt: "A picture of an Argentine asado grill with meat" },
    { name: "Fermented + Smoked: A Flavor Exploration", aspect: "4/3", prompt: "A picture of kimchi and smoked brisket together" },
  ];

  const items = [
    { title: "Whole Smoked Cauliflower with Gochujang", tag: "Korean + Fusion", aspect: "square", prompt: "A picture of a whole smoked cauliflower with gochujang glaze" },
    { title: "Pitmaster in Oaxaca — Mole Technique", tag: "Cultural", aspect: "video", prompt: "A picture of an Oaxacan pitmaster preparing mole" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#F5EDE8" }}>
      <h2 className="text-lg font-bold mb-4" style={{ color: t }}>Flavor Paths</h2>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {flavorPaths.map((fp, i) => (
          <div key={i} className="shrink-0 w-48 rounded-2xl overflow-hidden" style={{ border: `2px solid ${a}30` }}>
            <ImagePlaceholder aspect={fp.aspect} prompt={fp.prompt} />
            <div className="p-3 bg-white">
              <h3 className="text-sm font-semibold" style={{ color: t }}>{fp.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-base font-bold mt-6 mb-3" style={{ color: t }}>For You</h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <article key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "white", border: "1px solid #E8E0D8" }}>
            <ImagePlaceholder aspect={item.aspect} className="w-24 shrink-0 rounded-lg" prompt={item.prompt} />
            <div className="min-w-0">
              <h4 className="font-semibold" style={{ color: t }}>{item.title}</h4>
              <span className="text-xs mt-1" style={{ color: a }}>{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const CONTENT_SECTIONS = {
  dave: DaveContent,
  priya: PriyaContent,
  "tom-linda": TomLindaContent,
  marcus: MarcusContent,
  jen: JenContent,
  ray: RayContent,
  sofia: SofiaContent,
  walt: WaltContent,
  casey: CaseyContent,
};

/** Persona-aware Curated Content section. */
export function ContentSection({ persona }) {
  const pid = persona?.id || "dave";
  const Section = CONTENT_SECTIONS[pid] || DaveContent;
  return <Section persona={persona} />;
}

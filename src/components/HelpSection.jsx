import { useState } from 'react';
import { Icon } from './Icon';

/** Dave: Troubleshooting-first — search bar, categories by issue type. Direct and technical. */
function DaveHelp({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const categories = [
    {
      title: "Grill Hardware",
      items: [
        { q: "Grill won't ignite", a: "Check hot rod connection. If glow is weak or absent, hot rod may need replacement. Part #TRG-HR-001." },
        { q: "Temp swings ±20°F", a: "Clean burn pot. Ash buildup restricts airflow. Run shutdown cycle, vacuum after cool." },
        { q: "Erratic temp — spikes then drops", a: "Controller may be overshooting. Check drip tray isn't blocking airflow. Grease fire can cause spikes — clean regularly." },
        { q: "Lid gasket peeling or cracked", a: "Replace gasket when seal fails. Temp stability suffers. Part #TRG-GSK-001. Clean surface before applying." },
        { q: "Hopper lid won't latch", a: "Check for pellet debris in latch mechanism. Bent rod — straighten or replace. Common after accidental drop." },
        { q: "Grill shuts down unexpectedly", a: "Safety shutdown from excess heat or pellet jam. Let cool 10 min. Check burn pot. Clear auger if jam suspected." },
      ],
    },
    {
      title: "Connectivity",
      items: [
        { q: "App can't connect to grill", a: "Ensure grill and phone on same WiFi. Grill uses 2.4GHz only. Check router band." },
        { q: "Probe drops mid-cook", a: "Bluetooth range ~30 ft. Move closer or reseat probe. Check battery if wireless." },
        { q: "Connection lost after firmware update", a: "Re-pair grill in app. Delete grill, add again. WiFi credentials may have reset." },
        { q: "Multiple probes — one reads —", a: "That port may be unresponsive. Try another port. Replace probe if it fails in multiple ports." },
        { q: "Grill shows offline but powered on", a: "Router may have assigned new IP. Reboot router. Check grill WiFi LED. Re-enter credentials if needed." },
      ],
    },
    {
      title: "Probe Calibration",
      items: [
        { q: "Probe reading 15°F above ambient", a: "May indicate damaged thermistor. Try recalibrating in Settings > Probes > Calibrate. Replace if drift persists." },
        { q: "Ice bath reads 38°F", a: "Calibrate: Settings > Probes > Calibrate. Enter 32. Offset applied. Retest." },
        { q: "Probe drifts during long cook", a: "Some drift normal over 8+ hrs. Recalibrate between cooks. Replace if >5°F drift in 4 hrs." },
        { q: "Second probe reads differently than first", a: "Normal — calibrate each independently. Probes have ±2°F tolerance. Trust internal consistency." },
      ],
    },
    {
      title: "Pellet Feed",
      items: [
        { q: "Temp dropped 40°F in 5 minutes", a: "Likely pellet tunnel jam. Run shutdown. Clear auger. Restart. Use dry pellets." },
        { q: "Auger won't turn", a: "Jam in auger tube. Power off. Cool completely. Remove pellets from hopper. Reach in and clear obstruction. Motor may need replacement if grinding noise." },
        { q: "Pellets bridge in hopper", a: "Tap hopper. Don't overfill — leave headspace. Moist pellets stick — store in dry place." },
        { q: "Excess smoke, no heat", a: "Pellets may be damp. Burn pot overloaded. Run at high temp 10 min to clear. Replace pellets if moldy." },
        { q: "Low pellet alarm during cook", a: "Add pellets. Don't mix wood types mid-cook — flavor shift. Top off before long cooks." },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#1C1210" }}>
      <input
        type="search"
        placeholder="Search troubleshooting..."
        className="w-full px-4 py-3 rounded-lg mb-4 font-mono text-sm"
        style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.1)", color: t }}
      />
      <div className="space-y-3">
        {categories.map((cat, ci) => (
          <div key={cat.title}>
            <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2" style={{ color: t }}>{cat.title}</div>
            <div className="space-y-1">
              {cat.items.map((item, ii) => {
                const key = `${ci}-${ii}`;
                const isOpen = expanded === key;
                return (
                  <div key={key} className="rounded" style={{ backgroundColor: "#251A15", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <button onClick={() => setExpanded(isOpen ? null : key)} className="w-full px-4 py-3 text-left flex justify-between items-center">
                      <span className="text-sm font-mono" style={{ color: t }}>{item.q}</span>
                      <Icon name={isOpen ? "minus" : "plus"} size={18} style={{ color: a }} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-sm font-mono opacity-90" style={{ color: t }}>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Priya: Learning-forward — concepts, not troubleshooting. Understanding Smoke, Temp Management, etc. */
function PriyaHelp({ persona }) {
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const concepts = [
    {
      title: "Understanding Smoke",
      content: "Smoke flavor comes from incomplete combustion — wood particles and gases that adhere to the meat. Low temps (200–275°F) produce more smoke; high temps produce less. The 'blue smoke' you want is thin and almost invisible. Thick white smoke tastes bitter. Think of it like a seasoning: a little goes a long way, and the first 2–3 hours of a long cook absorb the most.",
      video: "2:30",
    },
    {
      title: "Temperature Management",
      content: "Pellet grills use a controller to maintain temp by feeding pellets. Small swings (±10°F) are normal. Big swings mean check your burn pot and pellets. Ambient weather affects performance — cold and wind require more fuel. In winter, expect longer preheat. A thermal blanket can help in extreme cold.",
      video: "3:15",
    },
    {
      title: "Timing Your Cook",
      content: "Internal temp is the real guide, not time. Use a probe and cook to temp, not to the clock. Rest time matters — proteins need 10–30 min to reabsorb juices after coming off heat. A 12-lb brisket might take 10 hrs or 16 hrs — both are normal. The stall explains the variance.",
      video: "1:45",
    },
    {
      title: "Wood & Pellet Flavors",
      content: "Hickory: bold, bacon-like. Apple: mild, fruity. Cherry: sweet, great for poultry. Mesquite: strong, use sparingly. Oak: neutral, good for long cooks. Blend pellets for complexity. Pecan is like a milder hickory. Maple adds sweetness. Match wood to protein: fish and poultry like milder woods; beef and pork handle stronger.",
      video: "2:00",
    },
    {
      title: "The Stall Explained",
      content: "Around 150–165°F internal, beef and pork can stall for hours. Evaporative cooling from rendered fat competes with heat. It's normal. Options: wait it out, wrap in butcher paper or foil to speed through, or plan extra time. Wrapping trades bark development for speed.",
      video: "3:45",
    },
    {
      title: "Resting Meat — Why It Matters",
      content: "When you pull meat off heat, the center is still cooking (carryover). Resting lets temps equalize and juices redistribute. Pull beef 5–10°F below target; it'll climb during rest. Rest 10–30 min depending on size. Tent loosely with foil — don't seal or you'll steam the bark.",
      video: "2:15",
    },
    {
      title: "Choosing Your First Cook",
      content: "Start with something forgiving: chicken thighs at 375°F, or pork shoulder low-and-slow. Burgers and hot dogs teach you the basics without much risk. Brisket and ribs can wait until you're comfortable with temp control and probe placement.",
      video: "4:00",
    },
    {
      title: "Pellet Storage & Freshness",
      content: "Keep pellets dry. Moisture causes clumping and poor combustion. Store in a sealed container or dry garage. Use within 6–12 months for best results. Old pellets can still work but may produce less predictable smoke.",
      video: "1:30",
    },
    {
      title: "Smoke Rings & Bark",
      content: "Smoke ring forms in the first few hours when nitric oxide from combustion reacts with myoglobin. It's cosmetic but satisfying. Bark comes from the rub, time, and humidity. Spraying with apple cider vinegar or water can slow bark formation if you want more smoke penetration first.",
      video: "2:45",
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFF8F0" }}>
      <input
        type="search"
        placeholder="Ask a question... e.g. Why is my brisket stalling?"
        className="w-full px-4 py-3 rounded-xl mb-6 text-sm"
        style={{ backgroundColor: "white", border: "1px solid rgba(232,151,107,0.3)", color: "#5C3A1E" }}
      />
      <div className="space-y-4">
        {concepts.map((c, i) => {
          const isOpen = expanded === i;
          return (
            <div key={c.title} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid rgba(232,151,107,0.2)" }}>
              <button onClick={() => setExpanded(isOpen ? null : i)} className="w-full px-5 py-4 text-left flex justify-between items-center">
                <span className="font-semibold" style={{ color: "#5C3A1E" }}>{c.title}</span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: a }}><Icon name="play" size={12} /> {c.video}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm leading-relaxed" style={{ color: "#5C3A1E" }}>{c.content}</p>
                  <button className="mt-3 text-sm font-medium" style={{ color: a }}>Learn More</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Tom & Linda: Task-oriented, large tap targets. Common questions with step-by-step answers. */
function TomLindaHelp({ persona }) {
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const questions = [
    { q: "How do I start the grill?", steps: ["1. Fill pellet hopper with dry pellets.", "2. Open lid, set dial to Smoke.", "3. Press Ignite and wait 4–5 min for smoke.", "4. Set target temp. Grill will reach it in ~15 min."] },
    { q: "What temperature for chicken?", steps: ["Poultry: 375°F for crispy skin, or 325°F for slower smoke.", "Internal temp: 165°F at thickest part.", "Let rest 5–10 min before serving."] },
    { q: "What temperature for pork?", steps: ["Pork chops/tenderloin: 145°F internal.", "Pulled pork (shoulder): 195–203°F — until it shreds easily with a fork.", "Ribs: 195–203°F for fall-off-the-bone, or probe for tenderness."] },
    { q: "What temperature for beef?", steps: ["Steak: 125°F rare to 145°F medium.", "Brisket: 195–203°F — probe should slide in like butter.", "Ribs: Same as pork — 195–203°F or probe tenderness."] },
    { q: "My grill won't connect.", steps: ["1. Confirm grill and phone on same WiFi network.", "2. Grill uses 2.4GHz — some routers default to 5GHz.", "3. Try moving closer to the grill during setup.", "4. Restart both grill and app."] },
    { q: "How do I clean the grill?", steps: ["After each cook: scrape grates, empty drip tray.", "After 5–10 cooks: vacuum burn pot (when cool).", "Seasonally: deep clean, check gasket, inspect auger."] },
    { q: "Can I use it in the rain?", steps: ["Light rain is fine — the lid keeps the fire dry.", "Heavy rain: move under cover or use a grill shelter.", "Never use in an enclosed space (garage, covered porch with low ceiling)."] },
    { q: "Cooking for a crowd? Time three dishes.", steps: ["Use the Meal Planner event builder. Add mains and sides. The app generates a unified timeline. Start with the longest cook, add shorter items so everything lands together."] },
    { q: "My food is done early. What now?", steps: ["Wrap in foil, then in a towel. Put in a cooler. It'll stay hot 2–4 hours.", "Or hold in the grill: set to 170°F and leave it. Add water pan for humidity."] },
    { q: "How do I know when ribs are done?", steps: ["Internal temp: 195–203°F.", "Bend test: pick up with tongs — they should bend and crack slightly.", "Probe test: probe slides between bones with little resistance."] },
    { q: "Grill won't light. What do I do?", steps: ["1. Check pellet hopper has pellets.", "2. Run a shutdown cycle (power off, wait 5 min).", "3. Power on, set to Smoke, press Ignite.", "4. If no glow after 2 min, hot rod may need replacement."] },
    { q: "What pellets should I use?", steps: ["Hickory and oak: all-purpose, great for beef and pork.", "Apple and cherry: milder, good for poultry and fish.", "Use food-grade pellets from a brand you trust. Cheap pellets can cause jams."] },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FFFBF5" }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: "#5C4A3A" }}>How can we help?</h2>
      <div className="space-y-3">
        {questions.map((item, i) => {
          const isOpen = expanded === i;
          return (
            <button
              key={item.q}
              onClick={() => setExpanded(isOpen ? null : i)}
              className="w-full p-5 rounded-2xl text-left"
              style={{ backgroundColor: "white", border: `2px solid ${isOpen ? a : "#EEE8E0"}` }}
            >
              <span className="text-lg font-semibold" style={{ color: "#5C4A3A" }}>{item.q}</span>
              {isOpen && (
                <div className="mt-4 space-y-2">
                  {item.steps.map((step, j) => (
                    <p key={j} className="text-base" style={{ color: "#5C4A3A" }}>{step}</p>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Marcus: Friendly FAQ, short answers, "First Timer?" section. Warm and encouraging. */
function MarcusHelp({ persona }) {
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const faq = [
    { q: "What are pellets?", a: "Wood pellets are compressed sawdust. They feed into a burn pot where they ignite and produce heat and smoke. Different woods (hickory, apple, cherry) add different flavors. Traeger pellets are food-safe and designed for pellet grills." },
    { q: "How do I know when it's done?", a: "Use a probe! Cook to internal temp, not time. Chicken: 165°F. Pork: 195–203°F for pulled. Beef: 135°F rare to 203°F for brisket. The app will tell you when you're close." },
    { q: "What if it starts raining?", a: "Pellet grills are safe in light rain — the lid keeps the fire dry. For heavy rain, move the grill under cover or use a grill shelter. Never use in an enclosed space." },
    { q: "First Timer? — Your Grill Control Screen", a: "The big number is grill temp. The target is what you set. Green = you're good. Blue = still heating up. Amber = drifting. Tap 'What's Happening?' anytime for a friendly explanation." },
    { q: "What if my temp flatlines for an hour?", a: "That's the stall — totally normal for brisket and pork shoulder. The meat is sweating and cooling itself. It'll push through. You can wrap in foil to speed it up, or just wait." },
    { q: "Can I leave it running while I'm inside?", a: "Yes! That's one of the best parts. The app will alert you when it's done. Just don't leave for hours without checking — pellet level, weather changes, and the occasional hiccup can happen." },
    { q: "What's the easiest thing to cook first?", a: "Chicken thighs at 375°F. Forgiving temp, quick cook, and hard to mess up. Or burgers — they teach you the basics fast." },
    { q: "Do I need to flip the meat?", a: "Usually no. Pellet grills cook with indirect heat, so both sides get even heat. Flip only if a recipe says to, or for a quick sear at the end." },
    { q: "Why does my app say 'preheating' for so long?", a: "Cold weather, wind, or a full hopper of cold pellets can slow preheat. Give it 15–20 min in winter. Once it's close, you're good to add food." },
    { q: "What if I run out of pellets mid-cook?", a: "Add more! Try to use the same wood type so flavor stays consistent. Top off before long cooks so you don't have to worry." },
    { q: "Is it safe to use on a wooden deck?", a: "Yes, but use a grill mat underneath to catch drips and protect the deck. Keep the grill away from railings and overhangs. Follow the manual's clearances." },
    { q: "What does 'rest' mean?", a: "After cooking, let the meat sit 5–30 min before cutting. The juices redistribute, and the center keeps cooking a bit. Your meat will be juicier and more tender." },
    { q: "I've never grilled before. Where do I start?", a: "Pick the 'What Should I Cook?' button on your dashboard. The app will guide you to an easy first cook. Start with something simple like chicken or burgers. You've got this." },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="mb-6 p-4 rounded-2xl" style={{ backgroundColor: a + "15", border: `2px solid ${a}30` }}>
        <h3 className="font-bold text-lg mb-1" style={{ color: "#333" }}>First Timer?</h3>
        <p className="text-sm" style={{ color: "#555" }}>New to pellet grilling? Start here — we'll walk you through the app.</p>
      </div>
      <div className="space-y-3">
        {faq.map((item, i) => {
          const isOpen = expanded === i;
          return (
            <div key={item.q} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #EEE", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <button onClick={() => setExpanded(isOpen ? null : i)} className="w-full px-5 py-4 text-left flex justify-between">
                <span className="font-semibold pr-4" style={{ color: "#333" }}>{item.q}</span>
                <Icon name={isOpen ? "minus" : "plus"} size={18} className="shrink-0" style={{ color: a }} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{item.a}</p>
                  <a href="#" className="inline-block mt-3 text-sm font-medium" style={{ color: a }}>Learn More</a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Jen: Search bar + three buttons. Brief, action-oriented. Numbered steps, no why. */
function JenHelp({ persona }) {
  const a = persona.accent;
  const [selected, setSelected] = useState(null);

  const topics = {
    grill: {
      title: "Grill Won't Start",
      steps: [
        "Check pellet hopper has pellets.",
        "Run shutdown cycle: power off, wait 5 min.",
        "Power on, set to Smoke, press Ignite.",
        "If no glow after 2 min, hot rod may need replacement.",
        "Check power cord and outlet.",
        "Clear burn pot of ash from previous cook.",
      ],
    },
    food: {
      title: "Food Isn't Cooking Right",
      steps: [
        "Verify probe is in center of thickest part.",
        "Avoid bone — gives false reading.",
        "Check grill temp is holding (not swinging ±30°).",
        "Rest 10+ min after cook — carryover continues.",
        "Cold or windy? Grill works harder — add time.",
        "Wrapping speeds things up but softens bark.",
      ],
    },
    app: {
      title: "App Problem",
      steps: [
        "Force quit app, reopen.",
        "Confirm phone and grill on same WiFi.",
        "Restart grill: power off 1 min, power on.",
        "Re-pair in Settings if connection lost.",
        "Check phone WiFi is 2.4GHz (grill doesn't use 5GHz).",
      ],
    },
    notif: {
      title: "Not Getting Notifications",
      steps: [
        "Check app notification permissions in phone Settings.",
        "Confirm you're logged in and grill is paired.",
        "Enable alerts for this cook in grill screen.",
        "Do Not Disturb can block — check phone mode.",
      ],
    },
    pellets: {
      title: "Pellet Hopper Low / Jam",
      steps: [
        "Add pellets. Don't mix wood types mid-cook.",
        "If auger stuck: power off, cool, clear hopper.",
        "Reach in and clear auger tube if jammed.",
        "Store pellets dry — moisture causes clumping.",
      ],
    },
    connect: {
      title: "Grill Won't Connect to WiFi",
      steps: [
        "Grill uses 2.4GHz only. Check router band.",
        "Move phone and grill closer during setup.",
        "Restart router, then grill, then app.",
        "Re-enter WiFi password in grill settings.",
      ],
    },
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FFFBF5" }}>
      <input
        type="search"
        placeholder="Search..."
        className="w-full px-4 py-3 rounded-lg mb-4 text-sm"
        style={{ backgroundColor: "white", border: "1px solid #E0D5C8", color: "#5C4020" }}
      />
      <div className="grid grid-cols-1 gap-3 mb-6">
        {["grill", "food", "app", "notif", "pellets", "connect"].map((key) => (
          <button
            key={key}
            onClick={() => setSelected(selected === key ? null : key)}
            className="p-4 rounded-xl text-left font-semibold"
            style={{
              backgroundColor: selected === key ? a + "20" : "white",
              border: `2px solid ${selected === key ? a : "#E0D5C8"}`,
              color: "#5C4020",
            }}
          >
            {key === "grill" && "Grill Won't Start"}
            {key === "food" && "Food Isn't Cooking Right"}
            {key === "app" && "App Problem"}
            {key === "notif" && "Not Getting Notifications"}
            {key === "pellets" && "Pellet Hopper Low / Jam"}
            {key === "connect" && "Grill Won't Connect to WiFi"}
          </button>
        ))}
      </div>
      {selected && topics[selected] && (
        <div className="p-4 rounded-xl" style={{ backgroundColor: "white", border: "1px solid #EEE8E0" }}>
          <h3 className="font-bold mb-3" style={{ color: "#5C4020" }}>{topics[selected].title}</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm" style={{ color: "#5C4020" }}>
            {topics[selected].steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

/** Ray: Technical only. Firmware, probe calibration, maintenance. Documentation tone. */
function RayHelp({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const sections = [
    {
      title: "Firmware",
      content: "v2.4.1 — Dual-zone profiles live. Changelog: improved ambient stability in high humidity, probe polling at 2s intervals. OTA updates auto-install when grill on WiFi. Manual: Settings > Grill > Check for Update. Rollback not supported — backup cook profiles before updating.",
    },
    {
      title: "Probe Calibration",
      content: "Ice bath: fill vessel with ice + water, wait 5 min. Probe should read 32°F ±2. Boiling: 212°F at sea level. Calibrate in Settings > Probes > Calibrate. Replace if drift >5°F or inconsistent between ports. Thermistor failure shows as ambient+15°F or erratic jump.",
    },
    {
      title: "Maintenance Schedule",
      content: "Burn pot: after every 20 hrs. Drip tray: every 5–10 cooks. Fire pot: monthly if heavy use. Gasket: inspect quarterly. Auger: clear if jam suspected. Full clean: before storage season. Hot rod: replace if no glow on ignite (avg 500–800 hrs).",
    },
    {
      title: "WiFi Troubleshooting",
      content: "2.4GHz only. Channel 1, 6, or 11 recommended. Disable router band steering. Static IP optional. Test: ping grill IP from network. Re-pair if router assigned new DHCP lease. API: GET /api/v1/status for cook data export.",
    },
    {
      title: "Probe Compatibility",
      content: "Standard 3.5mm thermocouple. Compatible with Traeger probe set, Thermoworks Smoke, FireBoard. Third-party probes may require calibration offset. Max 4 probes. Bluetooth probes use separate pairing.",
    },
    {
      title: "Error Codes",
      content: "ERR_H1: High temp shutdown. ERR_L1: Ignition failure. ERR_RTD: Probe fault. ERR_PELLET: Auger jam. ERR_FAN: Fan failure. Full list: Settings > Help > Error Reference. Logs export to CSV.",
    },
    {
      title: "Auger Service",
      content: "Disconnect power. Remove hopper plate. Clear auger by hand — don't force. Check motor coupling. Run test cycle in Service Mode (Settings > Advanced). Motor PN: TRG-AUG-M01.",
    },
    {
      title: "Cook Data Export",
      content: "API: GET /api/v1/cooks/{id}/export returns JSON with timestamp, ambient, probe temps, phase. CSV export in app: Cook Log > Select cook > Export. Integrates with spreadsheet for analysis.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="text-xs font-mono uppercase tracking-wider opacity-60 mb-4" style={{ color: a }}>Technical</div>
      <div className="space-y-2">
        {sections.map((s, i) => {
          const isOpen = expanded === i;
          return (
            <div key={s.title} className="rounded" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
              <button onClick={() => setExpanded(isOpen ? null : i)} className="w-full px-4 py-3 text-left flex justify-between font-mono text-sm">
                <span style={{ color: a }}>{s.title}</span>
                <Icon name={isOpen ? "minus" : "plus"} size={18} style={{ color: t }} />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-xs font-mono leading-relaxed" style={{ color: t }}>{s.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Sofia: Technique help + Content Tips (photography, plating). Peer-to-peer tone. */
function SofiaHelp({ persona }) {
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const sections = [
    { title: "Low & Slow Basics", content: "225–250°F for maximum smoke. Patience is the secret. The stall at 160°F is normal — wrap or wait. Bark forms in the last few degrees. Great for brisket, pork shoulder, ribs.", video: true },
    { title: "Hot & Fast", content: "375–400°F for crispy skin on poultry, quick sear on steak. Less smoke, more char. Great for weeknight cooks under 45 min. Chicken thighs, wings, and burgers shine here.", video: true },
    { title: "Reverse Sear", content: "Low temp first to target internal, then high heat to crust. Best of both worlds for steak and thick cuts. Rest between phases.", video: true },
    { title: "Best Angles for Shooting Smoked Food", content: "Side angle at 45° catches smoke and sheen. Overhead flat lay for boards and platters. Close-up on bark texture. Golden hour light or diffuse window light. Avoid flat overhead for tall items — they look flat.", contentTip: true },
    { title: "How to Capture Steam and Smoke", content: "Shoot immediately out of the grill. Cold ambient makes smoke more visible. Slight backlight. Burst mode — you'll get one frame with the perfect wisp. Early morning or cool evening = more visible smoke.", contentTip: true },
    { title: "Plating for Instagram vs. Blog", content: "Instagram: square crop, bold color contrast, garnish on point. Blog: wider shots, step-by-step angles, hero shot that tells the story. Same dish, different crops.", contentTip: true },
    { title: "Vegan Proteins — Temps and Times", content: "Cauliflower, tofu, tempeh: 325–375°F. Shorter than meat — 30–60 min usually. Oil or marinade helps bark. No probe needed; go by color and texture.", video: true },
    { title: "Wood Choice for Plant-Based", content: "Apple and cherry are mild and don't overpower. Hickory can be strong for tofu. Pecan is a nice middle ground. Lighter woods let vegetable flavors shine.", video: true },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="space-y-3">
        {sections.map((s, i) => {
          const isOpen = expanded === i;
          return (
            <div key={s.title} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}>
              <button onClick={() => setExpanded(isOpen ? null : i)} className="w-full px-5 py-4 text-left flex justify-between">
                <span className="font-medium" style={{ color: "#2D3B2D" }}>{s.title}</span>
                {s.contentTip && <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: a + "25", color: a }}>Content</span>}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D3B2D" }}>{s.content}</p>
                  {s.video && <span className="inline-flex items-center gap-1.5 mt-2 text-sm" style={{ color: a }}><Icon name="play" size={16} /> Watch</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Walt: Hardware-focused, peer-level. Grill Maintenance, Troubleshooting. Large type. */
function WaltHelp({ persona }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const categories = [
    {
      title: "Grill Maintenance",
      items: [
        { q: "When to replace drip tray", a: "Every 20–30 cooks, or when grease buildup is heavy. Foil liners help — replace those more often." },
        { q: "Auger cleaning", a: "If pellets aren't feeding, run empty. Use shop vac on cold grill. Check for sawdust blockages." },
        { q: "Burn pot — how often to clean", a: "After every 20 hrs of cook time. Ash buildup restricts airflow and causes temp swings." },
        { q: "Gasket replacement", a: "When seal fails or you see smoke escaping. Clean surface, apply new gasket. Keeps temps stable." },
        { q: "Hot rod lifespan", a: "500–800 hrs typical. No glow on ignition = replace. Part available at dealer or online." },
      ],
    },
    {
      title: "Troubleshooting",
      items: [
        { q: "Probe reading unstable", a: "Usually a connection issue. Reseat the probe. If intermittent, try a different probe port. Replace probe if drift persists." },
        { q: "Temp won't hold", a: "Check burn pot for ash. Clean regularly. Cold or windy weather — grill works harder, give it time." },
        { q: "Grill shuts down mid-cook", a: "Safety shutdown. Let cool 10 min. Check burn pot and pellet feed. Restart." },
        { q: "Excess smoke, low heat", a: "Damp pellets or overloaded burn pot. Run high temp 10 min to clear. Replace pellets if needed." },
        { q: "App says offline but grill is on", a: "WiFi dropped. Re-enter credentials. Check router. Reboot both if needed." },
      ],
    },
    {
      title: "Firmware Updates",
      items: [
        { q: "How to update", a: "Grill on WiFi, powered on. Updates install automatically. You'll see a prompt. Takes 2–3 min. Don't power off mid-update." },
        { q: "Update failed — now what", a: "Don't panic. Power cycle. Reconnect WiFi. Check for update again. Contact support if repeat failure." },
      ],
    },
    {
      title: "Probe Calibration",
      items: [
        { q: "Probe reading high or low", a: "Ice bath should read 32°F. Calibrate in Settings > Probes. Replace if offset keeps drifting." },
        { q: "Calibrate before every cook?", a: "No. Once calibrated, good for a while. Recalibrate if you notice drift or after replacing probe." },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-6" style={{ backgroundColor: "#1A1614" }}>
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: t }}>{cat.title}</h3>
            <div className="space-y-2">
              {cat.items.map((item, i) => {
                const key = `${cat.title}-${i}`;
                const isOpen = expanded === key;
                return (
                  <div key={key} className="rounded-xl" style={{ backgroundColor: "#251F1C", border: `1px solid ${a}30` }}>
                    <button onClick={() => setExpanded(isOpen ? null : key)} className="w-full px-5 py-4 text-left flex justify-between items-center">
                      <span className="text-base" style={{ color: t }}>{item.q}</span>
                      <Icon name={isOpen ? "minus" : "plus"} size={18} style={{ color: a }} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0">
                        <p className="text-base leading-relaxed" style={{ color: t }}>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Casey: Techniques by tradition, Ingredient Guide, Substitution Guide. Curious and informative. */
function CaseyHelp({ persona }) {
  const a = persona.accent;
  const [expanded, setExpanded] = useState(null);

  const sections = [
    {
      title: "Techniques by Tradition",
      items: [
        "Korean: Lower temps (225–275°F), fruit wood. Gochujang burns above 350°F — low-and-slow is ideal.",
        "Argentine: Direct heat, asado-style. Post oak, minimal rub. Rest is sacred. Chimichurri at the end.",
        "Southern US: Hickory or oak. Wraps common. Sweet + spice. Yellow mustard slather is traditional.",
        "Japanese: Binchotan-style precision. Light smoke. Umami focus. Mirin, sake, miso in glazes.",
        "Tex-Mex: Mesquite or oak. Bold rubs. Wrap in foil with liquid for braise phase.",
        "Indian: Tandoori-style — hot and fast. Yogurt marinades. Char on the edges.",
      ],
    },
    {
      title: "Ingredient Guide",
      items: [
        "Gochujang: Korean fermented chili paste. Sub: sriracha + honey (different, but accessible).",
        "Dried chiles (guajillo, ancho): Toast 30 sec, seed, rehydrate. Or use chipotle powder.",
        "Yuzu: Citrus. Sub: lemon + grapefruit, or ponzu.",
        "Fish sauce: Umami bomb. A little goes far. Red Boat or Three Crabs are solid.",
        "Tajin: Mexican lime-chili salt. Great finishing sprinkle for fruits and veggies.",
        "Harissa: North African chili paste. Smoky and complex. Sub: sriracha + cumin + caraway.",
      ],
    },
    {
      title: "Substitution Guide",
      items: [
        "Plant-based: Smoked mushrooms, cauliflower, tofu. Same temps, shorter time. Add oil for bark.",
        "Spice equivalents: Paprika → pimentón. Cumin → ground or seed. Coriander → citrus notes.",
        "Meat swaps: Lamb for beef in most recipes. Tempeh for chicken in marinades. Portobello for burgers.",
        "Wood swaps: Cherry ≈ apple. Hickory ≈ pecan (pecan milder). Mesquite has no easy sub — use sparingly.",
      ],
    },
    {
      title: "Fusion Pairings",
      items: [
        "Korean + Southern: Gochujang glaze on ribs. Kimchi slaw with pulled pork.",
        "Argentine + Tex-Mex: Chimichurri on brisket tacos. Asado cuts with salsa verde.",
        "Japanese + American: Miso butter on corn. Teriyaki-style glaze on wings.",
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#F5EDE8" }}>
      <div className="space-y-4">
        {sections.map((sec, si) => {
          const isOpen = expanded === si;
          return (
            <div key={sec.title} className="rounded-xl overflow-hidden" style={{ backgroundColor: "white", border: `2px solid ${a}30` }}>
              <button onClick={() => setExpanded(isOpen ? null : si)} className="w-full px-5 py-4 text-left flex justify-between">
                <span className="font-bold" style={{ color: "#3A2A20" }}>{sec.title}</span>
                <Icon name={isOpen ? "minus" : "plus"} size={18} style={{ color: a }} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <ul className="space-y-3">
                    {sec.items.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed" style={{ color: "#3A2A20" }}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const HELP_SECTIONS = {
  dave: DaveHelp,
  priya: PriyaHelp,
  "tom-linda": TomLindaHelp,
  marcus: MarcusHelp,
  jen: JenHelp,
  ray: RayHelp,
  sofia: SofiaHelp,
  walt: WaltHelp,
  casey: CaseyHelp,
};

/** Persona-aware Help section. */
export function HelpSection({ persona }) {
  const pid = persona?.id || "dave";
  const Help = HELP_SECTIONS[pid] || DaveHelp;
  return <Help persona={persona} />;
}

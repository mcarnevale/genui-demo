# GenUI Demo App: Traeger Cooking Experience

## The Big Idea

A single cooking app that generates a completely unique interface for every user — not just personalized content, but personalized layout, typography, color, density, voice, and interaction patterns. The app's job is invisible: make every cook the hero to their family and friends.

This demo proves that Generative UI isn't about algorithmic narrowing (the TikTok problem). It's about understanding someone well enough to remove the specific obstacles between them and their next great cook.

---

## Onboarding Flow

### Screen 1: Choose a Persona or Build Your Own

Nine pre-built personas displayed as baseball cards in a 3x3 grid, plus a "Build Your Own" card as the tenth option.

Each baseball card shows:
- Photo
- Name and one-line description
- Five mini gradient bars showing their slider positions
- Nutrition tag/badge
- Hero moment line (italic, at the bottom)

Tapping a persona card pre-loads all sliders and drops you into the app. Tapping "Build Your Own" takes you through the full onboarding.

### Screen 2–6: The Five Sliders (one per screen)

Each slider screen shows:
- The variable name and a short explanation
- A horizontal gradient slider with three labeled anchor points (left, center, right)
- The slider allows infinite positions between anchors — it's a true gradient, not three fixed stops
- **Live preview**: sample UI elements on the same screen that morph in real time as the user drags the slider

The live preview is the centerpiece of the onboarding. This is where the audience sees GenUI happening in their hands.

### Screen 7: Nutrition Preferences

Not a slider — presented as selectable tags/toggles. Users can pick one, combine several, or skip entirely.

Options: Keto, Paleo, Vegan, Vegetarian, Pescatarian, Omnivore, No Preference

### Screen 8: Your Profile Summary

A full baseball card of the persona they just built: their photo placeholder (or avatar), their five slider positions, nutrition tags, and a generated hero moment line based on their settings.

From here, they enter the app.

---

## The Six Dimensions

### 1. Skill Level (Slider)
**Beginner → Confident Home Cook → Seasoned Pro**

Affects: information density, how much the app explains vs. assumes, whether it shows step-by-step guidance or trusts the cook to improvise, alert verbosity.

Live preview: a sample recipe card that shifts from detailed step-by-step with large "next step" buttons (beginner) to a dense ingredient/technique summary (pro).

### 2. Recipe Ambition (Slider)
**Simple Staples → Weekend Projects → All-Day Cooks**

Affects: what recipes surface by default, cook time expectations, complexity of suggested techniques, meal planner defaults.

Note: This is independent of skill. A beginner can be ambitious (Marcus watching YouTube and attempting brisket). A pro can prefer simplicity (Jen making the same six recipes perfectly).

Live preview: a sample recipe feed that shifts from quick-cook cards with time badges (simple) to elaborate multi-phase cook timelines (all-day).

### 3. Accessibility (Slider)
**Compact & Dense → Balanced → Large & Clear**

Affects: font size, tap target size, contrast ratios, information density per screen, spacing, cognitive load.

This isn't just vision — it's also about cognitive load. Some users want everything on one screen. Others need it broken into clear sequential steps.

Live preview: a sample grill control panel that shifts from a data-dense multi-probe dashboard (compact) to a large, high-contrast single-temp display (large & clear).

### 4. Vibe / Brand Voice (Slider)
**Rugged & Smoky → Warm & Modern → Clean & Minimal**

Affects: color palette, typography weight, imagery style, copy tone, iconography.

- Rugged & Smoky: dark backgrounds, ember oranges, deep reds, heavy type, wood textures, smoke photography
- Warm & Modern: warm neutrals, golden tones, friendly rounded type, lifestyle photography
- Clean & Minimal: white space, muted palette, thin type, ingredient-focused photography

Live preview: sample UI chrome (header, card, button) that shifts across the three aesthetics.

### 5. Exploration Style (Slider)
**Creature of Habit → Open to Suggestions → Always Exploring**

Affects: how aggressively the app surfaces new content, the ratio of familiar-to-new in recipe feeds, the prominence and tone of discovery nudges, content diversity.

This is the anti-TikTok axis. Even "Creature of Habit" users get discovery nudges — they're just gentler, more closely related to what they already know, and framed with respect for their preferences.

Live preview: a sample content feed that shifts from "your favorites" heavy (habit) to a mix with visible "try something new" callouts (exploring).

### 6. Nutrition Preferences (Tags, not a slider)
**Keto | Paleo | Vegan | Vegetarian | Pescatarian | Omnivore | No Preference**

Affects: recipe filtering, meal planner composition, shopping recommendations, macro/nutrition display, curated content, discovery nudges.

This cuts across every feature. A vegan user doesn't just see different recipes — their shopping list, content feed, meal planner, and nudges all reflect a plant-based experience.

---

## The Nine Personas

### 1. Dave
Retired firefighter, cooks every weekend, has a signature dry rub he won't share.
- Skill: Seasoned Pro
- Ambition: All-Day Cooks
- Accessibility: Compact & Dense
- Vibe: Rugged & Smoky
- Exploration: Creature of Habit
- Nutrition: Omnivore
- **Hero moment:** *His neighborhood knows Saturday is rib day, and nobody makes plans.*

### 2. Priya
Software engineer, bought a Traeger six months ago, watches cooking YouTube at 2x speed.
- Skill: Confident Home Cook
- Ambition: All-Day Cooks
- Accessibility: Balanced
- Vibe: Warm & Modern
- Exploration: Always Exploring
- Nutrition: Pescatarian / Flexitarian
- **Hero moment:** *She pulled off sous vide smoked duck for a dinner party and nobody could believe it was her first try.*

### 3. Tom & Linda
Semi-retired couple, cook together, host the neighborhood.
- Skill: Confident Home Cook
- Ambition: Weekend Projects
- Accessibility: Large & Clear
- Vibe: Warm & Modern
- Exploration: Open to Suggestions
- Nutrition: Omnivore (watching sodium)
- **Hero moment:** *Their Fourth of July cookout is the one everyone in the cul-de-sac talks about all year.*

### 4. Marcus
28, lives in an apartment with a small patio, just got his first Traeger as a birthday gift.
- Skill: Beginner
- Ambition: Simple Staples
- Accessibility: Large & Clear
- Vibe: Clean & Minimal
- Exploration: Open to Suggestions
- Nutrition: No Preference
- **Hero moment:** *His friends show up for game day and he's got smoked queso and pulled pork sliders — and he made it all himself.*

### 5. Jen
Mom of three, weeknight warrior, needs dinner done in 45 minutes.
- Skill: Confident Home Cook
- Ambition: Simple Staples
- Accessibility: Balanced
- Vibe: Warm & Modern
- Exploration: Creature of Habit
- Nutrition: No Preference (cooking for a family with mixed tastes)
- **Hero moment:** *Tuesday night smoked chicken thighs that taste like she spent all afternoon on them, and the kids actually eat it without complaining.*

### 6. Ray
Competition circuit BBQ. Travels to events, has opinions about post oak vs. hickory.
- Skill: Seasoned Pro
- Ambition: All-Day Cooks
- Accessibility: Compact & Dense
- Vibe: Rugged & Smoky
- Exploration: Creature of Habit
- Nutrition: High Protein
- **Hero moment:** *He places top three at the Houston Livestock Show and his team goes out for beers with the trophy on the table.*

### 7. Sofia
Food blogger, photographs everything, cooks for content as much as the meal.
- Skill: Confident Home Cook (trending toward Pro)
- Ambition: Weekend Projects
- Accessibility: Balanced
- Vibe: Clean & Minimal
- Exploration: Always Exploring
- Nutrition: Vegan
- **Hero moment:** *Her smoked beet tartare post hits 10K likes and three brands reach out for partnerships.*

### 8. Walt
72, Vietnam vet, has been smoking meat since before Traeger existed.
- Skill: Seasoned Pro
- Ambition: All-Day Cooks
- Accessibility: Large & Clear
- Vibe: Rugged & Smoky
- Exploration: Open to Suggestions
- Nutrition: Omnivore (doctor says watch the red meat)
- **Hero moment:** *His grandkids ask him to make "that lamb thing" every time they visit, and he teaches his grandson how to tend the fire.*

### 9. Casey
Non-binary, late 20s, came to grilling through Korean BBQ and Argentine asado.
- Skill: Confident Home Cook
- Ambition: Weekend Projects
- Accessibility: Balanced
- Vibe: Warm & Modern
- Exploration: Always Exploring
- Nutrition: Flexitarian / Plant-Forward
- **Hero moment:** *They host a fusion cookout — gochujang ribs, smoked cauliflower, chimichurri everything — and a friend says, "You should open a restaurant."*

---

## Persona App Experiences

What follows is a complete description of what the app looks and feels like for each of the nine personas. Every persona gets the same features — Recipes, Grill Control, Help, Meal Planner, Shopping, and Curated Content — but the visual hierarchy, sort order, layout, density, tone, and presentation are as unique as the person using it.

---

### Dave's App

**Dashboard Layout**
Dark background, charcoal and ember tones. The dashboard is a single dense screen — Dave doesn't want to scroll or navigate to find anything. Top section: active grill status (if a cook is running, it dominates the top third with probe temps, elapsed time, and a smoke-ring progress bar). Below that: a horizontal scroll of his most-cooked recipes — his "rotation" — with small thumbnail cards showing just the recipe name and cook time. No descriptions needed; he knows these by heart. Bottom section: weather conditions (humidity, wind, ambient temp) because Dave knows these affect his cook. Navigation is a minimal bottom bar with icons only, no labels.

**Recipes**
List view, not cards. Dense rows, sorted by technique (rubs, wraps, wood type) as the default organization. Filter bar across the top is always visible with quick-access filters: meat type, cook method, time range. No star ratings or social proof — Dave doesn't care what's trending. Recipe cards show: name, protein, cook time, pellet recommendation, and internal target temp, all in one tight row. When Dave taps into a recipe detail, he sees a single scrollable page: ingredients on the left, technique notes on the right, timeline at the bottom. No step-by-step wizard. No "next" buttons. He reads it once and goes. The detail page has a "Cook Log" button — he can see his own history of every time he's made this recipe with actual temps and notes he's logged.

**Grill Control**
This is Dave's most-used feature. Multi-probe view as default: up to four probe temperatures displayed simultaneously as horizontal bars with target ranges marked. Time elapsed and estimated time remaining. A compact temperature graph showing the last 60 minutes of all probes. Pellet level indicator. No motivational messages. No tips. Just data. He can tap any probe to expand it into a full-screen graph with historical data overlaid from previous cooks of the same recipe. The interface is tool-like — it feels like an instrument panel, not an app screen.

**Help**
Dave almost never opens Help. When he does, it's because something is genuinely wrong — a hardware issue, a firmware question, a connectivity problem. His help interface is a troubleshooting-first design: a search bar at the top, then categorized by issue type (Grill Hardware, Connectivity, Probe Calibration, Pellet Feed). No "Getting Started" section. No tutorials. The tone is direct and technical, peer-to-peer: "Probe 2 reading 15°F above ambient may indicate a damaged thermistor. Try recalibrating in Settings > Probes > Calibrate." When Dave has an active cook and something goes wrong, Help surfaces as a contextual alert that references his current state: "Temp dropped 40°F in 5 minutes. Likely cause: pellet tunnel jam. Here's the quick fix."

**Meal Planner**
Dave doesn't plan meals the way Jen does. His meal planner is a weekend cook scheduler. It shows Saturday and Sunday as the primary view with time blocks. He drags a recipe onto a time block and the app calculates prep start, target fire time, rest period, and serving time. If he's doing ribs and a side, the planner shows a merged timeline so both land at the same time. No weeknight planning. No grocery integration. Just the weekend cook schedule, clean and functional.

**Shopping**
Dave's shopping view is organized by consumables: pellets (sorted by wood type, with his purchase history showing which he buys most), replacement parts (probes, grill grates, drip trays), and rubs/sauces. No accessories, no lifestyle products. The pellet section shows price-per-pound and burn rate data because Dave has opinions about value. He sees a "Reorder" button next to items he's bought before — one-tap replenishment.

**Curated Content**
Minimal presence on Dave's dashboard — a single card at the bottom labeled "From the Pit." Content is long-form and craft-focused: a profile of a third-generation pitmaster in Lockhart, a deep dive into the science of smoke rings, a comparison of offset vs. pellet for competition brisket. No short-form video. No trending content. No social metrics. The discovery nudge is subtle and infrequent: "You've perfected pork ribs. This beef short rib uses the same rub and method — just a different cut." It's positioned as a quiet suggestion at the bottom of his recipe rotation, not a banner or pop-up.

---

### Priya's App

**Dashboard Layout**
Warm background tones — soft cream, golden amber accents, terracotta highlights. The dashboard is organized around discovery. Top section: "What's Inspiring Cooks This Week" — a curated carousel of three recipes with large lifestyle photography, each from a different cuisine or technique. Below that: "Your Active Learning" — a progress tracker showing techniques she's working on (currently: "Mastering Smoke Profiles" at 60% complete). Then: "Continue Where You Left Off" showing a recipe she bookmarked but hasn't tried yet. Bottom: a smart suggestion row based on what's in season and what she hasn't tried. Navigation uses labeled icons in a warm palette with a prominent "Discover" tab.

**Recipes**
Card-based grid, two columns. Cards are tall with a large photo on top, recipe name, cuisine tag, difficulty indicator (shown as a technique badge, not a beginner/expert label), and cook time. Default sort is "Recommended for You" which blends her flavor preferences, techniques she's learning, and seasonal ingredients. Filters are rich: cuisine (Japanese, Mexican, Southern, Indian, Mediterranean, etc.), technique (smoking, reverse sear, planking, rotisserie), protein (with pescatarian as her default filter, always applied but easily toggled off), and time commitment. When she taps into a recipe, the detail page has a learning layer: technique callouts are highlighted in amber, and she can tap any one to see a 30-second technique explanation. A "Why This Recipe" badge at the top explains the recommendation: "You've been exploring smoke profiles — this tea-smoked trout uses a technique you haven't tried yet."

**Grill Control**
Centered on a single large circular temp gauge with the current temperature in a friendly, readable font. Below: a timeline showing the cook phases (preheat, smoke, hold) as a horizontal progress bar with the current phase highlighted. A "Coach" toggle in the top right — when enabled, the app provides periodic check-in prompts: "You're 2 hours in. The bark should be setting. Here's what to look for." Probe data is available but tucked behind a "Details" expansion panel — Priya wants it when she wants it, but it doesn't dominate the view. The color scheme stays warm, and the interface feels encouraging without being condescending.

**Help**
Priya's help is learning-forward. The main help screen is organized by concept, not by troubleshooting: "Understanding Smoke," "Temperature Management," "Timing Your Cook," "Wood & Pellet Flavors." Each section is a short, well-written explainer with embedded video clips. When she's in an active cook, contextual help appears as a gentle coaching layer — not alerts, but "Did you know?" prompts tied to her current cook stage. She can also ask a natural-language question in a search bar and get a conversational answer: "Why is my brisket stalling?" returns a clear explanation with what to expect and two options, written in a knowledgeable-but-approachable tone.

**Meal Planner**
Priya's meal planner is project-based. Instead of a weekly calendar, it's organized as "Upcoming Cooks" — planned events she's building toward. Each project has a date, a guest count, and a menu she's assembling. She might have "Saturday Dinner Party — 6 guests" with three courses she's building, and the planner shows a unified timeline, ingredient list, and technique prep schedule. It also surfaces seasonal ingredient alerts: "Persimmons are at peak this week — pairs beautifully with smoked pork tenderloin or a pescatarian option: smoked persimmon with burrata." The planner links directly to shopping.

**Shopping**
Organized around her upcoming cooks, not by product category. If she has a Saturday dinner party planned, the shopping view shows exactly what she needs for that event, grouped by where to buy it (grocery, Traeger store, specialty). Pellet recommendations are recipe-specific: "Your tea-smoked trout calls for apple wood. You have hickory in stock — apple is lighter and better for fish." Accessory recommendations are technique-driven: "For planking, you'll want cedar planks. Here are the ones that fit your grill."

**Curated Content**
This is Priya's second-most-used feature after Recipes. Content is organized as a feed mixing formats: 2-minute technique videos, long-form recipe articles, pitmaster interviews, and cultural food histories. The feed is aggressively diverse — she sees Korean, Texan, Argentinian, and Japanese smoking traditions in the same scroll. Content has "technique tags" she can tap to add that technique to her learning path. Social proof is present but not dominant: "12K cooks tried this last month" appears as a subtle badge because Priya is motivated by community without being trend-driven. Discovery nudges are prominent and exciting: "A pitmaster in Oaxaca is smoking with mole. Here's the technique breakdown."

---

### Tom & Linda's App

**Dashboard Layout**
Warm, inviting tones — soft whites, warm grays, golden accents. Everything is large. The dashboard leads with "This Weekend" — a planning-focused section showing their next hosting event (or prompting them to plan one) with a guest count, menu status, and a timeline preview. Below: "Your Favorites" as large, tappable cards (4 across the screen, big photos, recipe name in 18pt+ type). Then: a weather forecast bar specific to their area with a note about grill conditions. Bottom: "Something New to Try" — a single, large suggestion card with a full photo and a one-line pitch. Navigation uses large labeled buttons, not a cramped bottom bar. The whole layout breathes — generous padding, no dense information blocks.

**Recipes**
Large card grid, single column on phone, two columns on tablet. Each card is a full-width photo with the recipe name in large bold type, cook time as a prominent badge, and a serving count (this matters to Tom & Linda — they're always cooking for groups). Default sort is "Perfect for Entertaining" which surfaces recipes that scale well, have predictable timing, and include make-ahead components. Filters are simplified: number of servings (2, 4, 8, 12+), time commitment, and a "Low Sodium" toggle that's always visible because of Linda's preference. When they tap into a recipe, the detail page is step-by-step with large type and generous spacing. Each step has a checkbox they can tap as they complete it. A "Scale Recipe" control at the top lets them adjust servings and all quantities update. The page also shows a "Pair With" section suggesting complementary sides and desserts for a full menu.

**Grill Control**
Large, high-contrast display. A single dominant temperature reading in the center — big enough to read from across the patio. Current temp and target temp shown as two large numbers with a clear "on track" / "needs attention" status in plain language (not a color code that requires close inspection). A simple progress bar showing estimated time remaining. Alert preferences are set to push notifications with sound — they want to hear it from inside the house. When multiple probes are active, each gets its own large card that they can swipe between rather than seeing them all at once. The tone is warm: "Looking great — about 45 minutes to go. Plenty of time to set the table."

**Help**
Tom & Linda's help is task-oriented and step-by-step. The main screen shows common questions in large tap targets: "How do I start the grill?", "What temperature for chicken?", "My grill won't connect." Each answer is written in clear, friendly language with numbered steps and large illustrations. When they have an active cook, contextual help is proactive and reassuring: "Your chicken is at 155°F — it'll hit 165°F in about 12 minutes. No action needed." They also see hosting-specific help: "Cooking for a crowd? Here's how to time three dishes to finish together." The tone is never condescending — it's the voice of a knowledgeable friend, not a manual.

**Meal Planner**
This is Tom & Linda's primary feature. The planner is built around events: "Fourth of July Cookout (12 guests)," "Sunday Family Dinner (6 guests)." Each event has a menu builder where they select mains, sides, and desserts, and the app generates a unified timeline showing when to start each item so everything lands together. The timeline includes non-grill tasks: "Marinate brisket (night before)," "Prep coleslaw (2 hours before)," "Set up serving station (30 min before)." A guest count scaler adjusts all quantities. The planner also flags sodium-heavy recipes with a gentle note: "This rub is higher in sodium — want to see a lower-sodium variation?" Shopping list generates directly from the plan.

**Shopping**
Organized by upcoming event. "Fourth of July — 12 guests" shows everything they need as a single grocery list, organized by store section (produce, meat, pantry, Traeger supplies). Quantities are pre-scaled to the guest count. Pellet recommendations are straightforward: "For this menu, you'll need about 20 lbs of hickory. You used 18 lbs last time for a similar cook." The accessory section suggests practical hosting items: extra grill racks, serving platters, a wireless thermometer so they can mingle without watching the app. No gear-head upsells, just functional tools for entertaining.

**Curated Content**
Content is social and hosting-focused. "What Other Hosts Are Cooking This Weekend" shows popular entertaining menus. Seasonal content is prominent: "Memorial Day Menu Ideas," "Fall Harvest Cookout." Long-form content focuses on entertaining tips rather than technique deep-dives: "How to Time a 3-Course Grilled Dinner" and "Sides That Travel Well to a Potluck." Video content features real families and couples cooking together. The discovery nudge is neighborly: "Your neighbors the Parkers just tried this smoked peach cobbler. Might be a hit at your next cookout."

---

### Marcus's App

**Dashboard Layout**
Clean, bright, and minimal — white background, light gray cards, one accent color (a calm blue-green). The dashboard is intentionally simple so nothing overwhelms a new user. Top section: a single, large "What Should I Cook?" button that opens a guided flow (more on that below). Below: "Your Journey" — a friendly progress tracker showing his first five cooks as a horizontal path with milestones (Cook 1: Burgers ✓, Cook 2: Chicken ✓, Cook 3: Pulled Pork — next up). Then: "Quick Wins" — three large recipe cards showing easy, impressive recipes that take under 2 hours. No dense information anywhere. Every element has generous padding and large tap targets. Navigation is a bottom bar with four labeled items: Cook, Recipes, Learn, Shop. No more than four.

**Recipes**
Single-column cards, each taking nearly the full screen width. Big, appetizing photo at the top. Below: recipe name in bold, a difficulty badge ("Easy" in green, "Worth the Wait" in amber — never "Advanced" or "Hard"), cook time, and a one-line hook: "Your friends will think you ordered this." Default sort is "Great for Beginners" which surfaces recipes with few ingredients, forgiving cook temps, and short active time. Filters are minimal: cook time (under 1 hour, 1–2 hours, half-day project), and a "My Skill Level" toggle that's on by default but can be turned off when he wants to browse everything. When Marcus taps a recipe, the detail page is a step-by-step walkthrough — one step per screen, large text, with a photo or illustration for each step. A prominent "I Need Help" button is always visible. Each step shows estimated time and a "Done — Next Step" button. There's no ingredient-list-on-the-left-technique-on-the-right split view. It's linear, guided, and confidence-building.

**Grill Control**
A single large circular gauge dominates the screen — current temp in the center in huge type, target temp in smaller type above it. The gauge uses color: blue when preheating, green when in the target range, amber when drifting. Below the gauge: a plain-language status message — "Preheating... about 8 minutes to go," then "You're in the zone — looking good," then "Almost there! Internal temp is 5°F away from target." No graphs. No multi-probe view. No rate-of-change data. A single "What's Happening?" button opens a contextual explanation of the current stage written in friendly, reassuring language. If something unexpected happens (temp spike, stall), the app proactively shows a message: "Your temp flatlined at 165°F — this is called the stall and it's totally normal. Here's what to expect." Alerts are push notifications with clear language: "Your chicken is done! Take it off and let it rest 10 minutes."

**Help**
Marcus's help is always close at hand. A floating "?" button appears on every screen. Help is written as a friendly FAQ: "What are pellets?", "How do I know when it's done?", "What if it starts raining?" Each answer is short (3-4 sentences), uses no jargon, and includes a "Learn More" link for those who want depth. The help also has a "First Timer?" section with a guided walkthrough of the app itself — not just cooking help, but UI help: "This is your grill control screen. Here's what each number means." During an active cook, help becomes a real-time companion: if he hasn't interacted with the app in 20 minutes, it gently checks in: "Everything still going? Your temp is right on track." The tone throughout is warm, encouraging, and judgment-free.

**Meal Planner**
Simple and practical. Marcus doesn't plan a week of meals — he plans one cook at a time. The meal planner is a single "Plan Your Next Cook" flow: pick a recipe, pick a day, and the app generates a prep checklist (buy ingredients, prep rub, preheat grill at X time). For game day, there's a "Game Day Mode" template: pick two or three easy crowd-pleasers, and the app creates a timeline with everything timed to be ready by kickoff. Shopping list auto-generates. No multi-course planning, no guest scaling — just "here's exactly what you need to do and when."

**Shopping**
Marcus's shopping experience leads with bundles. "Starter Kit: Everything you need for your first 5 cooks" — a pellet variety pack, a basic thermometer, a set of Traeger rubs. Below: recipe-linked shopping — if he has a planned cook, the exact ingredients and supplies appear as a single list with "Add to Cart" for Traeger items and a grocery list he can screenshot or text to himself. Pellet recommendations are simplified: "For chicken and pork, start with hickory. It goes with everything." No comparison charts, no burn-rate data. Just clear, confident recommendations.

**Curated Content**
Marcus's content section is called "Learn" in his navigation, not "Curated Content." It's organized as a structured learning series: "Your First 5 Cooks" is the flagship — five recipes in order of difficulty, each with a video walkthrough and a "You'll Learn" summary (Cook 1: temperature basics, Cook 2: smoke flavor, Cook 3: timing). Below that: short-form tips — "3 Things Every New Griller Gets Wrong" and "The Only Rub Recipe You Need to Start." Content is concise and confidence-building, never long-form or intimidating. His discovery nudge is gentle: "You nailed burgers last weekend. Smoked queso is just as easy and will blow up your next game day."

---

### Jen's App

**Dashboard Layout**
Warm, efficient, and clutter-free — soft warm whites, muted golden accents, clean typography. Jen's dashboard is built for speed. Top section: "Tonight's Cook" — if she has something planned, it shows the recipe with a single "Start" button and a time estimate. If nothing's planned, it shows her top three rotation recipes with one-tap "Cook This" buttons. There is no inspirational carousel, no trending content, no discovery section above the fold. Below: "This Week" — a compact five-day row (Mon–Fri) showing what's planned, what's open, and a quick "Fill In" button for empty days. Bottom: "Your Rotation" — a compact horizontal scroll of her six go-to recipes, always accessible. Navigation is a minimal bottom bar. The entire dashboard is designed so she can open the app, tap once, and be cooking in under 10 seconds.

**Recipes**
List view, not cards — dense but readable. Each row shows: recipe name, cook time (prominently), active time vs. passive time (this matters to Jen — she needs to know how much hands-on attention is required), and a "family approved" badge for recipes her family has liked before. Default filter is "Under 45 Minutes" — always applied, toggle-able. Secondary sort is "Weeknight Friendly" which prioritizes low active time and kid-approved flavors. No cuisine filters, no technique categories — she browses by time and protein. When she taps a recipe, the detail page leads with a timeline: "5 min prep, 30 min cook, 5 min rest." Ingredients are shown as a concise list with quantities scaled to her family size (stored in her profile). Steps are brief and practical, no technique explanations — she knows how to cook, she just needs the specifics. A "Made It" button logs the cook and asks one question: "Would the kids eat this again?" which feeds the "family approved" badge system.

**Grill Control**
Clean and minimal. A large temp reading with a simple status: "Heating up," "Ready — add food," "Cooking — 22 min left," "Done — take it off." Below: a single timer counting down to the finish. No probe graphs, no multi-probe views unless she's running a second probe (in which case it appears as a second card, not a complex dashboard). Notifications are aggressive and practical — she gets alerted the moment food is done because she's inside helping with homework while the Traeger works outside. The tone is efficient: "Chicken's done. Let it rest 5 minutes." No exclamation points, no cheer, no coaching. Just information.

**Help**
Jen rarely uses help, and when she does it's because something went wrong and she needs a fast fix. Her help interface is a search bar and three buttons: "Grill Won't Start," "Food Isn't Cooking Right," "App Problem." Answers are brief and action-oriented — numbered steps, no explanations of why. "Grill not heating? 1. Check pellet hopper. 2. Run the shutdown cycle. 3. Restart." During an active cook, contextual help only appears if something is actually wrong — no check-ins, no coaching prompts. Jen doesn't want the app talking to her unless there's a problem.

**Meal Planner**
Jen's most-used feature after grill control. The planner is a Monday-through-Friday grid (weekends are optional and collapsed by default). Each day is a slot she can fill by tapping and choosing from her rotation, browsing quick recipes, or letting the app suggest something. The app's suggestions are smart: it doesn't repeat proteins two days in a row, it respects what's already planned, and it factors in leftover potential ("Making pulled pork Tuesday? Wednesday could be pulled pork tacos with no extra cook time"). A single "Generate Grocery List" button compiles the week's ingredients into one list, organized by store section and de-duplicated. She can text the list to her partner or export it to a reminders app.

**Shopping**
Jen's shopping is integrated into the meal planner and barely exists as a standalone section. When she views shopping, it's the grocery list for this week's planned meals. Traeger-specific shopping is minimal — she sees a "Pellet Status" reminder when she's likely running low (based on her cook frequency) and a reorder button. No accessories, no bundles, no upsells. The app knows Jen isn't browsing — she's resupplying.

**Curated Content**
Minimal presence. A single "New This Week" card at the bottom of the dashboard that rotates weekly. Content is short and practical: "5 Weeknight Marinades That Work on Any Protein," "The Freezer-to-Traeger Cheat Sheet." No video. No long reads. No pitmaster profiles. Her discovery nudge is the lightest of all nine personas — it respects her routine and only stretches gently: "This smoked salmon takes the same 40 minutes as your go-to chicken thighs." It appears once, in her rotation row, and doesn't repeat if she ignores it.

---

### Ray's App

**Dashboard Layout**
Dark, dense, and data-forward — matte black background, ember orange accents, monospace type for data fields. Ray's dashboard looks more like a flight instrument panel than a cooking app. Top section: if a cook is active, the entire top half is a live telemetry dashboard — multi-probe temps, rate of change per hour, ambient temp and humidity, pellet burn rate, and estimated completion with a confidence interval. If no cook is active, the top section shows his "Next Competition" countdown with the event name, date, and his registered category. Below: "Cook Log" — a list of his recent cooks showing date, recipe, scores (if competition), and a tap-to-review link. Bottom: "Conditions" — hyper-local weather data including wind speed (affects heat management) and barometric pressure. Navigation is a compact icon bar — no labels, small icons, maximum screen real estate for data.

**Recipes**
Table view — not cards, not a list, but a sortable data table. Columns: recipe name, protein, total time, technique, wood type, target internal temp. He can sort by any column. Default sort is "Most Cooked" — his proven repertoire. Filters are advanced: protein type, cook method (low-and-slow, hot-and-fast, reverse sear), competition category, and a "Never Tried" toggle for the rare moment he wants something new. No photos in the list view — photos are wasted space when you know what brisket looks like. When Ray taps a recipe, the detail page is a single dense screen: full ingredient list with weights in grams (not cups), technique notes organized by cook phase (prep, smoke, wrap, rest), internal temp targets for each phase, and a wood/pellet recommendation with flavor profile notes. At the bottom: his personal cook log for this recipe — every time he's made it, with his probe data, notes, and what he'd change.

**Grill Control**
The centerpiece of Ray's app. Multi-probe real-time dashboard showing up to six probes simultaneously. Each probe has a current reading, a target, and a miniature sparkline graph showing the last 30 minutes. A full-screen graph mode overlays all probes on a single timeline with phase markers (smoke, wrap, rest) that he can set manually. Rate of change is displayed as degrees-per-hour for each probe. A "Compare to Previous" toggle overlays his last cook of the same recipe as a ghost line on the graph so he can track consistency. Weather integration adjusts estimated completion time based on ambient conditions. No status messages, no coaching, no encouragement. Pure data. The one concession to usability: color-coded probe labels he can customize (he has names for his probes: "Flat," "Point," "Ambient," "Rib Rack").

**Help**
Ray uses help exclusively for hardware and firmware. His help section opens directly to "Technical" — firmware release notes, probe calibration procedures, grill maintenance schedules, and WiFi troubleshooting. There's an API section showing how to export his cook data to a spreadsheet. No cooking help whatsoever — there's nothing the app could teach Ray about brisket. The tone is technical documentation: specifications, procedures, compatibility notes. His discovery nudge doesn't come through help or content — it comes through the tool itself: "New firmware: dual-zone temperature profiles are live." That gets his attention because it's a capability upgrade, not a recipe suggestion.

**Meal Planner**
Ray's meal planner is a competition prep tool. It shows his competition calendar with event dates, registration deadlines, and practice cook schedules. For each competition, he can plan his turn-in timeline backward from the judging window: "Judges at 12:00 → box at 11:45 → rest at 10:30 → pull at 10:00 → wrap at 6:00 → fire at midnight." The planner calculates based on his historical cook data for each protein, not generic estimates. For non-competition weekends, the planner is a simple single-cook scheduler similar to Dave's — just the weekend cook with a time-block layout.

**Shopping**
Organized by category with technical detail. Pellets section shows wood types with flavor profiles, burn rates (lbs/hour at various temps), and his purchase history with price-per-pound tracking. He can see which pellet blend he used for his highest-scoring competition cooks. Competition supplies: butcher paper, injection marinades, competition rubs (organized by protein), disposable gloves, turn-in containers. Equipment section: high-end thermometers, probe replacements, grill modifications. Everything has specs — no lifestyle marketing, no beauty shots. Just the data he needs to make a purchasing decision.

**Curated Content**
Almost nonexistent on Ray's dashboard. The one content element is a "Competition Results" feed — recent event results, rule changes, and judging criteria updates from sanctioning bodies. He doesn't want recipes or inspiration. If content appears, it's technical: "Post-oak vs. Hickory: A Thermal Analysis" or "How Humidity Affects Bark Formation." His discovery nudge is the rarest of all personas — it's purely tool-and-technique focused and might only appear once a month.

---

### Sofia's App

**Dashboard Layout**
Clean, airy, and visual — bright white background, soft sage and blush accents, thin modern typography. Sofia's dashboard is a visual feed, almost Pinterest-like. Top section: "Trending This Week" — three large, beautifully photographed recipe cards arranged in a staggered masonry grid. Each shows the recipe name, a "Saves" count, and a small "Vegan" badge. Below: "Your Upcoming Cook" if she has something planned, shown as a single elegant card with the photo she'll likely try to recreate. Then: "Most Shared on Traeger" — a social proof carousel showing recipes ranked by shares and saves. Bottom: "Seasonal Right Now" — ingredients at peak season with linked recipes. Navigation has a prominent "Discover" tab with a compass icon, and a camera icon for "My Cooks" where she logs her food photography.

**Recipes**
Masonry grid — two columns of variable-height cards, photo-dominant. Every recipe card is 70% photo, with the name, a vegan/plant badge, and a "Saves" count as a subtle overlay. No cook times on the card (they're on the detail page) — the grid is optimized for visual browsing. Default sort is "Most Shared" because Sofia is looking for content that performs well visually and socially. Filters: "Vegan Only" is permanently applied and not even shown as a filter — it's her default reality. Secondary filters: "Photogenic" (curated by the app for visual appeal), cuisine, seasonal ingredients, and "New This Week." When she taps a recipe, the detail page leads with a hero photo gallery — multiple angles of the finished dish. Then: a "Plating Tips" section with composition and garnish suggestions. Then the recipe itself with clean formatting, ingredient list, and technique notes. A "Share" button is prominent. A "Log My Cook" button opens a photo upload flow where she can document her version.

**Grill Control**
Minimal and elegant. A clean circular gauge with a thin stroke, current temp in a light modern font, and a simple status line: "Smoking — 40 min remaining." Below: a single timeline bar with a progress indicator. No multi-probe complexity unless she's running multiple probes (which is rare — she cooks for 1-2 people). The design priority is that this screen doesn't feel jarring next to the visual feed — it maintains the app's aesthetic. A small camera button in the corner lets her snap a progress photo during the cook, which auto-logs to "My Cooks." Notifications are gentle and constructive: "Your cauliflower is almost done. This is a great moment for a progress shot."

**Help**
Sofia's help blends cooking guidance with content creation tips. Standard help is organized by technique with embedded video clips and beautiful photography. But she also sees a unique "Content Tips" section: "Best Angles for Shooting Smoked Food," "How to Capture Steam and Smoke," "Plating for Instagram vs. Blog." During an active cook, help is encouraging and creative: "The bark is setting beautifully — this is the stage that photographs best." The tone is peer-to-peer, like advice from a fellow creator, not a manual.

**Meal Planner**
Sofia's meal planner is a content calendar as much as a cooking calendar. Each planned cook has a recipe, a date, and a "Content Plan" field where she can note the angle, platform, or caption idea. The planner surfaces seasonal ingredients and trending recipes together: "Delicata squash is peaking. Three photogenic recipes using it this week." It also tracks what she's posted recently to suggest variety: "You've shared three grain bowls this month — this smoked beet tartare would break the pattern beautifully." Shopping integrates directly, with a focus on specialty ingredients that elevate the visual (micro-greens, edible flowers, finishing salts).

**Shopping**
Organized around aesthetics and quality. Ingredients are sorted by "Essentials" and "Elevate" — basics vs. the garnishes and finishing touches that make a dish photograph well. Traeger accessories lean visual: the copper tong set, the branded cutting board, the cast iron pan that looks great in a flat lay. Pellet recommendations emphasize flavor complexity: "Cherry wood gives a subtle rose hue to cauliflower — great for photography." Everything is presented with clean product photography. No bulk pricing, no burn-rate data — just beautiful tools and quality ingredients.

**Curated Content**
This is Sofia's core feature — she spends more time here than in Recipes. The content feed is a mix of recipe videos (short-form, beautifully produced), creator spotlights (other food bloggers using Traeger), technique tutorials with a visual focus, and trend reports ("Smoked Desserts Are Having a Moment on TikTok"). Content is tagged by platform relevance: "Great for Reels," "Blog Feature," "TikTok Trend." The feed is aggressively exploratory — she sees cuisines and techniques from around the world because novelty is her currency. Her discovery nudge is social: "This burnt ends recipe is the most-shared cook on Traeger this month."

---

### Walt's App

**Dashboard Layout**
Dark, warm, and high-contrast — deep charcoal background, warm cream text, burnt orange accents. Everything is large. The dashboard has generous whitespace and only three elements visible without scrolling. Top section: grill status — if a cook is active, it's a single massive temperature reading with a simple status word: "Smoking." No decorative elements, just the number and the status, readable from ten feet away. If no cook is active, this section shows the weather and a single line: "Good day for a long cook." Below: "Your Recipes" — four large cards showing his most-made recipes with just the name and a photo. No badges, no metrics, no time estimates — Walt doesn't need to be told how long his brisket takes. Bottom: "Something Worth Trying" — a single recommendation card, positioned as a respectful suggestion from a peer, not a push notification. Navigation uses large icons with short labels.

**Recipes**
Large card view, single column. Each card is a full-width photo with the recipe name in large, high-contrast type (cream on dark) and nothing else on the card. No cook time, no difficulty, no serving count. Walt knows all of this intuitively. Default view is "My Recipes" — his personal library of cooks he's made, organized by how recently and how often. There is no "Recommended for You" — the app respects that Walt chooses his own path. A separate "Browse All" section is available but not the default. When Walt taps a recipe, the detail page is large type throughout: ingredient list with generous line spacing, technique notes written with the respect of a peer conversation ("You know the bark is set when it looks like dark mahogany and resists a light press"), and a notes field where he can add his own annotations. The one adaptive element: recipes that are red-meat-heavy show a small, non-intrusive note — "This is a red meat-forward cook. Want to see a poultry or lamb alternative with a similar technique?" It never says "your doctor" or "health." It's just an option, always dismissable.

**Grill Control**
The simplest and most powerful grill control of any persona. A single massive number in the center of the screen: current temp. Below it, in slightly smaller type: target temp. Below that: a plain-language status in one or two words: "On Track" or "Running Hot" or "Stalled." That's it above the fold. If he scrolls down (or taps the number), he gets probe details — still in large, high-contrast type but with more data: elapsed time, estimated completion, and a simple temp graph with thick lines and high contrast. No multi-probe dashboard, no sparklines, no rate-of-change calculations — not because Walt couldn't understand them, but because he reads the meat, not the graph. The grill control is his backup instrument, not his primary sense. Notifications are a single chime and a lock-screen message in large type: "Brisket is at 203°F. Time to pull."

**Help**
Walt's help is peer-level and hardware-focused. No cooking guidance — the app doesn't presume to teach Walt about smoking. Help categories: "Grill Maintenance," "Troubleshooting," "Firmware Updates," "Probe Calibration." All written in large type with high contrast. Instructions are clear and practical but never condescending: "The RTD sensor may need recalibrating after 50+ cooks. Here's how." The tone is like a knowledgeable repair manual, not a customer support chatbot. During an active cook, help only surfaces if something is genuinely wrong with the hardware. If the temp probe is reading erratically, a single clear message appears: "Probe reading is unstable. This is usually a connection issue. Try reseating the probe."

**Meal Planner**
Walt doesn't really plan meals — he decides to cook something and then he cooks it. His "planner" is minimal: a simple "This Weekend" view with one or two slots. He can tap a slot to pick a recipe or leave it open. The one planning feature he uses is "Prep Reminders" — the app knows his recipes and sends a reminder the night before: "If you're doing brisket tomorrow, rub it tonight for a better bark." That's it. No weekly grids, no guest counts, no grocery lists. Walt buys his own groceries.

**Shopping**
Straightforward and uncluttered. Organized simply: "Pellets" and "Parts." Pellets show the wood types he buys most, with a reorder button. Parts show replacement items: probes, grill grates, drip trays, hot rod igniters. Everything in large type, simple layout, big buttons. No recommendations, no bundles, no accessories. Walt has his tools and they're in good shape. The one suggestion the app makes is utilitarian: "You haven't replaced your drip tray in 6 months. Might be time." Practical, not promotional.

**Curated Content**
A quiet, respectful presence. Walt's content section is called "From the Pit" and shows one or two items at a time, never a feed. Content is long-form: pitmaster profiles, oral histories, the craft and heritage of smoking. A profile of a 60-year-old woman running a BBQ joint in Memphis. The story behind Central Texas post-oak tradition. No trending content, no social metrics, no short-form video. His discovery nudge arrives as a story, not a prompt: "A pitmaster in Austin is doing something interesting with lamb shoulder. Thought you'd want to see it." It's phrased as if a friend told him about it — because that's the only way Walt would try something new.

---

### Casey's App

**Dashboard Layout**
Warm and vibrant — soft terracotta background, teal accents, hand-drawn-feel iconography. The dashboard is organized around exploration by culture and cuisine. Top section: "Flavor Map" — a visual world map (stylized, not literal) with pins showing cuisines Casey has explored and suggested next destinations. Tapping a pin opens recipes from that region. Below: "This Week's Inspiration" — a rotating featured recipe with a full-bleed photo and a cultural context line: "In Argentina, asado isn't just grilling — it's a daylong gathering. Here's how to bring that to your backyard." Then: "Your Bookmarks" — recipes they've saved but haven't tried yet, shown as small cards with cuisine flags. Bottom: "Seasonal + Local" — ingredients at peak season with fusion recipe pairings. Navigation emphasizes discovery: "Explore" is the first tab, "Cook" is second, "Plan" is third.

**Recipes**
Card grid, two columns, with a heavy emphasis on cultural context. Each card shows: a photo, recipe name, cuisine flag (Korean, Argentine, Southern, Japanese, etc.), cook time, and a "Fusion" badge if it blends traditions. Default sort is "New to You" — recipes from cuisines and techniques Casey hasn't tried yet, weighted toward their established flavor preferences. Filters are cuisine-first: a horizontal scrolling row of cuisine tags at the top that they can combine (Korean + Southern = fusion results). Secondary filters: protein (with plant-forward options highlighted), technique, and time. The "Flexitarian" nutrition tag means they see everything — meat and plant-based — but plant-forward options are marked with a leaf badge and appear first within any category. When they tap a recipe, the detail page opens with a "Story" section before the recipe itself: the cultural origin, the tradition, why this technique exists. Then the recipe, then a "Make It Your Own" section suggesting substitutions and variations.

**Grill Control**
Balanced and warm. A circular temp gauge in teal tones with the current temp prominent and a status line below. A timeline showing cook phases with descriptions: "Smoke phase — building flavor layers" rather than just "Smoke." Below: a "Technique Spotlight" card specific to the current cook — if they're doing a Korean-style cook, it might show: "Gochujang burns easily above 350°F — your current low-and-slow approach is perfect for caramelization without charring." This contextual technique note is what distinguishes Casey's grill control from the simpler views — it teaches through the cook. Notifications are warm and culturally aware: "Your cauliflower has hit the sweet spot. In Argentine asado, this is when the outside caramelizes and the inside goes creamy."

**Help**
Casey's help blends cooking technique with cultural context. Categories: "Techniques by Tradition" (Korean, Argentine, Southern, Japanese smoking methods), "Ingredient Guide" (unfamiliar ingredients with sourcing tips), "Substitution Guide" (plant-based swaps, spice equivalents across cuisines), and standard troubleshooting. During an active cook, help offers technique context: "Low-and-slow is universal, but Korean smoking traditions use different wood and lower temps than Texas barbecue. You're in the sweet spot for this recipe." The tone is curious and informative, like a well-traveled friend sharing what they've learned.

**Meal Planner**
Casey's planner is theme-based. Instead of "Monday through Friday," it's "Your Next Cookout" with a theme selector: "Korean BBQ Night," "Argentine Asado," "Fusion Feast," "Plant-Forward Gathering," or "Surprise Me." Choosing a theme populates a suggested menu with a main, sides, and a drink pairing, all culturally cohesive. They can swap any element and the app suggests alternatives that maintain the theme. The planner includes a "Prep Guide" for unfamiliar techniques and ingredients: "For the gochujang marinade, you'll want to start 24 hours ahead. Here's a timeline." Shopping integrates with specialty ingredient sourcing: "Korean chili flakes may be at your regular grocery — if not, here's an online option."

**Shopping**
Organized by upcoming cook with a strong specialty ingredient focus. Each planned cook shows standard ingredients (available anywhere) and specialty ingredients (might require an Asian grocery, a Latin market, or an online order) as separate sections. Lead times are shown for specialty items: "Order gochujang flakes by Wednesday for Saturday delivery." Pellet recommendations are flavor-matched to cuisine: "For your Korean cook, cherry or apple wood gives a mild sweetness that complements the fermented flavors better than hickory." Accessories lean toward multi-cultural tools: a comal for tortillas, a perforated grill pan for small items, high-heat gloves for asado-style direct cooking.

**Curated Content**
Casey's richest feature. The content feed is a world tour: technique videos from pitmasters across five continents, fusion recipe development stories, cultural deep-dives into smoking traditions, and ingredient spotlights. Content is tagged by region and technique, and Casey can follow "flavor paths" — curated sequences like "The Smoke Traditions of South America" or "Fermented + Smoked: A Flavor Exploration." The feed mixes familiar and unfamiliar aggressively — half the content is from traditions Casey already loves, half is from traditions they haven't explored. Video content features real cooks in real kitchens, not studio productions. Their discovery nudge is deeply personal: "This whole smoked cauliflower with gochujang glaze bridges two of your favorite flavor profiles."

---

## Discovery Nudges (The Anti-TikTok Principle)

Every persona gets nudges, but calibrated to their comfort zone and skill:

- **Dave (Habit):** "You've perfected pork ribs. This beef short rib uses the same rub and method — just a different cut."
- **Priya (Explorer):** "A pitmaster in Oaxaca is smoking with mole. Here's the technique breakdown."
- **Marcus (New):** "You nailed burgers last weekend. Smoked queso is just as easy and will blow up your next game day."
- **Jen (Habit):** "This smoked salmon takes the same 40 minutes as your go-to chicken thighs."
- **Ray (Habit):** "New firmware: dual-zone temperature profiles are live."
- **Sofia (Explorer):** "This burnt ends recipe is the most-shared cook on Traeger this month."
- **Walt (Open):** "A pitmaster in Austin is doing something interesting with lamb shoulder. Thought you'd want to see it."
- **Casey (Explorer):** "This whole smoked cauliflower with gochujang glaze bridges two of your favorite flavor profiles."
- **Tom & Linda (Open):** "Your neighbors the Parkers just tried this smoked peach cobbler. Might be a hit at your next cookout."

The principle: the system uses what it knows about your skill to calibrate the stretch, not flatten the surface. It opens doors instead of closing them.

---

## Design Philosophy

1. **The app is not the hero. The cook is the hero.** Every design decision serves the moment when the cook impresses the people they care about.

2. **Preferences aren't buckets. They're gradients.** The five sliders have infinite positions. Nine personas are starting points, not the whole universe.

3. **Understanding enables exploration, not narrowing.** The system uses what it knows to open doors, not close them. Every user gets stretched — gently, respectfully, calibrated to who they are.

4. **Accessibility is a first-class design axis, not an afterthought.** Walt's expertise shouldn't be trapped behind small text. Marcus's curiosity shouldn't be overwhelmed by information density.

5. **Same data, different interfaces.** The grill is still 225°F. The brisket still takes 12 hours. What changes is how that information is presented, sequenced, and supported — based on who's looking at it.

/** Browse metadata for recipe filtering and display. Merged with FOOD + RECIPES. */
export const BROWSE = {
  hotdog:   { cuisine: "American",   vegan: false, servings: 8,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "A crowd-pleaser you can nail in 15 minutes.", saves: "1.8K", shares: "892", priyaWhy: "Low smoke builds flavor without drying — a quick intro to smoke profiles." },
  burger:   { cuisine: "American",   vegan: false, servings: 6,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Smoke adds depth without changing how you grill.", saves: "3.2K", shares: "1.4K", priyaWhy: "Hot-and-fast after a quick smoke — you'll learn both techniques in one cook.", jenBadge: "crowd pleaser" },
  queso:    { cuisine: "Tex-Mex",     vegan: false, servings: 8,  difficulty: "Easy",        cookMethod: "low-slow", marcusHook: "Set it and forget it — game day hero in 30 minutes.", saves: "2.1K", shares: "956", priyaWhy: "Low smoke melts cheese slowly — notice how smoke penetrates dairy differently than meat." },
  chicken:  { cuisine: "American",   vegan: false, servings: 6,  difficulty: "Easy",        cookMethod: "low-slow", marcusHook: "Forgiving temps mean you can't really mess it up.", saves: "4.1K", shares: "2.2K", priyaWhy: "375°F renders fat and crispens skin — the ideal temp for poultry smoke.", jenBadge: "kid favorite" },
  wings:    { cuisine: "American",   vegan: false, servings: 6,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Crispy skin, tender inside — the trick is baking powder.", saves: "2.7K", shares: "1.5K", priyaWhy: "Baking powder + high heat = crisp skin. A technique that transfers to other proteins.", jenBadge: "game day hit" },
  salmon:   { cuisine: "Pacific",    vegan: false, servings: 4,  difficulty: "Easy",        cookMethod: "planking", marcusHook: "Cedar plank does the work; you just watch the temp.", saves: "3.5K", shares: "1.8K", priyaWhy: "Planking protects from direct heat — see how wood infuses flavor while cooking." },
  ribs:     { cuisine: "Southern",   vegan: false, servings: 4,  difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "The 3-2-1 method makes it foolproof. Worth the wait.", saves: "5.2K", shares: "2.1K", priyaWhy: "3-2-1 teaches wrap timing and the stall — essential for all low-and-slow." },
  pork:     { cuisine: "Southern",   vegan: false, servings: 12, difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "One cook feeds a crowd. Leftovers are the best part.", saves: "4.8K", shares: "1.9K", priyaWhy: "Master the stall with pork — it's more forgiving than brisket for learning." },
  brisket:  { cuisine: "Texan",      vegan: false, servings: 12, difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "The ultimate smoke project. Start the night before.", saves: "6.1K", shares: "2.4K", priyaWhy: "You've explored smoke profiles — brisket is the summit. Flat and point cook differently." },
  wholehog: { cuisine: "Southern",   vegan: false, servings: 40, difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "For when you're ready to go all-in. Gather your crew.", saves: "892", shares: "312", priyaWhy: "Whole-hog tradition — different cuts need different attention. A masterclass in timing." },
  cauliflwr:{ cuisine: "Fusion",    vegan: true,  servings: 4,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Caramelized edges, creamy center — surprisingly meaty.", saves: "2.4K", shares: "1.1K", priyaWhy: "High heat caramelizes vegetables — gochujang glaze bridges Korean and veg-forward." },
  beetroot: { cuisine: "Contemporary", vegan: true, servings: 4,  difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "Smoked tartare is having a moment. Yours will stand out.", saves: "1.9K", shares: "843", priyaWhy: "Smoke penetrates foil-wrapped beets — a technique you haven't tried yet." },
  thaifish: { cuisine: "Thai",       vegan: false, servings: 4,  difficulty: "Easy",        cookMethod: "smoke-then-fry", marcusHook: "Smoke first, then fry. Two techniques, one knockout dish.", saves: "1.6K", shares: "721", priyaWhy: "Smoke-then-bind — Thai flavors meet American smoke. Expand your technique set." },
  gochujang:{ cuisine: "Korean",    vegan: false, servings: 4,  difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "Korean meets American BBQ. Your friends will ask for the recipe.", saves: "3.8K", shares: "1.6K", priyaWhy: "Fermented chili caramelizes under 350°F — low-and-slow preserves complex flavors." },
  mole:     { cuisine: "Mexican",   vegan: false, servings: 12, difficulty: "Worth the Wait", cookMethod: "low-slow", marcusHook: "Oaxacan tradition meets Texas low-and-slow.", saves: "2.9K", shares: "1.2K", priyaWhy: "A pitmaster in Oaxaca is smoking with mole. Here's the technique breakdown." },
  asado:    { cuisine: "Argentine",  vegan: false, servings: 8,  difficulty: "Worth the Wait", cookMethod: "direct", marcusHook: "Argentina's answer to barbecue. Fire, salt, patience.", saves: "2.3K", shares: "987", priyaWhy: "Argentine style: salt only, no rub. Learn how fire and restraint create flavor." },
  pizza:    { cuisine: "Italian",   vegan: false, servings: 4,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Wood-fired at home in 20 minutes. Kids love it.", saves: "4.2K", shares: "2.3K", priyaWhy: "High heat + smoke = wood-fired at home. Stone helps crisp the crust." },
  peach:    { cuisine: "American",   vegan: true,  servings: 6,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Smoke the fruit first — dessert that steals the show.", saves: "3.1K", shares: "1.4K", priyaWhy: "Smoking fruit first adds depth — the cobbler topping puffs on the grill." },
  macncheese:{ cuisine: "American",  vegan: false, servings: 8,  difficulty: "Easy",        cookMethod: "hot-fast", marcusHook: "Smoked Gouda takes it to another level. Crowd favorite.", saves: "4.6K", shares: "2.0K", priyaWhy: "Smoke adds depth to creamy mac — cast iron holds heat for even cooking.", jenBadge: "goes with everything" },
};

/** Unique seasonal/availability notes for Sofia's Seasonal section */
export const SEASONAL_NOTES = {
  macncheese: "Peak dairy season — richest flavor now",
  burger: "Grass-fed beef at its best this month",
  queso: "Hatch chile season — swap in green chiles",
  peach: "Stone fruit peak — smoke intensifies the sweetness",
  beetroot: "Root season — earthy and vibrant",
  cauliflwr: "Cool-weather harvest — best texture right now",
};

/** All recipe keys for browsing, optionally filtered. */
export const ALL_RECIPE_KEYS = Object.keys(BROWSE);

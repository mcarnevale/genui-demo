import { useState, useMemo } from 'react';
import { FoodImage } from './FoodImage';
import { FOOD } from '../data/food';
import { RECIPES } from '../data/recipes';
import { BROWSE, ALL_RECIPE_KEYS } from '../data/recipeBrowse';

/** Parse cook time string to minutes for filtering. */
function timeToMins(timeStr) {
  if (!timeStr) return 999;
  const m = timeStr.match(/(\d+)\s*min/);
  if (m) return parseInt(m[1], 10);
  const h = timeStr.match(/(\d+(?:\.\d+)?)\s*hr/);
  if (h) return Math.round(parseFloat(h[1]) * 60);
  return 999;
}

/** Dave: List view, filter bar, dense rows (name, protein, cook time, pellet, target temp) */
function DaveRecipesBrowse({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [filterMeat, setFilterMeat] = useState('all');
  const [filterMethod, setFilterMethod] = useState('all');

  const list = useMemo(() => {
    let keys = [...ALL_RECIPE_KEYS];
    if (filterMeat !== 'all') {
      keys = keys.filter(k => (RECIPES[k]?.protein || '').toLowerCase().includes(filterMeat));
    }
    if (filterMethod !== 'all') {
      keys = keys.filter(k => (BROWSE[k]?.cookMethod || '').includes(filterMethod));
    }
    return keys.sort((a, b) => timeToMins(FOOD[b]?.time) - timeToMins(FOOD[a]?.time));
  }, [filterMeat, filterMethod]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#1C1210' }}>
      <div className="p-3 border-b shrink-0" style={{ borderColor: '#2A1F1A', backgroundColor: '#251A15' }}>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {['all', 'beef', 'pork', 'chicken', 'fish', 'plant'].map(v => (
            <button key={v} onClick={() => setFilterMeat(v)} className="px-3 py-1.5 rounded text-xs font-mono shrink-0 capitalize" style={{ backgroundColor: filterMeat === v ? a + '40' : '#0F0A08', color: t }}>{v}</button>
          ))}
        </div>
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {['all', 'low-slow', 'hot-fast'].map(v => (
            <button key={v} onClick={() => setFilterMethod(v)} className="px-3 py-1 rounded text-[10px] font-mono shrink-0" style={{ backgroundColor: filterMethod === v ? a + '40' : '#0F0A08', color: t }}>{v}</button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-2">
        {list.map(key => {
          const f = FOOD[key];
          const r = RECIPES[key];
          if (!f) return null;
          return (
            <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="w-full flex items-center gap-3 py-2 px-3 rounded text-left" style={{ backgroundColor: '#251A15', border: '1px solid rgba(255,107,53,0.15)' }}>
              <span className="text-xs font-mono shrink-0 w-16" style={{ color: t }}>{f.time}</span>
              <span className="flex-1 text-sm font-medium truncate" style={{ color: t }}>{f.name}</span>
              <span className="text-[10px] font-mono opacity-60 shrink-0" style={{ color: t }}>{r?.protein || '—'}</span>
              <span className="text-[10px] font-mono opacity-60 shrink-0" style={{ color: t }}>{r?.pellet || '—'}</span>
              <span className="text-[10px] font-mono opacity-60 shrink-0" style={{ color: t }}>{r?.targetTemp || '—'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Priya: Card grid, 2 cols, photo, name, cuisine tag, difficulty, cook time */
function PriyaRecipesBrowse({ persona, onRecipeClick }) {
  const t = '#5C3A1E';
  const a = persona.accent;
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const cuisines = useMemo(() => [...new Set(Object.values(BROWSE).map(b => b.cuisine))], []);

  const list = useMemo(() => {
    if (cuisineFilter === 'all') return ALL_RECIPE_KEYS;
    return ALL_RECIPE_KEYS.filter(k => BROWSE[k]?.cuisine === cuisineFilter);
  }, [cuisineFilter]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="p-3 border-b shrink-0 bg-white/80">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => setCuisineFilter('all')} className="px-3 py-1.5 rounded-full text-xs shrink-0 font-medium" style={{ backgroundColor: cuisineFilter === 'all' ? a + '30' : '#EEE', color: t }}>All</button>
          {cuisines.slice(0, 6).map(c => (
            <button key={c} onClick={() => setCuisineFilter(c)} className="px-3 py-1.5 rounded-full text-xs shrink-0" style={{ backgroundColor: cuisineFilter === c ? a + '30' : '#EEE', color: t }}>{c}</button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {list.map(key => {
            const f = FOOD[key];
            const b = BROWSE[key];
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-xl overflow-hidden shadow-sm text-left" style={{ border: '1px solid rgba(232,151,107,0.2)' }}>
                <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-[4/3] w-full" />
                <div className="p-3 bg-white">
                  <div className="font-semibold text-sm truncate" style={{ color: t }}>{f.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: a + '25', color: t }}>{b?.cuisine}</span>
                    <span className="text-[10px] text-amber-700">{b?.difficulty}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{f.time}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Tom & Linda: Large cards, photo, big name, cook time badge, serving count */
function TomLindaRecipesBrowse({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [servingsFilter, setServingsFilter] = useState('all');
  const [lowSodium, setLowSodium] = useState(false);

  const list = useMemo(() => {
    let keys = [...ALL_RECIPE_KEYS];
    if (servingsFilter !== 'all') {
      const min = parseInt(servingsFilter, 10);
      keys = keys.filter(k => (BROWSE[k]?.servings || 4) >= min);
    }
    return keys;
  }, [servingsFilter, lowSodium]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="p-4 border-b shrink-0 bg-white">
        <div className="flex flex-wrap gap-2">
          {['all', '4', '6', '8', '12'].map(v => (
            <button key={v} onClick={() => setServingsFilter(v)} className="px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: servingsFilter === v ? a : '#F0E8E0', color: servingsFilter === v ? 'white' : t }}>{v === 'all' ? 'All' : v + '+'}</button>
          ))}
          <button onClick={() => setLowSodium(!lowSodium)} className="px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: lowSodium ? a : '#F0E8E0', color: lowSodium ? 'white' : t }}>Low Sodium</button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {list.map(key => {
            const f = FOOD[key];
            const b = BROWSE[key];
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-2xl overflow-hidden shadow-md text-left" style={{ border: '1px solid #EEE8E0' }}>
                <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-video w-full" />
                <div className="p-4 bg-white">
                  <div className="font-bold text-base" style={{ color: '#5C4A3A' }}>{f.name}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: a + '30', color: t }}>{f.time}</span>
                    <span className="text-xs text-gray-500">Serves {b?.servings || 4}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Marcus: Single-column cards, big photo, Easy/Worth the Wait badge, one-line hook */
function MarcusRecipesBrowse({ persona, onRecipeClick }) {
  const a = persona.accent;
  const [timeFilter, setTimeFilter] = useState('all');
  const [skillFilter, setSkillFilter] = useState(true);

  const list = useMemo(() => {
    let keys = [...ALL_RECIPE_KEYS];
    if (timeFilter === 'under1') keys = keys.filter(k => timeToMins(FOOD[k]?.time) <= 60);
    else if (timeFilter === '1-2') keys = keys.filter(k => { const m = timeToMins(FOOD[k]?.time); return m > 60 && m <= 120; });
    else if (timeFilter === 'halfday') keys = keys.filter(k => timeToMins(FOOD[k]?.time) > 120);
    if (skillFilter) keys = keys.filter(k => BROWSE[k]?.difficulty === 'Easy' || timeToMins(FOOD[k]?.time) <= 90);
    return keys;
  }, [timeFilter, skillFilter]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="p-4 border-b shrink-0 bg-white">
        <div className="flex gap-2 mb-2 overflow-x-auto">
          {[{ v: 'all', l: 'All' }, { v: 'under1', l: 'Under 1 hr' }, { v: '1-2', l: '1–2 hrs' }, { v: 'halfday', l: 'Half-day' }].map(({ v, l }) => (
            <button key={v} onClick={() => setTimeFilter(v)} className="px-4 py-2 rounded-xl text-sm font-medium shrink-0" style={{ backgroundColor: timeFilter === v ? a : '#E8E8E8', color: timeFilter === v ? 'white' : '#333' }}>{l}</button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={skillFilter} onChange={e => setSkillFilter(e.target.checked)} />
          <span>My Skill Level</span>
        </label>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {list.map(key => {
          const f = FOOD[key];
          const b = BROWSE[key];
          if (!f) return null;
          const isEasy = b?.difficulty === 'Easy';
          return (
            <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="w-full rounded-2xl overflow-hidden shadow-sm text-left" style={{ border: '2px solid #E8E8E8', backgroundColor: 'white' }}>
              <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-video w-full" />
              <div className="p-4">
                <div className="font-bold text-lg" style={{ color: '#333' }}>{f.name}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: isEasy ? '#4CAF5020' : '#FF980020', color: isEasy ? '#2E7D32' : '#E65100' }}>{b?.difficulty}</span>
                  <span className="text-sm text-gray-500">{f.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{b?.marcusHook || "Beginner-friendly and impressive."}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Jen: List view, cook time prominent, active vs passive, family approved badge */
function JenRecipesBrowse({ persona, onRecipeClick }) {
  const a = persona.accent;
  const [under45, setUnder45] = useState(true);

  const list = useMemo(() => {
    let keys = [...ALL_RECIPE_KEYS];
    if (under45) keys = keys.filter(k => timeToMins(FOOD[k]?.time) <= 45);
    return keys.sort((a, b) => timeToMins(FOOD[a]?.time) - timeToMins(FOOD[b]?.time));
  }, [under45]);


  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="p-4 border-b shrink-0 bg-white flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: '#5C4020' }}>Weeknight Friendly</span>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={under45} onChange={e => setUnder45(e.target.checked)} />
          <span>Under 45 min</span>
        </label>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {list.map(key => {
          const f = FOOD[key];
          const r = RECIPES[key];
          const timeline = r?.timeline;
          if (!f) return null;
          return (
            <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="w-full flex items-center gap-4 py-3 px-4 rounded-xl text-left" style={{ backgroundColor: 'white', border: '1px solid #EEE8E0' }}>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate" style={{ color: '#5C4020' }}>{f.name}</div>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <span className="font-bold" style={{ color: a }}>{f.time}</span>
                  {timeline && <span>{timeline.prep} prep · {timeline.cook} cook</span>}
                </div>
              </div>
              {BROWSE[key]?.jenBadge && <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: a + '25', color: a }}>{BROWSE[key].jenBadge}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Ray: Table view, sortable, columns name, protein, time, technique, wood, target temp */
function RayRecipesBrowse({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  const [sortBy, setSortBy] = useState('name');

  const list = useMemo(() => {
    const keys = [...ALL_RECIPE_KEYS];
    keys.sort((aKey, bKey) => {
      const aR = RECIPES[aKey];
      const bR = RECIPES[bKey];
      const aF = FOOD[aKey];
      const bF = FOOD[bKey];
      const aB = BROWSE[aKey];
      const bB = BROWSE[bKey];
      switch (sortBy) {
        case 'protein': return (aR?.protein || '').localeCompare(bR?.protein || '');
        case 'time': return timeToMins(aF?.time) - timeToMins(bF?.time);
        case 'technique': return (aB?.cookMethod || '').localeCompare(bB?.cookMethod || '');
        case 'wood': return (aR?.pellet || '').localeCompare(bR?.pellet || '');
        default: return (aF?.name || '').localeCompare(bF?.name || '');
      }
    });
    return keys;
  }, [sortBy]);

  const Header = ({ col, label }) => (
    <button onClick={() => setSortBy(col)} className="text-left text-[10px] font-mono uppercase tracking-wider px-2 py-2" style={{ color: a }}>
      {label} {sortBy === col ? '↓' : ''}
    </button>
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="grid grid-cols-6 gap-1 p-3 border-b shrink-0" style={{ borderColor: '#1A1A1A', backgroundColor: '#111' }}>
        <Header col="name" label="Recipe" />
        <Header col="protein" label="Protein" />
        <Header col="time" label="Time" />
        <Header col="technique" label="Method" />
        <Header col="wood" label="Wood" />
        <Header col="wood" label="Target" />
      </div>
      <div className="flex-1 overflow-auto">
        {list.map(key => {
          const f = FOOD[key];
          const r = RECIPES[key];
          const b = BROWSE[key];
          if (!f) return null;
          return (
            <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="w-full grid grid-cols-6 gap-1 py-2 px-3 text-left border-b" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
              <span className="text-sm font-medium truncate" style={{ color: t }}>{f.name}</span>
              <span className="text-xs font-mono truncate" style={{ color: t }}>{r?.protein || '—'}</span>
              <span className="text-xs font-mono" style={{ color: t }}>{f.time}</span>
              <span className="text-xs font-mono truncate" style={{ color: t }}>{b?.cookMethod || '—'}</span>
              <span className="text-xs font-mono truncate" style={{ color: t }}>{r?.pellet || '—'}</span>
              <span className="text-xs font-mono" style={{ color: t }}>{r?.targetTemp || '—'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Sofia: Masonry-style grid, 70% photo, vegan badge, Saves count. Vegan only. */
function SofiaRecipesBrowse({ persona, onRecipeClick }) {
  const t = '#2D3B2D';
  const a = persona.accent;

  const list = useMemo(() => ALL_RECIPE_KEYS.filter(k => BROWSE[k]?.vegan), []);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="p-3 border-b shrink-0 bg-white flex gap-2 overflow-x-auto">
        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: a + '25', color: t }}>Photogenic</span>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">New This Week</span>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {list.map(key => {
            const f = FOOD[key];
            const b = BROWSE[key];
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-2xl overflow-hidden shadow-sm text-left" style={{ border: '1px solid #E8E6E0' }}>
                <div className="relative aspect-[3/4]">
                  <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="absolute inset-0 w-full h-full" />
                  <div className="absolute bottom-2 right-2 text-[10px] text-white/90 font-medium">{b?.saves || "1.2K"} saves</div>
                  <div className="absolute top-2 left-2 text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: 'rgba(168,192,151,0.9)', color: t }}>Vegan</div>
                </div>
                <div className="p-3 bg-white">
                  <div className="font-semibold text-sm truncate" style={{ color: t }}>{f.name}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Walt: Large cards, single column, full-width photo, big name only */
function WaltRecipesBrowse({ persona, onRecipeClick }) {
  const t = persona.textColor;
  const a = persona.accent;
  const myRecipes = ['brisket', 'ribs', 'pork', 'chicken'];
  const [browseAll, setBrowseAll] = useState(false);
  const list = browseAll ? ALL_RECIPE_KEYS : myRecipes;

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#1A1614' }}>
      <div className="p-4 border-b shrink-0" style={{ borderColor: '#2A2520' }}>
        <div className="flex gap-2">
          <button onClick={() => setBrowseAll(false)} className="px-4 py-2 rounded-xl text-sm font-bold" style={{ backgroundColor: !browseAll ? a + '40' : 'transparent', color: t }}>My Recipes</button>
          <button onClick={() => setBrowseAll(true)} className="px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: browseAll ? a + '40' : 'transparent', color: t }}>Browse All</button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {list.map(key => {
          const f = FOOD[key];
          if (!f) return null;
          return (
            <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="w-full rounded-2xl overflow-hidden text-left" style={{ border: `2px solid ${a}30` }}>
              <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-video w-full" />
              <div className="p-6 text-center">
                <div className="font-bold text-xl" style={{ color: t }}>{f.name.replace(/^Smoked |^Crispy |^Whole Packer |^Baby Back |^Pulled |^Classic /i, '').split(/ shoulder| thighs/i)[0]}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Casey: Card grid, cuisine flags, Fusion badge, cuisine-first filters */
function CaseyRecipesBrowse({ persona, onRecipeClick }) {
  const a = persona.accent;
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const cuisines = ['Korean', 'Argentine', 'Southern', 'Mexican', 'Thai', 'Japanese'];

  const list = useMemo(() => {
    if (cuisineFilter === 'all') return ALL_RECIPE_KEYS;
    return ALL_RECIPE_KEYS.filter(k => {
      const c = BROWSE[k]?.cuisine || '';
      if (cuisineFilter === 'Korean') return c === 'Korean' || (FOOD[k]?.tag === 'Fusion' && k === 'gochujang');
      if (cuisineFilter === 'Argentine') return c === 'Argentine';
      if (cuisineFilter === 'Southern') return c === 'Southern' || c === 'Texan';
      if (cuisineFilter === 'Mexican') return c === 'Mexican' || c === 'Tex-Mex';
      if (cuisineFilter === 'Thai') return c === 'Thai';
      if (cuisineFilter === 'Japanese') return c === 'Pacific';
      return true;
    });
  }, [cuisineFilter]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: '#F5EDE8' }}>
      <div className="p-4 border-b shrink-0 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => setCuisineFilter('all')} className="px-4 py-2 rounded-full text-sm font-medium shrink-0" style={{ backgroundColor: cuisineFilter === 'all' ? a + '30' : '#E8E0D8', color: '#3A2A20' }}>All</button>
          {cuisines.map(c => (
            <button key={c} onClick={() => setCuisineFilter(c)} className="px-4 py-2 rounded-full text-sm shrink-0" style={{ backgroundColor: cuisineFilter === c ? a + '30' : '#E8E0D8', color: '#3A2A20' }}>{c}</button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {list.map(key => {
            const f = FOOD[key];
            const b = BROWSE[key];
            const isFusion = f?.tag === 'Fusion';
            if (!f) return null;
            return (
              <button key={key} type="button" onClick={() => onRecipeClick?.(key)} className="rounded-xl overflow-hidden text-left" style={{ backgroundColor: 'white', border: '1px solid #E0D8D0' }}>
                <FoodImage foodKey={key} name={f.name} gradient={f.gradient} emoji={f.emoji} className="aspect-[4/3] w-full" />
                <div className="p-3">
                  <div className="font-semibold text-sm truncate" style={{ color: '#3A2A20' }}>{f.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: a + '20', color: a }}>{b?.cuisine}</span>
                    {isFusion && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: a + '20', color: a }}>Fusion</span>}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{f.time}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const RECIPE_BROWSE = {
  dave: DaveRecipesBrowse,
  priya: PriyaRecipesBrowse,
  'tom-linda': TomLindaRecipesBrowse,
  marcus: MarcusRecipesBrowse,
  jen: JenRecipesBrowse,
  ray: RayRecipesBrowse,
  sofia: SofiaRecipesBrowse,
  walt: WaltRecipesBrowse,
  casey: CaseyRecipesBrowse,
};

/** Persona-aware recipe browse section. Shows when user taps Recipes in nav. */
export function RecipesSection({ persona, onRecipeClick }) {
  const pid = persona?.id || 'dave';
  const Browse = RECIPE_BROWSE[pid] || DaveRecipesBrowse;
  return <Browse persona={persona} onRecipeClick={onRecipeClick} />;
}

import { useState } from 'react';
import { FoodImage } from './FoodImage';
import { Icon } from './Icon';
import { ImagePlaceholder } from './ImagePlaceholder';
import { FOOD } from '../data/food';
import { RECIPES } from '../data/recipes';
import { BROWSE } from '../data/recipeBrowse';

/** Persona-aware recipe detail. Layout and tone vary by persona. */
export function RecipeDetail({ foodKey, persona, onBack }) {
  const f = FOOD[foodKey];
  const r = RECIPES[foodKey];
  if (!f || !r) return null;

  const pid = persona?.id || 'custom';
  const t = persona?.textColor || '#FFF5E6';
  const a = persona?.accent || '#FF6B35';

  const [stepIdx, setStepIdx] = useState(0);
  const [checked, setChecked] = useState({});
  const [servings, setServings] = useState(4);
  const isMarcus = pid === 'marcus';
  const isTomLinda = pid === 'tom-linda';
  const isSofia = pid === 'sofia';
  const isCasey = pid === 'casey';
  const isWalt = pid === 'walt';
  const isRay = pid === 'ray';
  const isJen = pid === 'jen';
  const isPriya = pid === 'priya';
  const isDave = pid === 'dave';
  const isCustom = pid === 'custom';

  const toggleCheck = (i) => setChecked((c) => ({ ...c, [i]: !c[i] }));
  const scale = (amt) => {
    if (typeof amt === 'number') return Math.round(amt * (servings / 4));
    if (typeof amt === 'string' && /^\d+$/.test(amt)) return Math.round(parseInt(amt, 10) * (servings / 4));
    return amt;
  };

  const bg = isDave || isRay ? '#1C1210' : isWalt ? '#1A1614' : isSofia ? '#FAFAF8' : isCustom ? '#FFFBF5' : '#FFFBF5';
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: bg }}>
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center gap-3 px-4 py-3 border-b" style={{ backgroundColor: isDave || isRay ? '#251A15' : 'white', borderColor: isDave || isRay ? '#2A1F1A' : '#E8E6E0' }}>
        <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-black/5 flex items-center gap-1.5" style={{ color: isDave || isRay ? t : '#333' }}>
          <Icon name="arrow-left" size={20} /> Back
        </button>
        <h1 className="flex-1 font-bold truncate text-lg" style={{ color: isDave || isRay ? t : '#333' }}>{f.name}</h1>
      </header>

      <div className="flex-1 overflow-auto pb-8">
        {/* Hero image */}
        <div className="relative">
          <FoodImage foodKey={foodKey} name={f.name} gradient={f.gradient} emoji={f.emoji} className="w-full aspect-video object-cover" />
          {isSofia && (
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/90 shadow">Share</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/90 shadow">Log My Cook</button>
            </div>
          )}
        </div>

        <div className="p-4 max-w-2xl mx-auto">
          {/* Casey: Story first */}
          {isCasey && r.story && (
            <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: a + '15', border: `1px solid ${a}30` }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: '#3A2A20' }}>The Story</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3A2A20' }}>{r.story}</p>
            </div>
          )}

          {/* Priya: Why This Recipe */}
          {isPriya && (BROWSE[foodKey]?.priyaWhy || r?.story) && (
            <div className="mb-4 px-3 py-2 rounded-lg" style={{ backgroundColor: a + '20', borderLeft: `4px solid ${a}` }}>
              <p className="text-sm" style={{ color: '#5C3A1E' }}><strong>Why This Recipe:</strong> {BROWSE[foodKey]?.priyaWhy || r?.story}</p>
            </div>
          )}

          {/* Walt: Red meat note */}
          {isWalt && r.redMeat && (
            <div className="mb-4 p-3 rounded-lg text-sm opacity-90" style={{ backgroundColor: 'rgba(212,114,44,0.15)', color: t }}>
              This is a red meat–forward cook. Want to see a poultry or lamb alternative with a similar technique?
            </div>
          )}

          {/* Jen: Timeline first */}
          {isJen && r.timeline && (
            <div className="mb-6 p-4 rounded-xl bg-white border border-gray-100">
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#5C4020' }}>Timeline</h3>
              <div className="flex gap-6">
                <span><strong>{r.timeline.prep}</strong> prep</span>
                <span><strong>{r.timeline.cook}</strong> cook</span>
                <span><strong>{r.timeline.rest}</strong> rest</span>
              </div>
              <button className="mt-4 px-5 py-2.5 rounded-lg font-semibold text-white" style={{ backgroundColor: a }}>Made It</button>
            </div>
          )}

          {/* Tom & Linda: Scale Recipe */}
          {isTomLinda && (
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-medium" style={{ color: '#5C4A3A' }}>Servings:</span>
              <div className="flex gap-2">
                {[2, 4, 6, 8].map((n) => (
                  <button
                    key={n}
                    onClick={() => setServings(n)}
                    className={`w-10 h-10 rounded-lg font-semibold ${servings === n ? 'text-white' : 'bg-gray-100'}`}
                    style={servings === n ? { backgroundColor: a } : {}}
                  >{n}</button>
                ))}
              </div>
            </div>
          )}

          {/* Dave / Ray: Two-column layout (ingredients | technique) */}
          {(isDave || isRay) && (
            <div className={`grid gap-4 ${isRay ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2" style={{ color: t }}>Ingredients</h3>
                <ul className="space-y-1 text-sm font-mono" style={{ color: t }}>
                  {r.ingredients.map((ing, i) => (
                    <li key={i}>{isRay ? `${ing.amount}${ing.unit} ${ing.item}` : `${ing.amount} ${ing.unit} ${ing.item}`}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2" style={{ color: t }}>Technique</h3>
                <p className="text-sm" style={{ color: t }}>{r.technique}</p>
                {r.phases && (
                  <div className="mt-3 space-y-1 text-xs font-mono" style={{ color: t }}>
                    {Object.entries(r.phases).map(([phase, note]) => (
                      <div key={phase}><strong>{phase}:</strong> {note}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Marcus: One step per screen */}
          {isMarcus && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border-2 shadow-sm" style={{ borderColor: a + '40' }}>
                <div className="text-xs text-gray-500 mb-2">Step {stepIdx + 1} of {r.steps.length}</div>
                <ImagePlaceholder aspect="4/3" className="mb-4 rounded-xl" prompt={r.steps[stepIdx].image || `A picture showing this step`} />
                <p className="text-lg font-medium mb-4" style={{ color: '#333' }}>{r.steps[stepIdx].text}</p>
                {r.steps[stepIdx].time && <p className="text-sm text-gray-500">~{r.steps[stepIdx].time}</p>}
                <div className="mt-6 flex gap-3">
                  {stepIdx > 0 && <button onClick={() => setStepIdx((i) => i - 1)} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 flex items-center gap-1.5"><Icon name="arrow-left" size={18} /> Back</button>}
                  {stepIdx < r.steps.length - 1 ? (
                    <button onClick={() => setStepIdx((i) => i + 1)} className="flex-1 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: a }}>Done — Next Step</button>
                  ) : (
                    <button className="flex-1 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: a }}>Finished!</button>
                  )}
                </div>
              </div>
              <button className="w-full py-3 rounded-xl border-2 font-medium" style={{ borderColor: a, color: a }}>I Need Help</button>
            </div>
          )}

          {/* Non-Marcus: Steps (or ingredients for Dave/Ray who already have them) */}
          {!isMarcus && !isDave && !isRay && (
            <>
              {/* Ingredients (for most personas) */}
              <div className="mb-6">
                <h3 className="text-sm font-bold mb-3" style={{ color: isSofia ? '#2D3B2D' : isCasey ? '#3A2A20' : '#333' }}>Ingredients</h3>
                <ul className="space-y-2">
                  {r.ingredients.map((ing, i) => (
                    <li key={i} className="text-sm">
                      {isTomLinda ? `${scale(ing.amount)} ${ing.unit} ${ing.item}` : `${ing.amount} ${ing.unit} ${ing.item}`}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps - Tom & Linda with checkboxes */}
              <div className="mb-6">
                <h3 className="text-sm font-bold mb-3" style={{ color: isSofia ? '#2D3B2D' : '#333' }}>Steps</h3>
                <div className="space-y-3">
                  {r.steps.map((s, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-4 rounded-xl ${isTomLinda ? 'cursor-pointer' : ''}`}
                      style={{ backgroundColor: isTomLinda && checked[i] ? a + '15' : 'white', border: '1px solid #EEE' }}
                      onClick={isTomLinda ? () => toggleCheck(i) : undefined}
                    >
                      {isTomLinda && (
                        <div
                          className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-sm ${checked[i] ? 'text-white' : 'border-2'}`}
                          style={checked[i] ? { backgroundColor: a } : { borderColor: a }}
                        >{checked[i] ? '✓' : ''}</div>
                      )}
                      <div>
                        <p className="font-medium text-sm">{s.text}</p>
                        {s.time && <span className="text-xs text-gray-500">~{s.time}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Ray: Timeline at bottom (if not shown above) */}
          {isDave && r.timeline && (
            <div className="mt-6 p-3 rounded-lg font-mono text-xs" style={{ backgroundColor: '#251A15', color: t }}>
              <strong>Timeline:</strong> {r.timeline.prep} prep · {r.timeline.cook} cook · {r.timeline.rest} rest
            </div>
          )}

          {/* Tom & Linda: Pair With */}
          {isTomLinda && r.pairWith && r.pairWith.length > 0 && (
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: a + '10', border: `1px solid ${a}30` }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: '#5C4A3A' }}>Pair With</h3>
              <p className="text-sm" style={{ color: '#5C4A3A' }}>{r.pairWith.join(' · ')}</p>
            </div>
          )}

          {/* Sofia: Plating Tips */}
          {isSofia && r.platingTips && (
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'white', border: '1px solid #E8E6E0' }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: '#2D3B2D' }}>Plating Tips</h3>
              <p className="text-sm" style={{ color: '#2D3B2D' }}>{r.platingTips}</p>
            </div>
          )}

          {/* Casey: Make It Your Own */}
          {isCasey && (
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: a + '15', border: `1px solid ${a}30` }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: '#3A2A20' }}>Make It Your Own</h3>
              <p className="text-sm" style={{ color: '#3A2A20' }}>Swap gochujang for sriracha if you like heat. Add a plant-based protein and double down on the glaze for a flexitarian twist.</p>
            </div>
          )}

          {/* Dave / Ray: Cook Log */}
          {(isDave || isRay) && (
            <button className="mt-6 w-full py-3 rounded-lg font-mono text-sm" style={{ backgroundColor: a + '30', color: a }}>
              Cook Log — View your history for this recipe
            </button>
          )}

          {/* Ray: Pellet / Target (data dense) */}
          {isRay && (r.pellet || r.targetTemp) && (
            <div className="mt-4 flex gap-4 font-mono text-xs" style={{ color: t }}>
              {r.pellet && <span>Pellet: {r.pellet}</span>}
              {r.targetTemp && <span>Target: {r.targetTemp}</span>}
              {r.protein && <span>Protein: {r.protein}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

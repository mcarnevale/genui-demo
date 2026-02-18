import { FoodImage } from './FoodImage';
import { Icon } from './Icon';
import { FOOD } from '../data/food';

/** Sofia: My Cooks — gallery of logged food photography. Clean, visual, Pinterest-like. */
export function MyCooksSection({ persona, onRecipeClick }) {
  const t = "#2D3B2D";
  const a = persona.accent;

  const cooks = [
    { recipe: "beetroot", date: "Feb 15", platform: "Reels", caption: "Smoke ring on beets", likes: "2.4K" },
    { recipe: "cauliflwr", date: "Feb 12", platform: "Blog", caption: "Golden hour flat lay", likes: null },
    { recipe: "gochujang", date: "Feb 8", platform: "Reels", caption: "Glaze shot", likes: "1.8K" },
    { recipe: "thaifish", date: "Feb 5", platform: "Instagram", caption: "Plated with herbs", likes: "892" },
    { recipe: "peach", date: "Feb 1", platform: "Blog", caption: "Dessert hero shot", likes: null },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold" style={{ color: t }}>My Cooks</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{ backgroundColor: a + "20", color: a }}
        >
          <Icon name="camera" size={18} />
          Log a Cook
        </button>
      </div>

      <p className="text-sm opacity-80 mb-6" style={{ color: t }}>
        Your food photography archive. Tap any cook to view the recipe or add new photos.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {cooks.map((cook, i) => {
          const f = FOOD[cook.recipe];
          if (!f) return null;
          const wide = i % 3 === 0;
          return (
            <button
              key={`${cook.recipe}-${cook.date}`}
              onClick={() => onRecipeClick?.(cook.recipe)}
              className={`rounded-2xl overflow-hidden text-left ${wide ? "col-span-2" : ""}`}
              style={{ backgroundColor: "white", border: "1px solid #E8E6E0" }}
            >
              <div className={`relative w-full ${wide ? "aspect-video" : "aspect-square"}`}>
                <FoodImage
                  foodKey={cook.recipe}
                  name={f.name}
                  gradient={f.gradient}
                  emoji={f.emoji}
                  className="w-full h-full"
                />
                <span
                  className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: a + "90", color: "white" }}
                >
                  {cook.platform}
                </span>
                {cook.likes && (
                  <span className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}>
                    ♥ {cook.likes}
                  </span>
                )}
              </div>
              <div className="p-3">
                <div className="font-semibold text-sm truncate" style={{ color: t }}>{f.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{cook.date}</div>
                {cook.caption && (
                  <div className="text-[10px] italic opacity-70 mt-1" style={{ color: t }}>{cook.caption}</div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(168,192,151,0.2)", border: "1px dashed rgba(168,192,151,0.5)" }}>
        <p className="text-sm" style={{ color: t }}>
          <strong>Tip:</strong> Snap a progress photo during a cook — it&apos;ll auto-save here. Great for before/after content.
        </p>
      </div>
    </div>
  );
}

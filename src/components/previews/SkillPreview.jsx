import { lerp3, clamp } from '../../utils/color';

export function SkillPreview({ value }) {
  const imgH = lerp3(value, 100, 72, 40);
  const mainFont = lerp3(value, 16, 14, 12);
  const stepOp = clamp(1 - (value - 0.15) / 0.4, 0, 1);
  const denseOp = clamp((value - 0.3) / 0.4, 0, 1);
  const recipeName = value < 0.35 ? "Smoked Hot Dogs" : value < 0.65 ? "Smoked Chicken Thighs" : "Competition Brisket";
  const recipeEmoji = value < 0.35 ? "🌭" : value < 0.65 ? "🍗" : "🥩";
  const grad = value < 0.35 ? "linear-gradient(135deg,#E8A050,#C07830)" : value < 0.65 ? "linear-gradient(135deg,#D4A060,#A07840)" : "linear-gradient(135deg,#5C2018,#3A1008)";

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100">
      <div className="relative overflow-hidden" style={{ height: imgH, background: grad, transition: "height 0.15s" }}>
        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">{recipeEmoji}</div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-white font-bold" style={{ fontSize: lerp3(value, 17, 15, 13) }}>{recipeName}</span>
        </div>
      </div>
      <div style={{ padding: lerp3(value, 16, 12, 10), fontSize: mainFont, transition: "padding 0.15s" }}>
        {value < 0.55 && (
          <div style={{ opacity: stepOp }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Step 1 of {value < 0.35 ? "3" : "6"}</span>
              <span className="text-xs text-gray-400">{value < 0.35 ? "5 min" : "15 min"}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-3 text-sm">
              {value < 0.35
                ? "Place the hot dogs directly on the grill grates. That's it — you're doing great."
                : "Season the chicken thighs generously with your rub. Cover every surface, including under the skin."}
            </p>
            <div className="bg-green-500 text-white text-center py-2.5 rounded-lg font-semibold text-sm cursor-pointer hover:bg-green-600 transition-colors">
              Done — Next Step →
            </div>
          </div>
        )}
        {value > 0.3 && (
          <div style={{ opacity: denseOp }}>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {(value > 0.65
                ? ["14 hrs","225°F","IT: 203°F","Post Oak","Wrap @ 165°F","Rest 2hrs","Fat-cap up"]
                : ["1.5 hrs","275°F","IT: 175°F","Cherry Wood","Skin-on"]
              ).map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">{t}</span>)}
            </div>
            <div className="text-[11px] text-gray-500 leading-relaxed">
              {value > 0.65 ? (
                <>
                  <strong className="text-gray-700">Injection:</strong> Beef broth, 1T Worcestershire, garlic powder. Inject on a grid pattern.
                  <br/><strong className="text-gray-700">Rub:</strong> 50/50 coarse pepper + kosher salt. 2T garlic, 1T onion.
                  <br/><strong className="text-gray-700">Method:</strong> Fat-cap up, spritz hourly post-bark. Wrap butcher paper @ 165°F internal. Pull at 203°F when probe-tender. Rest in cooler 2hrs minimum.
                </>
              ) : (
                <>
                  <strong className="text-gray-700">Rub:</strong> 2T paprika, 1T brown sugar, 1T garlic powder
                  <br/><strong className="text-gray-700">Method:</strong> Skin-on, 275°F until 175°F internal. Rest 10 min.
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

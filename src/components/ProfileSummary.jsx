import { lerp3Color } from '../utils/color';
import { SLIDER_TITLES, SLIDER_LABELS, SLIDER_GRADIENTS } from '../constants/sliders';
import { PersonaPortrait } from './PersonaPortrait';

export function ProfileSummary({ sliders, nutrition, isPersona, persona }) {
  const vv = isPersona ? persona.sliders[3] : sliders[3];
  const bg = lerp3Color(vv, "#2A1510", "#F5EDE4", "#FAFAFA");
  const text = lerp3Color(vv, "#FFE0C0", "#5C4020", "#333333");
  const accent = lerp3Color(vv, "#FF6B35", "#C49A6C", "#78909C");
  const cardBg = lerp3Color(vv, "#3A2518", "#FFFFFF", "#FFFFFF");
  const s = isPersona ? persona.sliders : sliders;
  const n = isPersona ? persona.nutrition : nutrition;

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto" style={{ backgroundColor: bg }}>
      <div className="p-6 flex flex-col items-center">
        {isPersona ? (
          <PersonaPortrait persona={persona} size={90} />
        ) : (
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-3 mb-1" style={{ borderColor: accent, color: accent, borderWidth: 3, backgroundColor: bg }}>You</div>
        )}
        <div className="font-bold text-lg mt-2" style={{ color: text }}>{isPersona ? persona.name : "Your Profile"}</div>
        {isPersona && <div className="text-sm opacity-70 mt-0.5" style={{ color: text }}>{persona.tagline}</div>}
        {isPersona && <p className="text-sm opacity-80 mt-2 leading-relaxed text-center" style={{ color: text }}>{persona.description}</p>}
      </div>
      <div className="px-6 py-4" style={{ backgroundColor: cardBg + "80" }}>
        {SLIDER_TITLES.map((title, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="flex justify-between text-[11px] mb-1">
              <span style={{ color: text, opacity: 0.7 }}>{title}</span>
              <span style={{ color: accent, fontWeight: 600, fontSize: 10 }}>
                {s[i] < 0.33 ? SLIDER_LABELS[i][0] : s[i] < 0.66 ? SLIDER_LABELS[i][1] : SLIDER_LABELS[i][2]}
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: text + "15" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${s[i]*100}%`, background: SLIDER_GRADIENTS[i] }} />
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-1.5 justify-center">
        {n.map(item => <span key={item} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: accent+"25", color: text }}>{item}</span>)}
      </div>
      {isPersona && (
        <div className="px-6 py-4 border-t" style={{ borderColor: text + "15" }}>
          <p className="text-sm italic text-center leading-relaxed" style={{ color: text, opacity: 0.75 }}>"{persona.hero}"</p>
        </div>
      )}
    </div>
  );
}

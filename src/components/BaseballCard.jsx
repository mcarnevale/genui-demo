import { PersonaPortrait } from './PersonaPortrait';
import { MiniSliderBars } from './MiniSliderBars';

export function BaseballCard({ persona, onClick }) {
  return (
    <div onClick={onClick} className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col" style={{ backgroundColor: persona.color }}>
      <div className="relative w-full aspect-square overflow-hidden">
        <PersonaPortrait persona={persona} size="fill" />
      </div>
      <div className="px-4 pt-3 pb-1 text-center">
        <div className="font-bold text-base leading-tight" style={{ color: persona.textColor }}>{persona.name}</div>
        <div className="text-xs opacity-60 leading-tight mt-0.5" style={{ color: persona.textColor }}>{persona.tagline}</div>
      </div>
      <div className="px-4 py-2">
        <p className="text-xs leading-snug opacity-70 text-center" style={{ color: persona.textColor }}>{persona.description}</p>
      </div>
      <div className="px-4 py-3 bg-black/20 mt-auto" style={{ color: persona.textColor }}>
        <MiniSliderBars sliders={persona.sliders} accent={persona.accent} />
        <div className="mt-2 flex flex-wrap gap-1 justify-center">
          {persona.nutrition.map(n => (
            <span key={n} className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: persona.accent+"30", color: persona.textColor }}>{n}</span>
          ))}
        </div>
      </div>
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-xs italic leading-relaxed opacity-60 text-center" style={{ color: persona.textColor }}>"{persona.hero}"</p>
      </div>
    </div>
  );
}

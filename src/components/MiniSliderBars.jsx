import { SLIDER_TITLES } from '../constants/sliders';

export function MiniSliderBars({ sliders, accent }) {
  return (
    <div className="flex flex-col gap-1.5">
      {SLIDER_TITLES.map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[9px] opacity-50 w-8 text-right shrink-0">{["SKL","AMB","ACC","VBE","EXP"][i]}</span>
          <div className="flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${sliders[i]*100}%`, backgroundColor: accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}

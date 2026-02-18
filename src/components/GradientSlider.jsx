import { useState, useRef, useCallback } from 'react';
import { clamp } from '../utils/color';

export function GradientSlider({ value, onChange, labels, gradient }) {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const update = useCallback((cx) => {
    if (!trackRef.current) return;
    const r = trackRef.current.getBoundingClientRect();
    onChange(clamp((cx - r.left) / r.width, 0, 1));
  }, [onChange]);

  return (
    <div className="w-full">
      <div ref={trackRef} className="relative h-5 rounded-full cursor-pointer touch-none select-none"
        style={{ background: gradient }}
        onPointerDown={(e) => { setIsDragging(true); update(e.clientX); e.target.setPointerCapture(e.pointerId); }}
        onPointerMove={(e) => { if (isDragging) update(e.clientX); }}
        onPointerUp={() => setIsDragging(false)} onPointerCancel={() => setIsDragging(false)}>
        {[0,0.5,1].map(p => <div key={p} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50 pointer-events-none" style={{ left: `calc(${p*100}% - 4px)` }} />)}
        <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-300 pointer-events-none"
          style={{ left: `calc(${value*100}% - 16px)`, boxShadow: isDragging ? "0 0 0 6px rgba(255,255,255,0.25), 0 4px 12px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.15)", transition: isDragging ? "none" : "box-shadow 0.2s" }} />
      </div>
      <div className="flex justify-between mt-3">
        {labels.map((l,i) => <span key={i} className="text-xs font-medium" style={{ color:"#888", textAlign: i===0?"left":i===2?"right":"center", flex:1 }}>{l}</span>)}
      </div>
    </div>
  );
}

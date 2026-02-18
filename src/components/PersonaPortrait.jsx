import { PERSONA_IMAGES } from '../data';

export function PersonaPortrait({ persona, size = 120 }) {
  const photo = PERSONA_IMAGES[persona.id];
  const isFill = size === "fill";

  if (photo) {
    if (isFill) {
      return (
        <img src={photo} alt={persona.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      );
    }
    return (
      <div style={{ width: size, height: size, borderRadius: size * 0.16, overflow: "hidden", flexShrink: 0 }}>
        <img src={photo} alt={persona.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }

  const px = isFill ? 120 : size;
  return (
    <div style={{
      width: isFill ? "100%" : px, height: isFill ? "100%" : px,
      borderRadius: isFill ? 0 : px * 0.16, backgroundColor: persona.color,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      border: isFill ? "none" : `3px solid ${persona.accent}40`,
    }}>
      <span style={{ color: persona.textColor, fontWeight: 700, fontSize: isFill ? 48 : px * 0.35, opacity: 0.8 }}>
        {persona.initials}
      </span>
    </div>
  );
}

/**
 * Color and math utilities for interpolating UI values
 */

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
export const lerp3 = (t, a, b, c) =>
  t <= 0.5 ? lerp(a, b, t * 2) : lerp(b, c, (t - 0.5) * 2);

const hexToRgb = (hex) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];
const rgbToHex = ([r, g, b]) =>
  "#" +
  [r, g, b]
    .map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0"))
    .join("");
export const lerpColor = (c1, c2, t) => {
  const [r1, g1, b1] = hexToRgb(c1);
  const [r2, g2, b2] = hexToRgb(c2);
  return rgbToHex([lerp(r1, r2, t), lerp(g1, g2, t), lerp(b1, b2, t)]);
};
export const lerp3Color = (t, a, b, c) =>
  t <= 0.5 ? lerpColor(a, b, t * 2) : lerpColor(b, c, (t - 0.5) * 2);

export const aetherHighlights = [
  { label: "Orbital memory", value: "3.8 ms" },
  { label: "Adaptive cognition", value: "96%" },
  { label: "Thermal control", value: "4.2°K" },
  { label: "Autonomy", value: "∞" },
];

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

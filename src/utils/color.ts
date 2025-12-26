import { parse, oklch, rgb } from 'culori';

export function getNormalizedThemeColor() {
  if (typeof window === 'undefined') return null;

  const cssValue = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-main-theme')
    .trim();

  if (!cssValue) return null;

  const parsed = parse(cssValue);
  if (!parsed) return null;

  const inOklch = oklch(parsed);
  const inRgb = rgb(inOklch);

  // return normalized float RGB vector
  return [inRgb.r, inRgb.g, inRgb.b] as [number, number, number];
}

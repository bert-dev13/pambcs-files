/** Shared palette and tuning for light / dark cosmic themes. */
export const COSMIC_THEMES = {
  dark: {
    gradient: ['#050816', '#0B1120'],
    starColor: [255, 255, 255],
    starOpacity: { bg: 0.35, mid: 0.55, fg: 0.85 },
    bloom: true,
    shootingStar: { head: 'rgba(255,255,255,0.95)', tail: 'rgba(147,197,253,0)' },
    nebulaPurple: 'rgba(124, 58, 237, 0.22)',
    nebulaBlue: 'rgba(59, 130, 246, 0.18)',
    mouseGlow: 'rgba(59, 130, 246, 0.12)',
    dust: 'rgba(148, 163, 184, 0.35)',
  },
  light: {
    gradient: ['#eef2ff', '#f8fafc'],
    starColor: [59, 130, 246],
    starOpacity: { bg: 0.12, mid: 0.2, fg: 0.32 },
    bloom: false,
    shootingStar: { head: 'rgba(59,130,246,0.55)', tail: 'rgba(59,130,246,0)' },
    nebulaPurple: 'rgba(124, 58, 237, 0.08)',
    nebulaBlue: 'rgba(59, 130, 246, 0.1)',
    mouseGlow: 'rgba(124, 58, 237, 0.06)',
    dust: 'rgba(100, 116, 139, 0.2)',
  },
};

/** Star counts per layer — reduced on narrow viewports for performance. */
export function getStarCounts(isMobile) {
  if (isMobile) {
    return { bg: 90, mid: 40, fg: 18 };
  }
  return { bg: 180, mid: 75, fg: 35 };
}

export function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

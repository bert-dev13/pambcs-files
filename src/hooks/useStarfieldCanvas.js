import { useEffect } from 'react';
import { COSMIC_THEMES, getStarCounts, randomBetween } from '../components/cosmic/cosmicConfig';

/**
 * Creates a single star with layer-specific drift, twinkle, and parallax tuning.
 */
function createStar(layer, width, height) {
  const config = {
    bg: { size: [0.4, 1.1], parallax: 0.015, drift: 0.008, twinkle: [0.4, 1.2] },
    mid: { size: [0.7, 1.6], parallax: 0.03, drift: 0.015, twinkle: [0.8, 1.8] },
    fg: { size: [1.1, 2.4], parallax: 0.055, drift: 0.022, twinkle: [1.1, 2.4] },
  }[layer];

  return {
    layer,
    x: Math.random() * width,
    y: Math.random() * height,
    size: randomBetween(config.size[0], config.size[1]),
    opacity: randomBetween(0.35, 1),
    twinkleSpeed: randomBetween(config.twinkle[0], config.twinkle[1]),
    twinklePhase: Math.random() * Math.PI * 2,
    driftX: randomBetween(-config.drift, config.drift),
    driftY: randomBetween(-config.drift, config.drift),
    parallax: config.parallax,
  };
}

function createShootingStar(width, height) {
  const fromLeft = Math.random() > 0.5;
  return {
    active: true,
    x: fromLeft ? randomBetween(-80, width * 0.35) : randomBetween(width * 0.65, width + 80),
    y: randomBetween(0, height * 0.45),
    vx: fromLeft ? randomBetween(8, 14) : randomBetween(-14, -8),
    vy: randomBetween(2.5, 5.5),
    length: randomBetween(90, 160),
    opacity: 1,
    width: randomBetween(1.2, 2),
  };
}

/**
 * GPU-friendly canvas starfield with parallax, twinkle, drift, and shooting stars.
 */
export function useStarfieldCanvas(canvasRef, { theme, ready, reducedMotion, mouseRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return undefined;

    const palette = COSMIC_THEMES[theme] ?? COSMIC_THEMES.dark;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const counts = getStarCounts(isMobile);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars = [];
    let shootingStar = null;
    let nextShootingAt = performance.now() + randomBetween(10000, 20000);
    let rafId = 0;
    let lastTime = 0;
    let parallaxX = 0;
    let parallaxY = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = [
        ...Array.from({ length: counts.bg }, () => createStar('bg', width, height)),
        ...Array.from({ length: counts.mid }, () => createStar('mid', width, height)),
        ...Array.from({ length: counts.fg }, () => createStar('fg', width, height)),
      ];
    };

    const wrapStar = (star) => {
      if (star.x < -20) star.x = width + 20;
      if (star.x > width + 20) star.x = -20;
      if (star.y < -20) star.y = height + 20;
      if (star.y > height + 20) star.y = -20;
    };

    const drawStar = (star, time, motionEnabled) => {
      const twinkle = motionEnabled
        ? 0.55 + 0.45 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase)
        : 1;
      const layerOpacity = palette.starOpacity[star.layer];
      const alpha = star.opacity * twinkle * layerOpacity;

      const offsetX = parallaxX * star.parallax * 40;
      const offsetY = parallaxY * star.parallax * 40;
      const x = star.x + offsetX;
      const y = star.y + offsetY;

      const [r, g, b] = palette.starColor;

      if (palette.bloom && star.layer === 'fg' && alpha > 0.5) {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4);
        glow.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.35})`);
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, star.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawShootingStar = (star) => {
      const angle = Math.atan2(star.vy, star.vx);
      const tailX = star.x - Math.cos(angle) * star.length;
      const tailY = star.y - Math.sin(angle) * star.length;
      const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
      gradient.addColorStop(0, palette.shootingStar.tail);
      gradient.addColorStop(1, palette.shootingStar.head);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = star.width;
      ctx.lineCap = 'round';
      ctx.globalAlpha = star.opacity;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(star.x, star.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const drawFrame = (time) => {
      const motionEnabled = !reducedMotion;
      const delta = lastTime ? time - lastTime : 16;
      lastTime = time;

      if (mouseRef.current) {
        const targetX = (mouseRef.current.x - 0.5) * 2;
        const targetY = (mouseRef.current.y - 0.5) * 2;
        parallaxX += (targetX - parallaxX) * 0.04;
        parallaxY += (targetY - parallaxY) * 0.04;
      }

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        if (motionEnabled) {
          star.x += star.driftX * (delta / 16);
          star.y += star.driftY * (delta / 16);
          wrapStar(star);
        }
        drawStar(star, time, motionEnabled);
      });

      if (motionEnabled) {
        if (!shootingStar && time >= nextShootingAt) {
          shootingStar = createShootingStar(width, height);
          nextShootingAt = time + randomBetween(10000, 20000);
        }

        if (shootingStar?.active) {
          shootingStar.x += shootingStar.vx * (delta / 16);
          shootingStar.y += shootingStar.vy * (delta / 16);
          shootingStar.opacity -= 0.012 * (delta / 16);
          drawShootingStar(shootingStar);

          if (
            shootingStar.opacity <= 0
            || shootingStar.x > width + 200
            || shootingStar.y > height + 200
            || shootingStar.x < -200
          ) {
            shootingStar = null;
          }
        }
      }

      rafId = requestAnimationFrame(drawFrame);
    };

    resize();
    window.addEventListener('resize', resize);

    if (reducedMotion) {
      drawFrame(0);
    } else {
      rafId = requestAnimationFrame(drawFrame);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, theme, ready, reducedMotion, mouseRef]);
}

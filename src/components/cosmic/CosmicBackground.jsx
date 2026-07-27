import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useStarfieldCanvas } from '../../hooks/useStarfieldCanvas';
import '../../styles/CosmicBackground.css';

const DUST_COUNT = 14;

/**
 * Premium full-screen cosmic background with canvas starfield,
 * nebula glows, parallax, shooting stars, and mouse-reactive lighting.
 * Adapts palette for light and dark application themes.
 */
function CosmicBackground() {
  const { theme } = useTheme();
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  /** Defer heavy canvas work until after first paint. */
  useEffect(() => {
    let idleId;
    const start = () => setReady(true);

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(start, { timeout: 400 });
    } else {
      idleId = window.setTimeout(start, 120);
    }

    return () => {
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  const updateMouse = useCallback((clientX, clientY) => {
    const root = rootRef.current;
    if (!root) return;

    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    mouseRef.current = { x, y };

    root.style.setProperty('--cosmic-mouse-x', `${x * 100}%`);
    root.style.setProperty('--cosmic-mouse-y', `${y * 100}%`);
  }, []);

  useEffect(() => {
    const onMove = (event) => updateMouse(event.clientX, event.clientY);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [updateMouse]);

  useStarfieldCanvas(canvasRef, { theme, ready, reducedMotion, mouseRef });

  return (
    <div
      ref={rootRef}
      className={`cosmic-bg cosmic-bg--${theme}${ready ? ' cosmic-bg--ready' : ''}${reducedMotion ? ' cosmic-bg--static' : ''}`}
      aria-hidden="true"
    >
      {/* Base gradient + nebula atmosphere (CSS — no JS) */}
      <div className="cosmic-bg__gradient" />
      <div className="cosmic-bg__nebula cosmic-bg__nebula--purple" />
      <div className="cosmic-bg__nebula cosmic-bg__nebula--blue" />
      <div className="cosmic-bg__nebula cosmic-bg__nebula--cyan" />

      {/* Canvas starfield: twinkle, drift, parallax, shooting stars */}
      <canvas ref={canvasRef} className="cosmic-bg__canvas" />

      {/* Soft cursor-reactive lighting */}
      <div className="cosmic-bg__mouse-glow" />

      {/* Slow floating dust — CSS only for minimal JS cost */}
      <div className="cosmic-bg__dust">
        {Array.from({ length: DUST_COUNT }, (_, index) => (
          <span
            key={index}
            className="cosmic-bg__dust-particle"
            style={{ '--dust-index': index }}
          />
        ))}
      </div>

      {/* Subtle film grain to avoid flat gradients */}
      <div className="cosmic-bg__noise" />
    </div>
  );
}

export default CosmicBackground;

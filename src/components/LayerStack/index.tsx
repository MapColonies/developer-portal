import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const layers = [
  {title: '3D', text: '3D models of terrain and buildings as 3D Tiles.', to: '/docs/MapColonies/3D/3d-overview'},
  {title: 'Vector', text: 'Geographic features as points, lines and polygons.', to: '/docs/MapColonies/vector/vector-overview'},
  {title: 'Raster', text: 'Imagery and orthophotos served as map tiles.', to: '/docs/MapColonies/Raster/overview'},
  {
    title: 'DEM',
    text: 'Digital elevation models: the height of the ground at every point.',
    to: '/docs/MapColonies/DEM/dem-overview',
  },
];

type Point = [number, number];

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const G = 72;
const T = 256;
const hgrid: number[][] = [];
{
  const raw = (x: number, y: number) =>
    0.55 * Math.exp(-((x - 0.28) ** 2 + (y - 0.3) ** 2) / 0.03) +
    0.45 * Math.exp(-((x - 0.74) ** 2 + (y - 0.58) ** 2) / 0.045) +
    0.28 * Math.exp(-((x - 0.62) ** 2 + (y - 0.18) ** 2) / 0.015) +
    0.05 * Math.sin(x * 13 + y * 5) +
    0.04 * Math.cos(y * 17 - x * 4);
  let lo = Infinity;
  let hi = -Infinity;
  for (let i = 0; i <= G; i++) {
    hgrid[i] = [];
    for (let j = 0; j <= G; j++) {
      const v = raw(i / G, j / G);
      hgrid[i][j] = v;
      lo = Math.min(lo, v);
      hi = Math.max(hi, v);
    }
  }
  for (let i = 0; i <= G; i++) for (let j = 0; j <= G; j++) hgrid[i][j] = (hgrid[i][j] - lo) / (hi - lo);
}

const height = (x: number, y: number) => {
  const i = Math.min(G - 1, Math.floor(x * G));
  const j = Math.min(G - 1, Math.floor(y * G));
  const fx = x * G - i;
  const fy = y * G - j;
  return (
    hgrid[i][j] * (1 - fx) * (1 - fy) +
    hgrid[i + 1][j] * fx * (1 - fy) +
    hgrid[i][j + 1] * (1 - fx) * fy +
    hgrid[i + 1][j + 1] * fx * fy
  );
};

const shade = (x: number, y: number) => {
  const e = 1 / G;
  const dx = height(Math.min(1, x + e), y) - height(Math.max(0, x - e), y);
  const dy = height(x, Math.min(1, y + e)) - height(x, Math.max(0, y - e));
  return Math.max(0, Math.min(1, 0.62 - dx * 7 - dy * 4));
};

const river: Point[] = [[0, 0.9], [0.15, 0.8], [0.32, 0.66], [0.46, 0.6], [0.56, 0.44], [0.7, 0.34], [0.86, 0.3], [1, 0.22]];
const roads: Point[][] = [
  [[0, 0.46], [0.2, 0.5], [0.4, 0.74], [0.62, 0.82], [1, 0.78]],
  [[0.5, 1], [0.52, 0.78], [0.6, 0.62], [0.95, 0.5]],
];
const town = (() => {
  const r = rng(7);
  const out: [number, number, number, number, number][] = [];
  for (let k = 0; k < 26; k++) {
    const x = 0.36 + r() * 0.3;
    const y = 0.76 + r() * 0.18;
    if (Math.hypot(x - 0.52, y - 0.85) < 0.16) out.push([x, y, 0.025 + r() * 0.02, 0.025 + r() * 0.02, 0.3 + r() * 0.9]);
  }
  return out;
})();

const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function tile() {
  const c = document.createElement('canvas');
  c.width = c.height = T;
  return [c, c.getContext('2d')!] as const;
}

function path(g: CanvasRenderingContext2D, pts: Point[]) {
  g.beginPath();
  pts.forEach(([x, y], k) => (k ? g.lineTo(x * T, y * T) : g.moveTo(x * T, y * T)));
}

function demTexture() {
  const [c, g] = tile();
  g.fillStyle = css('--map-paper');
  g.fillRect(0, 0, T, T);
  const img = g.getImageData(0, 0, T, T);
  const d = img.data;
  for (let y = 0; y < T; y++)
    for (let x = 0; x < T; x++) {
      const k = (y * T + x) * 4;
      const a = (1 - shade(x / T, y / T)) * 70;
      d[k] -= a;
      d[k + 1] -= a;
      d[k + 2] -= a * 0.8;
    }
  g.putImageData(img, 0, 0);
  g.strokeStyle = css('--map-contour');
  const step = T / G;
  // Marching squares: one contour line per height level, every fourth one thicker like an index contour.
  for (let level = 1; level < 14; level++) {
    const lev = level / 14;
    g.lineWidth = level % 4 === 0 ? 1.6 : 0.7;
    g.beginPath();
    for (let i = 0; i < G; i++)
      for (let j = 0; j < G; j++) {
        const corners: Point[] = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]];
        const v = corners.map(([a, b]) => hgrid[a][b]);
        const p: Point[] = [];
        for (let e = 0; e < 4; e++) {
          const a = v[e];
          const b = v[(e + 1) % 4];
          if (a < lev !== b < lev) {
            const t = (lev - a) / (b - a);
            const A = corners[e];
            const B = corners[(e + 1) % 4];
            p.push([(A[0] + (B[0] - A[0]) * t) * step, (A[1] + (B[1] - A[1]) * t) * step]);
          }
        }
        for (let q = 0; q + 1 < p.length; q += 2) {
          g.moveTo(...p[q]);
          g.lineTo(...p[q + 1]);
        }
      }
    g.stroke();
  }
  return c;
}

function rasterTexture() {
  const N = 128;
  const small = document.createElement('canvas');
  small.width = small.height = N;
  const g0 = small.getContext('2d')!;
  const img = g0.createImageData(N, N);
  const d = img.data;
  const r = rng(3);
  const fields = [[134, 160, 92], [168, 178, 112], [112, 138, 78], [190, 176, 130], [150, 150, 96], [96, 124, 70]];
  const fieldColors = Array.from({length: 400}, () => fields[Math.floor(r() * fields.length)]);
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      const u = x / N;
      const v = y / N;
      const s = shade(u, v) * 1.3 + 0.25;
      const k = (y * N + x) * 4;
      let col = fieldColors[(Math.floor((u + 0.3 * v) * 9) * 20 + Math.floor((v - 0.2 * u) * 11) + 40) % 400];
      if (height(u, v) > 0.62) col = [150, 136, 118];
      if (Math.hypot(u - 0.52, v - 0.85) < 0.15) col = [176, 172, 168];
      const n = (r() - 0.5) * 18;
      d[k] = col[0] * s + n;
      d[k + 1] = col[1] * s + n;
      d[k + 2] = col[2] * s + n;
      d[k + 3] = 255;
    }
  g0.putImageData(img, 0, 0);
  const [c, g] = tile();
  g.drawImage(small, 0, 0, T, T);
  g.strokeStyle = 'rgba(52,92,120,.9)';
  g.lineWidth = 5;
  g.lineJoin = 'round';
  path(g, river);
  g.stroke();
  return c;
}

function vectorTexture() {
  const [c, g] = tile();
  g.fillStyle = css('--map-paper');
  g.globalAlpha = 0.9;
  g.fillRect(0, 0, T, T);
  g.globalAlpha = 1;
  g.lineJoin = g.lineCap = 'round';
  g.strokeStyle = css('--map-water');
  g.lineWidth = 3.2;
  path(g, river);
  g.stroke();
  roads.forEach((road) => {
    g.strokeStyle = css('--map-ink');
    g.lineWidth = 4;
    path(g, road);
    g.stroke();
    g.strokeStyle = css('--map-paper');
    g.lineWidth = 2;
    path(g, road);
    g.stroke();
  });
  g.fillStyle = css('--map-ink');
  town.forEach(([x, y, w, dd]) => g.fillRect(x * T, y * T, w * T * 0.8, dd * T * 0.8));
  g.setLineDash([5, 4]);
  g.strokeStyle = css('--map-survey');
  g.lineWidth = 1.4;
  g.strokeRect(0.33 * T, 0.7 * T, 0.38 * T, 0.27 * T);
  g.setLineDash([]);
  [[0.2, 0.3], [0.74, 0.58], [0.62, 0.18]].forEach(([x, y]) => {
    g.beginPath();
    g.arc(x * T, y * T, 4, 0, 7);
    g.fillStyle = css('--map-paper');
    g.fill();
    g.lineWidth = 1.6;
    g.strokeStyle = css('--map-ink');
    g.stroke();
  });
  return c;
}

function gridTexture() {
  const [c, g] = tile();
  g.fillStyle = css('--map-paper');
  g.globalAlpha = 0.9;
  g.fillRect(0, 0, T, T);
  g.globalAlpha = 1;
  g.strokeStyle = css('--map-rule');
  g.lineWidth = 1;
  for (let k = 1; k < 8; k++) {
    g.beginPath();
    g.moveTo((k * T) / 8, 0);
    g.lineTo((k * T) / 8, T);
    g.moveTo(0, (k * T) / 8);
    g.lineTo(T, (k * T) / 8);
    g.stroke();
  }
  return c;
}

function render(cv: HTMLCanvasElement, textures: HTMLCanvasElement[], selected: number, spread: number) {
  const ctx = cv.getContext('2d')!;
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth || 400;
  const s = (W * 0.86) / (2 * T);
  const gap = W * 0.2 * spread;
  const top = W * 0.16;
  const H = top + T * s + gap * 3 + 14;
  cv.width = W * dpr;
  cv.height = H * dpr;
  cv.style.height = `${H}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2;
  for (let L = 3; L >= 0; L--) {
    const oy = top + L * gap;
    const alpha = selected < 0 || selected === L ? 1 : 0.28;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.transform(s, s * 0.5, -s, s * 0.5, cx, oy);
    ctx.drawImage(textures[L], 0, 0);
    ctx.lineWidth = (selected === L ? 2.4 : 1) / s;
    ctx.strokeStyle = selected === L ? css('--map-survey') : css('--map-ink');
    ctx.strokeRect(0, 0, T, T);
    ctx.restore();
    if (L === 0) {
      ctx.save();
      ctx.globalAlpha = alpha;
      drawBuildings(ctx, cx, oy, s, W);
      ctx.restore();
    }
  }
}

function drawBuildings(ctx: CanvasRenderingContext2D, cx: number, oy: number, s: number, W: number) {
  const P = (x: number, y: number, z: number): Point => [cx + (x - y) * T * s, oy + (x + y) * T * s * 0.5 - z];
  const sorted = town.slice().sort((p, q) => p[0] + p[1] - (q[0] + q[1]));
  const paper = css('--map-paper');
  const side = css('--map-rule');
  const side2 = css('--map-muted');
  ctx.lineWidth = 0.8;
  ctx.strokeStyle = css('--map-ink');
  const face = (pts: Point[], fill: string) => {
    ctx.beginPath();
    pts.forEach((p, k) => (k ? ctx.lineTo(...p) : ctx.moveTo(...p)));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.stroke();
  };
  sorted.forEach(([x, y, w, d, h]) => {
    const z = h * W * 0.07;
    face([P(x, y + d, 0), P(x + w, y + d, 0), P(x + w, y + d, z), P(x, y + d, z)], side);
    face([P(x + w, y, 0), P(x + w, y + d, 0), P(x + w, y + d, z), P(x + w, y, z)], side2);
    face([P(x, y, z), P(x + w, y, z), P(x + w, y + d, z), P(x, y + d, z)], paper);
  });
}

export default function LayerStack(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState(-1);
  const state = useRef({textures: [] as HTMLCanvasElement[], selected: -1, spread: 1});

  useEffect(() => {
    const cv = canvasRef.current!;
    const st = state.current;
    const draw = () => render(cv, st.textures, st.selected, st.spread);
    const paint = () => {
      st.textures = [gridTexture(), vectorTexture(), rasterTexture(), demTexture()];
      draw();
    };
    paint();

    let frame = 0;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      st.spread = 0;
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / 1100);
        st.spread = 1 - (1 - k) ** 3;
        draw();
        if (k < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }

    let width = cv.clientWidth;
    const resize = new ResizeObserver(() => {
      if (cv.clientWidth !== width) {
        width = cv.clientWidth;
        draw();
      }
    });
    resize.observe(cv);
    const theme = new MutationObserver(paint);
    theme.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      theme.disconnect();
    };
  }, []);

  useEffect(() => {
    state.current.selected = selected;
    render(canvasRef.current!, state.current.textures, selected, state.current.spread);
  }, [selected]);

  return (
    <div className={styles.stack}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        role="img"
        aria-label="The same area drawn as four stacked layers: 3D buildings, vector features, raster imagery and elevation contours"
      />
      <div className={styles.legend} role="group" aria-label="Domains">
        {layers.map((layer, i) => (
          <div key={layer.title} className={styles.item} data-active={selected === i}>
            <button type="button" aria-pressed={selected === i} onClick={() => setSelected(selected === i ? -1 : i)}>
              <b>{layer.title}</b>
              <span>{layer.text}</span>
            </button>
            <Link to={layer.to} aria-label={`${layer.title} docs`}>
              Docs →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ported from the Design-Canvas component: gentle idle drift on the sticker
// badges plus a cursor-repel force when the pointer gets close.

interface Floater {
  el: HTMLElement;
  cx: number;
  cy: number;
  rot: number;
  ph: number;
  sp: number;
  amp: number;
  dx: number;
  dy: number;
}

const REPEL_RADIUS = 170;

let floaters: Floater[] = [];
let mouse = { x: -99999, y: -99999 };
let raf = 0;

function setup(): void {
  const els = document.querySelectorAll<HTMLElement>("[data-float]");
  if (!els.length) return;

  const sx = window.scrollX;
  const sy = window.scrollY;

  floaters = [...els].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      el,
      cx: r.left + sx + r.width / 2,
      cy: r.top + sy + r.height / 2,
      rot: parseFloat(el.dataset.rot || "0"),
      ph: Math.random() * 6.28,
      sp: 0.5 + Math.random() * 0.5,
      amp: 7 + Math.random() * 7,
      dx: 0,
      dy: 0,
    };
  });

  window.addEventListener("pointermove", onMove);
  raf = requestAnimationFrame(loop);
}

function onMove(e: PointerEvent): void {
  mouse = { x: e.clientX + window.scrollX, y: e.clientY + window.scrollY };
}

function loop(t: number): void {
  const time = t / 1000;

  for (const f of floaters) {
    const driftX = Math.cos(time * f.sp + f.ph) * f.amp;
    const driftY = Math.sin(time * f.sp * 1.3 + f.ph) * f.amp;
    const px = f.cx + driftX;
    const py = f.cy + driftY;

    let rx = 0;
    let ry = 0;
    const ddx = px - mouse.x;
    const ddy = py - mouse.y;
    const dist = Math.hypot(ddx, ddy);
    if (dist < REPEL_RADIUS) {
      const force = 1 - dist / REPEL_RADIUS;
      const n = dist || 1;
      rx = (ddx / n) * force * 90;
      ry = (ddy / n) * force * 90;
    }

    f.dx += (driftX + rx - f.dx) * 0.14;
    f.dy += (driftY + ry - f.dy) * 0.14;
    f.el.style.transform = `translate(${f.dx}px,${f.dy}px) rotate(${f.rot}deg)`;
  }

  raf = requestAnimationFrame(loop);
}

// Respect users who prefer reduced motion: leave the static rotations in place.
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReduced) {
  // Wait a beat so layout (fonts, positions) settles before we snapshot centers.
  if (document.readyState === "complete") {
    setTimeout(setup, 120);
  } else {
    window.addEventListener("load", () => setTimeout(setup, 120));
  }
}

/**
 * Fondo ambiental de estrellas.
 * Se dibuja una sola vez y se desplaza con el scroll (parallax barato):
 * nada de bucles de animación permanentes, para no gastar batería.
 */
export function initStarfield(canvas) {
  if (!canvas) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let stars = [];
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function build() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const density = w < 640 ? 9000 : 6200;
    const count = Math.round((w * h) / density);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.25 + 0.25,
      a: Math.random() * 0.55 + 0.12,
      depth: Math.random() * 0.6 + 0.15
    }));
    draw(0);
  }

  function draw(offset) {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const y = (s.y - offset * s.depth) % h;
      ctx.globalAlpha = s.a;
      ctx.fillStyle = s.r > 1 ? "#F2A9C8" : "#FBF8FF";
      ctx.beginPath();
      ctx.arc(s.x, y < 0 ? y + h : y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  build();
  window.addEventListener("resize", debounce(build, 220));

  if (reduce) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      draw(window.scrollY * 0.12);
      ticking = false;
    });
  }, { passive: true });
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

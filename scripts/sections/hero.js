/** Portada. El anillo de resonancia es el elemento firma del sitio. */
import { picture } from "../utils/media.js";

/** Genera el espectro radial: 96 marcas de altura variable pero determinista. */
function spectrum(cx, cy, rInner, rOuter, ticks = 96) {
  let out = "";
  for (let i = 0; i < ticks; i++) {
    const a = (i / ticks) * Math.PI * 2;
    const wave = Math.abs(Math.sin(i * 0.7)) * 0.55 + Math.abs(Math.cos(i * 0.23)) * 0.45;
    const r2 = rInner + (rOuter - rInner) * (0.28 + wave * 0.72);
    out += `<line x1="${(cx + Math.cos(a) * rInner).toFixed(2)}"
      y1="${(cy + Math.sin(a) * rInner).toFixed(2)}"
      x2="${(cx + Math.cos(a) * r2).toFixed(2)}"
      y2="${(cy + Math.sin(a) * r2).toFixed(2)}"
      stroke-width="${(1 + wave).toFixed(2)}" opacity="${(0.25 + wave * 0.5).toFixed(2)}"/>`;
  }
  return out;
}

export function heroSection() {
  return `<section class="hero" id="inicio">
    <div class="shell hero__grid">
      <div>
        <p class="hero__eyebrow">Artista virtual · desde 2012</p>
        <h1 class="hero__title">IA<span class="glyph">ARIA ON THE PLANETES</span></h1>
        <p class="hero__lede">
          Una voz que no existe y que, aun así, ha llenado teatros en doce ciudades del mundo.
          Nació como un programa de ordenador y hoy canta en tres idiomas.
        </p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#quien-es">Conocer a IA</a>
          <a class="btn btn--ghost" href="#musica">Escuchar su música</a>
          <a class="btn btn--ghost" href="#historia">Explorar su historia</a>
        </div>

        <dl class="hero__meta">
          <div><dt>Debut</dt><dd>27 · 01 · 2012</dd></div>
          <div><dt>Voz</dt><dd>Lia</dd></div>
          <div><dt>Creada por</dt><dd>1st PLACE</dd></div>
          <div><dt>Tesitura</dt><dd>B2 – A4</dd></div>
        </dl>
      </div>

      <div class="resonator" aria-hidden="true">
        <svg viewBox="0 0 400 400" role="presentation">
          <g class="resonator__spectrum" stroke="currentColor">${spectrum(200, 200, 152, 194)}</g>
          <circle class="resonator__pulse" cx="200" cy="200" r="190" stroke-width="1"/>
          <circle class="resonator__pulse" cx="200" cy="200" r="190" stroke-width="1"/>
          <circle class="resonator__pulse" cx="200" cy="200" r="190" stroke-width="1"/>
          <circle class="resonator__ring" cx="200" cy="200" r="146" fill="none"
                  stroke="rgba(174,152,255,.28)" stroke-width="1"/>
          <circle class="resonator__ring" cx="200" cy="200" r="128" fill="none"
                  stroke="rgba(242,169,200,.2)" stroke-width="1" stroke-dasharray="2 8"/>
        </svg>
        <div class="resonator__core">
          ${picture("assets/images/ia/ia-hero.webp", "Ilustración principal de IA")}
        </div>
      </div>
    </div>

    <p class="scrollcue">Baja</p>
  </section>`;
}

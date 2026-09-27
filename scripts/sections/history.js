/** Línea temporal. */
import { timeline } from "../data/timeline.js";
import { sectionHead } from "../components/primitives.js";
import { esc, join } from "../utils/dom.js";

export function historySection() {
  const items = timeline.map((t) => `<article class="tl reveal">
      <span class="tl__dot" aria-hidden="true"></span>
      <p class="tl__year"><time>${esc(t.year)}</time>${t.date && t.date !== "—" ? ` · ${esc(t.date)}` : ""}</p>
      <h3 class="tl__title">${esc(t.title)}</h3>
      <p class="tl__text">${esc(t.text)}</p>
    </article>`);

  return `<section class="band" id="historia"><div class="shell">
    ${sectionHead({
      kicker: "Cronología",
      title: "Catorce años, contados en orden",
      jp: "あゆみ",
      note: "De una librería de software a una artista con gira mundial, musical propio y tres motores de síntesis a sus espaldas."
    })}
    <div class="timeline">${join(items)}</div>
  </div></section>`;
}

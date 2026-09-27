/** Conciertos, espectáculos y apariciones. */
import { shows, appearances } from "../data/live.js";
import { showCard } from "../components/cards.js";
import { sectionHead } from "../components/primitives.js";
import { esc, join } from "../utils/dom.js";

export function liveSection() {
  const rows = appearances.map((a) => `<li class="reveal">
      <time>${esc(a.year)}</time><span>${esc(a.text)}</span>
    </li>`);

  return `<section class="band" id="directos"><div class="shell">
    ${sectionHead({
      kicker: "En directo",
      title: "Cómo se pone sobre un escenario alguien que no existe",
      jp: "ライブ",
      note: "IA se proyecta sobre el escenario y comparte espacio con bailarines y músicos reales. La técnica varía según el recinto: proyección animada, ilusión óptica al estilo del fantasma de Pepper, realidad aumentada o realidad virtual."
    })}

    <div class="grid grid--2">${join(shows.map(showCard))}</div>

    <h3 class="reveal" style="margin-top: var(--space-5); margin-bottom: var(--space-3)">
      Fuera de los escenarios
    </h3>
    <ul class="ledger">${join(rows)}</ul>
  </div></section>`;
}

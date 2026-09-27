/** Motores y bancos de voz. */
import { engines, engineNotes } from "../data/voicebanks.js";
import { sectionHead, chip } from "../components/primitives.js";
import { esc, join, fecha } from "../utils/dom.js";

export function voicesSection() {
  const cards = engines.map((e) => {
    const rows = e.releases.map((r) => `<li>
        <time datetime="${esc(r.date)}">${esc(fecha(r.date))}</time>
        <span><strong style="color:${r.highlight ? "var(--rose)" : "inherit"}">${esc(r.label)}</strong>
        ${r.note ? `<br>${esc(r.note)}` : ""}</span>
      </li>`);
    return `<article class="engine reveal">
      <header>
        <h4>${esc(e.name)}</h4>
        ${chip(e.years, "violet")}
      </header>
      <p>${esc(e.summary)}</p>
      <p class="data" style="color:var(--faint);margin-top:.5rem">${esc(e.owner)}</p>
      <ul>${join(rows)}</ul>
    </article>`;
  });

  const notes = engineNotes.map((n) => `<div class="fact reveal">
      <span class="fact__idx" aria-hidden="true">·</span>
      <div><h4 style="font-size:1rem;margin-bottom:.3rem">${esc(n.title)}</h4><p>${esc(n.text)}</p></div>
    </div>`);

  return `<section class="band" id="voces"><div class="shell">
    ${sectionHead({
      kicker: "Tecnología",
      title: "Cinco motores, una misma voz",
      jp: "音声ライブラリ",
      note: "IA empezó en VOCALOID, se mudó a CeVIO, dio el salto a la síntesis con redes neuronales y en 2026 volvió a VOCALOID. Cada motor cambia cómo suena y cómo se trabaja con ella."
    })}
    <div class="engines">${join(cards)}</div>
    <div class="facts" style="margin-top: var(--space-4)">${join(notes)}</div>
  </div></section>`;
}

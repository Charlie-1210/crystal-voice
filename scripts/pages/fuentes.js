/** Página de fuentes: se alimenta del mismo módulo de datos que el resto. */
import { sources, openQuestions } from "../data/sources.js";
import { sectionHead, linkCard } from "../components/primitives.js";
import { esc, join, mount } from "../utils/dom.js";
import { initReveal } from "../utils/reveal.js";
import { initStarfield } from "../utils/starfield.js";

function tierBlock(t) {
  return `<div class="reveal" style="margin-bottom: var(--space-5)">
    <h3 style="font-size:1.2rem;margin-bottom:.4rem">${esc(t.tier)}</h3>
    <p class="sectionhead__note" style="margin:0 0 var(--space-3)">${esc(t.note)}</p>
    <div class="linkgrid">${join(t.items.map(linkCard))}</div>
  </div>`;
}

function questions() {
  const rows = openQuestions.map((q) => `<div class="fact reveal">
      <span class="fact__idx" aria-hidden="true">?</span>
      <div><h4 style="font-size:1rem;margin-bottom:.3rem">${esc(q.q)}</h4><p>${esc(q.a)}</p></div>
    </div>`);
  return `<h3 class="reveal" style="font-size:1.2rem;margin-bottom:var(--space-3)">
      Lo que no está confirmado
    </h3>
    <p class="sectionhead__note reveal" style="margin-bottom:var(--space-3)">
      Estos puntos aparecen marcados dentro del sitio. Si encuentras un comunicado oficial que
      los aclare, actualiza <code>scripts/data/sources.js</code> y quita la marca correspondiente.
    </p>
    <div class="facts">${join(rows)}</div>`;
}

mount("#sources", `
  ${sectionHead({
    kicker: "Verificación",
    title: "De dónde sale cada dato",
    jp: "参考資料",
    note: "Se ha priorizado el material publicado por 1st PLACE, Yamaha y sus socios. Las wikis se usan solo como complemento, y todo lo que procede únicamente de ellas está marcado dentro del sitio."
  })}
  ${join(sources.map(tierBlock))}
  ${questions()}
`);

initStarfield(document.getElementById("stars"));
initReveal();

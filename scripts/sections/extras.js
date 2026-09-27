/** Curiosidades, legado y recursos oficiales. */
import { trivia, legacy } from "../data/universe.js";
import { linkGroups } from "../data/links.js";
import { sectionHead, linkCard } from "../components/primitives.js";
import { esc, md, join } from "../utils/dom.js";

export function triviaSection() {
  const items = trivia.map((t, i) => `<div class="fact reveal">
      <span class="fact__idx" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
      <p>${md(t.text)}</p>
    </div>`);

  return `<section class="band" id="curiosidades"><div class="shell">
    ${sectionHead({
      kicker: "Detalles",
      title: "Cosas que casi nadie sabe",
      jp: "豆知識",
      note: "Todas comprobadas. Las que circulan sin fuente —empezando por su supuesta edad— aparecen aquí precisamente para desmentirlas."
    })}
    <div class="facts">${join(items)}</div>
  </div></section>`;
}

export function legacySection() {
  const items = legacy.map((l) => `<article class="engine reveal">
      <h4>${esc(l.title)}</h4>
      <p style="margin-top:.6rem">${esc(l.text)}</p>
    </article>`);

  return `<section class="band" id="legado"><div class="shell">
    ${sectionHead({
      kicker: "Comunidad",
      title: "Lo que dejó por el camino",
      jp: "レガシー",
      note: "El impacto de IA se mide menos en ventas que en carreras que empezaron con ella y en puertas que abrió para las voces sintéticas que vinieron después."
    })}
    <div class="engines">${join(items)}</div>
  </div></section>`;
}

export function resourcesSection() {
  const groups = linkGroups.map((g) => `<div class="reveal" style="margin-bottom: var(--space-4)">
      <h3 style="font-size:1.1rem;margin-bottom:.9rem">${esc(g.group)}</h3>
      <div class="linkgrid">${join(g.items.map(linkCard))}</div>
    </div>`);

  return `<section class="band" id="recursos"><div class="shell">
    ${sectionHead({
      kicker: "Enlaces",
      title: "Dónde seguirla de verdad",
      jp: "公式リンク",
      note: "Todas las direcciones proceden de material publicado por 1st PLACE o sus socios."
    })}
    ${join(groups)}
    <p class="reveal" style="margin-top: var(--space-4)">
      <a class="btn btn--ghost" href="fuentes.html">Ver todas las fuentes usadas →</a>
    </p>
  </div></section>`;
}

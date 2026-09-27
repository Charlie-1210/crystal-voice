/** Piezas reutilizables de interfaz. */
import { esc, join } from "../utils/dom.js";

/** Glifo de anillo: el elemento firma del sitio, a escala pequeña. */
export const ringGlyph = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
  <circle cx="8" cy="8" r="7" stroke-width="1"/><circle cx="8" cy="8" r="2.4" stroke-width="1.4"/>
</svg>`;

export function sectionHead({ kicker, title, jp, note }) {
  return `<header class="sectionhead reveal">
    ${kicker ? `<p class="sectionhead__kicker">${ringGlyph}${esc(kicker)}</p>` : ""}
    <h2>${esc(title)}</h2>
    ${jp ? `<span class="sectionhead__jp jp">${esc(jp)}</span>` : ""}
    ${note ? `<p class="sectionhead__note">${esc(note)}</p>` : ""}
  </header>`;
}

export function chip(text, tone = "") {
  return `<span class="chip${tone ? ` chip--${tone}` : ""}">${esc(text)}</span>`;
}

export function flag(text, label = "Sin confirmación oficial") {
  return `<p class="flag"><strong>${esc(label)}</strong> ${esc(text)}</p>`;
}

export function stat(num, label) {
  return `<div class="stat"><p class="stat__num">${esc(num)}</p><p class="stat__label">${esc(label)}</p></div>`;
}

export function statRow(items) {
  return `<div class="stats reveal">${join(items.map(([n, l]) => stat(n, l)))}</div>`;
}

export function linkCard({ label, url }) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `<a class="linkcard" href="${esc(url)}" target="_blank" rel="noopener noreferrer">
    <strong>${esc(label)}</strong><span>${esc(host)}</span>
  </a>`;
}

/** Lista de datos clave con marca de verificación cuando hace falta. */
export function specList({ title, badge, facts }) {
  const rows = facts.map((f) => `<div>
      <dt>${esc(f.k)}</dt>
      <dd>${esc(f.v)}${f.verified === false && f.note
        ? `<small>⚠ ${esc(f.note)}</small>` : ""}</dd>
    </div>`);
  return `<div class="spec reveal">
    <div class="spec__head"><h3>${esc(title)}</h3>${badge ? chip(badge, "rose") : ""}</div>
    <dl>${join(rows)}</dl>
  </div>`;
}

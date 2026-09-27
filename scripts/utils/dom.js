/** Utilidades mínimas de plantillas. Sin dependencias externas. */

export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Escapa texto antes de insertarlo en HTML. */
export function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escapa y convierte **negrita** en <strong>. */
export function md(value = "") {
  return esc(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/** Une trozos de HTML descartando los vacíos. */
export const join = (parts, glue = "") => parts.filter(Boolean).join(glue);

/** Inserta HTML en un contenedor. */
export function mount(target, html) {
  const node = typeof target === "string" ? $(target) : target;
  if (node) node.innerHTML = html;
  return node;
}

/** Añade HTML al final de un contenedor. */
export function append(target, html) {
  const node = typeof target === "string" ? $(target) : target;
  if (node) node.insertAdjacentHTML("beforeend", html);
  return node;
}

/** Formatea una fecha ISO parcial (YYYY, YYYY-MM o YYYY-MM-DD) en español. */
const MESES = ["enero","febrero","marzo","abril","mayo","junio",
               "julio","agosto","septiembre","octubre","noviembre","diciembre"];

export function fecha(iso) {
  if (!iso) return "";
  const [y, m, d] = String(iso).split("-");
  if (!m) return y;
  if (!d) return `${MESES[Number(m) - 1]} de ${y}`;
  return `${Number(d)} de ${MESES[Number(m) - 1]} de ${y}`;
}

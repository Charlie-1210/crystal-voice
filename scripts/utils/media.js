/**
 * Gestión de imágenes ausentes.
 *
 * El proyecto se entrega sin material gráfico: las rutas de assets/images/
 * están reservadas pero vacías. Cuando una imagen no carga, se sustituye por
 * un marcador que indica en qué ruta debe colocarse el archivo, para que
 * completar la galería sea evidente. Al añadir los archivos reales, este
 * módulo deja de intervenir sin tocar nada más.
 */
import { esc } from "./dom.js";

const GLYPH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
</svg>`;

export function placeholder(path) {
  return `<div class="ph" aria-hidden="true">${GLYPH}<span>${esc(path || "sin ruta")}</span></div>`;
}

/**
 * Devuelve el marcado de una imagen con su marcador de reserva detrás.
 * Si el archivo existe, la imagen lo tapa; si no, queda el marcador.
 */
export function picture(src, alt, className = "") {
  if (!src) return placeholder("");
  return `${placeholder(src)}<img src="${esc(src)}" alt="${esc(alt)}" class="${esc(className)}"
    loading="lazy" decoding="async" data-fallback>`;
}

/** Oculta las imágenes que no han podido cargarse. */
export function watchImages(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
    if (img.complete && img.naturalWidth === 0) img.style.display = "none";
  });
}

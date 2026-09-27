/** Galería visual. */
import { gallery } from "../data/gallery.js";
import { galleryTile } from "../components/cards.js";
import { sectionHead } from "../components/primitives.js";
import { join } from "../utils/dom.js";

export function gallerySection() {
  return `<section class="band" id="galeria"><div class="shell">
    ${sectionHead({
      kicker: "Galería",
      title: "Cómo se ha visto IA a lo largo de los años",
      jp: "ギャラリー",
      note: "Solo material cuyo origen puede identificarse: ilustraciones de producto, imágenes promocionales, portadas y capturas de espectáculos. Ningún fanart presentado como oficial."
    })}
    <div class="gallery">${join(gallery.map(galleryTile))}</div>
    <p class="flag reveal" style="margin-top: var(--space-4)">
      <strong>Los huecos están vacíos a propósito.</strong>
      Cada marcador indica la ruta exacta donde debe colocarse el archivo.
      Consulta <code>assets/images/MANIFEST.md</code> para las medidas y el origen recomendado
      de cada imagen antes de descargarla de los canales oficiales.
    </p>
  </div></section>`;
}

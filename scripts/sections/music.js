/** Música y discografía. */
import { songs, songCategories, albums, OFFICIAL_CHANNEL } from "../data/music.js";
import { songCard, albumCard } from "../components/cards.js";
import { sectionHead } from "../components/primitives.js";
import { esc, join, $$ } from "../utils/dom.js";

export function musicSection() {
  const filters = songCategories.map((c, i) =>
    `<button type="button" data-filter="${esc(c.id)}" aria-pressed="${i === 0}">${esc(c.label)}</button>`);

  return `<section class="band" id="musica"><div class="shell">
    ${sectionHead({
      kicker: "Repertorio",
      title: "Por dónde empezar a escucharla",
      jp: "楽曲",
      note: "Casi todo el catálogo de IA lo han hecho productores independientes que compraron la licencia. Estas son las canciones que más gente ha oído y las que publicó oficialmente 1st PLACE."
    })}

    <div class="filters reveal" role="group" aria-label="Filtrar canciones por categoría">
      ${join(filters)}
    </div>

    <div class="grid grid--3" id="song-grid">${join(songs.map(songCard))}</div>

    <p class="flag reveal" style="margin-top: var(--space-4)">
      <strong>Sobre los enlaces.</strong>
      Solo se enlazan vídeos cuya URL oficial ha podido verificarse. En el resto de fichas el
      botón lleva al canal oficial <a href="${esc(OFFICIAL_CHANNEL)}" target="_blank"
      rel="noopener noreferrer" style="color:var(--rose)">IA PROJECT</a> en lugar de a una
      dirección inventada. Añade los enlaces reales en <code>scripts/data/music.js</code>.
    </p>
  </div></section>`;
}

export function discographySection() {
  return `<section class="band" id="discografia"><div class="shell">
    ${sectionHead({
      kicker: "Discografía",
      title: "Los discos oficiales",
      jp: "ディスコグラフィー",
      note: "La serie numerada IA/01 a IA/05 recopila encargos originales a creadores distintos en cada entrega. Es la forma más rápida de recorrer catorce años de estilos."
    })}
    <div class="grid grid--3">${join(albums.map(albumCard))}</div>
    <p class="sectionhead__note reveal" style="margin-top: var(--space-4)">
      La lista completa, incluidos sencillos digitales y lanzamientos de OИE y HIPPI, está en
      <a href="https://1stplace.co.jp/discography/" target="_blank" rel="noopener noreferrer"
         style="color:var(--rose)">la discografía oficial de 1st PLACE</a>.
    </p>
  </div></section>`;
}

/** Filtro de canciones. Se llama una vez montada la sección. */
export function initMusicFilters() {
  const buttons = $$("#musica .filters button");
  const cards   = $$("#song-grid .card");
  if (!buttons.length) return;

  buttons.forEach((btn) => btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    cards.forEach((card) => {
      const match = filter === "todas" || card.dataset.cats.split(" ").includes(filter);
      card.hidden = !match;
    });
  }));
}

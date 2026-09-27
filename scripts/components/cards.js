/** Tarjetas de canción, álbum y espectáculo. */
import { esc, join, fecha } from "../utils/dom.js";
import { picture } from "../utils/media.js";
import { OFFICIAL_CHANNEL } from "../data/music.js";

export function songCard(song) {
  const link = song.youtube
    ? `<a class="card__link" href="${esc(song.youtube)}" target="_blank" rel="noopener noreferrer">Escuchar ↗</a>`
    : `<a class="card__link" href="${esc(OFFICIAL_CHANNEL)}" target="_blank" rel="noopener noreferrer">Canal oficial ↗</a>`;

  return `<article class="card reveal" data-cats="${esc(song.cats.join(" "))}">
    <div class="card__art">${picture(song.cover, `Portada de ${song.title}`)}</div>
    <div class="card__body">
      <h3 class="card__title">${esc(song.title)}${song.romaji ? `<span class="romaji">${esc(song.romaji)}</span>` : ""}</h3>
      <p class="card__credit">${esc(song.producer)}</p>
      <p class="card__note">${esc(song.note)}</p>
      <div class="card__foot">
        <span class="card__year">${esc(song.year)}${song.album ? ` · ${esc(song.album)}` : ""}</span>
        ${link}
      </div>
    </div>
  </article>`;
}

export function albumCard(album) {
  return `<article class="card reveal">
    <div class="card__art">${picture(album.cover, `Portada de ${album.title}`)}</div>
    <div class="card__body">
      <h3 class="card__title">${esc(album.title)}</h3>
      <p class="card__credit">${esc(album.type)} · ${esc(album.label)}</p>
      <p class="card__note">${esc(album.note)}</p>
      <div class="card__foot"><span class="card__year">${esc(fecha(album.date))}</span></div>
    </div>
  </article>`;
}

export function showCard(show) {
  const facts = show.facts?.length
    ? `<ul class="card__facts">${join(show.facts.map((f) => `<li>${esc(f)}</li>`))}</ul>` : "";
  return `<article class="card reveal">
    <div class="card__art card__art--wide">${picture(show.image, show.title)}</div>
    <div class="card__body">
      <p class="card__credit">${esc(show.kind)} · ${esc(show.years)}</p>
      <h3 class="card__title">${esc(show.title)}</h3>
      <p class="card__note">${esc(show.text)}</p>
      ${facts}
    </div>
  </article>`;
}

export function galleryTile(item) {
  return `<figure class="tile reveal${item.tall ? " tile--tall" : ""}">
    ${picture(item.src, item.alt)}
    <figcaption>${esc(item.caption)}<span>${esc(item.credit)}</span></figcaption>
  </figure>`;
}

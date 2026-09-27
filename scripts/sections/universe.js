/** ARIA ON THE PLANETES, OИE, HIPPI y la comparativa de las tres. */
import { ariaLore, ariaResidents } from "../data/universe.js";
import { characters, trio } from "../data/characters.js";
import { sectionHead, specList, chip } from "../components/primitives.js";
import { picture } from "../utils/media.js";
import { esc, join } from "../utils/dom.js";

export function ariaSection() {
  const meanings = ariaLore.meaning.map((m) => `<div class="fact reveal">
      <span class="fact__idx" aria-hidden="true">·</span>
      <div><h4 style="font-size:1rem;margin-bottom:.3rem">${esc(m.title)}</h4><p>${esc(m.text)}</p></div>
    </div>`);

  const residents = ariaResidents.map((r) => `<div class="trio__col reveal">
      <h4 style="font-size:1rem">${esc(r.name)}</h4>
      <p class="card__credit" style="margin:.3rem 0 .5rem">${esc(r.role)}</p>
      <p class="card__note">${esc(r.text)}</p>
    </div>`);

  return `<section class="band" id="aria"><div class="shell">
    ${sectionHead({
      kicker: "El universo",
      title: "Qué es ARIA ON THE PLANETES",
      jp: "アリア・オン・ザ・プラネテス",
      note: "No es el nombre de IA: es el proyecto que la contiene. Tres artistas, un planeta ficticio y una idea que lo ordena todo, la resonancia."
    })}

    <div class="prose reveal" style="margin-bottom: var(--space-4)">
      <p>${esc(ariaLore.planet)}</p>
      <p>${esc(ariaLore.landing)}</p>
      <p>${esc(ariaLore.habina)}</p>
    </div>

    <h3 class="reveal" style="margin-bottom: var(--space-3)">De dónde sale el nombre</h3>
    <div class="facts">${join(meanings)}</div>

    <h3 class="reveal" style="margin: var(--space-5) 0 var(--space-3)">Quién más vive en ARIA</h3>
    <p class="sectionhead__note reveal" style="margin-bottom: var(--space-3)">
      Presentados en la serie de vídeos ARIA STATION, donde IA y OИE cuentan su mundo de origen.
    </p>
    <div class="grid grid--4">${join(residents)}</div>
  </div></section>`;
}

function characterSection(key, { flip = false, extra = "" } = {}) {
  const c = characters[key];
  return `<section class="band" id="${esc(c.id)}"><div class="shell">
    ${sectionHead({
      kicker: key === "one" ? "Segunda voz" : "Tercera integrante",
      title: c.fullName,
      jp: c.jp
    })}
    <div class="figure${flip ? " figure--flip" : ""}">
      <div class="figure__portrait reveal">
        ${picture(c.portrait, `Ilustración de ${c.name}`)}
        <span class="figure__tag chip chip--${c.accent}">${esc(c.name)}</span>
      </div>
      <div>
        <p class="figure__intro reveal">${esc(c.intro)}</p>
        <div class="figure__facts">${specList({ title: "Datos", badge: c.name, facts: c.facts })}</div>
        ${extra}
      </div>
    </div>
  </div></section>`;
}

export function oneSection() {
  return characterSection("one", {
    extra: `<div class="prose reveal" style="margin-top: var(--space-3)">
      <p>OИE arrancó con <strong>OИE/00</strong>, un álbum de demostración hecho con diez creadores
      de la escena. Puso voz a «アウターサイエンス» para la banda sonora de <em>Mekakucity Actors</em>,
      y su tema «おねがいダーリン» se convirtió en su carta de presentación a fuerza de versiones.</p>
      <p>Con IA formó dúo en «Into Starlight» y «Reload», que llevaron a las dos hermanas al mismo
      escenario durante la gira PARTY A GO-GO.</p>
    </div>`
  });
}

export function hippiSection() {
  return characterSection("hippi", {
    flip: true,
    extra: `<div class="prose reveal" style="margin-top: var(--space-3)">
      <p>HIPPI aparece por primera vez como una silueta con la letra «H» en el evento de aniversario
      de enero de 2021. Su identidad se reveló durante la campaña de financiación del VR ARIA THEATER,
      donde se anunció que actuaría junto a IA y OИE.</p>
      <p>Desde entonces ha publicado sencillos propios —«Love Letter», «ナツノニオイ», «君がもし»,
      «Falling», «大丈夫», «save you»— y ha firmado la letra y la música de «Into the night» para
      IA GLOWB, donde además canta.</p>
    </div>`
  });
}

export function trioSection() {
  const cols = trio.map((t) => `<div class="trio__col trio__col--${esc(t.id)} reveal">
      <h4>${esc(t.name)}</h4>
      <dl>${join(t.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`))}</dl>
    </div>`);

  return `<section class="band" id="las-tres"><div class="shell">
    ${sectionHead({
      kicker: "Comparativa",
      title: "IA, OИE y HIPPI",
      jp: "三人",
      note: "Comparten planeta y compañía, pero no naturaleza: dos son software y una es humana."
    })}
    <div class="trio">${join(cols)}</div>
  </div></section>`;
}

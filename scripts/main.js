/**
 * ARIA STATION — punto de entrada.
 *
 * Cada sección es una función que devuelve HTML. Para añadir una sección
 * nueva: créala en scripts/sections/, impórtala aquí y métela en `SECTIONS`.
 * El menú se genera solo a partir de site.nav.
 */
import { site } from "./data/site.js";
import { $, esc, join, mount } from "./utils/dom.js";
import { initReveal } from "./utils/reveal.js";
import { initStarfield } from "./utils/starfield.js";
import { initNav } from "./utils/nav.js";
import { watchImages } from "./utils/media.js";

import { heroSection } from "./sections/hero.js";
import { aboutSection } from "./sections/about.js";
import { historySection } from "./sections/history.js";
import { voicesSection } from "./sections/voices.js";
import { musicSection, discographySection, initMusicFilters } from "./sections/music.js";
import { liveSection } from "./sections/live.js";
import { gallerySection } from "./sections/gallery.js";
import { ariaSection, oneSection, hippiSection, trioSection } from "./sections/universe.js";
import { triviaSection, legacySection, resourcesSection } from "./sections/extras.js";

const SECTIONS = [
  heroSection,
  aboutSection,
  historySection,
  voicesSection,
  musicSection,
  discographySection,
  liveSection,
  gallerySection,
  ariaSection,
  oneSection,
  hippiSection,
  trioSection,
  triviaSection,
  legacySection,
  resourcesSection
];

function navMarkup() {
  return join(site.nav.map((n) => `<li><a href="#${esc(n.id)}">${esc(n.label)}</a></li>`));
}

function boot() {
  mount("#app", join(SECTIONS.map((fn) => fn())));
  mount("#navlist", navMarkup());
  mount("#drawerlist", navMarkup());

  initNav();
  initStarfield($("#stars"));
  initMusicFilters();
  watchImages();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

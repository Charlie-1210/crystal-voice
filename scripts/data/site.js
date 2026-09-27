/**
 * Configuración global del sitio.
 * Cambiar aquí el idioma por defecto, el título y el orden de las secciones
 * es suficiente para reordenar toda la página.
 */
export const site = {
  name: "ARIA STATION",
  tagline: "Portal dedicado a IA -ARIA ON THE PLANETES-",
  lang: "es",
  updated: "2026-08",
  // El orden de este array define el orden real de las secciones y del menú.
  nav: [
    { id: "quien-es",     label: "Quién es IA" },
    { id: "historia",     label: "Historia" },
    { id: "voces",        label: "Voicebanks" },
    { id: "musica",       label: "Música" },
    { id: "discografia",  label: "Discografía" },
    { id: "directos",     label: "Directos" },
    { id: "galeria",      label: "Galería" },
    { id: "aria",         label: "ARIA" },
    { id: "one",          label: "OИE" },
    { id: "hippi",        label: "HIPPI" },
    { id: "curiosidades", label: "Curiosidades" },
    { id: "legado",       label: "Legado" },
    { id: "recursos",     label: "Recursos" }
  ]
};

/** Aviso de verificación reutilizable. */
export const VERIFY = {
  ok:      { level: "ok",      text: "Confirmado en fuente oficial" },
  wiki:    { level: "wiki",    text: "Solo documentado en wikis especializadas" },
  unclear: { level: "unclear", text: "Dato no confirmado oficialmente" }
};

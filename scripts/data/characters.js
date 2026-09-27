/**
 * Personajes del proyecto -ARIA ON THE PLANETES-.
 * `verified: false` marca los datos que NO proceden de una fuente oficial
 * directa; la interfaz los muestra con una advertencia visible.
 */
export const characters = {
  ia: {
    id: "ia",
    name: "IA",
    fullName: "IA -ARIA ON THE PLANETES-",
    jp: "イア",
    accent: "rose",
    portrait: "assets/images/ia/ia-portrait.webp",
    intro:
      "IA es una artista virtual japonesa cuya voz nace de un software de síntesis de canto. " +
      "Debutó el 27 de enero de 2012 como librería para VOCALOID3 y hoy es una de las voces " +
      "sintéticas con más recorrido internacional: giras, musicales holográficos, videojuego propio " +
      "y una migración completa a los motores de síntesis con IA.",
    facts: [
      { k: "Nombre completo", v: "IA -ARIA ON THE PLANETES- (イア)" },
      { k: "Desarrolladora",  v: "1st PLACE Co., Ltd. (Meguro, Tokio)" },
      { k: "Debut",           v: "27 de enero de 2012, como librería VOCALOID3" },
      { k: "Voz original",    v: "Lia, cantante japonesa conocida por «Tori no Uta» (AIR)" },
      { k: "Origen del nombre", v: "«IA» procede del nombre de su proveedora de voz, Lia" },
      { k: "Ilustración",     v: "Akasaka Aka (赤坂アカ); dirección de diseño a cargo de Maxilla Inc." },
      { k: "Tesitura sugerida", v: "B2–A4" },
      { k: "Tempo sugerido",  v: "63–228 BPM (IA ROCKS: 95–228 BPM)" },
      { k: "Altura",          v: "155 cm", verified: false,
        note: "Revelado durante el evento de aniversario IA 6th & ONE 3rd; recogido en wikis, sin ficha oficial permanente." },
      { k: "Edad",            v: "Sin edad oficial", verified: false,
        note: "Circula la cifra de 15 años, pero 1st PLACE nunca le ha asignado una edad." },
      { k: "Cumpleaños",      v: "No existe cumpleaños oficial del personaje; el 27 de enero se celebra su aniversario de lanzamiento." }
    ]
  },

  one: {
    id: "one",
    name: "OИE",
    fullName: "ONE -ARIA ON THE PLANETES-",
    jp: "オネ",
    accent: "ember",
    portrait: "assets/images/one/one-portrait.webp",
    intro:
      "OИE (se lee «one», オネ) es la segunda voz del proyecto y la hermana menor de IA dentro de " +
      "la ficción. Fue la primera librería que 1st PLACE creó para el motor CeVIO en lugar de VOCALOID, " +
      "y desde el principio pudo hablar además de cantar.",
    facts: [
      { k: "Nombre completo", v: "ONE -ARIA ON THE PLANETES-, estilizado OИE" },
      { k: "Presentación",    v: "24 de enero de 2015, durante el directo de aniversario de IA" },
      { k: "Voz de habla",    v: "27 de enero de 2015 (CeVIO Creative Studio)" },
      { k: "Voz de canto",    v: "22 de mayo de 2015 (CeVIO Creative Studio)" },
      { k: "Voz original",    v: "Una cantante japonesa acreditada también como «ONE»" },
      { k: "Diseño",          v: "Ilustración original de Akasaka Aka; la ilustración de AI SONG corre a cargo de Simanerikotton", verified: false,
        note: "Los créditos de ilustración están documentados en wikis especializadas y en bases de datos de fans." },
      { k: "Relación con IA", v: "Hermana menor dentro del relato de ARIA" },
      { k: "Modelo MMD oficial", v: "Creado por mqdl y distribuido gratuitamente", verified: false }
    ]
  },

  hippi: {
    id: "hippi",
    name: "HIPPI",
    fullName: "HIPPI -ARIA ON THE PLANETES-",
    jp: "ヒッピ",
    accent: "mint",
    portrait: "assets/images/hippi/hippi-portrait.webp",
    intro:
      "HIPPI es la tercera integrante del proyecto y rompe el molde: no es un software de síntesis de voz. " +
      "Canta con voz humana real, es bilingüe (japonés e inglés) y compone y escribe sus propias canciones, " +
      "lo que la convierte en la primera cantautora de ARIA.",
    facts: [
      { k: "Nombre",        v: "HIPPI (ヒッピ)" },
      { k: "Naturaleza",    v: "Artista virtual con voz humana, no una librería de síntesis" },
      { k: "Idiomas",       v: "Japonés e inglés" },
      { k: "Primera aparición", v: "31 de julio de 2021, en el ARIA SPECIAL SHOWCASE (actuación en 3D)", verified: false,
        note: "Fecha documentada en wikis; 1st PLACE menciona un pase previo el 28 de julio para mecenas del crowdfunding." },
      { k: "Debut discográfico", v: "8 de octubre de 2021, con el sencillo «Love Letter», cuya letra escribió ella misma" },
      { k: "Diseño",        v: "Ilustración atribuida a Simanerikotton", verified: false },
      { k: "Relación con IA y OИE", v: "Compañera de planeta; según una emisión de ARIAers TV, enseñó a IA a tocar la guitarra", verified: false }
    ]
  }
};

/** Comparativa rápida de las tres. */
export const trio = [
  {
    id: "ia", name: "IA", accent: "rose",
    rows: [
      ["Tecnología", "VOCALOID3 · VOCALOID6 · CeVIO AI · VoiSona"],
      ["Debut", "27 enero 2012"],
      ["Idiomas", "Japonés, inglés y chino (según la librería)"],
      ["Voz", "Sintetizada a partir de Lia"],
      ["Papel en ARIA", "Hermana mayor; primera en «aterrizar» en la Tierra"]
    ]
  },
  {
    id: "one", name: "OИE", accent: "ember",
    rows: [
      ["Tecnología", "CeVIO Creative Studio · CeVIO AI · VoiSona"],
      ["Debut", "27 enero 2015"],
      ["Idiomas", "Japonés"],
      ["Voz", "Sintetizada a partir de una cantante acreditada como ONE"],
      ["Papel en ARIA", "Hermana menor; llega a la Tierra en 2015"]
    ]
  },
  {
    id: "hippi", name: "HIPPI", accent: "mint",
    rows: [
      ["Tecnología", "Ninguna: canta con su propia voz"],
      ["Debut", "2021"],
      ["Idiomas", "Japonés e inglés"],
      ["Voz", "Humana, en directo y en estudio"],
      ["Papel en ARIA", "Cantautora del grupo; compone y escribe"]
    ]
  }
];

/**
 * Motores de síntesis y librerías de voz de IA.
 * Para añadir una librería nueva basta con meterla en el array `releases`
 * del motor correspondiente.
 */
export const engines = [
  {
    id: "vocaloid3",
    name: "VOCALOID3",
    owner: "Yamaha",
    years: "2011–",
    summary:
      "El motor con el que nació IA. VOCALOID concatena fragmentos grabados de una voz real y los " +
      "afina según la melodía y la letra que escribe el productor. El resultado es muy maleable: " +
      "todo se controla a mano, nota a nota.",
    releases: [
      { date: "2012-01-27", label: "IA -ARIA ON THE PLANETES-", note: "Librería original en japonés. Precio de salida: 12.800 ¥." },
      { date: "2013-12-07", label: "IA NEO", note: "Versión para VOCALOID NEO, el editor para Mac." },
      { date: "2014", label: "IA α Type C", note: "Prototipo gratuito distribuido durante una campaña de un mes para recoger opiniones." },
      { date: "2014-06-27", label: "IA ROCKS", note: "Segundo banco, más agresivo y pensado para rock. No imita el canto habitual de Lia: es interpretación actuada." }
    ]
  },
  {
    id: "vocaloid6",
    name: "VOCALOID6 · VOCALOID:AI",
    owner: "Yamaha",
    years: "2022–",
    summary:
      "La generación actual de VOCALOID usa redes neuronales en lugar de concatenar muestras. " +
      "El motor deduce el fraseo y la respiración, así que se parte de un resultado mucho más natural.",
    releases: [
      { date: "2026-01-27", label: "IA :[R] -ARIA ON THE PLANETES-", highlight: true,
        note: "«Rebreath». Conserva el timbre de la IA de VOCALOID3 y añade canto en japonés, inglés y chino con una sola librería. Incluye VOCALOID6 Editor Lite y es compatible con VOCALO CHANGER. 11.220 ¥ en descarga; 24.200 ¥ el Starter Pack con el editor completo. Estrenó una key visual con el pelo corto y canciones de demostración de gaburyu, r-906 y ■37." }
    ]
  },
  {
    id: "cevio",
    name: "CeVIO Creative Studio",
    owner: "CeVIO Project",
    years: "2013–",
    summary:
      "CeVIO nació como alternativa a VOCALOID y trajo dos cosas que VOCALOID no tenía entonces: " +
      "voz hablada además de cantada, y un motor estadístico que suena natural con muy poco ajuste manual.",
    releases: [
      { date: "2017-03-01", label: "IA TALK -ARIA ON THE PLANETES-", note: "Primera voz hablada de IA." },
      { date: "2018-06-29", label: "IA ENGLISH C", note: "Su primera voz cantada en inglés, con dos modos: Natural y Powerful." }
    ]
  },
  {
    id: "cevio-ai",
    name: "CeVIO AI",
    owner: "Techno-Speech / CeVIO Project",
    years: "2021–",
    summary:
      "Sucesor de CeVIO basado en redes neuronales, publicado el 27 de enero de 2021. Mejora " +
      "notablemente la naturalidad tanto al hablar como al cantar.",
    releases: [
      { date: "2021-03-12", label: "IA TALK (CeVIO AI)", note: "Actualización de la voz hablada." },
      { date: "2021-10-27", label: "IA AI SONG · japonés e inglés", note: "Las voces cantadas dan el salto a IA. OИE recibió su versión el mismo día." }
    ]
  },
  {
    id: "voisona",
    name: "VoiSona / VoiSona Talk",
    owner: "Techno-Speech",
    years: "2022–",
    summary:
      "Marca hermana de CeVIO lanzada en septiembre de 2022, con editor gratuito y compatibilidad " +
      "con Windows y Mac. Es la vía más accesible hoy para probar la voz de IA.",
    releases: [
      { date: "2024-01-27", label: "IA AI SONG e IA AI SONG ENGLISH (VoiSona)", note: "Anunciado junto a ONE AI SONG." },
      { date: "2025-01-27", label: "IA TALK (VoiSona Talk)", note: "La voz hablada llega también a VoiSona." }
    ]
  }
];

/** Diferencias explicadas sin jerga, para la sección de tecnología. */
export const engineNotes = [
  {
    title: "Concatenación frente a IA",
    text: "VOCALOID3 y CeVIO Creative Studio parten de fragmentos grabados que se pegan y afinan. VOCALOID6, CeVIO AI y VoiSona usan modelos entrenados que generan el audio. La diferencia se nota sobre todo en las transiciones entre sílabas y en la respiración."
  },
  {
    title: "Cantar y hablar no es lo mismo",
    text: "Una librería de canto (Song) y una de habla (Talk) son productos distintos aunque compartan personaje. IA tiene ambas, pero llegaron con años de diferencia: cantó desde 2012 y no habló hasta 2017."
  },
  {
    title: "Un personaje, varios motores",
    text: "IA es de los pocos casos que empezó en VOCALOID y luego se publicó también en CeVIO. El personaje, la ilustración y la marca pertenecen a 1st PLACE; el motor es solo el motor."
  },
  {
    title: "Qué se canceló",
    text: "Se anunció una IA English para VOCALOID4 que nunca llegó a publicarse. La voz inglesa terminó saliendo en CeVIO en 2018."
  }
];

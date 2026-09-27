/**
 * Canciones y discografía.
 *
 * `youtube`: solo se rellena con enlaces verificados. Cuando no hay uno
 * confirmado se deja en null y la tarjeta enlaza al canal oficial en su lugar.
 * NUNCA inventes un ID de vídeo aquí.
 */
export const OFFICIAL_CHANNEL = "https://www.youtube.com/@IA_PROJECT";

export const songCategories = [
  { id: "todas",     label: "Todas" },
  { id: "iconicas",  label: "Icónicas" },
  { id: "puerta",    label: "Para empezar" },
  { id: "oficiales", label: "Oficiales de 1st PLACE" },
  { id: "glowb",     label: "IA GLOWB" }
];

export const songs = [
  {
    title: "アスノヨゾラ哨戒班",
    romaji: "Asu no Yozora Shoukaihan · Night Sky Patrol of Tomorrow",
    producer: "Orangestar",
    year: 2014,
    album: null,
    cats: ["iconicas", "puerta"],
    note: "La canción de IA más vista en YouTube, por encima de los 61 millones de reproducciones. Pop luminoso y acelerado; es la puerta de entrada más habitual al repertorio de IA.",
    cover: "assets/images/albums/asunoyozora.webp",
    youtube: null
  },
  {
    title: "DAYBREAK FRONTLINE",
    romaji: "",
    producer: "Orangestar",
    year: 2015,
    album: null,
    cats: ["iconicas", "puerta"],
    note: "Segunda canción más vista de IA en YouTube, con más de 57 millones de reproducciones.",
    cover: "assets/images/albums/daybreak-frontline.webp",
    youtube: null
  },
  {
    title: "六兆年と一夜物語",
    romaji: "Rokuchounen to Ichiya Monogatari · Six Trillion Years and Overnight Story",
    producer: "kemu",
    year: 2012,
    album: null,
    cats: ["iconicas", "puerta"],
    note: "Rock veloz y narrativo, uno de los grandes éxitos de la primera etapa: más de 8 millones en Niconico y 54 millones en YouTube.",
    cover: "assets/images/albums/rokuchounen.webp",
    youtube: null
  },
  {
    title: "チルドレンレコード",
    romaji: "Children Record",
    producer: "じん (Jin / Shizen no Teki-P)",
    year: 2012,
    album: null,
    cats: ["iconicas", "puerta"],
    note: "Tema central de la Kagerou Project, la saga transmedia de じん que llevó a IA al gran público. Supera los 3 millones en Niconico y los 18 en YouTube.",
    cover: "assets/images/albums/children-record.webp",
    youtube: null
  },
  {
    title: "夜咄ディセイブ",
    romaji: "Yobanashi Deceive",
    producer: "じん (Jin / Shizen no Teki-P)",
    year: 2013,
    album: null,
    cats: ["iconicas"],
    note: "Otra pieza clave de la Kagerou Project, muy versionada por cantantes de la comunidad.",
    cover: "assets/images/albums/yobanashi-deceive.webp",
    youtube: null
  },
  {
    title: "オツキミリサイタル",
    romaji: "Otsukimi Recital",
    producer: "じん (Jin / Shizen no Teki-P)",
    year: 2013,
    album: null,
    cats: ["iconicas"],
    note: "Cara luminosa y festiva de la Kagerou Project.",
    cover: "assets/images/albums/otsukimi-recital.webp",
    youtube: null
  },
  {
    title: "My Soul, Your Beats! feat. IA",
    romaji: "",
    producer: "Jun Maeda (原曲) · IA PROJECT",
    year: 2012,
    album: "IA/01 -BIRTH-",
    cats: ["oficiales", "puerta"],
    note: "Canción de demostración con la que se presentó IA: una versión del tema de Angel Beats!, escrito originalmente por Jun Maeda, el mismo compositor de buena parte del repertorio de Lia.",
    cover: "assets/images/albums/ia01-birth.webp",
    youtube: null
  },
  {
    title: "ヘッドフォンアクター",
    romaji: "Headphone Actor",
    producer: "じん (自然の敵P)",
    year: 2012,
    album: "IA/01 -BIRTH-",
    cats: ["oficiales"],
    note: "Incluida en el primer álbum oficial. La versión de vídeo es una de las más conocidas de la saga.",
    cover: "assets/images/albums/ia01-birth.webp",
    youtube: null
  },
  {
    title: "ぼくらの報復政策",
    romaji: "Bokura no Houfuku Seisaku",
    producer: "kemu",
    year: 2012,
    album: "IA/01 -BIRTH-",
    cats: ["oficiales"],
    note: "Aporte de kemu al álbum de debut, con el vídeo musical incluido en la edición limitada.",
    cover: "assets/images/albums/ia01-birth.webp",
    youtube: null
  },
  {
    title: "オーヴァースレプト",
    romaji: "Overslept",
    producer: "Neru",
    year: 2012,
    album: "IA/01 -BIRTH-",
    cats: ["oficiales"],
    note: "Neru, uno de los productores más influyentes de la escena, en el disco de presentación de IA.",
    cover: "assets/images/albums/ia01-birth.webp",
    youtube: null
  },
  {
    title: "Inner Arts",
    romaji: "",
    producer: "じん (Jin)",
    year: 2014,
    album: "IA/03 -VISION-",
    cats: ["oficiales"],
    note: "Tema principal del videojuego IA/VT COLORFUL para PlayStation Vita.",
    cover: "assets/images/albums/ia03-vision.webp",
    youtube: null
  },
  {
    title: "We gotta run",
    romaji: "",
    producer: "IA feat. Jumicchi",
    year: 2014,
    album: "IA/03 -VISION-",
    cats: ["oficiales"],
    note: "Canción oficial de SUPER GT 2014 y tema de cierre del programa «SUPER GT+» de TV Tokyo.",
    cover: "assets/images/albums/ia03-vision.webp",
    youtube: null
  },
  {
    title: "Euphoria",
    romaji: "",
    producer: "じん (Jin)",
    year: 2018,
    album: "IA/04 -STAR-",
    cats: ["oficiales"],
    note: "Tema oficial de la 30ª Olimpiada Internacional de Informática celebrada en Japón. La portada corrió a cargo de しづ, la ilustradora de los vídeos de la Kagerou Project.",
    cover: "assets/images/albums/ia04-star.webp",
    youtube: null
  },
  {
    title: "LIFE LOVE PEACE",
    romaji: "",
    producer: "Shinichi Osawa (MONDO GROSSO)",
    year: 2018,
    album: "IA/04 -STAR-",
    cats: ["oficiales"],
    note: "Encargo original de uno de los productores de música electrónica más respetados de Japón.",
    cover: "assets/images/albums/ia04-star.webp",
    youtube: null
  },
  {
    title: "働かずに食う (I Don't Work) IA Ver.",
    romaji: "Hatarakazu ni Kuu",
    producer: "KOHH",
    year: 2018,
    album: "IA/04 -STAR-",
    cats: ["oficiales"],
    note: "Colaboración con uno de los raperos japoneses con mayor proyección internacional.",
    cover: "assets/images/albums/ia04-star.webp",
    youtube: null
  },
  {
    title: "Into Starlight",
    romaji: "",
    producer: "IA & OИE",
    year: 2017,
    album: "Reload & Into Starlight",
    cats: ["oficiales"],
    note: "Primer tema conjunto de las dos hermanas. Su vídeo de baile superó los 2,5 millones de reproducciones y se interpretó en la gira PARTY A GO-GO.",
    cover: "assets/images/albums/reload-into-starlight.webp",
    youtube: null
  },
  {
    title: "REZONA",
    romaji: "",
    producer: "KSUKE",
    year: 2022,
    album: null,
    cats: ["glowb", "oficiales"],
    note: "Uno de los dos sencillos con los que arrancó IA GLOWB. Compuesto y producido por KSUKE, DJ habitual de los Ultra Music Festival.",
    cover: "assets/images/albums/rezona.webp",
    youtube: null
  },
  {
    title: "Into the night",
    romaji: "",
    producer: "gu^2 · HIPPI",
    year: 2022,
    album: null,
    cats: ["glowb", "oficiales"],
    note: "Publicado el mismo día que «REZONA». HIPPI firma letra y música y además canta en el tema.",
    cover: "assets/images/albums/into-the-night.webp",
    youtube: null
  },
  {
    title: "INTERGALACTIA",
    romaji: "",
    producer: "KIRA",
    year: 2023,
    album: null,
    cats: ["glowb", "puerta"],
    note: "Dance minimalista con vídeo dirigido por Takumi Shiga. El clip fue seleccionado en varios festivales internacionales y se llevó cuatro premios.",
    cover: "assets/images/albums/intergalactia.webp",
    youtube: "https://youtu.be/ktENKp1tDO8"
  },
  {
    title: "アウターサイエンス",
    romaji: "Outer Science",
    producer: "じん ft. OИE",
    year: 2014,
    album: null,
    cats: ["oficiales"],
    note: "Interpretada por OИE para la banda sonora del anime Mekakucity Actors; sigue siendo su tema más escuchado en YouTube.",
    cover: "assets/images/albums/outer-science.webp",
    youtube: null
  },
  {
    title: "おねがいダーリン",
    romaji: "Onegai Darling",
    producer: "OИE",
    year: 2018,
    album: "OИE/01 -BLOOM-",
    cats: ["oficiales"],
    note: "El tema que convirtió a OИE en un nombre propio: incontables versiones de cantantes y bailarines de la comunidad.",
    cover: "assets/images/albums/one01-bloom.webp",
    youtube: null
  },
  {
    title: "Love Letter",
    romaji: "",
    producer: "HIPPI",
    year: 2021,
    album: null,
    cats: ["oficiales"],
    note: "Debut de HIPPI. Escribió la letra como un mensaje dirigido a los fans que aún no la conocían.",
    cover: "assets/images/albums/love-letter.webp",
    youtube: null
  }
];

export const albums = [
  { title: "IA/01 -BIRTH-", type: "Álbum", date: "2012-04-25", label: "1st PLACE / IA PROJECT",
    cover: "assets/images/albums/ia01-birth.webp",
    note: "Doble CD con 28 temas. La edición limitada añadía dos DVD-ROM con stems, datos de edición y una versión de prueba de la librería." },
  { title: "IA/02 -COLOR-", type: "Álbum", date: "2013-01-30", label: "1st PLACE / IA PROJECT",
    cover: "assets/images/albums/ia02-color.webp",
    note: "Disco de primer aniversario. Amplía el círculo más allá de la escena vocaloid: J-pop, rock y música de club." },
  { title: "IA×SUPER GT CiRCUiT BEATS", type: "Álbum", date: "2013", label: "1st PLACE / IA PROJECT",
    cover: "assets/images/albums/supergt.webp",
    note: "Disco del 20º aniversario de SUPER GT, con IA como imagen del campeonato." },
  { title: "IA/03 -VISION-", type: "Álbum", date: "2014-11-05", label: "1st PLACE / IA PROJECT",
    cover: "assets/images/albums/ia03-vision.webp",
    note: "Tres discos y 31 temas, con TeddyLoid, BACK-ON, ATOLS, うたたP y la canción oficial de SUPER GT 2014." },
  { title: "IA/VT -COLORFUL- Original Sound Collection 1", type: "Banda sonora", date: "2015", label: "1st PLACE / IA PROJECT",
    cover: "assets/images/albums/iavt-ost.webp",
    note: "Banda sonora del videojuego de PlayStation Vita." },
  { title: "Reload & Into Starlight", type: "Sencillo", date: "2017-07", label: "1st PLACE",
    cover: "assets/images/albums/reload-into-starlight.webp",
    note: "Primer lanzamiento firmado como IA & OИE, surgido del espectáculo de realidad aumentada del aniversario." },
  { title: "IA/04 -STAR-", type: "Álbum", date: "2018-03-28", label: "IA PROJECT",
    cover: "assets/images/albums/ia04-star.webp",
    note: "CD + DVD. Reúne a じん, Shinichi Osawa, TeddyLoid, KOHH y ANANT-GARDE EYES." },
  { title: "OИE/01 -BLOOM-", type: "Álbum", date: "2018-03-28", label: "IA PROJECT",
    cover: "assets/images/albums/one01-bloom.webp",
    note: "Primer álbum en solitario de OИE, publicado el mismo día que IA/04." },
  { title: "IA/05 -SHINE-", type: "Álbum", date: "2024-02-02", label: "1st PLACE",
    cover: "assets/images/albums/ia05-shine.webp",
    note: "Regreso de la serie de recopilatorios seis años después, con una veintena de creadores y artistas invitados." },
  { title: "OИE/00 -2015 Recollection-", type: "Compilación", date: "2025", label: "1st PLACE",
    cover: "assets/images/albums/one00.webp",
    note: "Recuperación del álbum de demostración original de OИE." }
];

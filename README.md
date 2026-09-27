# ARIA STATION

Portal enciclopédico dedicado a **IA -ARIA ON THE PLANETES-**, la artista virtual de
1st PLACE Co., Ltd. Cubre quién es, sus bancos de voz, su música, su discografía, sus
directos y el universo ARIA junto a OИE y HIPPI.

Sitio informativo hecho por aficionados. Sin relación con 1st PLACE Co., Ltd.,
Yamaha Corporation, CeVIO Project ni Techno-Speech, Inc.

---

## Cómo abrirlo

No hay compilación ni dependencias. Como usa módulos ES, necesita servirse por HTTP
(abrirlo con `file://` bloquea los `import`):

```bash
python3 -m http.server 8000
# o
npx serve .
```

Luego abre `http://localhost:8000`.

Para publicarlo, sube la carpeta tal cual a GitHub Pages, Netlify, Vercel o cualquier
alojamiento estático.

---

## Estructura

```
.
├── index.html              Portada. Solo el esqueleto: las secciones las inyecta main.js
├── fuentes.html            Página de fuentes y datos sin confirmar
├── assets/
│   ├── favicon.svg
│   └── images/             Vacío a propósito — ver images/MANIFEST.md
├── styles/
│   ├── main.css            Único punto de entrada; importa el resto
│   ├── base/               tokens · reset · typography · layout
│   └── components/         nav · hero · ui · cards · timeline · characters
└── scripts/
    ├── main.js             Punto de entrada: monta secciones y arranca los módulos
    ├── data/               ← TODO EL CONTENIDO VIVE AQUÍ
    │   ├── site.js         Título, navegación y orden de secciones
    │   ├── characters.js   IA, OИE, HIPPI y la comparativa
    │   ├── voicebanks.js   Motores y librerías de voz
    │   ├── timeline.js     Cronología
    │   ├── music.js        Canciones y discografía
    │   ├── live.js         Conciertos y apariciones
    │   ├── universe.js     Planeta ARIA, curiosidades y legado
    │   ├── gallery.js      Galería
    │   ├── links.js        Enlaces oficiales
    │   └── sources.js      Fuentes y preguntas abiertas
    ├── components/         Piezas reutilizables (tarjetas, fichas, encabezados)
    ├── sections/           Una función por sección, devuelve HTML
    ├── pages/              Scripts específicos de páginas secundarias
    └── utils/              dom · media · reveal · starfield · nav
```

**La regla que ordena todo el proyecto:** el diseño no conoce el contenido. Las secciones
leen de `scripts/data/` y no llevan datos escritos a mano. Para añadir una canción, un álbum
o un hito no hace falta tocar HTML ni CSS.

---

## Tareas frecuentes

### Añadir una canción

Abre `scripts/data/music.js` y añade un objeto al array `songs`:

```js
{
  title: "Título original",
  romaji: "Transcripción o traducción",   // opcional
  producer: "Nombre del productor",
  year: 2024,
  album: null,                            // o el nombre del álbum
  cats: ["iconicas", "puerta"],           // categorías del filtro
  note: "Una o dos frases explicando por qué importa.",
  cover: "assets/images/albums/archivo.webp",
  youtube: null                           // solo si tienes la URL verificada
}
```

Para crear una categoría nueva de filtro, añádela también a `songCategories`.

### Añadir un hito a la cronología

`scripts/data/timeline.js`, en orden cronológico:

```js
{ year: "2027", date: "12 mar", title: "Titular corto", text: "Qué pasó y por qué importa." }
```

### Añadir un banco de voz

`scripts/data/voicebanks.js`. Si es un motor que ya existe, mete la entrada en su array
`releases`; si es un motor nuevo, añade un bloque completo con `id`, `name`, `owner`,
`years`, `summary` y `releases`. `highlight: true` resalta el lanzamiento en rosa.

### Cambiar el orden de las secciones o del menú

Dos sitios, y deben coincidir:

- `scripts/data/site.js` → array `nav` (genera el menú).
- `scripts/main.js` → array `SECTIONS` (genera el contenido).

### Crear una sección nueva

1. `scripts/sections/mi-seccion.js` exportando una función que devuelva HTML.
2. Envuelve el contenido en `<section class="band" id="mi-seccion"><div class="shell">…`.
3. Usa `sectionHead({ kicker, title, jp, note })` para el encabezado.
4. Impórtala en `main.js` y añádela a `SECTIONS`, y añade su entrada a `site.nav`.

### Cambiar los colores

Todo sale de `styles/base/tokens.css`. No hay colores escritos a mano en otros archivos
salvo dos degradados de fondo en `layout.css`.

---

## Preparado para crecer

La arquitectura ya contempla estas ampliaciones sin reescribir nada:

| Ampliación | Por dónde entrar |
|---|---|
| Más canciones, álbumes, hitos | Los arrays de `scripts/data/`, sin tocar diseño |
| Biografías de productores | `scripts/data/producers.js` + una sección nueva; enlazar desde `songCard` por el campo `producer` |
| Letras y traducciones | `scripts/data/lyrics/<slug>.js` y una página `letra.html?slug=` que importe el módulo |
| Buscador | Un índice construido en tiempo de carga a partir de los módulos de `data/`; ya son todos serializables |
| Favoritos | `localStorage` con los `title` de las canciones; el filtro de `music.js` ya tiene la mecánica de mostrar/ocultar |
| Comparador de voicebanks | `voicebanks.js` ya tiene los datos estructurados por motor y fecha |
| Sección de noticias | `scripts/data/news.js` con `{ date, title, text, url }` y una sección con el mismo patrón |
| Cambio de idioma (ja/es/en) | Convierte los textos de `data/` en `{ es: "…", en: "…", ja: "…" }` y añade un `t()` en `utils/dom.js`. La estructura de datos ya está separada del diseño, que es la parte difícil |
| Base de datos, panel y API | Cada módulo de `data/` corresponde a una tabla. Sustituye el `import` por un `fetch` a tu API y devuelve el mismo formato de objeto: las secciones no se enteran |

Si en algún momento el sitio necesita renderizado en servidor —por SEO o por volumen—,
los módulos de `data/` y `components/` se pueden reutilizar tal cual desde Astro, Eleventy
o una vista Blade de Laravel. Lo único que cambia es quién llama a las funciones.

---

## Criterio editorial

- **Nada inventado.** Cada dato del sitio sale de alguna de las fuentes listadas en
  `fuentes.html`.
- Lo que solo aparece en wikis especializadas lleva `verified: false` en los datos y se
  muestra con un aviso visible en la interfaz.
- Lo que las fuentes contradicen o no confirman está recogido en `openQuestions`
  (`scripts/data/sources.js`) y aparece al final de la página de fuentes.
- **No se inventan URLs.** Las canciones sin enlace oficial verificado apuntan al canal
  oficial en lugar de a una dirección falsa.
- **No se incluye material gráfico de terceros.** `assets/images/` está vacío; el sitio
  muestra marcadores con la ruta esperada. Ver `assets/images/MANIFEST.md`.

---

## Accesibilidad y rendimiento

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `figure`, `dl`.
- Enlace de salto al contenido, foco visible, menú móvil manejable con teclado y `Escape`.
- `prefers-reduced-motion` desactiva revelados, parallax y animaciones del anillo.
- Texto alternativo en todas las imágenes; los elementos decorativos van con `aria-hidden`.
- Contraste: texto principal `#FBF8FF` sobre `#07050D`; los textos secundarios se mantienen
  por encima de 4.5:1.
- Sin dependencias ni framework. Las fuentes se cargan con `display=swap`, las imágenes con
  `loading="lazy"`, y el campo de estrellas se dibuja una vez en lugar de animarse en bucle.

### Lo que falta y conviene saber

- El contenido se monta con JavaScript. Para buscadores hay `<noscript>`, metadatos completos
  y datos estructurados JSON-LD, pero si el SEO se vuelve prioritario, el siguiente paso es
  pasar a un generador estático (Astro o Eleventy) reutilizando `data/` y `components/`.
- Las tipografías vienen de Google Fonts. Para evitar la petición externa, descarga los
  `.woff2` a `assets/fonts/` y sustituye el `<link>` por `@font-face`.

---

## Comprobaciones antes de publicar

```bash
# Las secciones generan HTML sin huecos ni etiquetas rotas
node --input-type=module -e "…"   # ver la nota de abajo

# Enlaces rotos y accesibilidad
npx lighthouse http://localhost:8000 --view
npx pa11y http://localhost:8000
```

Para la primera comprobación basta con importar cada módulo de `scripts/sections/` en Node
con un `document` simulado y verificar que la salida no contiene `undefined` ni
`[object Object]`. Es una prueba de treinta líneas que conviene tener antes de cada despliegue.

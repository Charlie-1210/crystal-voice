# Inventario de imágenes

Las carpetas están vacías a propósito. **No se han descargado imágenes de terceros**: el sitio
funciona sin ellas mostrando un marcador con la ruta que falta, y en cuanto coloques el archivo
en su sitio el marcador desaparece solo. No hace falta tocar código.

## Reglas antes de añadir nada

1. Descarga solo material cuyo origen puedas identificar: sitios de 1st PLACE, ia-aria.com,
   one-aria.com, ia-rebreath.com, tiendas oficiales, canales oficiales de YouTube o notas de prensa.
2. No pongas fanart en las carpetas de material oficial. Si quieres incluir obra de la comunidad,
   crea `assets/images/fanart/` y acredita al autor con enlace en `scripts/data/gallery.js`.
3. Formato preferido: **WebP**, calidad 78–85. Deja el JPG/PNG original en `assets/images/_src/`
   si quieres poder regenerar.
4. Comprueba las condiciones de uso de la imagen en la fuente antes de publicarla.

## Rutas esperadas

| Ruta | Uso | Medidas sugeridas | Dónde buscarla |
|---|---|---|---|
| `ia/ia-hero.webp` | Retrato central del anillo de la portada | 900×900, recorte cuadrado centrado en el rostro | Ilustración de producto en ia-aria.com |
| `ia/ia-portrait.webp` | Retrato vertical de IA | 900×1200 | Material promocional de 1st PLACE |
| `ia/ia-key-visual-2012.webp` | Ilustración original de 2012 | 1000×1400 | Página de la librería VOCALOID3 |
| `ia/ia-rocks.webp` | Portada de IA ROCKS | 1000×1000 | Ficha de producto de IA ROCKS |
| `ia/ia-ai-song.webp` | Ilustración de IA AI SONG | 1000×1400 | Ficha de CeVIO AI / VoiSona |
| `ia/ia-r-key-visual.webp` | Nueva key visual de IA :[R] (pelo corto) | 1200×1200 | ia-rebreath.com |
| `one/one-portrait.webp` | Retrato vertical de OИE | 900×1200 | one-aria.com |
| `one/one-key-visual.webp` | Ilustración principal de OИE | 1000×1400 | Ficha de CeVIO Creative Studio |
| `one/one-ai-song.webp` | Ilustración de OИE AI SONG | 1000×1400 | Ficha de CeVIO AI / VoiSona |
| `hippi/hippi-portrait.webp` | Retrato vertical de HIPPI | 900×1200 | 1st PLACE, perfil de HIPPI |
| `hippi/hippi-key-visual.webp` | Ilustración principal de HIPPI | 1000×1400 | 1st PLACE, perfil de HIPPI |
| `albums/ia01-birth.webp` … `ia05-shine.webp` | Portadas de la serie numerada | 1000×1000 | Fichas de discografía de 1st PLACE |
| `albums/one01-bloom.webp`, `one00.webp` | Portadas de OИE | 1000×1000 | Discografía de 1st PLACE |
| `albums/supergt.webp`, `iavt-ost.webp`, `reload-into-starlight.webp` | Otras portadas | 1000×1000 | Discografía de 1st PLACE |
| `albums/rezona.webp`, `into-the-night.webp`, `intergalactia.webp` | Sencillos de IA GLOWB | 1000×1000 | Notas de prensa y plataformas de streaming |
| `albums/children-record.webp`, `rokuchounen.webp`, `asunoyozora.webp`, `daybreak-frontline.webp`, `yobanashi-deceive.webp`, `otsukimi-recital.webp`, `outer-science.webp`, `love-letter.webp` | Miniaturas de canciones | 1000×1000 | Miniaturas de los vídeos oficiales de cada productor |
| `live/party-a-go-go.webp` | Foto de la gira | 1600×1000 | Galerías y notas de prensa de 1st PLACE |
| `live/aria-show.webp` | Escena del musical ARIA | 1600×1000 | Material del espectáculo ARIA |
| `live/bml.webp` | bilibili Macro Link 2017 | 1600×1000 | Notas de prensa |
| `live/kiseki.webp` | Concierto del 10º aniversario | 1600×1000 | Crónica en 1stplace.co.jp/news/1464 |
| `live/vr-aria-theater.webp` | VR ARIA THEATER | 1600×1000 | Campaña de CAMPFIRE |
| `aria/planet-aria.webp` | Planeta ARIA | 1600×1000 | Vídeos de ARIA STATION |
| `aria/trio.webp` | IA, OИE y HIPPI juntas | 1600×1000 | Material del ARIA SPECIAL SHOWCASE |
| `og-cover.jpg` | Imagen para redes sociales | 1200×630 | Composición propia a partir de material oficial |

## Después de añadir imágenes

- Revisa que el texto alternativo de `scripts/data/gallery.js` describa lo que se ve.
- Si la imagen es muy pesada, genera también una versión de 640 px y pásala como `srcset`
  en `scripts/utils/media.js` (la función `picture` es el único punto que hay que tocar).

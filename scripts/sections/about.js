/** ¿Quién es IA? Explicación + ficha rápida. */
import { characters } from "../data/characters.js";
import { sectionHead, specList, statRow } from "../components/primitives.js";

export function aboutSection() {
  const ia = characters.ia;

  return `<section class="band" id="quien-es"><div class="shell">
    ${sectionHead({
      kicker: "Punto de partida",
      title: "Una cantante que es, literalmente, un programa",
      jp: "イアとは"
    })}

    <div class="figure figure--split">
      <div class="prose reveal">
        <p><strong>IA no es una persona.</strong> Es un personaje con voz propia: un software de
        síntesis de canto al que se le escribe la melodía y la letra, y que las canta. Cualquiera
        que compre la licencia puede hacerla cantar lo que quiera, y eso es exactamente lo que ha
        pasado durante catorce años.</p>

        <p>Su voz se construyó grabando a <strong>Lia</strong>, cantante japonesa conocida sobre todo
        por «Tori no Uta», el tema de apertura de la novela visual <em>AIR</em>. Se le pidió cantar
        sílabas en tonos y alturas controladas; con ese material, el equipo de
        <strong>1st PLACE</strong> montó una librería capaz de cantar cualquier cosa.</p>

        <p>Lo que la distingue de otras voces sintéticas de su generación es el timbre: limpio,
        aireado, con un registro agudo casi translúcido y un tempo máximo altísimo para la época.
        Sirve igual para una balada que para rock a 200 pulsaciones por minuto.</p>

        <p>Y lo que la distingue del resto es lo que vino después. IA salió de la pantalla:
        giras mundiales con proyección sobre el escenario, un musical propio, un videojuego,
        colaboraciones con productores de primera línea y una migración completa a los motores
        de síntesis basados en redes neuronales.</p>
      </div>

      ${specList({ title: "Ficha rápida", badge: "IA", facts: ia.facts })}
    </div>

    <div style="margin-top: var(--space-5)">
      ${statRow([
        ["2012", "Año de lanzamiento como librería VOCALOID3"],
        ["12", "Ciudades de la gira mundial PARTY A GO-GO"],
        ["3", "Idiomas de canto en su librería de 2026"],
        ["720.000", "Espectadores simultáneos en su directo de Shanghái, 2017"]
      ])}
    </div>
  </div></section>`;
}

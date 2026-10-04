import type { OptionKey } from './questions';

export interface ParcialQuestion {
  id: number; // 201..250
  group: number; // 1..5
  prompt: string;
  options: Record<OptionKey, string>;
  correct: OptionKey;
  section: string;
  explanation: string;
}

export const questionsParcial: ParcialQuestion[] = [
  // ───────────────────────── GRUPO 1 ─────────────────────────
  {
    id: 201,
    group: 1,
    prompt:
      'Un productor de una zona semiárida del oeste de Córdoba sostuvo durante años una carga animal alta en un pastizal natural. Hoy la cobertura total ronda el 30 %, predominan subarbustos no palatables y hay erosión superior a 5 cm. Decide retirar todo el ganado esperando que el pastizal vuelva solo a su estado original. Señale la **única opción correcta**:',
    options: {
      A: 'La decisión es adecuada: según el modelo de equilibrio, al retirar el disturbio la sucesión avanza en forma secuencial hacia la condición excelente en pocos meses.',
      B: 'La decisión puede ser insuficiente: si la comunidad traspasó un umbral, el retiro del pastoreo no garantiza la vuelta al estado original y la transición positiva es poco probable sin acciones de restauración activa.',
      C: 'La decisión es adecuada porque, en zonas áridas, los pastizales tienen alta capacidad de regulación interna y un único punto de equilibrio.',
      D: 'La decisión es inadecuada porque el modelo de estados y transiciones indica que solo aumentando la carga animal se recupera la cobertura.',
    },
    correct: 'B',
    explanation:
      'En el modelo del no equilibrio (estados y transiciones), si la comunidad cruzó un umbral, retirar el disturbio no la devuelve al estado original. Las transiciones positivas son menos probables y, por eso, hace falta restauración activa.',
    section: 'Unidad 3 › Modelo del no equilibrio (pág. 33) / Sucesión ecológica › Restauración (pág. 28)',
  },
  {
    id: 202,
    group: 1,
    prompt:
      'Un asesor fitosanitario recibe el pedido de aplicar, por vía **terrestre**, un herbicida de clase toxicológica II en un lote cuyo límite está a 400 m de la planta urbana de un pueblo. Según la Ley Provincial 9164:',
    options: {
      A: 'Puede aplicarse con receta fitosanitaria, ya que la restricción de 500 m rige solo para aplicaciones aéreas.',
      B: 'Puede aplicarse sin receta porque es una aplicación terrestre.',
      C: 'No puede aplicarse: dentro de los 500 m está prohibida la aplicación terrestre de clases Ia, Ib y II; en ese radio solo pueden aplicarse por vía terrestre productos de clase III y IV.',
      D: 'No puede aplicarse: dentro de los 1500 m está prohibida toda aplicación terrestre, cualquiera sea la clase toxicológica.',
    },
    correct: 'C',
    explanation:
      'Para aplicaciones terrestres, la Ley 9164 prohíbe las clases Ia, Ib y II dentro de los 500 m. En ese radio solo se admiten clases III y IV, siempre con receta. El radio de 1500 m corresponde a las aplicaciones aéreas.',
    section: 'Unidad 2 › Ley Provincial 9164 (pág. 16–17)',
  },
  {
    id: 203,
    group: 1,
    prompt:
      'Dos fragmentos de bosque nativo de igual tamaño y estado de conservación están rodeados por matrices distintas. El fragmento A está rodeado de monocultivo de soja y el fragmento B de un sistema silvopastoril. Señale la opción que **mejor** interpreta la situación:',
    options: {
      A: 'Ambos mantendrán la misma riqueza, ya que según la TBI las especies responden solo a las características del fragmento y la matriz es neutra.',
      B: 'El fragmento A conservará más especies nativas porque la matriz agrícola actúa como barrera frente a especies generalistas.',
      C: 'El fragmento B tendrá mayor efecto de borde porque la matriz silvopastoril tiene árboles que compiten con el fragmento.',
      D: 'El fragmento B probablemente conserve más especies nativas, porque una matriz blanda, de estructura más parecida al fragmento, reduce los efectos de borde, aumenta la conectividad y disminuye el riesgo de extinción.',
    },
    correct: 'D',
    explanation:
      'Cuanto más parecida es la estructura de la matriz a la del fragmento, menor es el efecto de borde y mayor la conservación de especies nativas. La matriz silvopastoril es blanda y el monocultivo es una matriz dura.',
    section: 'Unidad 3 › TBI › Tipos de matrices y efecto de borde (pág. 27)',
  },
  {
    id: 204,
    group: 1,
    prompt:
      'En el OTBN de Córdoba, un parche de bosque se encuentra a 5 km de la laguna Mar Chiquita. Señale la opción que mejor relaciona su ubicación con los criterios de sustentabilidad:',
    options: {
      A: 'Al estar dentro del buffer de 8 km de Mar Chiquita y salinas, la ubicación se vincula con los criterios de existencia de valores biológicos sobresalientes y conectividad entre eco-regiones.',
      B: 'Al estar fuera del buffer de 1500 m, la ubicación no aporta a ningún criterio de sustentabilidad.',
      C: 'La ubicación se vincula con los criterios de potencial forestal y potencial de sustentabilidad agrícola, por la mayor humedad del suelo.',
      D: 'La ubicación se vincula solo con el valor que las comunidades campesinas dan al bosque.',
    },
    correct: 'A',
    explanation:
      'El mapa de Mar Chiquita y salinas usa un buffer de 8 km y se relaciona con los criterios de valores biológicos sobresalientes y conectividad entre eco-regiones.',
    section: 'Unidad 2 › Mapas y relación con los criterios (pág. 16)',
  },
  {
    id: 205,
    group: 1,
    prompt:
      'Un lote agrícola que fue cultivado durante 20 años se abandona. En el suelo persiste un banco de semillas y hay un relicto de monte a 200 m. Señale la **única opción correcta** sobre el proceso esperado:',
    options: {
      A: 'Se iniciará una sucesión primaria, porque al haberse eliminado la vegetación nativa no quedan componentes bióticos.',
      B: 'Se iniciará una sucesión secundaria, en la que las primeras en establecerse serán especies de ciclo largo, baja capacidad dispersiva y lento crecimiento.',
      C: 'Se iniciará una sucesión secundaria, en la que se espera que primero se establezcan especies pioneras de ciclo corto, alta tasa de crecimiento y alta capacidad dispersiva, que podrán ser reemplazadas luego por especies tardías.',
      D: 'No habrá sucesión, porque el uso agrícola previo genera un clímax agrícola estable.',
    },
    correct: 'C',
    explanation:
      'Quedan componentes bióticos (banco de semillas y vegetación cercana), así que se trata de una sucesión secundaria. Primero entran las pioneras: pequeñas, de ciclo corto, con alta dispersión y crecimiento rápido.',
    section: 'Unidad 3 › Tipos de sucesión (pág. 29) / Especies tempranas y tardías (pág. 30)',
  },
  {
    id: 206,
    group: 1,
    prompt:
      'Una productora hortícola deja de usar fertilizantes de síntesis química y los reemplaza por bioabonos y caldos minerales. Mantiene igual el diseño del sistema: el mismo monocultivo, sin rotaciones ni corredores biológicos. ¿En qué etapa de la transición agroecológica se encuentra?',
    options: {
      A: 'En la fase de rediseño del agroecosistema, porque cambió los insumos utilizados.',
      B: 'En la primera fase, en el momento de sustitución de insumos, sin haber avanzado aún hacia el rediseño del agroecosistema.',
      C: 'En la tercera fase, porque el cambio de insumos implica un cambio en la escala de valores.',
      D: 'Ya completó la transición, porque el sistema no usa insumos de síntesis química.',
    },
    correct: 'B',
    explanation:
      'Reemplazar un insumo por otro, sin cambiar la estructura del sistema, corresponde a la primera fase (sustituir). El rediseño es la segunda fase.',
    section: 'Unidad 1 › Etapas de la transición agroecológica (pág. 6)',
  },
  {
    id: 207,
    group: 1,
    prompt:
      'Al relevar un lote de maíz convencional, se encontró que el cultivo representa más del 95 % de la cobertura y que unas pocas malezas aparecen con valores muy bajos. Señale la interpretación correcta de su curva de rango-abundancia:',
    options: {
      A: 'Se ajusta a una serie geométrica: alta dominancia de una especie que inhibe el establecimiento de otras, con mínima diversidad y equitatividad.',
      B: 'Se ajusta a una varilla quebrada, porque las especies presentes tienen abundancias similares.',
      C: 'Se ajusta a una log-normal, porque hay pocas especies abundantes, muchas comunes y pocas raras.',
      D: 'Se ajusta a una varilla quebrada, que es la curva de menor diversidad.',
    },
    correct: 'A',
    explanation:
      'La serie geométrica (por ejemplo, un cultivo convencional) muestra la dominancia de una o pocas especies y la diversidad mínima. La varilla quebrada es la de diversidad máxima.',
    section: 'Unidad 3 › Curvas de rango de abundancia de especies (pág. 24)',
  },
  {
    id: 208,
    group: 1,
    prompt:
      'En las Sierras de Córdoba se desmontan y urbanizan amplios sectores en la zona alta de una cuenca. Años después, una localidad ubicada aguas abajo sufre inundaciones más frecuentes. Señale la explicación más adecuada:',
    options: {
      A: 'Las inundaciones no se relacionan con el desmonte, ya que la zona de descarga es independiente de la zona de cabecera.',
      B: 'Al perderse la cobertura en la zona alta disminuye la escorrentía y aumenta la infiltración, lo que eleva las napas en la zona baja.',
      C: 'La pérdida de cobertura en la cabecera reduce la infiltración y aumenta el escurrimiento, y estos impactos se reflejan en la zona de descarga.',
      D: 'La pérdida de cobertura en la cabecera aumenta la transpiración, lo que genera más lluvias locales aguas abajo.',
    },
    correct: 'C',
    explanation:
      'Los bosques frenan la escorrentía en la zona alta. Si se pierden, baja la infiltración y sube el escurrimiento, y las consecuencias aparecen en la zona baja de la cuenca.',
    section: 'Unidad 1 › Cuencas (pág. 9) / Papel de la cobertura del bosque nativo (pág. 8)',
  },
  {
    id: 209,
    group: 1,
    prompt:
      'En un parche de bosque chaqueño conviven algarrobos, que exploran el suelo en profundidad y acceden al agua freática, y gramíneas que solo toman agua superficial. ¿Cómo se interpreta su coexistencia?',
    options: {
      A: 'Por el principio de exclusión competitiva, una de las dos terminará desplazando a la otra, porque ambas usan agua.',
      B: 'Coexisten gracias a la diferenciación en la dimensión espacial del nicho: la exploración diferencial del suelo reduce la superposición y hace complementario el uso del recurso.',
      C: 'Coexisten porque el agua es una condición y no un recurso, de modo que no se compite por ella.',
      D: 'Coexisten por diferenciación en la dimensión regenerativa, ya que sus plántulas son idénticas.',
    },
    correct: 'B',
    explanation:
      'En plantas, la dimensión espacial del nicho incluye la exploración diferencial del suelo: las leñosas llegan a las napas y las herbáceas toman el agua superficial. Esa complementariedad permite la coexistencia.',
    section: 'Unidad 3 › Dimensionalidad del nicho (pág. 26) / Exclusión competitiva y coexistencia (pág. 26)',
  },
  {
    id: 210,
    group: 1,
    prompt:
      'Un productor con un predio en zona roja presenta un plan de conservación en el que propone mantener ganadería dentro del bosque. Señale qué exige el plan para que sea aceptable:',
    options: {
      A: 'Nada adicional, ya que la ganadería está permitida sin restricciones en todas las categorías.',
      B: 'Que cuantifique los beneficios madereros esperados y cuándo estarán disponibles.',
      C: 'Que incluya un plan de cambio de uso del suelo para la superficie destinada a pastoreo.',
      D: 'Que se pruebe que la carga animal no disminuye los valores de conservación o que se prevean medidas para que esto no suceda, con monitoreo periódico y verificable.',
    },
    correct: 'D',
    explanation:
      'El plan de conservación con ganadería debe demostrar que la carga animal no reduce los valores de conservación e incluir monitoreos periódicos, transparentes y verificables. Cuantificar beneficios madereros corresponde al plan de manejo.',
    section: 'Unidad 2 › Plan conservación de bosque nativo (pág. 18)',
  },

  // ───────────────────────── GRUPO 2 ─────────────────────────
  {
    id: 211,
    group: 2,
    prompt:
      'Un establecimiento agropecuario de 600 ha, en la zona pampeana de Córdoba, no tiene árboles. Señale la opción correcta respecto de su obligación legal:',
    options: {
      A: 'Por la Ley 9814 debe destinar el 20 % de su superficie a bosque nativo en Categoría I.',
      B: 'Por la Ley 10467 debe alcanzar entre el 2 % y el 5 % de su superficie con cobertura arbórea o equivalente (entre 12 y 30 ha), dentro de un plazo de diez años desde la reglamentación.',
      C: 'Por la Ley 10467 debe tener entre 2 y 5 ha de cobertura arbórea, sin importar la superficie del predio.',
      D: 'No tiene obligación, porque la Ley 10467 solo rige para predios con bosque nativo remanente.',
    },
    correct: 'B',
    explanation:
      'La Ley 10467 abarca toda la provincia y fija entre un 2 % y un 5 % de la superficie con cobertura arbórea. Sobre 600 ha, eso equivale a 12–30 ha.',
    section: 'Unidad 2 › Ley Provincial 10467 (pág. 17)',
  },
  {
    id: 212,
    group: 2,
    prompt:
      'Un parche de bosque nativo clasificado en Categoría II (amarillo) se incendia por completo y hoy es un pastizal. El propietario solicita sembrar soja allí, argumentando que "ya no hay bosque". Señale la **única opción correcta**:',
    options: {
      A: 'Puede sembrar, porque al perder la cobertura el sector pasa automáticamente a Categoría III.',
      B: 'Puede sembrar, porque las leyes excluyen de las categorías a los sectores que sufrieron un cambio de cobertura.',
      C: 'No puede sembrar: el sector mantiene la categoría definida en el ordenamiento y corresponde realizar tareas de recuperación y restauración.',
      D: 'No puede sembrar, porque tras un incendio el sector pasa automáticamente a Categoría I.',
    },
    correct: 'C',
    explanation:
      'Tanto la Ley 26331 como la 9814 establecen que, tras un incendio, se mantiene la categoría de conservación y deben realizarse tareas de recuperación y restauración.',
    section: 'Unidad 2 › Ley 26331 y Ley 9814 (incendios) (pág. 14–15)',
  },
  {
    id: 213,
    group: 2,
    prompt:
      'Se comparan dos comunidades con la **misma riqueza** (8 especies). En la comunidad 1 las 8 especies tienen abundancias relativas parecidas. En la comunidad 2, una especie concentra el 80 % de los individuos. Señale la interpretación correcta:',
    options: {
      A: 'Ambas tienen la misma diversidad, ya que la diversidad depende solo del número de especies.',
      B: 'La comunidad 2 es más diversa porque tiene una especie dominante que estructura la comunidad.',
      C: 'La comunidad 1 tiene menor incertidumbre al predecir la especie de un individuo al azar, por lo que su índice de Shannon es menor.',
      D: 'La comunidad 1 es más diversa por su mayor equitatividad, y presentará mayor índice de Shannon, porque es más incierto predecir a qué especie pertenece un individuo tomado al azar.',
    },
    correct: 'D',
    explanation:
      'La diversidad aumenta con la riqueza y con la equitatividad. A riqueza igual, la comunidad más equitativa tiene mayor incertidumbre y, por lo tanto, mayor Shannon.',
    section: 'Unidad 3 › Atributos (Equitatividad y Diversidad biológica) (pág. 23–24)',
  },
  {
    id: 214,
    group: 2,
    prompt:
      'En un relevamiento de 50 parcelas, la especie X aparece en las 50, pero su cobertura promedio es muy baja. La especie Y aparece en 10 parcelas, pero donde está cubre gran parte de la superficie. Señale la opción correcta:',
    options: {
      A: 'X tiene alta frecuencia de ocurrencia pero baja cobertura; frecuencia y cobertura miden atributos distintos, y X no necesariamente es la dominante.',
      B: 'X es necesariamente la especie dominante, porque su frecuencia es del 100 %.',
      C: 'Y tiene una frecuencia del 10 %, ya que apareció en 10 parcelas.',
      D: 'Frecuencia y cobertura son equivalentes, por lo que ambas especies tienen la misma importancia.',
    },
    correct: 'A',
    explanation:
      'La frecuencia es la probabilidad de encontrar la especie en las muestras (X tiene 100 %; Y tiene 10/50 = 20 %). La cobertura es la proporción de terreno ocupado. La dominancia puede depender de la abundancia, del tamaño o del rol, no solo de la frecuencia.',
    section: 'Unidad 3 › Estructura biológica de la comunidad vegetal (pág. 23)',
  },
  {
    id: 215,
    group: 2,
    prompt:
      'Se inaugura una autovía que une la ciudad de Córdoba con una localidad serrana. En los años siguientes proliferan loteos y barrios cerrados sobre áreas de monte cercanas a la ruta. Señale la interpretación correcta:',
    options: {
      A: 'La autovía es una fuerza impulsora natural y los loteos son un ordenamiento pasivo.',
      B: 'La accesibilidad que genera la autovía actúa como atractor de cambio, que atrae fuerzas impulsoras (por ejemplo, socioeconómicas, como el avance inmobiliario); a su vez, el trazado de autovías es un caso de ordenamiento activo.',
      C: 'La autovía es un factor endógeno, porque depende de las decisiones de cada propietario.',
      D: 'La autovía es una zonificación que establece usos permitidos y prohibidos.',
    },
    correct: 'B',
    explanation:
      'Un atractor es una característica del sitio que atrae a una fuerza impulsora, y la accesibilidad es un gran factor de cambio. El trazado de autovías se presenta en el apunte como ejemplo de ordenamiento activo.',
    section: 'Unidad 2 › Ordenamiento Territorial (pág. 10) / CCyUT › Atractores de cambio (pág. 12)',
  },
  {
    id: 216,
    group: 2,
    prompt:
      'Un técnico propone usar el modelo de condición de sitio para planificar la carga animal en dos campos: uno en una zona húmeda y otro en una zona árida. Señale la opción más adecuada:',
    options: {
      A: 'Es igualmente adecuado en ambos campos, porque en todos los pastizales la sucesión avanza en forma secuencial hacia un clímax.',
      B: 'Es más adecuado para el campo árido, porque allí la vegetación tiene alta capacidad de regulación interna.',
      C: 'Es más adecuado para el campo húmedo; para el árido conviene el modelo de estados y transiciones, que reconoce múltiples estados posibles, umbrales y menor capacidad de regulación interna.',
      D: 'No es adecuado en ninguno, porque ambos modelos se aplican solo a bosques.',
    },
    correct: 'C',
    explanation:
      'El modelo de equilibrio (condición de sitio) se aplica en zonas más húmedas. El modelo del no equilibrio (estados y transiciones) corresponde a las zonas áridas.',
    section: 'Unidad 3 › Modelo de equilibrio (pág. 32) / Modelo del no equilibrio (pág. 33)',
  },
  {
    id: 217,
    group: 2,
    prompt:
      'En un plan para un parche de bosque se propone eliminar todo el estrato arbustivo "para que crezca pasto y se regeneren mejor los quebrachos blancos". Señale la evaluación correcta:',
    options: {
      A: 'Es adecuado, porque el quebracho blanco forma un banco de semillas persistente que germina mejor a pleno sol.',
      B: 'Es adecuado, porque los arbustos inhiben siempre a las especies tardías.',
      C: 'Es inadecuado solo por razones forrajeras, ya que los arbustos aportan ramoneo.',
      D: 'Es inadecuado, porque el quebracho blanco genera su banco de juveniles bajo la cobertura de plantas nodrizas; eliminar el estrato arbustivo afecta su regeneración, y por eso se recomienda mantenerlo.',
    },
    correct: 'D',
    explanation:
      'El quebracho blanco tiene semillas grandes, no forma banco de semillas persistente y necesita nodrizas. Por eso, en el campo escuela se recomienda mantener el estrato arbustivo.',
    section: 'Unidad 3 › Sucesión › Para aplicación (pág. 31) / Algunas prácticas y campo escuela (pág. 34–35)',
  },
  {
    id: 218,
    group: 2,
    prompt:
      'A lo largo del gradiente árido–semiárido que va desde el oeste hacia el centro del país, se observa un cambio en la fisonomía de la vegetación. Señale la opción correcta:',
    options: {
      A: 'La mayor abundancia de arbustos de la estepa del Monte se reemplaza paulatinamente por una mayor presencia de árboles en la provincia Chaqueña, lo que muestra que la proporción de formas de vida varía con las condiciones climáticas.',
      B: 'La mayor abundancia de árboles del Monte se reemplaza por arbustos en la provincia Chaqueña.',
      C: 'La proporción de formas de vida no varía con el clima, solo con la intensidad de los disturbios.',
      D: 'En todo el gradiente predominan las terófitas, porque son las únicas adaptadas a la sequía.',
    },
    correct: 'A',
    explanation:
      'El apunte describe ese gradiente: de la estepa arbustiva del Monte hacia mayor presencia arbórea en el Chaco. Las formas de vida varían con el clima y con los disturbios.',
    section: 'Unidad 3 › Estructura física › 3. Formas de vida o bioformas (pág. 22)',
  },
  {
    id: 219,
    group: 2,
    prompt:
      'En una cuenca serrana se reemplaza el bosque nativo por pasturas exóticas. Señale qué tipo de servicios ecosistémicos se ven afectados **principalmente** y por qué:',
    options: {
      A: 'Solo los de aprovisionamiento, porque se deja de obtener leña.',
      B: 'Solo los culturales, porque cambia el paisaje.',
      C: 'Se afectan varios tipos, pero el más relevante para la cuenca es la regulación (hídrica, climática), por la menor infiltración, el mayor escurrimiento y la pérdida de captura de carbono, además de los de apoyo como la formación del suelo.',
      D: 'Ninguno, porque las pasturas mantienen la cobertura del suelo y cumplen las mismas funciones que el bosque.',
    },
    correct: 'C',
    explanation:
      'El bosque nativo regula el ciclo hidrológico y el clima y retiene el suelo. Su alteración aumenta el escurrimiento y produce pérdida de servicios de regulación y de apoyo, entre otros.',
    section: 'Unidad 1 › Pérdida de servicios ecosistémicos › Papel de la cobertura del bosque nativo (pág. 8–9)',
  },
  {
    id: 220,
    group: 2,
    prompt:
      'Una familia de pequeños productores del norte cordobés realiza el aprovechamiento de 6 ha de monte que son de su propiedad. Respecto del alcance de la Ley Nacional 26331, señale la opción correcta:',
    options: {
      A: 'Su caso queda exceptuado, ya que la ley exceptúa a los bosques cuyo aprovechamiento sea menor a 10 ha y sean propiedad de comunidades indígenas o pequeños productores.',
      B: 'Debe presentar obligatoriamente un plan de cambio de uso del suelo.',
      C: 'Queda exceptuado solo si el bosque es de origen implantado.',
      D: 'La ley no los alcanza nunca, porque solo rige sobre bosques públicos.',
    },
    correct: 'A',
    explanation:
      'La Ley 26331 contempla a los bosques nativos cualquiera sea su origen, con la excepción de los aprovechamientos menores a 10 ha de comunidades indígenas o pequeños productores.',
    section: 'Unidad 2 › Ley Nacional 26331 (pág. 13)',
  },

  // ───────────────────────── GRUPO 3 ─────────────────────────
  {
    id: 221,
    group: 3,
    prompt:
      'Una ONG cuenta con fondos limitados para conservar biodiversidad en un paisaje fragmentado del Espinal. Señale la estrategia que **mejor** se ajusta a lo planteado en el apunte:',
    options: {
      A: 'Destinar todos los fondos a muchos parches muy pequeños y dispersos, ya que la cantidad de fragmentos importa más que su tamaño.',
      B: 'Priorizar la conservación de parches grandes y complejos, y complementar manteniendo parches pequeños y árboles aislados como piedras de paso, junto con una matriz estructuralmente compleja.',
      C: 'Concentrar el esfuerzo solo en los fragmentos, porque la matriz no influye en la dinámica interna.',
      D: 'Priorizar la construcción de corredores aunque sean muy distintos de la matriz, ya que la similitud entre corredor y matriz no influye.',
    },
    correct: 'B',
    explanation:
      'Las estrategias del apunte priorizan los parches grandes y complejos, conservar los pequeños como piedras de paso, mantener la complejidad de la matriz y lograr que corredor y matriz se parezcan.',
    section: 'Unidad 3 › Estrategias de conservación de matriz y parche (pág. 27–28)',
  },
  {
    id: 222,
    group: 3,
    prompt:
      'Se comparan dos fragmentos de bosque: uno pequeño y alejado de un bosque continuo, y otro grande y cercano. Según la TBI, señale la predicción correcta:',
    options: {
      A: 'El fragmento pequeño y alejado tendrá mayor riqueza porque sufre menor competencia.',
      B: 'Ambos tendrán igual riqueza, porque el número de especies depende solo del clima.',
      C: 'El fragmento grande y cercano tendrá más especies por mayor tasa de colonización y menor tasa de extinción; el pequeño y alejado tendrá menos.',
      D: 'El fragmento grande y cercano tendrá mayor extinción por su mayor superficie.',
    },
    correct: 'C',
    explanation:
      'En la TBI, las islas pequeñas tienen más extinción y las lejanas menos colonización. Por eso las grandes y cercanas tienen mayor riqueza.',
    section: 'Unidad 3 › Teoría de biogeografía de islas (pág. 26)',
  },
  {
    id: 223,
    group: 3,
    prompt:
      'En una reunión de productores, alguien afirma: "la agroecología es una agricultura de bajos rendimientos, por eso no sirve". Señale la respuesta que mejor se apoya en el apunte:',
    options: {
      A: 'Es correcto: la agroecología prioriza el largo plazo y no contempla la producción a corto plazo.',
      B: 'Es correcto: la agroecología busca maximizar el rendimiento de un único producto.',
      C: 'Es un mito: la agroecología busca maximizar el rendimiento por cultivo a corto plazo, igual que la agricultura industrial.',
      D: 'Es un mito: la agroecología busca maximizar múltiples salidas del sistema y estabilizar los rendimientos, contemplando que en el corto y mediano plazo haya producción y viabilidad económica durante la transición.',
    },
    correct: 'D',
    explanation:
      '"Agricultura de bajos rendimientos" figura entre los mitos sobre la agroecología. Sus objetivos son múltiples salidas, estabilidad y viabilidad económica también en el corto y mediano plazo.',
    section: 'Unidad 1 › Mitos (pág. 7) / Cuadro de tipos de agricultura (pág. 4)',
  },
  {
    id: 224,
    group: 3,
    prompt:
      'Una comunidad campesina organiza una feria donde vende alimentos producidos sin agrotóxicos y decide en asamblea qué cultivar y cómo hacerlo. Según las definiciones del apunte, señale la opción correcta:',
    options: {
      A: 'Producir sin agrotóxicos se vincula con la seguridad alimentaria; decidir qué, cómo, quiénes y dónde producir se vincula con la soberanía alimentaria, y la feria con la economía circular y solidaria.',
      B: 'Producir sin agrotóxicos se vincula con la soberanía alimentaria; decidir qué producir, con la seguridad alimentaria.',
      C: 'Todo el caso corresponde únicamente al principio de eficiencia.',
      D: 'La feria corresponde al principio de reciclaje, porque circula materia y energía.',
    },
    correct: 'A',
    explanation:
      'En el apunte, la seguridad alimentaria refiere a alimentos libres de sustancias químicas. La soberanía alimentaria es la autonomía para decidir qué, cómo, quiénes y dónde producir. Las ferias y el Km 0 corresponden a la economía circular y solidaria.',
    section: 'Unidad 1 › 13 principios y sus dimensiones (pág. 5–6)',
  },
  {
    id: 225,
    group: 3,
    prompt:
      'Se planea una aplicación **aérea** de un producto de clase toxicológica IV en un lote ubicado a 1000 m del límite de una planta urbana. Según la Ley 9164:',
    options: {
      A: 'Está prohibida, porque toda aplicación aérea está prohibida dentro de los 1500 m.',
      B: 'Está prohibida, porque la clase IV solo puede aplicarse por vía terrestre.',
      C: 'Está permitida sin receta, porque es de clase IV.',
      D: 'Está permitida con receta fitosanitaria, porque la prohibición de 1500 m rige para las clases Ia, Ib y II, mientras que para las clases III y IV el radio de prohibición aérea es de 500 m.',
    },
    correct: 'D',
    explanation:
      'El radio aéreo de 1500 m aplica a las clases Ia, Ib y II. Para las clases III y IV el radio es de 500 m. Todo producto requiere receta.',
    section: 'Unidad 2 › Ley Provincial 9164 (pág. 16–17)',
  },
  {
    id: 226,
    group: 3,
    prompt:
      'Familias campesinas usan desde hace generaciones un parche de monte para obtener leña, frutos de algarrobo y plantas medicinales, aunque no tienen títulos formales de propiedad. Al evaluar ese parche en el ordenamiento, el criterio más directamente involucrado es:',
    options: {
      A: 'El potencial de sustentabilidad agrícola, porque el monte podría destinarse a cultivos.',
      B: 'El valor que las comunidades indígenas y campesinas dan a las áreas boscosas y el uso que hacen de sus recursos para su supervivencia y su cultura, considerando la situación de tenencia de la tierra.',
      C: 'La superficie, porque el parche debe superar el área mínima viable.',
      D: 'El potencial forestal, porque la leña tiene valor comercial.',
    },
    correct: 'B',
    explanation:
      'El criterio 10 contempla el uso que las comunidades hacen del bosque para su supervivencia y su cultura, y considera explícitamente la tenencia de la tierra.',
    section: 'Unidad 2 › Ley 26331 › Criterios de Sustentabilidad (pág. 14)',
  },
  {
    id: 227,
    group: 3,
    prompt:
      'Un bosque de 1000 ha queda dividido por caminos y desmontes en 25 fragmentos que en total suman 600 ha. Señale la interpretación correcta:',
    options: {
      A: 'Es un proceso de fragmentación: el hábitat original se divide en fragmentos de menor tamaño cuya superficie total es menor a la inicial, lo que altera la distribución de organismos y los procesos ecológicos.',
      B: 'Es un proceso de conectividad, porque aumentó el número de parches.',
      C: 'No es fragmentación, porque esta solo ocurre si la superficie total se mantiene igual.',
      D: 'Es un aumento del área mínima viable de las poblaciones.',
    },
    correct: 'A',
    explanation: 'La fragmentación implica dividir el hábitat en fragmentos más pequeños y numerosos cuya suma es menor que la superficie inicial.',
    section: 'Unidad 2 › Fragmentación (pág. 11)',
  },
  {
    id: 228,
    group: 3,
    prompt:
      'Un campo con sobrepastoreo crónico muestra pérdida progresiva de la cobertura vegetal, suelo cada vez más descubierto y erosión creciente. Señale el proceso que mejor describe la situación y su posible consecuencia:',
    options: {
      A: 'Sucesión progresiva, que conducirá a un clímax más productivo.',
      B: 'Sucesión primaria, porque el suelo queda desnudo.',
      C: 'Sucesión regresiva, con tendencia a descubrir el suelo, que puede conducir a la desertificación.',
      D: 'Estabilización, porque la comunidad llegó a un equilibrio con el clima.',
    },
    correct: 'C',
    explanation: 'La sucesión regresiva se da por mal manejo o por distintos eventos que descubren el suelo y puede llevar a la desertificación.',
    section: 'Unidad 3 › Tipos de sucesión (pág. 29) / Desertificación (pág. 9)',
  },
  {
    id: 229,
    group: 3,
    prompt:
      'En una parcela en recuperación, una gramínea de rápido crecimiento ocupa todo el espacio, aprovecha mejor la luz y el agua, y durante años impide el establecimiento de otras especies. Señale el mecanismo de reemplazo involucrado:',
    options: {
      A: 'Facilitación, porque la gramínea mejora el sitio para las siguientes.',
      B: 'Tolerancia, porque cualquier especie puede colonizar a pesar de la competencia.',
      C: 'Comensalismo, porque la gramínea actúa como nodriza.',
      D: 'Inhibición, porque una especie aprovecha mejor las condiciones y, como mejor competidora, impide el desarrollo de otras.',
    },
    correct: 'D',
    explanation:
      'En la inhibición, una especie bloquea el desarrollo de otras por ser mejor competidora. La facilitación, en cambio, mejora el sitio para las siguientes especies.',
    section: 'Unidad 3 › Mecanismos de reemplazo de especies (pág. 32)',
  },
  {
    id: 230,
    group: 3,
    prompt:
      'Tras una sequía severa, un lote de soja en monocultivo pierde casi toda su producción, mientras que un parche de bosque nativo vecino mantiene su estructura y funciones. Señale la interpretación correcta:',
    options: {
      A: 'El monocultivo es dinámicamente robusto y el bosque, dinámicamente frágil.',
      B: 'El monocultivo es dinámicamente frágil, estable solo en una reducida gama de condiciones; el bosque nativo es dinámicamente robusto, estable en una amplia gama de condiciones.',
      C: 'Ambos son igualmente frágiles, porque la sequía es un disturbio global.',
      D: 'El bosque resistió por tener menor diversidad, lo que reduce la competencia por agua.',
    },
    correct: 'B',
    explanation:
      'El apunte pone a los cultivos convencionales como ejemplo de sistema dinámicamente frágil y al bosque nativo como ejemplo de sistema dinámicamente robusto.',
    section: 'Unidad 3 › Estabilidad › Fragilidad o robustez (pág. 35)',
  },

  // ───────────────────────── GRUPO 4 ─────────────────────────
  {
    id: 231,
    group: 4,
    prompt:
      'Se comparan dos rodales de bosque: uno joven, de unos 30 años en plena recuperación, y otro maduro, de más de 150 años y ya estabilizado. Respecto de la productividad, señale la opción correcta:',
    options: {
      A: 'El rodal joven presentará una PPN mayor, porque la PPN alcanza un máximo cuando la comunidad aún no se estabilizó y luego disminuye, a medida que la respiración aumenta con la biomasa y la necromasa.',
      B: 'El rodal maduro presentará la mayor PPN, porque tiene más biomasa acumulada.',
      C: 'Ambos presentan la misma PPN, porque PB y R crecen siempre en la misma proporción.',
      D: 'El rodal maduro tiene PPN máxima porque su respiración es nula.',
    },
    correct: 'A',
    explanation: 'PPN = PB − R. La PPN es máxima antes de la estabilización y disminuye en la comunidad estabilizada, porque la respiración aumenta.',
    section: 'Unidad 3 › Sucesión › 3. Cambios en el ecosistema (pág. 31)',
  },
  {
    id: 232,
    group: 4,
    prompt:
      'Un propietario de un predio en zona amarilla quiere producir leña y carbón para la venta, conservando el bosque. Señale el tipo de plan y una de sus exigencias:',
    options: {
      A: 'Plan de conservación, que no requiere cuantificar beneficios.',
      B: 'Plan de cambio de uso del suelo, porque habrá extracción de madera.',
      C: 'Plan de manejo sustentable, que permite el aprovechamiento comercial de la madera y debe cuantificar los beneficios madereros y no madereros esperados e indicar cuándo estarán disponibles.',
      D: 'No puede presentar ningún plan, porque en zona amarilla está prohibido todo aprovechamiento.',
    },
    correct: 'C',
    explanation:
      'En zona amarilla se admiten planes de conservación y de manejo. Solo el plan de manejo permite el aprovechamiento comercial y exige cuantificar los beneficios y su disponibilidad en el tiempo.',
    section: 'Unidad 2 › Planes de manejo y conservación (pág. 18) / Plan de manejo sustentable (pág. 18–19)',
  },
  {
    id: 233,
    group: 4,
    prompt:
      'Un inversor compra un predio clasificado en Categoría I (rojo) y presenta un plan de aprovechamiento con cambio de uso del suelo para instalar un cultivo. Señale la **única opción correcta**:',
    options: {
      A: 'Es viable si el cultivo es agroecológico.',
      B: 'Es viable si planta árboles exóticos como compensación.',
      C: 'Es viable porque la Ley 10467 exige solo un 2–5 % de cobertura arbórea.',
      D: 'No es viable: en zona roja solo corresponde un plan de conservación, ya que son sectores de muy alto valor que no deben transformarse.',
    },
    correct: 'D',
    explanation:
      'La Categoría I debe persistir como bosque a perpetuidad y allí solo se admite plan de conservación. El plan de cambio de uso solo es posible en zona verde.',
    section: 'Unidad 2 › Categorías de conservación (pág. 13) / Planes de manejo y conservación (pág. 18)',
  },
  {
    id: 234,
    group: 4,
    prompt:
      'Se debe relevar la vegetación de un predio que combina sectores de bosque denso, un bajo salino y un pastizal en la ladera. ¿Cómo conviene distribuir las unidades muestrales?',
    options: {
      A: 'En cualquier punto, porque todo el predio es representativo.',
      B: 'Mediante un muestreo sistemático o por estratos, porque el terreno es heterogéneo y la distribución de las muestras depende de esa heterogeneidad.',
      C: 'Solo en el bosque denso, porque es el estrato dominante.',
      D: 'Con una única parcela grande en el centro del predio.',
    },
    correct: 'B',
    explanation: 'Si el terreno es homogéneo, cualquier punto es representativo. Si es heterogéneo, se hace un muestreo sistemático o por estratos.',
    section: 'Unidad 3 › Metodología para el estudio de la vegetación (pág. 20)',
  },
  {
    id: 235,
    group: 4,
    prompt:
      'En lotes sometidos a labranza y siembra anual se observa que la flora espontánea está dominada por especies que cumplen su ciclo en la época favorable y sobreviven como semillas. Señale la interpretación correcta:',
    options: {
      A: 'Predominan las fanerófitas, porque resisten mejor los disturbios.',
      B: 'Predominan las caméfitas, porque sus yemas están protegidas a menos de 30 cm.',
      C: 'Predominan las terófitas, lo que muestra que la proporción relativa de formas de vida varía con la intensidad de los disturbios.',
      D: 'Predominan las geófitas, porque toda especie anual tiene yemas bajo el suelo.',
    },
    correct: 'C',
    explanation:
      'Las terófitas son anuales que superan la época desfavorable como semillas. La proporción de formas de vida cambia con el clima y con la intensidad de los disturbios.',
    section: 'Unidad 3 › Estructura física › 3. Formas de vida o bioformas (pág. 22)',
  },
  {
    id: 236,
    group: 4,
    prompt:
      'Un apicultor debe elegir dónde ubicar sus colmenas: junto a un parche de bosque nativo o junto a un lote de cultivo anual. Desde el punto de vista de la estacionalidad de la comunidad, señale la opción correcta:',
    options: {
      A: 'El bosque nativo ofrece estacionalidad amplia: la floración no sincronizada de sus especies sostiene la oferta de recursos durante un período largo, a diferencia de la estacionalidad acotada de un cultivo anual.',
      B: 'El cultivo anual ofrece estacionalidad amplia, porque todas las plantas florecen al mismo tiempo.',
      C: 'Ambos tienen estacionalidad acotada, porque la floración depende solo del clima.',
      D: 'El bosque nativo tiene estacionalidad acotada, porque sus especies están sincronizadas.',
    },
    correct: 'A',
    explanation:
      'En el bosque nativo, las especies (piquillín, aromito, algarrobo, chañar, etc.) no se sincronizan. Los cultivos anuales tienen estacionalidad acotada.',
    section: 'Unidad 3 › Estructura física › 5. Estacionalidad de la comunidad (pág. 22–23)',
  },
  {
    id: 237,
    group: 4,
    prompt:
      'Un incendio de gran extensión arrasa miles de hectáreas, y los relictos de vegetación quedan muy alejados del centro del área quemada. Señale la predicción más adecuada sobre la recuperación del sector central:',
    options: {
      A: 'Será más rápida que en un incendio pequeño, porque hay más espacio libre para colonizar.',
      B: 'Será más lenta: el tamaño de la superficie afectada reduce la probabilidad de que lleguen propágulos, y las semillas que lleguen necesitarán además micrositios seguros para establecerse.',
      C: 'No depende del tamaño del área, sino solo de la temperatura del fuego.',
      D: 'Será inmediata, porque toda la vegetación del Chaco tiene banco de semillas persistente.',
    },
    correct: 'B',
    explanation:
      'El tamaño del área afectada determina la probabilidad de llegada de propágulos, como en la TBI con la distancia. Además, el establecimiento requiere micrositios seguros.',
    section: 'Unidad 3 › 1. Disturbio (pág. 29) / 2. Colonización (pág. 30)',
  },
  {
    id: 238,
    group: 4,
    prompt:
      'Un municipio declara un área protegida sobre un sector de monte que antes se usaba para pastoreo. Respecto de los conceptos de uso y cobertura, señale la opción correcta:',
    options: {
      A: 'La declaración modifica la cobertura de la tierra en forma inmediata.',
      B: 'El área protegida es un tipo de cobertura vegetal.',
      C: 'Uso y cobertura son lo mismo, por lo que no hay cambio.',
      D: 'Hubo un cambio en el uso de la tierra (de pastoreo a área protegida); el uso es la causa inmediata de los cambios de cobertura, que podrán manifestarse a través de la sucesión.',
    },
    correct: 'D',
    explanation:
      'Las áreas protegidas son un uso humano del espacio. La cobertura corresponde a la vegetación, y el uso es la causa inmediata de su cambio.',
    section: 'Unidad 2 › Cambios de Cobertura y Usos de la Tierra (pág. 11–12)',
  },
  {
    id: 239,
    group: 4,
    prompt:
      'Un grupo de productores y un equipo de la facultad diseñan juntos un sistema de rotaciones que combina el conocimiento ancestral de los productores con resultados de ensayos científicos. Esto se enmarca **principalmente** en:',
    options: {
      A: 'El principio de eficiencia, porque reduce insumos externos.',
      B: 'El principio de creación conjunta de conocimientos y diálogo de saberes, que integra a distintos actores sociales con profesionales de diversas disciplinas.',
      C: 'La dimensión de la agroecología como movimiento social, exclusivamente.',
      D: 'El principio de salud y bienestar animal.',
    },
    correct: 'B',
    explanation:
      'El principio 8 plantea que conocimientos, tecnologías e innovaciones surjan del diálogo de saberes entre actores sociales y profesionales.',
    section: 'Unidad 1 › 13 principios y sus dimensiones (pág. 5)',
  },
  {
    id: 240,
    group: 4,
    prompt:
      'Un establecimiento ganadero cambia de engorde a corral (feedlot) a pastoreo bajo monte en un sistema silvopastoril. Desde la ecología del paisaje, señale la interpretación correcta:',
    options: {
      A: 'Pasa de una matriz dura a una matriz blanda, que puede aumentar el tamaño efectivo de los fragmentos de bosque cercanos y la conectividad entre ellos.',
      B: 'Pasa de una matriz blanda a una matriz dura, porque el ganado circula por el monte.',
      C: 'No hay cambio en la matriz, porque en ambos casos hay ganado.',
      D: 'Pasa a ser un corredor biológico, porque el ganado se desplaza entre parches.',
    },
    correct: 'A',
    explanation:
      'El engorde a corral es un ejemplo de matriz dura y el sistema silvopastoril de matriz blanda. Las matrices blandas reducen el efecto de borde y aumentan la conectividad.',
    section: 'Unidad 3 › TBI › Tipos de matrices (pág. 27)',
  },

  // ───────────────────────── GRUPO 5 ─────────────────────────
  {
    id: 241,
    group: 5,
    prompt:
      'En un pastizal de zona húmeda manejado con el modelo de condición de sitio, se observa que las especies más palatables desaparecieron y dominan especies que el ganado no consume. Señale la interpretación y la decisión de manejo más adecuada:',
    options: {
      A: 'El pastizal está en condición excelente, porque dominan especies resistentes al pastoreo.',
      B: 'El pastizal está en condición buena, porque aparecieron especies crecientes.',
      C: 'El pastizal está en condición pobre o muy pobre por una intensidad de pastoreo alta; la decisión clave es ajustar la carga animal para permitir la tendencia sucesional hacia condiciones mejores.',
      D: 'El pastizal cruzó un umbral irreversible, por lo que la carga animal ya no influye.',
    },
    correct: 'C',
    explanation:
      'En la condición de sitio, la presión de pastoreo hace desaparecer primero las especies palatables (decrecientes). La decisión más importante es la carga animal.',
    section: 'Unidad 3 › Modelo de equilibrio (Condición de Sitio) (pág. 32–33)',
  },
  {
    id: 242,
    group: 5,
    prompt:
      'En un campo árido se describen cuatro estados del pastizal, de E-I (mejor) a E-IV (más degradado). El pastoreo llevó la comunidad de E-I a E-III. Según el modelo de estados y transiciones, señale la opción correcta:',
    options: {
      A: 'La transición negativa de E-I a E-III es poco probable; lo habitual es que la comunidad mejore sola.',
      B: 'Una vez iniciada la transición, el estado se estabiliza de inmediato, independientemente de que la transición se complete.',
      C: 'El paso de E-III a E-I será inmediato al retirar el ganado, porque los estados no dependen del suelo.',
      D: 'Las transiciones negativas por pastoreo son esperables, mientras que la vuelta a estados mejores (transiciones positivas) es menos probable, en parte porque los estados están asociados a propiedades del suelo.',
    },
    correct: 'D',
    explanation:
      'Los estados se asocian al medio físico y a las propiedades dinámicas del suelo. Las transiciones positivas son menos probables y el estado no se estabiliza hasta que se completa la transición.',
    section: 'Unidad 3 › Modelo del no equilibrio (pág. 33)',
  },
  {
    id: 243,
    group: 5,
    prompt: 'Se discute el ordenamiento de los bosques nativos en Córdoba. Señale la afirmación correcta sobre la Ley Provincial 9814:',
    options: {
      A: 'Fue sancionada en 2010 sin cumplir los plazos de la Ley Nacional, toma las mismas categorías y busca evitar la disminución de la superficie de bosque y promover su incremento en superficie y calidad.',
      B: 'Fue sancionada antes que la Ley Nacional 26331 y creó categorías distintas.',
      C: 'Solo se aplica a bosques nativos públicos.',
      D: 'Establece que todo predio debe tener un 2–5 % de cobertura arbórea.',
    },
    correct: 'A',
    explanation:
      'La Ley 9814 es de 2010, posterior a la 26331 de 2007, y no cumplió los plazos nacionales. Usa las mismas categorías y alcanza a bosques públicos y privados. El 2–5 % de cobertura corresponde a la Ley 10467.',
    section: 'Unidad 2 › Ley Provincial 9814 (pág. 15)',
  },
  {
    id: 244,
    group: 5,
    prompt:
      'En un predio con bosque degradado se propone: a) clausurar el ingreso del ganado y b) sembrar y plantar especies autóctonas de la eco-región. Señale la clasificación correcta:',
    options: {
      A: 'Ambas son restauración pasiva.',
      B: 'a) es restauración pasiva, porque elimina un factor que limita la recuperación natural; b) es restauración activa, porque involucra acciones que estimulan el desarrollo de la sucesión.',
      C: 'a) es restauración activa; b) es restauración pasiva.',
      D: 'Ambas son sucesión primaria inducida.',
    },
    correct: 'B',
    explanation:
      'La restauración pasiva elimina o modifica los factores limitantes (ganado, tala, incendios). La activa interviene directamente para estimular la sucesión.',
    section: 'Unidad 3 › Sucesión ecológica (Restauración pasiva y activa) (pág. 28)',
  },
  {
    id: 245,
    group: 5,
    prompt: 'En el campo escuela se recomienda realizar picadas cortafuegos. Señale la justificación más adecuada:',
    options: {
      A: 'Aumentar la superficie de pastoreo dentro del bosque.',
      B: 'Facilitar la extracción comercial de madera.',
      C: 'Reducir el riesgo de incendios, que constituyen un disturbio capaz de provocar retrocesos importantes en la estructura y el funcionamiento del bosque.',
      D: 'Generar corredores biológicos para la fauna.',
    },
    correct: 'C',
    explanation:
      'Las picadas cortafuegos se proponen en el campo escuela por el riesgo de incendios. El tipo, la frecuencia y la intensidad de un disturbio determinan el daño que causa.',
    section: 'Unidad 3 › Algunas prácticas y campo escuela (pág. 34–35)',
  },
  {
    id: 246,
    group: 5,
    prompt:
      'En el parche de bosque del campo escuela se encuentran algarrobos (Prosopis) con raíz pivotante profunda y una corona de raíces superficiales, especies de hojas pequeñas y coriáceas con espinas, y cactáceas. ¿Qué indica esta vegetación sobre el ambiente?',
    options: {
      A: 'Un ambiente con exceso permanente de agua, donde las raíces profundas evitan el anegamiento.',
      B: 'Un ambiente frío de altura, donde las espinas protegen de las heladas.',
      C: 'Un ambiente sin limitaciones hídricas, ya que las raíces dimórficas son típicas de suelos saturados.',
      D: 'Un ambiente con escasez temporaria de agua, en el que las plantas presentan adaptaciones para usar agua superficial y freática y reducir pérdidas.',
    },
    correct: 'D',
    explanation:
      'La vegetación es indicadora del ambiente. Esas adaptaciones (sistema radical dimórfico, hojas pequeñas y coriáceas, espinas, cactáceas) responden a la escasez temporaria de agua.',
    section: 'Unidad 3 › Vegetación como recurso y como indicadora del ambiente (pág. 19–20)',
  },
  {
    id: 247,
    group: 5,
    prompt: 'Un productor del monte chaqueño consulta por qué muchas especies de la zona presentan metabolismo C4 o CAM. Señale la respuesta correcta según el apunte:',
    options: {
      A: 'Porque son más eficientes en el uso del agua y en la fotosíntesis a altas temperaturas, lo que les da ventaja en ambientes con escasez temporaria de agua.',
      B: 'Porque necesitan más agua que las plantas C3.',
      C: 'Porque solo crecen a la sombra de los árboles.',
      D: 'Porque son las únicas que fijan nitrógeno.',
    },
    correct: 'A',
    explanation:
      'El apunte destaca que en ese ambiente es importante que las especies sean C4 y CAM, por su mayor eficiencia en el uso del agua y en la fotosíntesis a altas temperaturas.',
    section: 'Unidad 3 › Vegetación como recurso y como indicadora del ambiente (pág. 19)',
  },
  {
    id: 248,
    group: 5,
    prompt:
      'Un estudio compara imágenes satelitales de 1980 y 2020 de una región de Córdoba y analiza cómo variaron la distribución de los parches de bosque y sus flujos ecológicos. Este estudio se enfoca **principalmente** en la característica del paisaje denominada:',
    options: {
      A: 'Estructura, exclusivamente.',
      B: 'Cambio: la alteración de la estructura y la función del paisaje a lo largo del tiempo.',
      C: 'Función, exclusivamente.',
      D: 'Matriz.',
    },
    correct: 'B',
    explanation:
      'La ecología del paisaje estudia la estructura, la función y el cambio. Este último es la alteración de las dos primeras a lo largo del tiempo, base para el ordenamiento territorial.',
    section: 'Unidad 2 › Ecología del Paisaje (pág. 10)',
  },
  {
    id: 249,
    group: 5,
    prompt:
      'En el noroeste de Córdoba, un productor desmonta para sembrar soja, motivado por los precios internacionales y por políticas de crédito favorables. Señale la clasificación correcta de los factores involucrados:',
    options: {
      A: 'El desmonte y los precios son factores endógenos.',
      B: 'Los precios internacionales son un factor directo y el desmonte, un factor indirecto.',
      C: 'La expansión de la agricultura (el desmonte) es un factor directo o inmediato; los mercados externos y las políticas son factores indirectos o exógenos.',
      D: 'Todos son fuerzas impulsoras naturales.',
    },
    correct: 'C',
    explanation:
      'Los factores directos son la expansión agrícola y la extracción de productos del bosque. Los indirectos o exógenos vienen de afuera: políticas y mercados externos.',
    section: 'Unidad 2 › CCyUT › Factores impulsores (pág. 12)',
  },
  {
    id: 250,
    group: 5,
    prompt: 'Un técnico afirma: "si el pastizal tarda años en recuperarse tras retirar el ganado, es porque tiene baja resistencia". Señale la corrección conceptual adecuada:',
    options: {
      A: 'Es correcto, porque resistencia y resiliencia son sinónimos.',
      B: 'Es incorrecto: la resistencia mide la rapidez de recuperación.',
      C: 'Es incorrecto, porque la recuperación solo depende de la estabilidad local.',
      D: 'Es incorrecto: la rapidez de recuperación tras el disturbio corresponde a la resiliencia; la resistencia es la capacidad de evitar el desplazamiento del equilibrio frente al disturbio.',
    },
    correct: 'D',
    explanation:
      'La resiliencia es la rapidez con la que el sistema vuelve a su estado anterior. La resistencia es la capacidad de no desplazarse del equilibrio: la energía necesaria para llevarlo a suelo desnudo.',
    section: 'Unidad 3 › Estabilidad: resiliencia y resistencia (pág. 35)',
  },
];

export const TOTAL_GROUPS_PARCIAL = 5;
export const QUESTIONS_PER_GROUP_PARCIAL = 10;

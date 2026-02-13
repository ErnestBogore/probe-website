import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsEs: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Generador de Keywords',
    title: 'Generador de Keywords Gratuito',
    description: 'Encuentra miles de ideas de keywords para tus campañas de SEO y marketing de contenidos. Obtén datos de volumen de búsqueda, dificultad de keyword y CPC.',
    metaDescription: 'Genera ideas de keywords a partir de cualquier término semilla. Consulta volumen de búsqueda, dificultad y CPC para más de 15 países — gratis, sin registro.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword semilla',
    inputPlaceholder: 'p. ej., email marketing',
    buttonText: 'Buscar Keywords',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
          { value: '2528', label: 'Países Bajos' },
          { value: '2792', label: 'Turquía' },
          { value: '2410', label: 'Corea del Sur' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competencia', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Descubre oportunidades de keywords en cualquier mercado',
        description: 'Ya sea que estés expandiéndote al mercado británico, dirigiéndote a compradores en Brasil o ejecutando una campaña local en Japón, esta herramienta te permite investigar la demanda de keywords en más de 15 países desde una sola entrada. Introduce una keyword semilla como "email marketing", selecciona tu país objetivo en el menú desplegable y descubre instantáneamente los términos que las personas reales están escribiendo en Google. Esto es especialmente útil para equipos de SEO internacional que planifican lanzamientos de contenido en múltiples regiones, o marcas de comercio electrónico que validan la demanda de productos antes de entrar en un nuevo mercado.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Obtén una visión panorámica del panorama de búsqueda de un tema',
        description: 'Antes de invertir recursos en un clúster de contenido, necesitas saber si el tema tiene suficiente demanda de búsqueda y si la competencia es manejable. Después de introducir tu keyword semilla, la herramienta devuelve un panel resumen que muestra el Total de Keywords encontradas (p. ej., 50 resultados), el Volumen Promedio de esas keywords y la Dificultad Promedio. Esta instantánea permite a los estrategas de contenido y responsables de SEO evaluar rápidamente si vale la pena perseguir un tema o si deben orientarse hacia un territorio de keywords más favorable.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Evalúa la competitividad a nivel de keyword para priorizar contenido',
        description: 'La tabla de resultados muestra cada keyword junto con su Volumen de búsqueda mensual, puntuación de Dificultad de Keyword (KD), Coste por Clic (CPC) e índice de Competencia. Esta vista multi-métrica te permite encontrar el punto óptimo: keywords de alto volumen con baja dificultad e intención comercial significativa. Los gestores de PPC pueden usar la columna CPC para estimar el gasto publicitario, mientras que los profesionales de SEO pueden usar la puntuación KD para decidir qué keywords abordar con contenido extenso y cuáles necesitan una estrategia centrada en backlinks.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Descubre keywords semánticamente relacionadas para construir autoridad temática',
        description: 'El algoritmo de posicionamiento de Google recompensa las páginas que cubren un tema de manera integral. Esta vista muestra una lista organizada de keywords semánticamente relacionadas con sus respectivos volúmenes de búsqueda. Utilízala para identificar keywords secundarias y LSI (Indexación Semántica Latente) que deberían aparecer en tus encabezados, texto principal y secciones de preguntas frecuentes. Al incorporar estos términos relacionados en tu contenido, señalas profundidad temática a los motores de búsqueda, que es uno de los factores de posicionamiento on-page más potentes para consultas informacionales.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de keywords y cómo funciona?',
        answer: 'Un generador de keywords es una herramienta de investigación que toma una keyword semilla — un término o frase amplia para la que quieres posicionarte — y devuelve una lista de consultas de búsqueda relacionadas que los usuarios reales escriben en los motores de búsqueda. El generador de keywords de Analyze AI funciona consultando una base de datos de términos de búsqueda, proporcionando hasta 50 ideas de keywords por búsqueda y mostrando para cada keyword el volumen de búsqueda mensual, la puntuación de dificultad, el coste por clic y el nivel de competencia. El proceso tarda segundos y no requiere cuenta ni inicio de sesión.',
      },
      {
        question: '¿Cómo se calcula la dificultad de keyword (KD) en esta herramienta?',
        answer: 'La dificultad de keyword es una puntuación de 0 a 100 que estima lo difícil que sería posicionarse entre los 10 primeros resultados orgánicos para un término determinado. La puntuación tiene en cuenta la fortaleza de backlinks y la autoridad de dominio de las páginas que actualmente se posicionan en la primera página de Google. Un KD de 0–10 se considera fácil (los sitios nuevos pueden competir), 11–30 es medio (requiere contenido sólido y algunos backlinks), 31–60 es difícil (necesita autoridad fuerte y construcción de enlaces) y 61–100 es muy difícil (dominado por sitios de alta autoridad como Wikipedia, Amazon o grandes editores).',
      },
      {
        question: '¿Cuál es la diferencia entre volumen de búsqueda y dificultad de keyword?',
        answer: 'El volumen de búsqueda indica cuántas personas buscan un término cada mes — mide la demanda. La dificultad de keyword indica lo competitivos que son los resultados de búsqueda para ese término — mide la resistencia del lado de la oferta. Una keyword con 10.000 búsquedas mensuales pero un KD de 85 puede ser menos valiosa que una keyword con 500 búsquedas y un KD de 8, porque puedes posicionarte de manera realista para esta última. La mejor estrategia de keywords equilibra ambas métricas.',
      },
      {
        question: '¿Cómo puedo utilizar los datos de CPC de una herramienta de keywords gratuita si solo hago SEO?',
        answer: 'El CPC (Coste por Clic) refleja cuánto están dispuestos a pagar los anunciantes por un solo clic en esa keyword en Google Ads. Incluso si no ejecutas campañas de pago, el CPC es un indicador poderoso de intención comercial. Las keywords con CPCs altos (p. ej., 15 €+) indican que las empresas consideran que estos buscadores son valiosos, lo que significa que están más cerca de una decisión de compra. Orientar keywords con alto CPC a través de contenido SEO puede generar tráfico que convierte a tasas más altas.',
      },
      {
        question: '¿Cuántas keywords puedo generar por búsqueda?',
        answer: 'Cada búsqueda devuelve hasta 50 ideas de keywords a partir del término semilla que introduces. Para generar más ideas, prueba variaciones de tu keyword semilla, usa modificadores de cola larga (p. ej., "email marketing para startups" en lugar de "email marketing") o busca en diferentes países. Los usuarios avanzados suelen realizar 10–20 búsquedas de keywords semilla y compilar los resultados en una lista maestra de keywords, que luego puede deduplicarse y priorizarse por volumen y dificultad.',
      },
      {
        question: '¿Puedo usar esta herramienta para investigación de keywords de SEO local?',
        answer: 'Sí. El selector de país admite más de 15 países, incluyendo Estados Unidos, Reino Unido, Alemania, Francia, España, Italia, Brasil, Canadá, Australia, India y Japón. Al cambiar el país, ves datos de volumen de búsqueda localizados para ese mercado. Esto es particularmente valioso para negocios locales, tiendas de comercio electrónico regionales y agencias que gestionan campañas de SEO en múltiples ubicaciones.',
      },
      {
        question: '¿Qué son las keywords semánticamente relacionadas y por qué son importantes para el SEO?',
        answer: 'Las keywords semánticamente relacionadas son términos que están conceptualmente conectados con tu keyword principal aunque no contengan exactamente las mismas palabras. Por ejemplo, para la keyword semilla "email marketing", los términos semánticamente relacionados podrían incluir "automatización de newsletters", "campañas de goteo" y "engagement de suscriptores". Google utiliza el procesamiento de lenguaje natural (NLP) para entender las relaciones temáticas entre términos. Las páginas que incluyen naturalmente keywords semánticamente relacionadas tienden a posicionarse mejor porque señalan una cobertura temática integral.',
      },
      {
        question: '¿Cómo encuentro keywords de baja competencia con esta herramienta?',
        answer: 'Ordena la tabla de resultados por la columna KD (Dificultad de Keyword) en orden ascendente. Busca keywords con un KD entre 0 y 15, un volumen de búsqueda mensual superior a 100 y una puntuación de Competencia inferior a 30. Estas son tus "frutas al alcance de la mano" — términos donde una página bien optimizada con contenido original y en profundidad puede posicionarse sin una inversión intensiva en backlinks. Las keywords de cola larga (3–5 palabras) suelen tener menor competencia porque apuntan a intenciones de búsqueda más estrechas que los grandes competidores a menudo pasan por alto.',
      },
      {
        question: '¿Qué es la columna de puntuación de competencia y en qué se diferencia de la dificultad de keyword?',
        answer: 'La puntuación de Competencia mide cuántos anunciantes están pujando por una keyword en la búsqueda de pago (Google Ads). Una puntuación de 100 significa que casi todos los espacios publicitarios están ocupados — alta competencia entre anunciantes. La Dificultad de Keyword, en cambio, mide la competencia orgánica de posicionamiento basándose en los perfiles de backlinks de las páginas mejor posicionadas. Una keyword puede tener alta competencia de pago pero baja dificultad orgánica (o viceversa). Los profesionales inteligentes cruzan ambas métricas: alta competencia de pago con baja dificultad orgánica indica una keyword rentable que puedes ganar con SEO en lugar de pagar por anuncios.',
      },
      {
        question: '¿Puedo exportar los resultados de keywords?',
        answer: 'Sí. La herramienta incluye un botón "Exportar CSV" en la parte superior de la tabla de resultados. Esto te permite descargar la lista completa de keywords — incluyendo volumen, KD, CPC y datos de competencia — en una hoja de cálculo. Desde allí, puedes fusionar resultados de múltiples búsquedas, aplicar filtros personalizados, crear calendarios de contenido o compartir los datos con redactores y miembros del equipo de SEO.',
      },
      {
        question: '¿Con qué frecuencia se actualizan los datos de keywords?',
        answer: 'La base de datos de keywords se actualiza regularmente para garantizar precisión y relevancia. Las cifras de volumen de búsqueda se basan en promedios mensuales móviles, lo que suaviza los picos a corto plazo y las fluctuaciones estacionales. Para temas en tendencia o industrias que evolucionan rápidamente, es buena práctica contrastar los datos de la herramienta de keywords con Google Trends para captar el impulso en tiempo real que puede no estar reflejado aún en los volúmenes mensuales promedio.',
      },
      {
        question: '¿Cómo debería usar este generador de keywords como parte de un flujo de trabajo SEO más amplio?',
        answer: 'El generador de keywords es típicamente el primer paso en un flujo de trabajo de contenido SEO de cinco etapas: (1) Descubrimiento — usa esta herramienta para generar ideas de keywords a partir de términos semilla, (2) Cualificación — filtra por KD y volumen para encontrar objetivos viables, (3) Agrupación — agrupa keywords semánticamente relacionadas en clústeres temáticos, (4) Creación de contenido — escribe páginas que apunten a keywords principales e incorporen naturalmente términos secundarios, (5) Seguimiento — usa un rastreador de posiciones para monitorizar el rendimiento de tus páginas a lo largo del tiempo.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Checker de Dificultad de Keywords',
    title: 'Checker de Dificultad de Keywords Gratuito',
    description: 'Comprueba lo difícil que es posicionarse para cualquier keyword. Obtén una puntuación de dificultad de 0–100 junto con volumen de búsqueda y datos de competencia.',
    metaDescription: 'Comprueba gratis la dificultad de posicionamiento de cualquier keyword. Consulta la puntuación KD, volumen de búsqueda y CPC para priorizar keywords por las que realmente puedes posicionarte.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword',
    inputPlaceholder: 'p. ej., mejor software de gestión de proyectos',
    buttonText: 'Comprobar dificultad',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Evalúa rápidamente si vale la pena perseguir una keyword',
        description: 'Antes de escribir una sola palabra de contenido, necesitas saber si puedes posicionarte de manera realista para tu keyword objetivo. Introduce cualquier keyword, selecciona entre más de 10 países en el menú desplegable y obtén una evaluación de dificultad instantánea. Este es el primer filtro en cualquier estrategia de contenido seria — te evita invertir semanas de esfuerzo en keywords donde los 10 primeros resultados están dominados por sitios con autoridades de dominio que no puedes igualar. Úsalo para evaluar solicitudes de keywords de clientes, validar ideas de temas para el blog o preseleccionar términos de sesiones de brainstorming.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Obtén una visión competitiva de 360 grados de cualquier keyword',
        description: 'El panel de resultados muestra tres métricas críticas una al lado de la otra: Dificultad de Keyword (p. ej., 58 "Difícil"), Volumen de Búsqueda (p. ej., 1.900/mes) y CPC (p. ej., 32,40 $). Esta vista de tres métricas te da el panorama completo de un vistazo. Una keyword con alto KD pero también alto CPC podría valer la pena perseguirla con una estrategia de construcción de autoridad a largo plazo porque la intención comercial justifica el esfuerzo. Por el contrario, una keyword con bajo KD y cero CPC puede generar tráfico pero no ingresos. Usa este panel para tomar decisiones editoriales basadas en datos.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Comprende qué significa realmente una puntuación de dificultad',
        description: 'El medidor de KD proporciona una representación visual e intuitiva de la dificultad de posicionamiento. La puntuación va de 0 a 100 con severidad codificada por colores: verde (Fácil, 0–20), amarillo (Medio, 21–40), naranja (Difícil, 41–60) y rojo (Muy Difícil, 61–100). Esta visualización es especialmente útil al presentar investigaciones de keywords a stakeholders o clientes que no trabajan en SEO a diario y necesitan una respuesta visual rápida a "¿podemos posicionarnos para esto?".',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Valida la demanda de búsqueda antes de invertir en contenido',
        description: 'El volumen de búsqueda es la base de todas las decisiones de targeting de keywords. Esta tarjeta aísla la métrica de volumen de búsqueda mensual, permitiéndote confirmar que suficientes personas están buscando activamente este término como para justificar la creación de contenido. Un error común en SEO es apuntar a keywords con volumen cero o insignificante simplemente porque parecen relevantes. Esta comprobación rápida lo previene — y cuando se combina con la puntuación KD, te indica si la oportunidad es real y alcanzable.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es la dificultad de keyword y por qué debería comprobarla antes de crear contenido?',
        answer: 'La dificultad de keyword (KD) es una métrica que estima lo difícil que será posicionarse entre los 10 primeros resultados de búsqueda orgánica para una keyword específica. Se puntúa típicamente en una escala de 0–100. Comprobar el KD antes de crear contenido es esencial porque te evita invertir tiempo y dinero en páginas que tienen casi ninguna posibilidad de posicionarse. Si los 10 primeros resultados para una keyword son todos páginas de sitios como Forbes, HubSpot y Wikipedia — cada una con cientos de dominios de referencia — un sitio nuevo o de autoridad media tendrá muchas dificultades para competir sin una inversión significativa en construcción de enlaces.',
      },
      {
        question: '¿En qué se diferencia la dificultad de keyword de la competencia de keyword?',
        answer: 'La dificultad de keyword mide la competitividad de la búsqueda orgánica — lo difícil que es posicionarse en los resultados no pagados de Google. Se calcula basándose en la fortaleza de backlinks de las páginas actualmente en los 10 primeros resultados. La competencia de keyword (a veces llamada densidad competitiva) mide la competitividad de la búsqueda de pago — cuántos anunciantes están pujando por esa keyword en Google Ads. Una keyword puede ser fácil de posicionar orgánicamente (KD bajo) pero tener una competencia feroz en búsqueda de pago (puntuación de competencia alta), o viceversa.',
      },
      {
        question: '¿Qué puntuación KD debería buscar como sitio web nuevo?',
        answer: 'Los sitios web nuevos (menos de 1 año, con menos de 50 dominios de referencia) deberían apuntar a keywords con un KD de 0–15. Estas son típicamente consultas de cola larga de 3–5 palabras para las que los sitios más grandes no se han optimizado específicamente. A medida que tu autoridad de dominio crece mediante la creación constante de contenido y la construcción de enlaces, puedes apuntar gradualmente a keywords con puntuaciones KD de 15–30, y luego de 30–50. Intentar posicionarse para keywords con KD superior a 50 sin una autoridad de dominio sustancial casi siempre fracasará, independientemente de la calidad del contenido.',
      },
      {
        question: '¿Puede una página posicionarse para una keyword de alta dificultad sin backlinks?',
        answer: 'Es extremadamente raro. La dificultad de keyword se determina en gran parte por la cantidad y calidad de los backlinks que apuntan a las páginas mejor posicionadas. Sin embargo, existen casos excepcionales: si tu contenido proporciona una ganancia de información significativamente mejor que los resultados existentes (por ejemplo, investigación original, datos únicos o un formato novedoso), y tu dominio tiene autoridad moderada, Google puede probar tu página en posiciones más altas. Dicho esto, para puntuaciones KD superiores a 40, los backlinks son casi siempre un requisito previo para mantener posiciones de forma sostenida.',
      },
      {
        question: '¿Por qué la misma keyword tiene diferentes puntuaciones de dificultad en diferentes herramientas?',
        answer: 'Cada herramienta SEO calcula la dificultad de keyword usando su propio algoritmo propietario, índice de rastreo y metodología de ponderación. Ahrefs enfatiza los dominios de referencia hacia los 10 primeros resultados, Moz utiliza sus propias métricas de Page Authority y Domain Authority, y SEMrush incorpora funciones SERP adicionales y señales de contenido. Por eso una keyword puede mostrar KD 45 en una herramienta y KD 62 en otra. Los números absolutos son menos importantes que la clasificación relativa — usa la misma herramienta de forma consistente para que tus comparaciones de dificultad sean comparables entre sí.',
      },
      {
        question: '¿Qué papel juega el CPC en la evaluación de la dificultad de keyword?',
        answer: 'El CPC (Coste por Clic) no afecta directamente la dificultad de posicionamiento orgánico, pero proporciona un contexto crítico. Una keyword con KD 55 y CPC de 0,50 $ sugiere que aunque posicionarse es difícil, la recompensa comercial es baja. Una keyword con KD 55 y CPC de 32,40 $ cuenta una historia diferente: este tráfico es extremadamente valioso para las empresas, lo que significa que posicionarse orgánicamente para ella podría reemplazar un gasto publicitario significativo. Cuando dos keywords tienen puntuaciones KD similares, prioriza la que tenga mayor CPC — señala una intención de compra más fuerte y un mayor potencial de retorno de inversión.',
      },
      {
        question: '¿Cómo compruebo la dificultad de keyword para un país específico?',
        answer: 'Usa el desplegable de País en el formulario de entrada de la herramienta para seleccionar tu mercado objetivo. La dificultad de keyword puede variar significativamente entre países porque el panorama competitivo difiere. Una keyword que tiene KD 60 en Estados Unidos podría ser KD 25 en Brasil o KD 40 en Alemania, simplemente porque menos sitios de alta autoridad compiten en esos mercados. Comprueba siempre la dificultad para el país específico donde se encuentra tu audiencia, en lugar de confiar por defecto en los datos de EE. UU.',
      },
      {
        question: '¿Cuál es la relación entre dificultad de keyword y volumen de búsqueda?',
        answer: 'Generalmente, las keywords con mayor volumen tienden a tener mayor dificultad porque más sitios web compiten por términos de búsqueda populares. Sin embargo, esto no siempre es así. Algunas keywords de alto volumen tienen sorprendentemente baja dificultad (estas son oportunidades de oro), y algunas keywords de bajo volumen tienen alta dificultad porque el nicho está dominado por especialistas con alta autoridad. El objetivo ideal de keyword tiene un volumen de búsqueda por encima de tu umbral mínimo y una puntuación KD dentro del rango competitivo de tu dominio.',
      },
      {
        question: '¿Debería evitar todas las keywords de alta dificultad?',
        answer: 'No. Las keywords de alta dificultad deberían ser parte de tu estrategia de contenido a largo plazo — representan tus objetivos aspiracionales. El enfoque es construir primero autoridad temática posicionándote para keywords más fáciles en el mismo clúster, y luego usar el enlazado interno y la autoridad acumulada para competir por los términos más difíciles con el tiempo. Una vez que esas páginas más fáciles se posicionen, fortalecen la autoridad temática de tu dominio y mejoran tus posibilidades con el término principal competitivo.',
      },
      {
        question: '¿Con qué frecuencia debería volver a comprobar la dificultad de keyword?',
        answer: 'Vuelve a comprobar la dificultad de keyword trimestralmente para tus keywords objetivo principales. El panorama competitivo cambia a medida que se publica nuevo contenido, se construyen backlinks y se despliegan actualizaciones de algoritmo. Una keyword que tenía KD 45 hace seis meses podría ser ahora KD 35 si una página que antes estaba en los primeros resultados perdió backlinks o fue desindexada. Monitorizar el KD a lo largo del tiempo también te ayuda a rastrear si tus propios esfuerzos de SEO están cerrando la brecha competitiva.',
      },
      {
        question: '¿Qué significa la codificación de colores del KD (verde, amarillo, naranja, rojo)?',
        answer: 'El medidor codificado por colores se corresponde con rangos de dificultad: Verde (0–20) significa que la keyword es relativamente fácil de posicionar y es adecuada para sitios nuevos o de baja autoridad. Amarillo (21–40) significa competencia moderada — necesitarás contenido decente y algunos backlinks. Naranja (41–60) indica competencia difícil — se necesitan contenido sólido, SEO técnico y una estrategia activa de construcción de enlaces. Rojo (61–100) señala competencia muy difícil — solo los dominios de alta autoridad con perfiles extensos de backlinks tienden a mantener estas posiciones.',
      },
      {
        question: '¿Puedo comprobar la dificultad de varias keywords a la vez?',
        answer: 'La herramienta gratuita comprueba una keyword a la vez, lo cual es ideal para comprobaciones rápidas puntuales y para validar ideas de keywords individuales. Para análisis de dificultad de keywords por lotes — comprobando docenas o cientos de keywords simultáneamente — normalmente exportarías las keywords de la herramienta Generador de Keywords y las analizarías en una hoja de cálculo, o usarías la columna de KD que ya aparece en la tabla de resultados del Generador de Keywords.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Checker de Autoridad Web',
    title: 'Checker de Autoridad Web Gratuito',
    description: 'Comprueba gratis la autoridad de búsqueda orgánica de cualquier sitio web. Consulta tráfico orgánico estimado, keywords posicionadas, posiciones en el top 10 y distribución de posicionamiento de keywords.',
    metaDescription: 'Comprueba gratis la puntuación de autoridad de cualquier sitio web. Consulta la fortaleza del dominio, tráfico orgánico, keywords posicionadas y distribución de posiciones en SERP al instante.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Introduce un dominio',
    inputPlaceholder: 'p. ej., example.com',
    buttonText: 'Comprobar autoridad',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Rango de posición', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Keywords', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Comprueba la autoridad de dominio de cualquier sitio web en segundos',
        description: 'Cada decisión de construcción de enlaces, análisis de competencia y evaluación de asociaciones comienza con una pregunta: ¿qué tan autoritativo es este dominio? Introduce cualquier dominio en el checker, haz clic en "Comprobar autoridad" y obtén una evaluación instantánea. Ya sea que estés evaluando una oportunidad de publicación como invitado, valorando un prospecto de backlink o comparando tu dominio con los competidores — este es el camino más rápido para medir la fortaleza general de un sitio web.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Comprende la distribución de posiciones en SERP a través de todas las keywords',
        description: 'Este desglose muestra para cuántas keywords un sitio se posiciona en cada rango de posición de SERP: #1, #2–3, #4–10, #11–20 y así sucesivamente. Esta distribución cuenta una historia más profunda que un solo número de autoridad. Usa esto para evaluar la trayectoria de crecimiento de tu propio sitio web e identificar competidores cuyos posicionamientos puedes desafiar de manera realista.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Evalúa el tráfico y la escala de posicionamiento de un dominio',
        description: 'El panel de métricas muestra Tráfico Orgánico, Total de Keywords Posicionadas y Keywords en Posiciones 1–10. Estos números contextualizan la puntuación de autoridad con datos de rendimiento. Esta vista multi-métrica previene la toma de decisiones basada en una sola métrica y te da el panorama competitivo completo.',
        image: '/Website authority checker/See other details as traffick, rankings, positions.png',
      },
      {
        title: 'Consulta la puntuación de autoridad real con clasificación de severidad',
        description: 'El medidor de Domain Score muestra una calificación de 0–100 con severidad codificada por colores y una etiqueta (p. ej., "99 — Muy Fuerte" para hubspot.com). El medidor visual hace que las puntuaciones de autoridad sean interpretables al instante. Usa esto para establecer expectativas realistas. Esta visualización también es ideal para reportes a clientes y presentaciones a stakeholders.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es la autoridad de un sitio web y cómo se mide?',
        answer: 'La autoridad de un sitio web (también llamada autoridad de dominio o fortaleza de dominio) es una métrica SEO que estima el poder de posicionamiento general de un dominio basándose en la cantidad y calidad de los backlinks que apuntan a él. Se mide en una escala logarítmica de 0–100, lo que significa que se vuelve exponencialmente más difícil aumentar tu puntuación a medida que subes. Una puntuación de 30 es relativamente fácil de alcanzar con link building básico, mientras que pasar de 70 a 80 requiere significativamente más backlinks de alta calidad que pasar de 20 a 30.',
      },
      {
        question: '¿Qué es una buena puntuación de autoridad de sitio web?',
        answer: 'La autoridad es relativa a tu panorama competitivo. Un Domain Score de 40 puede ser excelente en una industria de nicho donde los competidores promedian 25, pero débil en un espacio donde los competidores promedian 70. Como referencias generales: 0–20 es nuevo o poco desarrollado, 21–40 está en desarrollo (típico de pequeñas y medianas empresas), 41–60 está establecido (competitivo en la mayoría de los nichos), 61–80 es fuerte (competitivo para keywords de alto valor), y 81–100 es de élite (grandes marcas, publicaciones de noticias y plataformas de alta autoridad).',
      },
      {
        question: '¿Es la autoridad del sitio web un factor de posicionamiento de Google?',
        answer: 'Google ha declarado públicamente que la "autoridad de dominio" no es un factor de posicionamiento directo en su algoritmo. Sin embargo, la investigación muestra consistentemente una fuerte correlación entre la autoridad de dominio y los posicionamientos de keywords. La conclusión práctica es que, aunque Google puede no utilizar directamente las puntuaciones de autoridad de terceros, las señales subyacentes (calidad de backlinks, cantidad de dominios de referencia, diversidad de enlaces) son factores de posicionamiento fundamentales. Las puntuaciones de autoridad son el mejor indicador disponible para estas señales.',
      },
      {
        question: '¿En qué se diferencia el Domain Score de la Domain Authority (DA) de Moz?',
        answer: 'Ambas métricas buscan medir la fortaleza del dominio en una escala de 0–100, pero utilizan diferentes métodos de cálculo y fuentes de datos. El DA de Moz se basa en su propio índice de enlaces y utiliza un modelo de machine learning para predecir la capacidad de posicionamiento. Otras métricas de Domain Score utilizan sus propios índices de rastreo y fórmulas de cálculo. Las puntuaciones no son intercambiables — un sitio puede tener DA 45 en Moz y Domain Score 52 en otra herramienta. Lo importante es la consistencia: utiliza la misma herramienta para todas las comparaciones.',
      },
      {
        question: '¿Cómo mejoro la puntuación de autoridad de mi sitio web?',
        answer: 'La única forma fiable de aumentar la autoridad de dominio es adquiriendo backlinks de más dominios de referencia únicos — especialmente dominios que sean ellos mismos autoritativos. Las estrategias efectivas incluyen: crear contenido digno de enlaces (investigación original, guías completas, herramientas gratuitas), publicar artículos de invitado en publicaciones del sector, relaciones públicas digitales y difusión mediática, broken link building, link building en páginas de recursos y construir relaciones con colegas de la industria.',
      },
      {
        question: '¿Qué me dicen las métricas de Tráfico Orgánico y Keywords Posicionadas sobre la autoridad?',
        answer: 'Estas métricas contextualizan la puntuación de autoridad con datos de rendimiento. Una puntuación de autoridad alta con bajo tráfico orgánico sugiere que el dominio tiene un perfil de backlinks fuerte pero contenido débil o un targeting de keywords deficiente. Un tráfico alto con autoridad moderada indica contenido sólido que supera a su perfil de enlaces. La métrica de Keywords en Posiciones 1–10 revela para cuántas keywords un dominio realmente domina en la primera página — esta es la medida definitiva de autoridad competitiva en acción.',
      },
      {
        question: '¿Qué es la tabla de distribución de posiciones y cómo la interpreto?',
        answer: 'La tabla de distribución de posiciones desglosa para cuántas keywords un dominio se posiciona en diferentes posiciones de SERP: #1, #2–3, #4–10, #11–20, #21–30 y así sucesivamente. Un sitio saludable y en crecimiento muestra una forma de pirámide — menos keywords en la posición #1, más en #2–10 y progresivamente más en posiciones inferiores. Si la mayoría de las keywords se agrupan en las posiciones #41–100, el sitio tiene visibilidad pero carece de la autoridad o calidad de contenido necesaria para llegar a la primera página.',
      },
      {
        question: '¿Puedo usar la autoridad del sitio web para evaluar prospectos de backlinks?',
        answer: 'Sí — este es uno de los casos de uso más comunes. Al construir backlinks, prioriza sitios con Domain Scores superiores a 30 e idealmente superiores a 50 para máxima transferencia de link equity. Sin embargo, la puntuación de autoridad por sí sola es insuficiente. Verifica también si el sitio publica contenido de calidad, tiene alineación temática relevante con tu nicho, recibe tráfico orgánico real y tiene un perfil natural de enlaces salientes.',
      },
      {
        question: '¿Por qué algunos sitios web tienen alta autoridad pero bajo tráfico?',
        answer: 'Esto sucede por varias razones: el sitio ha acumulado backlinks durante años pero no crea activamente contenido orientado a keywords de búsqueda; el contenido del sitio está desactualizado y ya no coincide con la intención de búsqueda actual; el sitio ha sido penalizado por Google por otros problemas de calidad a pesar de tener backlinks fuertes; o el sitio se encuentra en un nicho de bajo volumen donde incluso los posicionamientos en primera página no generan un tráfico masivo.',
      },
      {
        question: '¿Con qué frecuencia cambia la autoridad del sitio web?',
        answer: 'Las puntuaciones de autoridad fluctúan a medida que los datos subyacentes de backlinks se rastrean y actualizan. Los nuevos backlinks aumentan tu puntuación; los backlinks perdidos la disminuyen. Los cambios importantes suelen tardar de 4 a 8 semanas en reflejarse en las métricas de autoridad. Los aumentos graduales de 1 a 3 puntos por mes son típicos para sitios que construyen enlaces activamente. Las caídas repentinas pueden indicar la pérdida de backlinks importantes o un recálculo por parte de la herramienta de puntuación.',
      },
      {
        question: '¿Cuál es la relación entre la autoridad del sitio web y el link equity?',
        answer: 'La autoridad del sitio web es esencialmente un resumen del link equity acumulado. Cada backlink de un sitio externo transfiere algo de link equity a tu dominio, y el total de equity acumulado se refleja en tu puntuación de autoridad. Los dominios de referencia con mayor autoridad transfieren más link equity. Las páginas en dominios de alta autoridad heredan equity a nivel de dominio, lo que les da una ventaja inicial en los posicionamientos.',
      },
      {
        question: '¿Debería centrarme en aumentar mi puntuación de autoridad o mi tráfico orgánico?',
        answer: 'Céntrate en el tráfico orgánico — la autoridad es un medio para ese fin, no un objetivo en sí mismo. La estrategia más efectiva es construir enlaces simultáneamente (aumentando la autoridad) y crear contenido orientado a keywords (capturando tráfico). Una puntuación de autoridad alta sin contenido dirigido no genera tráfico. Un contenido excelente sin autoridad tiene dificultades para posicionarse en keywords competitivas. Ambos aspectos funcionan de manera sinérgica.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'SERP Checker Gratuito',
    description: 'Consulta los resultados de búsqueda de Google para cualquier keyword. Mira quién se posiciona en las 10 primeras posiciones orgánicas, con títulos, URLs y dominios.',
    metaDescription: 'Analiza los principales resultados de Google para cualquier keyword en cualquier país. Consulta posicionamientos, dominios, URLs y resultados totales para planificar tu estrategia SEO.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword',
    inputPlaceholder: 'p. ej., mejores herramientas de gestión de proyectos',
    buttonText: 'Comprobar SERP',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
          { value: '2528', label: 'Países Bajos' },
          { value: '2792', label: 'Turquía' },
          { value: '2410', label: 'Corea del Sur' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Título', sortable: false, type: 'text' },
      { key: 'domain', label: 'Dominio', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Consulta el SERP de Google para cualquier keyword en cualquier país',
        description: 'Entender qué se posiciona actualmente es la base de cualquier campaña de SEO. Introduce una keyword, selecciona tu país objetivo entre más de 15 opciones y visualiza al instante el panorama actual del SERP. Esto te muestra quiénes son tus competidores, qué formatos de contenido dominan y lo saturado que está el espacio. Los profesionales de SEO internacional usan el selector de país para comparar la composición del SERP entre mercados.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Analiza los tipos de contenido y dominios que se posicionan',
        description: 'La visualización de resultados del SERP muestra Resultados Totales, número de Resultados Orgánicos y las páginas realmente posicionadas con sus títulos, URLs y descripciones. Esto te permite analizar los patrones de formato de contenido: ¿son los principales resultados artículos de blog, páginas de producto, artículos comparativos o herramientas? Esta inteligencia te dice exactamente qué formato de contenido recompensa Google para esa consulta.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Evalúa la competitividad del SERP antes de apuntar a una keyword',
        description: 'Antes de invertir recursos en una keyword, pásala por el SERP Checker para ver contra quién competirías. Si el SERP está dominado por sitios con autoridad masiva (Amazon, Wikipedia, sitios gubernamentales), esa keyword puede requerir un enfoque diferente. Si el SERP incluye sitios más pequeños o más nuevos, hay un camino realista para posicionarse.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Rastrea la posición de tu marca para keywords objetivo',
        description: 'La tabla de resultados detallada muestra Título, Dominio y URL completa para cada posición de posicionamiento. Desplázate para encontrar si tu sitio (o el de tu competidor) aparece en los resultados. Usa esto para verificar datos de rastreadores de posicionamiento, comprobar keywords críticas antes de reuniones con clientes o confirmar que una página recién publicada ha entrado en el SERP.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un SERP Checker y por qué lo necesito?',
        answer: 'Un SERP (Search Engine Results Page) Checker te muestra los resultados reales de búsqueda de Google para cualquier keyword en cualquier país, sin los sesgos de personalización de tu propio navegador. Cuando buscas en Google tú mismo, tus resultados están influenciados por tu historial de búsqueda, tu ubicación, tu dispositivo y tu cuenta de Google en la que has iniciado sesión. Un SERP Checker proporciona una vista neutral e imparcial de los posicionamientos — los mismos resultados que vería un usuario que busca por primera vez.',
      },
      {
        question: '¿Cómo maneja el SERP Checker los resultados basados en ubicación?',
        answer: 'La herramienta utiliza el selector de país para simular búsquedas desde el índice de Google del país seleccionado (por ejemplo, google.com para EE. UU., google.co.uk para Reino Unido, google.de para Alemania). La composición del SERP puede variar dramáticamente entre países — diferentes dominios se posicionan, aparecen diferentes formatos de contenido, e incluso el número de funciones del SERP puede cambiar. Comprueba siempre el SERP para tu país objetivo, no solo la configuración predeterminada de EE. UU.',
      },
      {
        question: '¿Qué significan los números de "Resultados Totales" y "Resultados Orgánicos"?',
        answer: '"Resultados Totales" es el número que Google reporta de páginas coincidentes. Este es un indicador aproximado de la amplitud del tema, pero no es fiable para el análisis de competencia. "Resultados Orgánicos" cuenta cuántos resultados tradicionales de enlace azul aparecen en la primera página. Si un SERP muestra solo 8 resultados orgánicos en lugar de los 10 habituales, el espacio restante está ocupado por funciones del SERP como fragmentos destacados, mapas, vídeos o cajas de "Otras preguntas de los usuarios".',
      },
      {
        question: '¿Cómo puedo usar los datos del SERP para decidir qué formato de contenido crear?',
        answer: 'Analiza los 10 primeros resultados y categorízalos: ¿Son guías prácticas, listados, páginas de herramientas, artículos comparativos, páginas de producto o resultados de vídeo? Si 7 de 10 resultados son listados, Google ha determinado que los buscadores quieren contenido en formato de lista para esa keyword. Crear un formato diferente probablemente tendrá un rendimiento inferior. Imita el formato dominante y luego diferénciate a través de la profundidad, la frescura, datos únicos o una mejor experiencia de usuario.',
      },
      {
        question: '¿Por qué difieren los SERPs entre escritorio y móvil?',
        answer: 'Google mantiene algoritmos de posicionamiento separados para búsqueda de escritorio y móvil. Los SERPs móviles priorizan páginas optimizadas para móvil, dan más peso a las métricas de velocidad de página y muestran diferentes funciones del SERP. Una página que se posiciona en el puesto 3 en escritorio podría caer al puesto 7 en móvil si tiene una mala experiencia móvil. Comprueba siempre ambas versiones si tu audiencia está distribuida entre dispositivos, y prioriza la optimización móvil ya que Google utiliza la indexación mobile-first.',
      },
      {
        question: '¿Qué son las funciones del SERP y cómo afectan mi tasa de clics?',
        answer: 'Las funciones del SERP son resultados no tradicionales que incluyen fragmentos destacados, cajas "Otras preguntas de los usuarios", carruseles de vídeo, paquetes de imágenes, paneles de conocimiento, paquetes de mapa local y resultados de compras. Cada función que aparece reduce los clics en los resultados orgánicos — un fenómeno conocido como "canibalización de funciones del SERP". Si un SERP está cargado de funciones, incluso un posicionamiento orgánico en el puesto 1 puede recibir menos clics de los esperados.',
      },
      {
        question: '¿Con qué frecuencia cambian los SERPs de Google para una keyword determinada?',
        answer: 'La volatilidad del SERP varía según el tipo de keyword. Las keywords informacionales evergreen pueden tener SERPs estables que cambian poco durante meses. Las keywords relacionadas con noticias y tendencias pueden experimentar un cambio completo del SERP en cuestión de horas. Las keywords comerciales y competitivas típicamente experimentan cambios graduales a medida que las páginas ganan o pierden backlinks y se implementan actualizaciones del algoritmo. Comprobar los SERPs mensualmente para tus keywords principales ayuda a detectar nuevos competidores.',
      },
      {
        question: '¿Puedo usar datos del SERP para análisis de brechas competitivas?',
        answer: 'Absolutamente. Busca la misma keyword en múltiples comprobaciones de SERP y anota qué dominios aparecen consistentemente en los 10 primeros. Los dominios que se posicionan para muchas de tus keywords objetivo son tus competidores SEO principales (que pueden diferir de tus competidores comerciales). Analiza qué tienen en común esas páginas posicionadas — longitud del contenido, estructura, cantidad de backlinks, frescura del contenido — e identifica brechas donde tu contenido podría ser superior.',
      },
      {
        question: '¿Qué significa si mi sitio aparece en el SERP pero en una posición baja?',
        answer: 'Si tu página aparece en las posiciones 11–30 (página 2–3 de Google), significa que Google ha reconocido tu contenido como relevante pero aún no lo considera lo suficientemente autoritativo o completo para la primera página. Esta es en realidad una señal positiva — estás en el rango de "distancia de ataque". Las mejoras que pueden llevarte a la primera página incluyen añadir contenido más completo, construir 3–5 backlinks de calidad, mejorar la velocidad de página y añadir enlaces internos de apoyo.',
      },
      {
        question: '¿Cómo uso el SERP Checker para encontrar oportunidades de fragmentos destacados?',
        answer: 'Comprueba los SERPs para tus keywords objetivo y busca consultas donde ya aparezca un fragmento destacado. Luego examina si el contenido del fragmento podría mejorarse. Apunta a keywords para las que ya te posicionas en las posiciones 1–10, ya que Google extrae los fragmentos destacados principalmente de páginas que ya están en la primera página. Crea respuestas más completas formateadas específicamente para la extracción de fragmentos, utilizando encabezados claros, listas numeradas, tablas o respuestas concisas en párrafos.',
      },
      {
        question: '¿Qué papel juega la estructura de URL en el rendimiento del SERP?',
        answer: 'El SERP Checker muestra las URLs completas de cada resultado posicionado, lo que revela patrones de estructura de URL. Las URLs limpias y descriptivas que incluyen la keyword objetivo tienden a aparecer con más frecuencia en las posiciones superiores. Las URLs largas, con muchos parámetros o con cadenas de caracteres aleatorios tienen un peor rendimiento. Analiza los patrones de URL de las páginas mejor posicionadas — si todos los resultados principales usan slugs cortos y ricos en keywords, eso es una señal para adoptar este patrón.',
      },
      {
        question: '¿Pueden los datos del SERP Checker ayudar con campañas de PPC?',
        answer: 'Sí. Los datos del SERP revelan el panorama competitivo orgánico, lo que informa la estrategia de búsqueda de pago: si los resultados orgánicos están dominados por competidores masivos, el PPC podría ser un camino más rápido hacia la visibilidad. Los formatos de contenido en los resultados orgánicos dan pistas sobre la intención del usuario — adapta la página de destino de tu anuncio a esta intención para obtener Quality Scores más altos. Si pocos anuncios aparecen en el SERP, hay poca competencia de pago y potencialmente CPCs baratos.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Keyword Rank Checker',
    title: 'Keyword Rank Checker Gratuito',
    description: 'Comprueba para qué keywords se posiciona cualquier sitio web en Google. Consulta posiciones de posicionamiento, volúmenes de búsqueda y tráfico estimado para cada keyword.',
    metaDescription: 'Comprueba los posicionamientos de keywords de tu sitio web en cualquier país gratis. Consulta posiciones, tráfico, CPC y rendimiento de contenido en todas tus páginas.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Introduce un dominio',
    inputPlaceholder: 'p. ej., example.com',
    secondaryInputLabel: 'Filtrar por keyword (opcional)',
    secondaryInputPlaceholder: 'p. ej., marketing',
    buttonText: 'Comprobar posicionamientos',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
          { value: '2528', label: 'Países Bajos' },
          { value: '2792', label: 'Turquía' },
          { value: '2410', label: 'Corea del Sur' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'position', label: 'Posición', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Tráfico', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Comprueba los posicionamientos de tu sitio web en el SERP de cualquier país',
        description: 'Saber dónde te posicionas es el marcador del SEO. Introduce tu dominio, filtra opcionalmente por una keyword específica, selecciona tu país y mira exactamente dónde aparece tu sitio en los resultados de Google. El filtro de keywords es especialmente potente — en lugar de revisar cientos de posicionamientos, puedes comprobar al instante un término objetivo específico. Las marcas internacionales y las agencias multi-mercado usan el selector de país para rastrear los posicionamientos por separado para cada mercado en el que operan.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Espía los posicionamientos de competidores en diferentes países',
        description: 'Introduce el dominio de cualquier competidor y selecciona entre más de 15 países para ver su perfil de posicionamiento completo. Esto revela qué keywords están ganando, qué mercados priorizan y dónde es más fuerte su estrategia de SEO. Las agencias usan esto durante auditorías de competencia y durante la incorporación de nuevos clientes para mapear el panorama competitivo.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analiza el rendimiento del contenido a nivel de keyword',
        description: 'La tabla de resultados muestra cada keyword posicionada junto con su Posición, Volumen de Búsqueda, CPC, Tráfico estimado y la URL específica que se posiciona. Esta vista a nivel de página te permite identificar tu contenido de mejor rendimiento y tus bajo rendimiento.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Comprende la competitividad general de posicionamiento de tu sitio',
        description: 'El panel resumen desglosa Keywords Totales, Top 3, Top 10 y Top 50. Esta distribución te muestra al instante dónde se encuentra tu sitio. Rastrea estos números mensualmente para medir si tu estrategia SEO está moviendo las keywords hacia arriba a través de las posiciones del SERP.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un Keyword Rank Checker y en qué se diferencia de un SERP Checker?',
        answer: 'Un Keyword Rank Checker te indica dónde se posiciona TU sitio web específico (o cualquier dominio) para keywords. Introduces un dominio y te devuelve las keywords y posiciones de ese sitio. Un SERP Checker te muestra TODOS los sitios web que se posicionan para una keyword específica. Piénsalo así: un Rank Checker responde "¿para qué keywords se posiciona mi sitio?", mientras que un SERP Checker responde "¿quién se posiciona para esta keyword?". Ambas herramientas son esenciales.',
      },
      {
        question: '¿Qué tan precisos son los resultados del Keyword Rank Checker?',
        answer: 'Los resultados del Rank Checker reflejan los posicionamientos orgánicos de Google en el momento de la consulta, basados en el país seleccionado y la configuración de búsqueda estándar (no personalizada). Los resultados pueden diferir ligeramente de lo que ves cuando buscas directamente en Google, ya que tu navegador personaliza los resultados según tu historial de búsqueda, ubicación y cuenta conectada. Usa siempre una herramienta de Rank Checker en lugar de búsquedas manuales en Google al rastrear posicionamientos.',
      },
      {
        question: '¿Qué significa el desglose "Top 3", "Top 10" y "Top 50"?',
        answer: 'Las keywords "Top 3" son tus posiciones más fuertes (las posiciones 1–3 capturan aproximadamente el 60% de todos los clics orgánicos para una consulta). "Top 10" significa primera página de Google, donde fluye prácticamente todo el tráfico orgánico. "Top 50" abarca las páginas 1–5, que representan tu universo de keywords visible. Las keywords fuera del top 50 rara vez generan tráfico medible.',
      },
      {
        question: '¿Cómo puedo mover keywords de la página 2 a la página 1 de Google?',
        answer: 'Las keywords que se posicionan en las posiciones 11–20 son tus objetivos de optimización de mayor prioridad. Las tácticas incluyen: actualizar y ampliar el contenido para que coincida mejor con la intención de búsqueda, construir 3–5 backlinks de calidad hacia la página específica, mejorar la etiqueta de título y meta descripción para aumentar la tasa de clics, añadir enlaces internos desde tus páginas con mayor autoridad, mejorar la velocidad de página y los Core Web Vitals, y añadir marcado de datos estructurados.',
      },
      {
        question: '¿Con qué frecuencia debería comprobar mis posicionamientos de keywords?',
        answer: 'Comprueba tus keywords objetivo principales (las 10–20 keywords más importantes para tu negocio) semanalmente. Comprueba tu cartera de keywords más amplia mensualmente. Evita comprobar a diario — los posicionamientos fluctúan naturalmente entre 1–3 posiciones en cualquier día dado debido a los ajustes del algoritmo de Google, pruebas y actualizaciones del índice.',
      },
      {
        question: '¿Por qué difieren mis posicionamientos entre países?',
        answer: 'Google mantiene índices de búsqueda y algoritmos de posicionamiento separados para cada país. Los factores que influyen en los posicionamientos específicos por país incluyen el idioma del contenido y la localización, la ubicación del servidor y la presencia de CDN, los backlinks específicos del país, las señales de negocio local, la implementación de etiquetas hreflang y el comportamiento de búsqueda y la competencia específicos del país.',
      },
      {
        question: '¿Qué estima la columna de Tráfico y qué tan fiable es?',
        answer: 'La columna de Tráfico estima las visitas orgánicas mensuales que una keyword envía a tu URL basándose en su posición de posicionamiento y el volumen de búsqueda de la keyword. Utiliza modelos de tasa de clics — la posición #1 obtiene aproximadamente el 27–31% de los clics, la #2 obtiene el 15–17%, la #3 obtiene el 10–12%, y así sucesivamente. Son estimaciones, no cifras exactas, pero son direccionalmente precisas.',
      },
      {
        question: '¿Cómo uso los datos de posicionamiento para identificar oportunidades de optimización de contenido?',
        answer: 'Busca páginas que se posicionan en las posiciones 4–15 para keywords de alto volumen — estos son tus objetivos de optimización con mayor ROI. Luego analiza por qué no se posicionan más arriba: ¿Es el contenido menos completo que el de la competencia? ¿Tiene la página menos backlinks? ¿Es la etiqueta de título menos atractiva? Compara tu página con los 3 primeros resultados actuales para cada keyword.',
      },
      {
        question: '¿Qué me dicen los datos de CPC en un Rank Checker sobre mis posicionamientos?',
        answer: 'El CPC revela el valor comercial de cada keyword para la que te posicionas. Si estás en posición #3 para una keyword con CPC de 25 $, esa posición te está ahorrando un gasto publicitario significativo — estás obteniendo esos clics gratis que costarían 25 $ cada uno a través de Google Ads. Multiplica el tráfico estimado por el CPC para calcular el "valor de tráfico" de cada posicionamiento.',
      },
      {
        question: '¿Puedo filtrar los resultados de posicionamiento por keywords específicas?',
        answer: 'Sí. El campo opcional "Filtrar por keyword" te permite introducir una keyword o frase específica para acotar los resultados. Esto es útil cuando quieres comprobar tus posicionamientos para un clúster temático concreto en lugar de ver todas las keywords a la vez. Esta capacidad de filtrado hace que la herramienta sea práctica incluso para sitios que se posicionan para cientos o miles de keywords.',
      },
      {
        question: '¿Cómo rastrea las mejoras de posicionamiento a lo largo del tiempo?',
        answer: 'Exporta tus datos de posicionamiento como CSV cada vez que ejecutes una comprobación, y compara los cambios de posición mes a mes. Crea una hoja de cálculo sencilla que rastree tus 20 keywords principales, sus posiciones cada mes y la dirección del cambio. A lo largo de 3–6 meses, deberías ver una tendencia clara: las keywords moviéndose gradualmente hacia las posiciones 1–10 indican que tu estrategia SEO está funcionando.',
      },
      {
        question: '¿Cuál es la diferencia entre la columna URL del Rank Checker y el SERP Checker?',
        answer: 'La columna URL del Rank Checker muestra qué página específica de TU dominio se posiciona para cada keyword. Esto es muy útil para la gestión SEO interna: puedes ver si la página correcta se está posicionando, identificar la canibalización de keywords (dos de tus páginas compitiendo por la misma keyword) y descubrir páginas que se posicionan para términos inesperados. El SERP Checker muestra todos los dominios que se posicionan para una keyword.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Keyword Tool',
    title: 'YouTube Keyword Tool Gratuito',
    description: 'Encuentra las mejores keywords para tus vídeos de YouTube. Obtén datos de volumen de búsqueda, dificultad y CPC para optimizar tus títulos, descripciones y etiquetas de vídeo.',
    metaDescription: 'Encuentra ideas de keywords para YouTube en cualquier nicho. Consulta volumen de búsqueda, dificultad y CPC para planificar contenido de vídeo que se descubra y posicione.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword para YouTube',
    inputPlaceholder: 'p. ej., cómo editar vídeos',
    buttonText: 'Buscar Keywords',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competencia', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Investiga temas de vídeo que la gente realmente busca',
        description: 'YouTube es el segundo motor de búsqueda más grande del mundo, y la mayoría de los creadores fracasan porque producen vídeos que nadie busca. Introduce una keyword como „cómo editar un vídeo", selecciona tu país objetivo y ve al instante qué están escribiendo los usuarios de YouTube en la barra de búsqueda. Esto reemplaza las suposiciones con datos reales: en lugar de esperar que un tema de vídeo funcione bien, sabes de antemano que existe demanda real. Creadores de contenido, video marketers y gestores de canales de YouTube utilizan esta herramienta como punto de partida para cada calendario editorial.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Evalúa el panorama competitivo de las keywords de YouTube',
        description: 'La tabla de resultados muestra cada keyword junto con su Volumen específico de YouTube, la Dificultad de Keyword (KD), el CPC y la puntuación de Competencia. Esto te permite identificar qué temas de vídeo son alcanzables según el tamaño de tu canal. Un canal pequeño con menos de 1.000 suscriptores debería apuntar a keywords con KD inferior a 20, mientras que los canales consolidados pueden competir por términos de mayor dificultad. La columna de CPC también revela qué keywords atraen gasto publicitario, algo útil si tu estrategia de monetización depende de los ingresos por publicidad de YouTube, ya que las keywords con CPC más alto suelen generar mejores RPMs.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Mide la viabilidad general del tema antes de comprometerte con una serie de contenido',
        description: 'El panel resumen muestra las Keywords Totales (50), el Volumen Promedio y la Dificultad Promedio para el cluster de keywords en torno a tu término semilla. Esto te indica si un tema tiene suficiente profundidad y demanda para sostener una serie de vídeos. Si el volumen promedio es fuerte y la dificultad promedio es manejable, tienes luz verde para planificar una serie de contenido con múltiples vídeos sobre el tema. Si los números son débiles, pivota antes de invertir tiempo de producción. La producción de vídeo es costosa: esta comprobación de 10 segundos puede ahorrarte horas de esfuerzo desperdiciado.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Construye relevancia semántica en títulos, etiquetas y descripciones de vídeos',
        description: 'El algoritmo de YouTube, al igual que el de Google, recompensa el contenido que demuestra profundidad temática. Esta vista muestra keywords relacionadas y sus volúmenes de búsqueda, que deberían integrarse en el título, la descripción, las etiquetas e incluso el diálogo hablado de tu vídeo (YouTube transcribe e indexa el audio). Por ejemplo, si tu keyword principal es „cómo editar un vídeo", términos relacionados como „creador de clips de vídeo", „software de edición de vídeo inverso" y „relación de aspecto vídeo YouTube" deberían aparecer de forma natural en tus metadatos. Esta optimización semántica mejora drásticamente la visibilidad en búsquedas relacionadas.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: '¿Por qué necesito una herramienta de keywords específica para YouTube en lugar de una herramienta de keywords normal?',
        answer: 'YouTube y Google son motores de búsqueda separados con algoritmos, comportamientos de usuario y patrones de búsqueda completamente diferentes. Una keyword que obtiene 10.000 búsquedas en Google podría obtener solo 200 en YouTube, y viceversa. Las herramientas de keywords de YouTube extraen datos específicamente del ecosistema de búsqueda de YouTube, proporcionándote estimaciones de volumen precisas para la plataforma donde tus vídeos realmente necesitan posicionarse. Usar datos de keywords de Google para la optimización en YouTube es como usar un mapa de carreteras para navegar el océano: el terreno es fundamentalmente diferente.',
      },
      {
        question: '¿En qué se diferencia la dificultad de keyword de YouTube de la dificultad de keyword de Google?',
        answer: 'El KD de YouTube mide la competencia entre vídeos, no entre páginas web. Los factores que influyen en el posicionamiento de YouTube incluyen el tiempo de visualización, la tasa de clics en miniaturas, el engagement (likes, comentarios, compartidos), la autoridad del canal y la optimización de los metadatos del vídeo. Mientras que los backlinks importan más en Google, el tiempo de visualización y el engagement son más relevantes en YouTube. Una keyword con KD 20 en YouTube significa que puedes competir con un vídeo bien producido y bien optimizado, incluso si tu canal es relativamente nuevo.',
      },
      {
        question: '¿Cómo puedo encontrar keywords de baja competencia en YouTube para un canal nuevo?',
        answer: 'Filtra los resultados por keywords con KD entre 0 y 15 y un volumen de búsqueda superior a 50. Céntrate en consultas de cola larga (3–6 palabras) que aborden preguntas o tutoriales específicos, como „cómo editar un vídeo de YouTube en iPhone" en lugar de „edición de vídeo". Los canales nuevos también deberían buscar keywords de tipo „pregunta" (que empiecen por cómo, qué, por qué, se puede) porque tienden a tener menor competencia y mayor engagement, ya que los espectadores miran durante más tiempo cuando genuinamente necesitan la respuesta.',
      },
      {
        question: '¿Qué significa el CPC para las keywords de YouTube?',
        answer: 'El CPC representa cuánto pagan los anunciantes por cada clic en los anuncios que se muestran para esa keyword. Para los creadores de YouTube, las keywords con CPC más alto se traducen en mayores ingresos publicitarios por cada mil visualizaciones (RPM). Si estás monetizado a través del Programa de Partners de YouTube, apuntar a keywords con CPCs superiores a 3–5 $ significa que los anunciantes están dispuestos a pagar más por tu audiencia, lo que incrementa directamente tus ganancias. Esto es especialmente relevante para canales en nichos de finanzas, software, seguros y B2B, donde los CPCs pueden superar los 20 $.',
      },
      {
        question: '¿Cómo uso las keywords de YouTube para optimizar los metadatos de mi vídeo?',
        answer: 'Coloca tu keyword principal en el título del vídeo (preferiblemente al principio), en la primera frase de la descripción y como primera etiqueta. Usa las keywords secundarias de la lista de keywords relacionadas como etiquetas adicionales, en el cuerpo de la descripción y como títulos de capítulos si utilizas marcas de tiempo. YouTube también transcribe tu audio y lo utiliza para el posicionamiento, así que menciona tu keyword principal en los primeros 30 segundos del vídeo. Esta colocación estratégica en múltiples puntos señala a YouTube exactamente de qué trata tu vídeo.',
      },
      {
        question: '¿Puede esta herramienta ayudarme a encontrar temas en tendencia en YouTube?',
        answer: 'La herramienta muestra volúmenes de búsqueda mensuales promedio, que reflejan interés sostenido en lugar de picos virales. Para temas en tendencia, combina esta herramienta con YouTube Trending, Google Trends (filtrado a Búsqueda de YouTube) y herramientas de escucha social. La mejor estrategia combina la conciencia de tendencias con datos de keywords: cuando detectes un tema en tendencia, compruébalo en la herramienta de keywords de YouTube para ver si también existe demanda de búsqueda. Los temas que tienen tanto impulso de tendencia como volumen de búsqueda son los objetivos de mayor oportunidad.',
      },
      {
        question: '¿Cuál es un buen umbral de volumen de búsqueda para keywords de YouTube?',
        answer: 'Depende de tu nicho. En nichos amplios como gaming, cocina o fitness, apunta a keywords con más de 500 búsquedas mensuales en YouTube. En nichos especializados como SaaS B2B, ciencia de datos o hobbies de nicho, keywords con 50–200 búsquedas pueden generar tráfico significativo porque la audiencia es más segmentada y valiosa. La métrica clave no es solo el volumen, sino también la competencia: una keyword con 100 búsquedas y KD 5 suele ser más valiosa que una con 5.000 búsquedas y KD 70, especialmente para canales en crecimiento.',
      },
      {
        question: '¿Cómo planifico una serie de contenido de YouTube con datos de keywords?',
        answer: 'Comienza introduciendo una keyword de tema amplio y revisando los 50 resultados. Agrupa las keywords relacionadas en clústeres (por ejemplo, tutoriales para principiantes, técnicas avanzadas, reseñas de herramientas, comparativas). Cada clúster se convierte en una playlist, y cada keyword dentro del clúster se convierte en un vídeo individual. Este enfoque de „hub y radios" refleja cómo Google recompensa la autoridad temática: YouTube de forma similar impulsa canales que demuestran experiencia profunda en un tema a través de playlists interconectadas y publicación consistente sobre temas relacionados.',
      },
      {
        question: '¿Debería apuntar a las mismas keywords en YouTube y Google simultáneamente?',
        answer: 'Sí — esto se llama la estrategia de doble inmersión de SEO de vídeo. Muchas SERPs de Google ahora incluyen un carrusel de vídeos, y los vídeos de YouTube aparecen frecuentemente en estos carruseles. Al apuntar a la misma keyword en ambas plataformas, puedes capturar tráfico tanto del carrusel de vídeos de Google COMO de la búsqueda nativa de YouTube. Prioriza keywords donde Google ya muestra resultados de vídeo. Las consultas de tipo tutorial, cómo hacer y reseña son las más propensas a activar carruseles de vídeo.',
      },
      {
        question: '¿Cómo funciona la puntuación de Competencia para keywords de YouTube?',
        answer: 'La puntuación de Competencia (0–100) refleja cuántos anunciantes están pujando por esa keyword para ubicaciones de anuncios en YouTube. Una puntuación de 100 significa competencia máxima entre anunciantes; 0 significa que ningún anunciante la está apuntando. Aunque esto afecta principalmente a los ingresos publicitarios y no al posicionamiento orgánico, una puntuación de competencia alta indica interés comercial en tu audiencia. Los creadores pueden aprovechar esto contactando a marcas en nichos de alta competencia para acuerdos de patrocinio, ya que esas marcas ya están gastando dinero para llegar a esa audiencia a través de anuncios.',
      },
      {
        question: '¿Cuántas keywords debería usar en un solo vídeo de YouTube?',
        answer: 'Céntrate en una keyword principal y 5–10 keywords secundarias por vídeo. Tu keyword principal define el título y el tema central. Las keywords secundarias aparecen en la descripción, las etiquetas y los encabezados de capítulos. Sobrecargar de keywords perjudica tanto la experiencia del espectador como el algoritmo de YouTube, que detecta la repetición antinatural. La lista de keywords relacionadas de esta herramienta te proporciona el conjunto perfecto de términos secundarios que están semánticamente conectados, asegurando que tus metadatos se lean de forma natural mientras maximizan la visibilidad.',
      },
      {
        question: '¿Puedo usar esta herramienta para investigación de keywords de YouTube Shorts?',
        answer: 'Sí. Los YouTube Shorts aparecen en la búsqueda de YouTube, el feed de Shorts y cada vez más en la búsqueda de Google. Los mismos datos de keywords son aplicables: si un término tiene alto volumen de búsqueda en YouTube, crear un Short apuntando a ese término puede capturar exposición adicional. Los Shorts funcionan especialmente bien para consultas de alto volumen y baja profundidad como „cómo [tarea rápida]" o „reseña de [producto] en 60 segundos". Usa la herramienta de keywords para encontrar estos temas breves, luego crea Shorts para victorias rápidas mientras reservas los vídeos de formato largo para keywords más profundas y de mayor dificultad.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Keyword Tool',
    title: 'Amazon Keyword Tool Gratuito',
    description: 'Investiga keywords para listados de productos en Amazon. Encuentra términos de alto volumen con datos de dificultad y CPC para optimizar tus títulos y descripciones de producto.',
    metaDescription: 'Investiga keywords de productos de Amazon gratis. Consulta volumen de búsqueda, dificultad y CPC para optimizar listados y descubrir nichos de producto de alta demanda.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword de producto',
    inputPlaceholder: 'p. ej., auriculares inalámbricos',
    buttonText: 'Buscar Keywords',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competencia', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Valida ideas de productos antes de invertir en inventario',
        description: 'Lanzar un producto en Amazon sin investigación de keywords es como abrir una tienda en una calle sin tráfico peatonal. Introduce una keyword de producto como \"auriculares inalámbricos\", selecciona tu país y mira al instante cuántas personas están buscando productos en esa categoría. El menú desplegable de países te permite comparar la demanda en más de 10 mercados — para que puedas validar si tu producto tiene demanda de búsqueda en EE. UU., Reino Unido, Alemania u otros marketplaces de Amazon antes de comprometerte con compras de inventario, producción o envíos FBA.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Analiza la densidad competitiva en keywords de productos',
        description: 'La tabla de resultados muestra cada keyword de producto junto con su Volumen, KD, CPC y puntuación de Competencia. Las keywords principales pueden mostrar volúmenes de 450.000 con puntuaciones de competencia de 100 — lo que significa que es un mercado extremadamente saturado. Pero profundizando se revelan sub-nichos menos competitivos donde los nuevos vendedores pueden competir. Esta tabla es esencial para vendedores de Amazon FBA y marcas de marca blanca que buscan identificar nichos de producto con competencia manejable.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Cuantifica la demanda de categoría de producto de un vistazo',
        description: 'El panel resumen muestra Keywords Totales (50), Volumen Promedio y Dificultad Promedio para tu categoría de producto. Los vendedores de Amazon usan este resumen para comparar tamaños de categorías — si estás decidiendo entre entrar en un mercado u otro, este panel te da la comparación de demanda en segundos. La dificultad promedio también te indica si muchas keywords de producto de cola larga siguen siendo accesibles.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Descubre keywords backend y términos de producto de cola larga',
        description: 'El algoritmo A10 de Amazon posiciona los productos en parte basándose en la relevancia de keywords en títulos, viñetas, descripciones y términos de búsqueda backend. Esta vista muestra la lista completa de keywords de producto relacionadas y sus volúmenes — desde términos principales hasta variaciones de cola larga. Estas variaciones de cola larga deberían colocarse en el campo de términos de búsqueda backend de tu listado de producto, en las viñetas y en el contenido A+ para maximizar la visibilidad de tu listado en la mayor cantidad posible de consultas de los compradores.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: '¿Por qué las keywords de Amazon difieren de las keywords de Google?',
        answer: 'Amazon y Google sirven intenciones de usuario fundamentalmente diferentes. Los usuarios de Google pueden estar investigando, comparando o simplemente navegando. Los buscadores de Amazon están casi siempre en modo de compra — tienen intención de compra. Esto significa que las keywords de Amazon están enfocadas en productos (nombres de marca, especificaciones de producto, casos de uso) mientras que las keywords de Google abarcan intenciones informativas, de navegación y transaccionales.',
      },
      {
        question: '¿Cómo funciona la dificultad de keyword para listados de productos de Amazon?',
        answer: 'La dificultad de keyword de Amazon estima lo competitivo que es posicionar tu listado de producto en la primera página de Amazon para ese término de búsqueda. Los factores incluyen el número de vendedores establecidos que apuntan a esa keyword, su cantidad de reseñas, velocidad de ventas, calidad de optimización del listado y gasto en publicidad. Un KD de 0–10 significa que un nuevo listado puede aparecer rápidamente en la primera página con buena optimización. Un KD superior a 40 normalmente requiere precios competitivos, campañas PPC, reseñas sólidas y listados altamente optimizados.',
      },
      {
        question: '¿Cuál es un buen volumen de búsqueda para una keyword de producto de Amazon?',
        answer: 'Para vendedores de marca blanca, las keywords principales deberían tener al menos 1.000 búsquedas mensuales para asegurar suficiente demanda. Los términos principales de alto volumen (100.000+) son extremadamente competitivos y generalmente están dominados por grandes marcas. Las keywords de cola media (1.000–10.000) suelen ofrecer el mejor equilibrio entre demanda y alcanzabilidad. Las keywords de cola larga (menos de 1.000) funcionan bien como términos de búsqueda backend y en campañas PPC donde la intención de compra específica lleva a tasas de conversión más altas.',
      },
      {
        question: '¿Cómo debería usar los datos de keywords de Amazon para optimizar mi listado de producto?',
        answer: 'Sigue la jerarquía de colocación de keywords de Amazon: (1) Coloca tu keyword principal en el título del producto, (2) Pon tus 5 principales keywords secundarias en las viñetas, (3) Usa las keywords restantes en la descripción del producto y el contenido A+, (4) Carga todos los términos relevantes restantes en los términos de búsqueda backend (hasta 250 bytes). Nunca repitas keywords en estos campos — el algoritmo de Amazon cuenta cada keyword solo una vez, independientemente de cuántas veces aparezca.',
      },
      {
        question: '¿Puedo usar esta herramienta para investigación de campañas PPC de Amazon?',
        answer: 'Absolutamente. La columna CPC muestra lo que los anunciantes pagan por clics en anuncios de Productos Patrocinados para cada keyword. Usa estos datos para estimar tu presupuesto publicitario, identificar keywords donde el posicionamiento orgánico te ahorraría un gasto publicitario significativo, y descubrir keywords de bajo CPC donde puedas ejecutar campañas PPC rentables.',
      },
      {
        question: '¿Cómo encuentro nichos de producto rentables con esta herramienta?',
        answer: 'Busca clústeres de keywords donde el volumen de búsqueda promedio sea superior a 5.000 pero el KD promedio sea inferior a 20. Luego comprueba el CPC — un CPC más alto indica que los vendedores en ese nicho son lo suficientemente rentables como para permitirse publicidad. El nicho ideal tiene alta demanda de búsqueda, baja competencia, márgenes saludables y productos en primera página con menos de 500 reseñas (lo que indica accesibilidad del mercado para nuevos participantes).',
      },
      {
        question: '¿Cuál es la diferencia entre la puntuación de Competencia y el KD para keywords de Amazon?',
        answer: 'La puntuación de Competencia refleja la densidad de publicidad de pago — cuántos vendedores están ejecutando anuncios de Productos Patrocinados para esa keyword. El KD refleja la dificultad de posicionamiento orgánico — lo difícil que es aparecer en la primera página sin anuncios. Puedes tener una keyword con un KD orgánico bajo pero una competencia de pago alta, lo que significa que es fácil posicionarse orgánicamente pero difícil obtener visibilidad publicitaria.',
      },
      {
        question: '¿Cómo uso las keywords de Amazon para investigación de producto antes del lanzamiento?',
        answer: 'Usa esta herramienta para validación pre-lanzamiento: (1) Introduce keywords de categoría de producto amplia, (2) Revisa el volumen de keywords relacionadas para confirmar la demanda, (3) Comprueba el KD para evaluar la viabilidad competitiva, (4) Observa la amplitud de las keywords de cola larga — un nicho con muchas variaciones de cola larga tiene espacio para productos diferenciados, (5) Cruza los datos con los costos de tu proveedor para estimar la rentabilidad.',
      },
      {
        question: '¿Debería apuntar a keywords de nombre de marca en mi listado de Amazon?',
        answer: 'Nunca incluyas nombres de marca de la competencia en el título o viñetas de tu producto — los términos de servicio de Amazon lo prohíben y pueden resultar en la supresión de tu listado. Sin embargo, las keywords relacionadas con marcas aparecen naturalmente en los resultados de la herramienta y son útiles para entender el panorama competitivo. Tu estrategia debería ser apuntar a los equivalentes genéricos y competir en precio, características y reseñas.',
      },
      {
        question: '¿Puedo usar esta herramienta para mercados de Amazon fuera de Estados Unidos?',
        answer: 'Sí. El selector de país admite los principales mercados de Amazon incluyendo EE. UU., Reino Unido, Alemania, Francia, España, Italia, Brasil, Canadá, Australia, India y Japón. Cada mercado tiene diferentes volúmenes de keywords, niveles de competencia y comportamientos de compradores. Un producto que está sobresaturado en el mercado estadounidense podría estar desatendido en Alemania o Japón.',
      },
      {
        question: '¿Cuántas keywords debería incluir en mis términos de búsqueda backend de Amazon?',
        answer: 'Amazon permite hasta 250 bytes de términos de búsqueda backend (aproximadamente 250 caracteres para inglés). Usa este espacio para keywords que no encajen naturalmente en tu título, viñetas o descripción. Prioriza keywords únicas — no repitas términos que ya están en tu listado visible. Usa espacios para separar los términos (no comas ni puntos y coma — Amazon los trata como bytes desperdiciados).',
      },
      {
        question: '¿Cómo utiliza el algoritmo A10 de Amazon las keywords para posicionar listados de productos?',
        answer: 'El algoritmo A10 de Amazon considera la relevancia de keywords como uno de varios factores de posicionamiento junto con la velocidad de ventas, la tasa de conversión, la tasa de clics, la autoridad del vendedor y las ventas orgánicas. Los listados con la keyword en el título se posicionan más alto que aquellos que solo la tienen en los términos backend. Más allá de la coincidencia, el algoritmo luego clasifica por métricas de rendimiento — lo que significa que la optimización de keywords te indexa, pero la tasa de conversión y las ventas determinan tu posición.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Keyword Tool',
    title: 'Bing Keyword Tool Gratuito',
    description: 'Investiga keywords para el motor de búsqueda Bing. Obtén volumen de búsqueda, CPC y datos de competencia específicos de Bing para optimizar tu contenido para el motor de búsqueda de Microsoft.',
    metaDescription: 'Encuentra ideas de keywords para Bing gratis. Consulta volumen de búsqueda, CPC y datos de competencia para aprovechar el SERP de Bing, de alta conversión y menor competencia.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Introduce una keyword',
    inputPlaceholder: 'p. ej., software de gestión de proyectos',
    buttonText: 'Buscar Keywords',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'España' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japón' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competencia', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Investiga keywords específicamente para el ecosistema de búsqueda de Bing',
        description: 'Bing impulsa la búsqueda en Microsoft Edge (el navegador predeterminado en cada PC con Windows), Cortana, Yahoo Search y los resultados orgánicos de DuckDuckGo. Eso representa aproximadamente el 10–15 % del tráfico de búsqueda de escritorio — un segmento que la mayoría de los SEOs ignoran por completo. Introduce cualquier keyword, selecciona tu país objetivo y obtén datos de búsqueda específicos de Bing. Esto es especialmente valioso para marketers B2B y marcas que se dirigen a demografías de mayor edad, ya que los usuarios de Bing tienden a usar más el escritorio, tener mayores ingresos y encontrarse en entornos empresariales donde los productos de Microsoft son el estándar.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Evalúa el volumen único y la densidad de keywords de Bing',
        description: 'El panel resumen muestra el número total de ideas de keywords y su volumen promedio en Bing. Una keyword semilla que genera más de 1.000 términos relacionados significa que existe un clúster temático profundo y semánticamente rico disponible en la plataforma de Bing. Esta métrica de densidad te ayuda a decidir si la optimización para Bing merece el esfuerzo para tu nicho. Para keywords de software B2B, consultas de herramientas empresariales y servicios profesionales, Bing a menudo ofrece un volumen sorprendente de usuarios con mayor intención de compra y más económicos de convertir.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Compara la competitividad orgánica y de pago en Bing',
        description: 'La tabla de resultados muestra Volumen, CPC y Competencia para cada keyword específicamente en Bing. Bing Ads (Microsoft Advertising) tiene típicamente CPCs más bajos que Google Ads — a menudo un 30–50 % más económicos para las mismas keywords. Esta tabla permite a los gestores de PPC identificar keywords donde Bing ofrece un mejor coste por adquisición que Google. También permite a los profesionales de SEO ver qué keywords enfrentan menos competencia orgánica en Bing.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Descubre clústeres de keywords y oportunidades de contenido únicos en Bing',
        description: 'Esta vista muestra la lista completa de variaciones de keywords con sus volúmenes de búsqueda en Bing. Dado que la base de usuarios de Bing tiene demografías y comportamientos diferentes a los de Google, el panorama de keywords puede diferir significativamente. Los términos relacionados con software empresarial, integraciones de Microsoft, herramientas profesionales y ciertos productos orientados a determinados grupos de edad suelen rendir desproporcionadamente bien en Bing. Usa esta lista para identificar oportunidades de contenido que tus competidores están perdiendo por optimizar únicamente para Google.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: '¿Por qué debería interesarme por las keywords de Bing cuando Google domina la búsqueda?',
        answer: 'Bing captura aproximadamente el 10–15 % del tráfico de búsqueda de escritorio a nivel mundial, lo que se traduce en cientos de millones de búsquedas al mes. Más importante aún, la audiencia de Bing tiende a tener ingresos más altos, ser mayor y estar más orientada a entornos empresariales — demografías que a menudo convierten a tasas más altas. Dado que menos SEOs optimizan específicamente para Bing, el panorama competitivo es significativamente menos saturado.',
      },
      {
        question: '¿En qué se diferencia el algoritmo de búsqueda de Bing del de Google?',
        answer: 'El algoritmo de posicionamiento de Bing comparte similitudes con Google pero tiene diferencias notables. Bing da más peso a las keywords de coincidencia exacta en títulos y meta descripciones, valora las señales sociales de plataformas como Facebook y LinkedIn, otorga una ligera preferencia a dominios más antiguos y establecidos, y muestra contenido multimedia de forma más prominente en sus SERPs. Bing también tiende a ser más transparente sobre sus factores de posicionamiento.',
      },
      {
        question: '¿Qué industrias se benefician más de la optimización de keywords de Bing?',
        answer: 'Las industrias que se benefician desproporcionadamente de Bing incluyen software B2B y SaaS (usuarios empresariales con navegadores Microsoft por defecto), servicios financieros (demografías de mayores ingresos), sanidad (demografías de mayor edad), inmobiliaria (comportamiento de investigación predominantemente en escritorio), educación y servicios profesionales. Cualquier industria cuyo cliente objetivo probablemente use un ordenador de trabajo con Windows y Edge como navegador predeterminado debería considerar la optimización para Bing.',
      },
      {
        question: '¿Son los anuncios de Bing más baratos que los de Google Ads para las mismas keywords?',
        answer: 'Sí, en la mayoría de los casos. Los CPCs de Bing Ads (Microsoft Advertising) son típicamente un 30–50 % más bajos que los de Google Ads para keywords equivalentes, porque hay menos competencia entre anunciantes en la plataforma. Los datos de CPC en esta herramienta reflejan precios específicos de Bing, permitiéndote calcular ahorros potenciales. Muchos anunciantes importan sus campañas de Google Ads a Bing Ads y logran un coste por adquisición significativamente más bajo.',
      },
      {
        question: '¿Cuántas ideas de keywords puedo generar para Bing?',
        answer: 'La herramienta puede devolver más de 1.000 ideas de keywords a partir de una sola keyword semilla en Bing. Esto es significativamente más de lo que ofrecen muchas herramientas de investigación específicas de Bing. El volumen de ideas de keywords indica la profundidad semántica del tema en la plataforma de Bing.',
      },
      {
        question: '¿Tiene Bing su propia métrica de dificultad de keyword?',
        answer: 'Esta herramienta proporciona una puntuación de KD basada en el panorama competitivo de los resultados orgánicos de Bing, que es independiente de las métricas de dificultad de Google. Dado que menos sitios web optimizan activamente para Bing, a menudo encontrarás que las mismas keywords son significativamente más fáciles de posicionar en Bing que en Google. Esto crea una oportunidad de arbitraje.',
      },
      {
        question: '¿Cómo maneja Bing la intención de búsqueda de manera diferente a Google?',
        answer: 'Los resultados de búsqueda de Bing tienden a favorecer las respuestas directas y el contenido de coincidencia exacta más que Google, que interpreta cada vez más el significado semántico. Esto significa que en Bing, tener la frase exacta de la keyword en tu Title Tag, H1 y slug de URL tiene un impacto más fuerte en los posicionamientos. Bing también muestra más contenido visual en los resultados de búsqueda y tiene un enfoque diferente para la búsqueda local.',
      },
      {
        question: '¿Puedo usar datos de keywords de Bing para informar mi estrategia de SEO en Google?',
        answer: 'Sí — los datos de keywords de Bing pueden revelar tendencias de búsqueda valiosas y comportamientos de usuario que son menos visibles en Google debido a la mayor competencia. Las sugerencias de keywords de Bing a veces sacan a la luz variaciones long-tail y formatos de preguntas que no aparecen en las herramientas de keywords de Google. Estos términos a menudo representan necesidades reales de los usuarios que también están desatendidas en las SERPs de Google.',
      },
      {
        question: '¿Qué es la puntuación de Competencia para keywords de Bing?',
        answer: 'La puntuación de Competencia (0–100) refleja cuántos anunciantes están pujando por esa keyword en Microsoft Advertising (Bing Ads). Una puntuación de 0 significa que ningún anunciante la está apuntando; 100 significa una fuerte competencia entre anunciantes. Esta métrica es independiente de la competencia orgánica y es principalmente relevante para campañas de PPC. Sin embargo, una alta competencia de pago en Bing también señala valor comercial.',
      },
      {
        question: '¿Cómo optimizo contenido específicamente para el algoritmo de búsqueda de Bing?',
        answer: 'Las tácticas clave de optimización para Bing incluyen: usa keywords de coincidencia exacta en tu Title Tag y H1, escribe meta descripciones claras y ricas en keywords, asegúrate de que tu sitio esté verificado en Bing Webmaster Tools, construye señales sociales a través de compartidos en LinkedIn y Facebook, envía un sitemap XML a Bing específicamente, usa contenido multimedia con texto alternativo y asegura velocidades de carga rápidas — Bing penaliza los sitios lentos de forma más agresiva que Google.',
      },
      {
        question: '¿Qué porcentaje de mi tráfico podría venir de Bing?',
        answer: 'Para la mayoría de los sitios web, Bing aporta entre el 5–15 % del tráfico orgánico total, pero esto varía drásticamente según la industria y la audiencia. Los sitios enfocados en B2B y empresas suelen ver un 15–25 % del tráfico procedente de Bing, mientras que los sitios orientados al consumidor que apuntan a demografías más jóvenes pueden ver menos del 5 %. Consulta tus analytics para la fuente Bing/orgánico para ver tu distribución actual.',
      },
      {
        question: '¿La investigación de keywords de Bing también cubre Yahoo y DuckDuckGo?',
        answer: 'Parcialmente sí. El índice de búsqueda orgánica de Bing impulsa los resultados de Yahoo Search e influye significativamente en los resultados orgánicos de DuckDuckGo. Esto significa que optimizar para keywords de Bing te brinda efectivamente visibilidad en tres motores de búsqueda simultáneamente.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Website Traffic Checker',
    title: 'Website Traffic Checker Gratuito',
    description: 'Comprueba el tráfico orgánico y de pago estimado de cualquier sitio web. Consulta keywords totales, valor del tráfico y datos de movimiento de posicionamiento.',
    metaDescription: 'Comprueba gratis el tráfico orgánico y de pago de cualquier sitio web. Consulta posicionamientos de keywords, valor del tráfico y tendencias de posicionamiento para compararte con competidores.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Introduce un dominio',
    inputPlaceholder: 'p. ej., example.com',
    buttonText: 'Comprobar tráfico',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Métrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valor', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Estima el tráfico de búsqueda de cualquier sitio web al instante',
        description: 'Antes de entrar en cualquier mercado, necesitas saber cuánto tráfico de búsqueda están capturando tus competidores. Introduce cualquier dominio en el Traffic Checker y obtén una estimación instantánea de su rendimiento en búsqueda orgánica y de pago. Ya sea que estés evaluando un competidor, investigando una posible adquisición, verificando un socio publicitario o analizando el rendimiento actual de un cliente — esta herramienta te da la inteligencia de tráfico que antes requería costosas suscripciones empresariales. Es la forma más rápida de responder la pregunta: "¿cuánto tráfico de búsqueda obtiene realmente este sitio?"',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Consulta los posicionamientos totales de keywords y el valor monetario del tráfico',
        description: 'El panel muestra Keywords Totales (p. ej., 47.854) y Valor del Tráfico (p. ej., 223.458 $). Las Keywords Totales muestran la amplitud de la visibilidad de búsqueda de un sitio web — cuántos términos de búsqueda diferentes generan visitantes. El Valor del Tráfico estima cuánto costaría ese tráfico orgánico si se comprara a través de Google Ads. Un valor de tráfico de 223.458 $ significa que los posicionamientos orgánicos de ese sitio web le ahorran casi un cuarto de millón de dólares al mes en gasto publicitario equivalente. Esta métrica es una de las más convincentes para demostrar el ROI del SEO a ejecutivos, clientes y stakeholders.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Rastrea tendencias de movimiento de keywords: Subiendo, Bajando, Nuevas, Perdidas',
        description: 'La tabla de tendencias de posicionamiento desglosa Keywords en Top 3, Keywords en Top 10, Keywords Nuevas, Posicionamientos Mejorados, Posicionamientos Empeorados y Posicionamientos Perdidos. Este es el pulso del rendimiento SEO. Si "Mejorados" supera a "Empeorados", el SEO del sitio está funcionando. Si "Perdidos" es alto, algo salió mal — posiblemente una actualización de algoritmo, deterioro de contenido o los competidores los superaron. Las agencias presentan estos datos en informes mensuales para mostrar a los clientes si su inversión en SEO está generando impulso positivo.',
        image: '/website traffic checker/see keywords in tops, declining and improved keywords.png',
      },
      {
        title: 'Compara la estrategia de tráfico orgánico vs. de pago',
        description: 'La vista dividida muestra Tráfico Orgánico y Tráfico de Pago lado a lado. Esto revela la estrategia de búsqueda de un sitio web de un vistazo. Un sitio con alto tráfico orgánico y cero tráfico de pago ha invertido fuertemente en SEO. Un sitio con tráfico orgánico y de pago equilibrado está diversificado. Un sitio que depende completamente del tráfico de pago es vulnerable a recortes de presupuesto. Usa esto para comparar tu propia estrategia e identificar ventajas competitivas.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: '¿Cómo estima un Website Traffic Checker el tráfico sin acceso a analytics?',
        answer: 'Los Traffic Checkers estiman el tráfico orgánico usando una combinación de datos de posicionamiento de keywords y modelos de tasa de clics. La herramienta identifica para qué keywords se posiciona un sitio, sus posiciones de posicionamiento y los volúmenes de búsqueda mensuales de esas keywords. Luego aplica estimaciones de tasa de clics basadas en la posición (por ejemplo, la posición #1 obtiene ~28% de los clics, la #2 obtiene ~15%) para calcular las visitas mensuales estimadas de cada keyword. La suma de todas las estimaciones de tráfico a nivel de keyword produce la estimación total de tráfico.',
      },
      {
        question: '¿Qué es el valor del tráfico y cómo se calcula?',
        answer: 'El valor del tráfico representa el coste mensual estimado de replicar el tráfico orgánico de un sitio web a través de Google Ads. Se calcula multiplicando el tráfico orgánico estimado de cada keyword por su CPC (Coste Por Clic) y luego sumando todos los valores de keywords. Por ejemplo, si un sitio recibe 1.000 visitas orgánicas de una keyword con un CPC de 5 $, esa keyword contribuye 5.000 $ al valor del tráfico. Esta métrica demuestra poderosamente el valor monetario de la inversión en SEO.',
      },
      {
        question: '¿Cuál es la diferencia entre tráfico orgánico y tráfico de pago?',
        answer: 'El tráfico orgánico proviene de los resultados no pagados de los motores de búsqueda — los usuarios hacen clic en tu listado porque apareció naturalmente en Google basándose en relevancia y autoridad. El tráfico de pago proviene de la publicidad en motores de búsqueda (Google Ads) — pagas por cada clic en tu listado patrocinado. El tráfico orgánico es "gratuito" en el sentido de que no pagas por clic, pero requiere inversión en creación de contenido y SEO. El tráfico de pago ofrece visibilidad inmediata pero se detiene en el momento en que pausas tu presupuesto publicitario.',
      },
      {
        question: '¿Qué significan las métricas "Keywords Nuevas", "Mejoradas", "Empeoradas" y "Perdidas"?',
        answer: '"Keywords Nuevas" son términos de búsqueda para los que el sitio comenzó a posicionarse en el último período — lo que indica que contenido fresco está siendo indexado o que contenido existente está ganando visibilidad. "Posicionamientos Mejorados" son keywords donde la posición del sitio subió (más cerca del #1). "Posicionamientos Empeorados" son keywords donde la posición bajó. "Posicionamientos Perdidos" son keywords para las que el sitio anteriormente se posicionaba pero ya no aparece en el top 100. Un sitio saludable típicamente muestra que Nuevas + Mejoradas superan significativamente a Empeoradas + Perdidas.',
      },
      {
        question: '¿Qué tan precisas son las estimaciones de tráfico de sitios web para sitios pequeños vs. grandes?',
        answer: 'Las estimaciones de tráfico son generalmente más precisas para sitios más grandes con miles de posicionamientos, porque el modelo estadístico promedia sobre muchas keywords. Para sitios pequeños que se posicionan para menos de 100 keywords, las estimaciones pueden tener márgenes de error más amplios porque la sobreestimación o subestimación de una sola keyword tiene un impacto mayor en el total. Para benchmarking competitivo, la comparación relativa (tu sitio vs. competidores) es más confiable que los números absolutos.',
      },
      {
        question: '¿Por qué un competidor con menor autoridad tiene más tráfico que mi sitio web?',
        answer: 'Autoridad y tráfico están correlacionados pero no son idénticos. Un competidor puede superarte en tráfico con menor autoridad si: (1) tiene una mejor estrategia de contenido que apunta a keywords de mayor volumen, (2) produce contenido más frecuente y consistentemente, (3) apunta a keywords de cola larga que requieren menos autoridad para posicionarse, (4) tiene una optimización on-page y SEO técnico superiores, o (5) se beneficia de autoridad temática en un nicho específico a pesar de métricas de dominio generales más bajas.',
      },
      {
        question: '¿Cómo puedo usar los datos del Traffic Checker para análisis competitivo?',
        answer: 'Ejecuta el Traffic Checker para tus 5 principales competidores y compara: tráfico orgánico total, keywords totales, valor del tráfico, proporción orgánico vs. de pago y tendencias de movimiento de keywords. Esto revela quién está creciendo más rápido, quién depende de anuncios pagados, quién tiene la mayor huella de keywords y dónde cada competidor genera más valor. Luego profundiza en keywords específicas — ¿dónde se posicionan los competidores donde tú no? Estas son tus oportunidades de brechas de contenido.',
      },
      {
        question: '¿Qué significa si un sitio web tiene alto valor de tráfico pero volumen de tráfico moderado?',
        answer: 'Esto significa que el sitio se posiciona para keywords comercialmente valiosas con CPCs altos, incluso si los volúmenes de búsqueda son moderados. Un sitio que recibe 10.000 visitas mensuales de keywords con un CPC promedio de 20 $ tiene un valor de tráfico de 200.000 $ — más que un sitio que recibe 100.000 visitas de keywords con un CPC promedio de 0,50 $ (50.000 $ de valor de tráfico). Un alto valor de tráfico en relación con el volumen de tráfico indica que el sitio apunta a keywords de alta intención, de fondo del embudo, que generan ingresos.',
      },
      {
        question: '¿Cómo rastrea las tendencias de tráfico a lo largo del tiempo?',
        answer: 'Exporta los datos de tráfico mensualmente y crea un panel histórico. Rastrea tráfico orgánico total, keywords totales, keywords en top 3, keywords en top 10 y valor del tráfico durante períodos de 6–12 meses. Grafica estos como líneas de tendencia para visualizar el crecimiento o declive. La métrica más significativa para seguir es "Keywords en Top 10" porque se correlaciona directamente con el tráfico — cuantas más keywords en la primera página, más tráfico recibes.',
      },
      {
        question: '¿Puedo usar esta herramienta para estimar los ingresos de un sitio web?',
        answer: 'Aunque los datos del Traffic Checker por sí solos no revelan ingresos, puedes crear estimaciones aproximadas. Para sitios con publicidad, multiplica el tráfico estimado por RPMs típicos (5–30 $ por cada 1.000 páginas vistas dependiendo del nicho). Para sitios de comercio electrónico, aplica tasas de conversión promedio de la industria (1–3%) y valores promedio de pedido. Para sitios SaaS, estima leads a partir del tráfico usando tasas de conversión típicas (2–5% a prueba gratuita) y precios conocidos.',
      },
      {
        question: '¿Por qué un sitio muestra cero tráfico de pago?',
        answer: 'Cero tráfico de pago significa que el sitio no está ejecutando actualmente campañas de Google Ads que las fuentes de datos de la herramienta puedan detectar. Esto podría significar que el sitio depende completamente del SEO orgánico (una estrategia común para negocios basados en contenido), ejecuta anuncios en otras plataformas (Facebook, LinkedIn, redes de display) en lugar de Google Search, o ha pausado recientemente sus campañas. Cero tráfico de pago no es inherentemente bueno ni malo — simplemente indica que la estrategia de visibilidad en búsqueda del sitio es completamente orgánica.',
      },
      {
        question: '¿Cómo maneja el Traffic Checker subdominios y subcarpetas?',
        answer: 'La herramienta comprueba el tráfico para todo el dominio que introduces. Si un sitio usa subdominios (blog.example.com, shop.example.com), estos se incluyen típicamente en la estimación de tráfico total del dominio raíz. Las subcarpetas (example.com/blog/, example.com/shop/) siempre se incluyen ya que son parte del mismo dominio. Si necesitas estimaciones de tráfico para un subdominio específico o ruta URL, algunas herramientas ofrecen análisis a nivel de URL que desglosan el tráfico por página o sección.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Broken Link Checker',
    title: 'Checker Gratuito de Enlaces Rotos y Salud de Página',
    description: 'Comprueba cualquier página web en busca de enlaces rotos, problemas de SEO y problemas de salud de la página. Obtén una auditoría detallada con recomendaciones accionables.',
    metaDescription: 'Comprueba gratis cualquier página web en busca de enlaces rotos y problemas de SEO. Obtén puntuaciones de salud de página, conteos de enlaces internos/externos y recomendaciones de corrección.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Introduce una URL',
    inputPlaceholder: 'p. ej., https://example.com',
    buttonText: 'Comprobar página',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Problema', sortable: false, type: 'text' },
      { key: 'severity', label: 'Severidad', sortable: true, type: 'badge' },
      { key: 'description', label: 'Descripción', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Audita cualquier página en busca de enlaces rotos y salud técnica SEO',
        description: 'Los enlaces rotos destruyen silenciosamente la experiencia de usuario y el rendimiento SEO. Introduce cualquier URL en el checker, haz clic en "Comprobar página" y obtén una auditoría instantánea de la salud de enlaces y el estado técnico SEO de esa página. Esto reemplaza la comprobación manual enlace por enlace con un escaneo automatizado que detecta errores 404, cadenas de redirección y enlaces salientes muertos. Los propietarios de sitios web, profesionales de SEO y webmasters usan esto antes de lanzar nuevas páginas, después de migraciones de sitio y como parte de revisiones mensuales regulares de salud.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Monitorea tu puntuación técnica SEO y problemas críticos',
        description: 'Más allá de los enlaces rotos, la herramienta devuelve un Page Score (0–100) y el número total de Problemas Encontrados. Un Page Score de 100 con 0 problemas significa que la página está técnicamente saludable. Cualquier cosa por debajo de 80 señala problemas que necesitan atención. Este sistema de puntuación te da una métrica rápida de aprobado/reprobado para cada página de tu sitio web.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Analiza la distribución de enlaces internos y externos',
        description: 'La herramienta cuenta y categoriza los Enlaces Internos (enlaces a otras páginas del mismo dominio) y los Enlaces Externos (enlaces a otros sitios web). Estos datos son críticos por dos razones: (1) La distribución de enlaces internos afecta cómo los motores de búsqueda rastrean e indexan tu sitio, y (2) la calidad de los enlaces externos afecta la confiabilidad de tu página.',
        image: '/Broken link checker/See internal links from a page, external links.png',
      },
      {
        title: 'Identifica y prioriza problemas técnicos específicos para corregir',
        description: 'La tabla de problemas lista cada problema encontrado, su nivel de severidad (Info, Advertencia, Crítico) y una descripción. Problemas como "Recursos que bloquean el renderizado" y "Tasa de contenido baja" impactan directamente en los Core Web Vitals y las señales de calidad de contenido. Cada problema viene con contexto accionable — sabes exactamente qué está mal y puedes priorizar según la severidad.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un enlace roto y cómo afecta al SEO?',
        answer: 'Un enlace roto (también llamado enlace muerto o error 404) es un hipervínculo que apunta a una página que ya no existe o devuelve un error. Los enlaces rotos afectan al SEO de tres maneras: (1) Desperdician presupuesto de rastreo, (2) Interrumpen el flujo de link equity, y (3) Perjudican la experiencia de usuario.',
      },
      {
        question: '¿Qué es un Page Score y cómo se calcula?',
        answer: 'El Page Score es una métrica de 0–100 que evalúa la salud técnica general de una página web. Tiene en cuenta enlaces rotos, rendimiento de carga de página, completitud de meta etiquetas, ratio contenido-HTML, recursos que bloquean el renderizado e indicadores de compatibilidad móvil.',
      },
      {
        question: '¿Cuál es la diferencia entre enlaces internos y enlaces externos en SEO?',
        answer: 'Los enlaces internos conectan páginas dentro del mismo dominio. Ayudan a los motores de búsqueda a descubrir y rastrear tu contenido, distribuyen link equity y establecen jerarquías de contenido. Los enlaces externos apuntan desde tu sitio web a otros dominios y señalan calidad de contenido y relevancia temática.',
      },
      {
        question: '¿Con qué frecuencia debería comprobar mi sitio web en busca de enlaces rotos?',
        answer: 'Comprueba tus páginas más importantes mensualmente. Realiza una auditoría completa de enlaces rotos en todo el sitio trimestralmente. Además, comprueba siempre después de migraciones de sitio, actualizaciones del CMS, cambios en la estructura de URLs o eliminaciones de contenido.',
      },
      {
        question: '¿Qué son los recursos que bloquean el renderizado y por qué importan?',
        answer: 'Los recursos que bloquean el renderizado son hojas de estilo CSS y archivos JavaScript que impiden que el navegador muestre la página hasta que estén completamente cargados. Ralentizan las métricas de Core Web Vitals, que Google usa como factores de posicionamiento.',
      },
      {
        question: '¿Qué significa "Tasa de contenido baja" en el informe de problemas?',
        answer: 'Tasa de contenido baja significa que la página tiene muy poco contenido de texto legible en relación con su código HTML. Los motores de búsqueda pueden interpretar esto como una página de contenido delgado. La proporción saludable típica es superior al 25% de texto respecto al HTML.',
      },
      {
        question: '¿Pueden los enlaces rotos en mi sitio afectar a páginas que no tienen enlaces rotos?',
        answer: 'Sí, a través de un concepto llamado desperdicio de presupuesto de rastreo. Los motores de búsqueda asignan un presupuesto de rastreo limitado a cada sitio web. Cuando los bots encuentran enlaces rotos, usan presupuesto de rastreo en callejones sin salida.',
      },
      {
        question: '¿Debería corregir primero los enlaces rotos internos o los externos?',
        answer: 'Corrige primero los enlaces rotos internos. Los enlaces rotos internos afectan directamente la rastreabilidad, navegación y distribución de link equity interno de tu sitio web — todo lo que controlas completamente.',
      },
      {
        question: '¿Qué es el link equity y cómo lo afectan los enlaces rotos?',
        answer: 'El link equity es el valor de posicionamiento que se transfiere de una página a otra a través de hipervínculos. Cuando un enlace roto apunta a un error 404, el link equity se desperdicia. Configurando redirecciones 301, puedes recuperar el link equity perdido.',
      },
      {
        question: '¿Cómo uso los datos de enlaces rotos para construcción de enlaces?',
        answer: 'La construcción de enlaces mediante enlaces rotos es una estrategia probada de adquisición de enlaces. Encuentra páginas rotas en sitios de competidores o de la industria, crea contenido en tu propio sitio que cubra el mismo tema y luego contacta a los sitios web que enlazaban a la página rota.',
      },
      {
        question: '¿Qué códigos de estado HTTP indican enlaces rotos?',
        answer: 'Los más comunes son: 404 (No encontrado), 410 (Eliminado), 500 (Error interno del servidor), 502 (Bad Gateway) y 503 (Servicio no disponible). Además, las cadenas de redirección 301 y 302 desperdician link equity y ralentizan los tiempos de carga de página.',
      },
      {
        question: '¿Pueden los enlaces rotos hacer que Google desindexe mis páginas?',
        answer: 'Unos pocos enlaces rotos no causarán desindexación. Sin embargo, si un porcentaje significativo de las URLs de tu sitio web devuelve errores 404, Google puede reducir la tasa de rastreo para tu dominio. La auditoría regular previene este deterioro.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI Visibility Checker',
    title: 'AI Visibility Checker Gratuito',
    description: 'Descubre cómo los AI Overviews de Google afectan a tu sitio web. Averigua qué porcentaje de tus keywords activan AI Overviews, cuánto tráfico está en riesgo y obtén un AI Visibility Score.',
    metaDescription: 'Comprueba gratis cómo los AI Overviews de Google impactan tu sitio web. Consulta tu tasa de exposición a AI Overview, keywords afectadas, tráfico en riesgo y AI Visibility Score.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Introduce un dominio',
    inputPlaceholder: 'p. ej., example.com',
    buttonText: 'Comprobar visibilidad IA',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Métrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valor', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Comprueba la visibilidad de cualquier sitio web en la búsqueda potenciada por IA',
        description: 'Los AI Overviews, ChatGPT, Perplexity y Gemini están transformando fundamentalmente cómo los usuarios encuentran información — y la mayoría de los sitios web no tienen idea de cómo están rindiendo en este nuevo panorama. Introduce cualquier dominio, haz clic en "Comprobar visibilidad IA" y obtén una auditoría completa de cómo el sitio web aparece en los resultados de búsqueda con IA. Este es el primer paso en la AI Engine Optimization (AEO), la disciplina emergente que se sitúa junto al SEO tradicional.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Analiza la distribución de keywords de AI Overview y el posicionamiento',
        description: 'Las métricas detalladas muestran Keywords Totales Posicionadas, Keywords con AI Overviews, Tasa de Exposición a AI Overview, distribución de keywords por posición (#1 AI Keywords, #2–3, #4–10), Tráfico Orgánico de AI Keywords y Tráfico Orgánico total. Este desglose granular te muestra exactamente cuánto de tu cartera de keywords está afectado por los AI Overviews de Google.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Cuantifica cuánto tráfico está en riesgo por los AI Overviews',
        description: 'La visualización de doble métrica muestra Keywords con AI Overviews y Tráfico en Riesgo. "Tráfico en Riesgo" estima el tráfico orgánico que podría disminuir a medida que los AI Overviews absorben clics que antes iban a los resultados orgánicos tradicionales. Esta es la métrica más importante para entender el impacto de la búsqueda con IA en tu negocio.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Compara la fortaleza del dominio con la exposición a AI Overview',
        description: 'El panel combina tu Domain Score (p. ej., 97 "Muy Fuerte") con tu porcentaje de Exposición a AI Overview. Esta combinación es crucial: un dominio fuerte no te protege de los AI Overviews. Incluso los sitios web con mayor autoridad enfrentan una erosión masiva de tasa de clics por las respuestas generadas por IA. El Domain Score muestra tu fortaleza SEO tradicional, mientras que la métrica de exposición muestra cuánto de esa fortaleza está amenazada por la IA.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: '¿Qué es la visibilidad IA y por qué es importante para el SEO en 2025–2026?',
        answer: 'La visibilidad IA se refiere a cuán prominentemente aparece tu sitio web, marca o contenido en las experiencias de búsqueda potenciadas por IA — incluyendo Google AI Overviews, respuestas de ChatGPT, respuestas de Perplexity, resultados de Gemini y Microsoft Copilot. Es importante porque estos sistemas de IA están cambiando fundamentalmente el comportamiento de búsqueda. Los Google AI Overviews ahora aparecen para más del 70% de las consultas informacionales.',
      },
      {
        question: '¿Qué son los Google AI Overviews y cómo afectan al tráfico orgánico?',
        answer: 'Los Google AI Overviews son resúmenes de respuesta generados por IA que aparecen en la parte superior de los resultados de búsqueda de Google para muchas consultas. Los estudios muestran que los AI Overviews pueden reducir las tasas de clics en los resultados orgánicos entre un 18–64%, dependiendo del tipo de consulta.',
      },
      {
        question: '¿Qué significa "Tráfico en Riesgo" y cómo se calcula?',
        answer: '"Tráfico en Riesgo" estima el tráfico orgánico que podría disminuir a medida que los AI Overviews absorben clics. Se calcula identificando todas las keywords donde tu sitio web se posiciona Y Google muestra un AI Overview.',
      },
      {
        question: '¿Qué es la Exposición a AI Overview y qué significa un porcentaje alto?',
        answer: 'La Exposición a AI Overview es el porcentaje de tus keywords posicionadas que activan Google AI Overviews. Una exposición del 76,8% significa que para más de tres cuartas partes de las keywords para las que te posicionas, Google muestra una respuesta generada por IA encima de los resultados orgánicos.',
      },
      {
        question: '¿En qué se diferencia la visibilidad IA de la visibilidad SEO tradicional?',
        answer: 'La visibilidad SEO tradicional mide tu presencia en los resultados de búsqueda orgánicos estándar. La visibilidad IA mide tu presencia en las respuestas generadas por IA. Las dos pueden divergir: un sitio en posición #1 orgánicamente podría no ser citado en el AI Overview.',
      },
      {
        question: '¿Qué es la AI Engine Optimization (AEO) y cómo empiezo?',
        answer: 'AEO es la práctica de optimizar tu contenido para ser referenciado, citado y destacado en las respuestas de búsqueda generadas por IA. Las estrategias clave incluyen: proporcionar respuestas claras y concisas, usar datos estructurados y marcado schema, construir autoridad temática, incluir datos originales y mantener altas señales de E-E-A-T.',
      },
      {
        question: '¿Cómo afecta la fortaleza del dominio a la citación en AI Overview?',
        answer: 'Los sistemas de IA, incluyendo los AI Overviews de Google, tienden a citar fuentes autoritativas y conocidas con más frecuencia. Las puntuaciones de dominio más altas se correlacionan con tasas de citación más altas en respuestas de IA. Sin embargo, la fortaleza del dominio por sí sola no es suficiente.',
      },
      {
        question: '¿Qué tipos de contenido son más vulnerables a la pérdida de tráfico por AI Overview?',
        answer: 'El contenido informacional que responde preguntas factuales simples es el más vulnerable — definiciones, respuestas rápidas de cómo hacer, estadísticas, comparaciones y consultas de "qué es". Los tipos de contenido más resilientes incluyen: análisis en profundidad, herramientas interactivas, investigación original y comparaciones de productos con experiencia personal.',
      },
      {
        question: '¿Puedo ver qué plataformas de IA citan mi contenido?',
        answer: 'Esta herramienta mide específicamente la exposición a AI Overview en Google. Para monitoreo más amplio de plataformas de IA (ChatGPT, Perplexity, Gemini, Copilot), herramientas dedicadas de monitoreo de marca rastrean dónde y cómo tu marca aparece en las plataformas de IA.',
      },
      {
        question: '¿Qué debería hacer si mi Exposición a AI Overview está por encima del 50%?',
        answer: 'Una alta exposición requiere una respuesta multifacética: (1) Audita qué keywords específicas activan AI Overviews, (2) Optimiza tus páginas de mayor tráfico para citación por IA, (3) Diversifica las fuentes de tráfico, (4) Crea formatos de contenido que los AI Overviews no pueden replicar, y (5) Monitorea mensualmente.',
      },
      {
        question: '¿Cómo se relaciona el Domain Score en el contexto de visibilidad IA con la autoridad tradicional?',
        answer: 'El Domain Score junto a los datos de AI Overview es la misma métrica de autoridad basada en la fortaleza del perfil de backlinks. En el contexto de visibilidad IA, proporciona una perspectiva crucial: una puntuación de dominio fuerte significa que tu base SEO tradicional es sólida, pero el porcentaje de exposición a IA muestra cuánto de esa base está siendo perturbada.',
      },
      {
        question: '¿Es la visibilidad IA relevante para sitios web B2B y empresariales?',
        answer: 'Absolutamente. Los compradores B2B usan cada vez más herramientas de IA para investigación de proveedores, evaluación de tecnología y apoyo en decisiones de compra. Los Google AI Overviews son especialmente frecuentes para consultas informacionales B2B. Las marcas empresariales que aparecen como citaciones en AI Overviews ganan credibilidad significativa.',
      },
    ],
  },
};

export function getSeoToolBySlugEs(slug: string): SeoToolConfig | undefined {
  return seoToolsEs[slug];
}

export function getAllSeoToolsEs(): SeoToolConfig[] {
  return Object.values(seoToolsEs);
}

export function getAllSeoToolSlugsEs(): string[] {
  return Object.keys(seoToolsEs);
}

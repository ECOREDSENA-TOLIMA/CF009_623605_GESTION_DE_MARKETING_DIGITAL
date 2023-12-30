<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión y satisfacción

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión eficiente de una empresa no solo implica la recopilación de datos operativos diarios, como movimientos financieros e inventarios, sino también la transformación de estos datos en información valiosa para la toma de decisiones estratégicas. En ocasiones, las pequeñas y medianas empresas se centran en el registro de actividades principalmente para cumplir con los requisitos de los sistemas de gestión de calidad, sin aprovechar completamente el potencial informativo de estos datos.

    p.mb-5 Es esencial trascender la mera captura de datos operativos y avanzar hacia una visión global y específica de cada proceso empresarial. De esta manera, los gerentes y otros responsables de la toma de decisiones pueden obtener una comprensión más profunda y significativa de las actividades y rendimientos en la organización. Al convertir los datos en información de valor, se facilita la identificación de áreas de mejora, la optimización de procesos y la implementación de estrategias más informadas, contribuyendo así al crecimiento y éxito continuo de la empresa.

    Separador 

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Mediciones

    p En el contexto de la cuarta Revolución Industrial, donde las herramientas y métodos están disponibles fácilmente y a bajos costos, las empresas de todos los tamaños deberían implementar un sistema de indicadores, enfocado a dar cuentas reales de cada área de la organización, de manera que brinde insumos sólidos para la toma de decisiones basada en datos y realidades productivas de la empresa. Esto debería reflejarse en mejoramiento continuo, decisiones más acertadas y aumento de productividad con crecimiento empresarial.
    p.mb-5 Para complementar la información observe el siguiente video del SENA denominado “La validación de la información y diseño de indicadores de gestión”.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_pcuK2pm1UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .tarjeta.tarjeta.p-4.mb-4(style="background:#FFFBE5")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-12
              p Las herramientas de medición tienen gran importancia, siempre y cuando se tengan en cuenta y se realicen estudios de resultados y toma de acciones encaminadas a los objetivos planteados.

    p La información derivada del análisis de datos es esencial para la toma de decisiones inteligentes en el ámbito empresarial. Los datos, por sí solos, carecen de utilidad real hasta que son sometidos a un proceso de valoración, comprensión e interpretación que permita extraer información significativa. Es este análisis el que proporciona una perspectiva más profunda sobre las operaciones del negocio, el rendimiento financiero, la satisfacción del cliente y otros aspectos clave.
    p.mb-5 La capacidad de tomar decisiones informadas basadas en hechos concretos y situaciones reales es crucial para el éxito empresarial. Este proceso de análisis y toma de decisiones forma un ciclo continuo en el que los datos recopilados alimentan el conocimiento, que a su vez orienta futuras acciones y estrategias. La siguiente secuencia detalla cómo este proceso impacta en la gestión de datos y destaca su importancia en la toma de decisiones efectiva.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.colortarj-1.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema3/img-2.svg' alt='AvatarTop')
          .col-12
            p <strong>Definir objetivos</strong>
            p Acción fundamental para la estructuración de planes corporativos.

      .tarjeta.colortarj-2.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema3/img-3.svg' alt='AvatarTop')
          .col-12
            p <strong>Desarrollar estrategia</strong>
            p Componente técnico que implica el desarrollo de:
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Contenido.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Producto.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Publicaciones.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Canales.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Tiempos.

      .tarjeta.colortarj-1.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema3/img-4.svg' alt='AvatarTop')
          .col-12
            p <strong>Captar datos</strong>
            p En este paso se precisa definición sobre el origen de datos, teniendo en cuenta: 
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | ¿Qué se mide?
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | ¿De dónde se sacan esas mediciones? La fuente de datos
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | En caso de varias fuentes, integrarlas, evitando datos dispersos que dificultan su visualización y análisis.

      .tarjeta.colortarj-2.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema3/img-5.svg' alt='AvatarTop')
          .col-12
            p <strong>Analizar datos</strong>
            p Fase que implica el desarrollo de los KPI y permite visualizar la información, preferiblemente a través de <em>software</em> de analítica e inteligencia de negocio que comparan y evidencian comportamientos generales.  

      .tarjeta.colortarj-1.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema3/img-6.svg' alt='AvatarTop')
          .col-12
            p <strong>Tomar decisiones</strong>
            p Etapa orientada a tomar medidas para corregir o mejorar permanente el cumplimiento de los objetivos del negocio.
            p El análisis de los resultados traza rutas de acción para la toma de decisiones. 
            p Cada vez que se cumple el ciclo, las decisiones basadas en experiencias y datos reales deberían reflejarse en la mejora del negocio.

    p.mb-5 El análisis de datos desempeña un papel crucial en la evaluación de una estrategia de <em>marketing</em> digital. Este proceso implica abordar una serie de preguntas esenciales para comprender la efectividad y el impacto de la campaña. Algunas de estas preguntas clave incluyen:

    .row.mb-4
      .col-md-8
        .cajon.color-primario.p-4(style="background-color:#E3ECF7")
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿A qué audiencia específica llegó con mayor efectividad la publicidad?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Se logró alcanzar el público objetivo previsto?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Se identificaron nuevas oportunidades que no se habían considerado inicialmente?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Cuáles son los días y horas de la semana más efectivos para el alcance de la estrategia?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Cómo reaccionó la audiencia ante las publicaciones?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Cuáles son los costos asociados con la estrategia en comparación con los beneficios o ventas generadas?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Se obtuvieron resultados inesperados durante la ejecución de la estrategia?
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | ¿Qué tan exitosa fue la estrategia en términos de cifras y métricas definidas?
        
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/img-7.svg', alt='Imagen decorativa')

    p.mb-5 Este análisis no solo busca respuestas, sino que también plantea la posibilidad de identificar preguntas adicionales que podrían ser cruciales y que los datos actuales podrían no estar abordando por completo. Este enfoque reflexivo y analítico es esencial para ajustar y optimizar continuamente las estrategias de <em>marketing</em> digital.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")
          p En el caso de las empresas grandes, algunas áreas no se responsabilizan de las decisiones, toda vez que sus funciones están establecidas en desarrollar y ejecutar estrategias de mercadeo. Sin embargo, es importante tener claridad en las cifras y los reportes que solicita el área del nivel de decisiones para suministrar información completa, en el plazo establecido y de forma adecuada.

    Separador 

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 KPI

    p Los KPI, o Indicadores Clave de Desempeño, son métricas específicas que se utilizan para evaluar el rendimiento y el éxito de una estrategia, campaña o actividad en relación con los objetivos establecidos. Estos indicadores proporcionan una visión cuantificable de diversos aspectos del desempeño, lo que facilita el seguimiento y la toma de decisiones informadas.
    p.mb-5 En el contexto del <em>marketing</em> digital, los KPI pueden variar según los objetivos específicos de la campaña. A continuación, se describen sus características más relevantes:

    .tarjeta.tarjeta--azul.slyder-b-img.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p La gestión efectiva del control operativo implica la elección cuidadosa de una serie de elementos indicativos, conocidos como Indicadores Clave de Rendimiento (KPI, por sus siglas en inglés), y/o proporciones que nos ayudan a estar al tanto de la evolución de la situación. En resumen, un indicador es simplemente un factor mensurable que nos proporciona información sobre el estado de una situación específica, permitiéndonos comparar periódicamente los logros con los objetivos establecidos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Aunque hay algunos indicadores comunes ampliamente utilizados por diversas empresas, es fundamental elaborar los KPI de forma personalizada para cada organización, considerando el tipo de negocio, el mercado, la situación específica de la empresa, así como la estrategia adoptada. Estos factores juegan un papel determinante en su definición y relevancia.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Todos estos indicadores se integran dentro de lo que combinados se conoce como el cuadro de mando, una valiosa herramienta de gestión que se utiliza para la toma de decisiones estratégicas y el control operativo de la empresa. Este cuadro de mando no solo permite monitorear el desempeño en tiempo real, sino que también facilita una comprensión clara de la situación empresarial a través de la presentación visual de métricas clave.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-10.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p El cuadro de mando incluye gráficos que representan la evolución de las ventas, la tendencia anual, tablas detalladas que muestren el avance de las ventas de los productos, y varios ratios que actúen como indicadores de:
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | El logro de los objetivos de <em>marketing.</em>
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | La penetración en el mercado de las marcas.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | La cartera de pedidos.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | La cobertura de distribución.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | El rendimiento de la distribución física.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | La rotación de las ventas.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | El costo de la comunicación.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-11.png', alt='Texto que describa la imagen')
        
    .row
      .col-md-7
        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Diseñar un KPI

    p.mb-5 Para diseñar un KPI es fundamental hacer un análisis de los factores que realmente afectan el modelo de negocio, como son:

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row
          .col-md-4.mb-4
            figure
                img(src='@/assets/curso/temas/tema3/img-13.png', alt='')
          .col-md-8
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Tipología y peso de los ingresos.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Tipología y peso de los gastos.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Productos y/o servicios que reportan más ingresos y aquellos que generan más gastos.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Comportamiento, compra media y tipos de clientes.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Nivel de satisfacción.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Relevancia para la empresa de la <em>web</em> corporativa o tienda <em>on-line.</em> 
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | Relevancia de las redes sociales en la gestión diaria.

    p.mb-5 De esta manera, se pueden extraer de cada uno de los indicadores de medición (ISOTools, s. f.).

    .row
      .col-md-7
        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Integración de datos y visualización

    p.mb-5 En el contexto actual, no se piensa que el registro de KPI se lleve de manera manual o física (aunque se puede realizar), así que es importante llevar a cabo una investigación de mercado y disponibilidad de herramientas tecnológicas que se adapten a la empresa para la gestión de las mediciones.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este es un proceso que podría tornarse complejo según el tamaño de la organización. En grandes corporaciones, por lo general, existe un área que se dedica a la inteligencia de negocio, básicamente la integración entre plataformas tecnológicas y datos con el compendio de la información. Se captura y transforma datos para producir un <em>dashboard</em> o tableros de mando que dan cuenta en un solo lugar de toda la información y resultados de la organización. 
          br
          br
          | En algunos casos más sofisticados, aplican técnicas de inteligencia artificial, como el <em>machine learning,</em> para que las máquinas aprendan a interpretar y realizar predicciones con bases matemáticas teniendo en cuenta la experiencia y otras variables.

    p.mb-5 Para las pymes, este proceso es una realidad y está al alcance de todas, pero sí es necesario tener competencias digitales para adelantar esta tarea, entre otras, saber importar datos de las plataformas analíticas para luego integrarlas en un solo lugar. Microsoft Excel podría ser un excelente aliado que, si bien no es profesional para altos volúmenes de datos, podría ser una buena solución inicial para integrar y visualizar estadísticas generales.

    .row
      .col-md-7
        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Interpretación de indicadores de gestión (KPI)

    p.mb-5 En el ámbito del <em>marketing</em> digital es crucial para comprender el rendimiento de una estrategia y tomar decisiones informadas. Aquí hay algunas pautas generales para la interpretación de estos indicadores:

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-5(style="background-color:#FFFBE5")
          ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong>Comparación con objetivos:</strong> los KPI deben compararse con los objetivos establecidos inicialmente. Si un objetivo era aumentar la tasa de conversión en un 15 %, se debe evaluar si los KPI reflejan este aumento deseado.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong>Tendencias a lo largo del tiempo:</strong> analizar cómo los KPI han evolucionado con el tiempo es esencial. ¿Hay picos o valles en ciertos momentos? ¿Cómo se correlacionan con eventos específicos o cambios en la estrategia?
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong><em>Benchmarking:</em></strong> comparar los KPI con los estándares de la industria o con el rendimiento pasado de la empresa. Esto proporciona contexto sobre si los resultados son buenos, malos o promedio en relación con las expectativas.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong>Segmentación de datos:</strong> desglosar los KPI según diferentes segmentos puede proporcionar información valiosa. Por ejemplo, analizar el tráfico del sitio <em>web</em> por fuente (orgánico, pago, redes sociales) puede revelar qué canales son más efectivos.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong>Correlaciones:</strong> buscar correlaciones entre diferentes KPI. Por ejemplo, si hay un aumento en la tasa de clics (CTR) pero una disminución en la tasa de conversión, podría indicar que los visitantes no encuentran relevante la página de destino.
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong>Análisis de costos:</strong> relacionar los KPI con los costos asociados. ¿Está generando la campaña el retorno de inversión esperado? ¿Cuál es el costo por adquisición (CPA) y cómo se compara con el valor de por vida del cliente (CLV)?
              li.mb-0
                i.fas.fa-circle(style="color:#000")
                | <strong><em>Feedback</em> del usuario:</strong> integrar datos cualitativos, como comentarios de usuarios o encuestas, para obtener una comprensión más profunda de la experiencia del usuario y cómo se traduce en los KPI.

      p La interpretación efectiva de los KPI requiere un enfoque holístico y la capacidad de ver más allá de los números brutos para entender la historia que cuentan sobre el rendimiento de una estrategia de <em>marketing</em> digital.
      p.mb-5 Para complementar la información observe el siguiente video del SENA denominado “Interpretación de indicadores de gestión (KPI)”.

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nCUYv5oPwJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

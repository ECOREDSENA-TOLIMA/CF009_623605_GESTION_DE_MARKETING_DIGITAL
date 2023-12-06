export default {
  global: {
    componenteFormativo: 'Formalización de ventas y evaluación de resultados',
    descripcionCurso:
      'Este material de estudio y formación se centra en aspectos comerciales, incluyendo normativas, técnicas de ventas e indicadores de gestión de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad contractual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Código del comercio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Contratos comerciales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estatuto del consumidor',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Objeciones en la negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Razones de las objeciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de objeciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión y satisfacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mediciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'KPI',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3 Estatuto del consumidor',
      referencia:
        'Vergara, F. (2021). Cómo hacer anuncios en Tik Tok en el 2022 - Curso gratis de TikTok Ads. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Pp214DIxfdc',
    },
    {
      tema: '1.3 Estatuto del consumidor',
      referencia: 'Facebook. (s. f.) Marketplace. Facebook.',
      tipo: 'Artículo',
      link: 'https://www.facebook.com/help/1713241952104830/?helpref=uf_share',
    },
    {
      tema: '1.3 Estatuto del consumidor',
      referencia:
        'Facebook. (s.f.). ¿Cómo creo una página en Facebook? Facebook,',
      tipo: 'Artículo',
      link: 'https://www.facebook.com/help/104002523024878/?helpref=uf_share',
    },
    {
      tema: '1.3 Estatuto del consumidor',
      referencia: 'Facebook. (s.f.). Información sobre Facebook Reels. Meta.',
      tipo: 'Artículo',
      link:
        'https://www.facebook.com/business/help/581040529926114?id=376980407544978',
    },
    {
      tema: '1.3 Estatuto del consumidor',
      referencia: 'Facebook. (s.f.). Meta business suite. Meta.',
      tipo: 'Artículo',
      link: 'https://www.facebook.com/business/tools/meta-business-suite',
    },
    {
      tema: '3.2 KPI',
      referencia:
        'Carbellido. C. (s.f.). KPIs en redes sociales: cómo medir los objetivos en social media [Plantillas]. Un Community Manager.',
      tipo: 'Artículo',
      link: 'https://www.uncommunitymanager.es/kpis-redes-sociales/',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo PHVA',
      significado:
        '(Planificar-Hacer-Verificar-Actuar). Es una estrategia interactiva de resolución de problemas para mejorar procesos e implementar cambios. Es considerado un método de mejora continua, toda vez que no es un proceso que se ejecuta una sola vez, sino una espiral continua que busca mejorar los procesos e iteraciones.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'tablero o cuadro de mandos, en referencia a un documento en el que se reflejan, mediante representación gráfica, las principales métricas o KPI que intervienen en la consecución de los objetivos',
    },
    {
      termino: 'Inteligencia de negocio',
      significado:
        '<em>Business Intelligence</em> (BI) es el conjunto de conceptos, métodos, aplicaciones, prácticas y capacidades que gestionan la información o los datos de una empresa a través de su recopilación, análisis y transformación con el propósito de mejorar la toma de decisiones estratégicas.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        '(aprendizaje automático) es la rama de la inteligencia artificial que dota a las máquinas de la habilidad de “aprender” a partir del análisis de datos con el fin de identificar patrones y apoyar en la toma decisiones con la mínima intervención humana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia (2011). Ley 1480 de 2011. Estatuto del consumidor. (12 de octubre de 2011).',
      link: 'http://secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
    },
    {
      referencia:
        'ISOTools. (s.f.). KPI (Key Performance Indicators) indicadores clave de desempeño. ISOTools.',
      link: 'https://www.isotools.org/soluciones/procesos/kpis-indicadores/',
    },
    {
      referencia:
        'Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (2022, 20 de mayo). Interpretación de indicadores de gestión (KPI) [Archivo de vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
    {
      referencia:
        'Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (2022, 16 de septiembre). La validación de la información y diseño de indicadores de gestión [Archivo de vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=_pcuK2pm1UM',
    },
    {
      referencia:
        'Marketeros Latam. (2021). Ciclo de Deming: etapas e importancia. Marketeros Latam.',
      link:
        'https://www.marketeroslatam.com/ciclo-de-deming-etapas-e-importancia/',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). Protección del consumidor.',
      link:
        'https://www.mincit.gov.co/minindustria/estrategia-transversal/regulacion/proteccion-del-consumidor',
    },
    {
      referencia:
        'Presidencia de Colombia. (1971). Decreto 410 de 1971, por el cual se expide el Código de Comercio. (27 de marzo de 1971).',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

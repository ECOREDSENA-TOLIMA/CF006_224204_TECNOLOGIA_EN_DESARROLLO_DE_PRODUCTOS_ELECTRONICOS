export default {
  global: {
    componenteFormativo:
      'Ensamble de tarjetas electrónicas según especificaciones y normativa técnica',
    descripcionCurso:
      'Este componente formativo presenta los conceptos básicos acerca del ensamble de tarjetas electrónicas, teniendo en cuenta las normas internacionales relacionadas con el ensamble electrónico, además de revisar aspectos de la producción de tarjetas electrónicas que son necesarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación del ensamble de tarjetas electrónicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Equipos de ensamblaje electrónico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Técnicas y sistemas de microscopía óptica y ampliación de imágenes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Funcionalidades y características de accesorios',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Métodos de uso, procesos de ensamble, accionamiento y configuración',
            hash: 't_1_4  ',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Soldadura en electrónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Técnicas, tipos y propiedades de aleaciones y aceleradores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de uso y mantenimiento de herramientas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Características de soldabilidad',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Técnicas de retiro y limpieza de excesos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tratamiento térmico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Efectos del calor en componentes electrónicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnica de reflujo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Perfil ideal de temperatura',
            hash: 't_3_3',
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
        download: 'downloads/CFA_6_224204.pdf',
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
      tema: 'Técnicas de soldadura manual',
      referencia:
        'Techspray. (s. f.). <em>Ultimate Guide to Electronic Soldering.</em> ',
      tipo: 'Sitio web',
      link: 'https://www.techspray.com/ultimate-guide-to-electronic-soldering',
    },
    {
      tema: 'Defectos en la soldadura',
      referencia:
        'Seeed Studio. (2021). 13 <em>Common PCB Soldering Problems to Avoid.</em>',
      tipo: 'Sitio web',
      link:
        'https://www.seeedstudio.com/blog/2021/06/18/13-common-pcb-soldering-problems-to-avoid/',
    },
    {
      tema: 'Perfiles de temperatura del proceso de reflujo',
      referencia:
        'Microensamble. (2016c). <em>Perfil de temperatura para circuitos impresos.</em>',
      tipo: 'Sitio web',
      link:
        'https://microensamble.com/perfil-de-temperatura-circuitos-impresos/',
    },
    {
      tema: 'Técnica de reflujo',
      referencia:
        'Microensamble. (2016a). <em>¿Cómo se forma la soldadura SMT en los hornos de reflow?</em>',
      tipo: 'Sitio web',
      link: 'http://microensamble.com/soldadura-smt-hornos-reflow/',
    },
  ],
  glosario: [
    {
      termino: 'Componente',
      significado:
        'elemento electrónico que será adherido con soldadura a la tarjeta',
    },
    {
      termino: 'PCB',
      significado:
        'del nombre en inglés <em>Printed Circuit Board</em>, o tarjeta de circuito impreso, que contiene pistas en cobre que interconectan los componentes en un circuito.',
    },
    {
      termino: '<em>Pad</em>',
      significado:
        'dona de cobre puesta sobre la tarjeta que cuenta con un agujero que atraviesa la misma; la función del <em>pad</em> es alojar el pin de un componente.',
    },
    {
      termino: 'Pin',
      significado:
        'conexión externa de un componente que le permite hacer contacto eléctrico con los demás elementos del circuito.',
    },
    {
      termino: 'Componente tipo axial',
      significado:
        'es un componente electrónico de dos conexiones cuyos pines se ubican a lado y lado del cuerpo del componente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Das, S. (2021). SMT <em>Reflow Soldering Equipment / Machine. Electronics and You.</em>',
      link:
        'http://www.electronicsandyou.com/blog/smt-reflow-soldering-equipment-machine.html',
    },
    {
      referencia:
        '<em>Electronics notes (s. f.) Pick and Place Machine for PCB Assembly.</em>',
      link:
        'https://www.electronics-notes.com/articles/constructional_techniques/pcb-assembly-process-manufacture/pick-place-machine.php',
    },
    {
      referencia:
        'IPC (2010). IPC-A-610E-2010. <em>Acceptability of Electronic Assemblies.</em>',
    },
    {
      referencia:
        'Microensamble. (2016b). Los intermetálicos en una soldadura, ¿una pesadilla?',
      link: 'http://microensamble.com/',
    },
    {
      referencia:
        'Microensamble. (2016d). Precauciones con la mezcla de soldaduras normal con libre de plomo.',
      link: 'http://microensamble.com/',
    },
    {
      referencia:
        'MovilOne. (2018). Flux para soldar, qué es y cómo utilizarlo.',
      link:
        'https://www.movilone.es/blog/flux-para-soldar-que-es-y-como-utilizarlo/',
    },
    {
      referencia:
        'Qtsolder. (2021). <em>Solder Reflow Oven: PCB Assemble and Solder Paste.</em>',
      link:
        'https://www.qtsolder.com/solder-reflow-oven-pcb-assemble-and-solder-paste/',
    },
    {
      referencia:
        'Stakhniak, Y. (2012). <em>Choosing a soldering station. ToolBoom</em>',
      link:
        'https://toolboom.com/en/articles-and-video/how-to-choose-a-soldering-station/',
    },
    {
      referencia:
        'Soltec. (2010). Utilización de la máquina de limpieza por ultrasonidos SOLTEC 3300 ETH en la fábrica Eletech en Bitonto Bari Italia.',
      link: 'http://www.soltec.it/d1/es/limpieza-pcb-eletech',
    },
    {
      referencia:
        'Voigt, R. (s. f.). <em>Selecting a Reflow Oven. DDM Novastar</em>',
      link:
        'https://www.ddmnovastar.com/smt-quick-tips-selecting-a-reflow-oven',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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

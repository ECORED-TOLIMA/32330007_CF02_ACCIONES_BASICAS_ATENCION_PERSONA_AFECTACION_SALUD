export default {
  global: {
    Name: 'Valoración inicial y primeros auxilios básicos',
    Description:
      'Este componente aborda la valoración inicial del lesionado, el reconocimiento de signos vitales y la aplicación de intervenciones básicas de primeros auxilios. Incluye el manejo de heridas y hemorragias, la vía aérea, las lesiones osteomusculares y la inmovilización, el reconocimiento de eventos críticos y del <em>shock</em>, y la evaluación, la comunicación con el sistema de emergencias y la preparación para el traslado, con el fin de brindar una atención oportuna, segura y acorde con los protocolos establecidos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Signos vitales y valoración inicial del lesionado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pulso y respiración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Circulación y valores de referencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Secuencia de evaluación y valoración cefalocaudal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Evaluación primaria (ABCDE) y estado de conciencia (AVDI)',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Intervenciones, heridas y hemorragias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de intervención',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procedimientos básicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Heridas: concepto, tipos y manejo básico',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de hemorragia',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Técnicas de control de hemorragias externas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de la vía aérea y lesiones osteomusculares',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Permeabilización de la vía aérea',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Posición lateral y protección térmica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Lesiones osteomusculares y articulares',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Inmovilización: principios y técnicas básicas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reconocimiento de eventos críticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Convulsiones y desmayo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Infarto y accidente cerebrovascular',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Intoxicaciones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ahogamiento',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación, comunicación y traslado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Signos de alarma',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Seguimiento del lesionado',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comunicación con emergencias',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Preparación para el traslado',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: '<em>Shock</em>: hipovolemia, hipotermia y anafilaxia',
            hash: 't_5_5',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Anafilaxia',
      significado:
        'Reacción alérgica grave y de inicio rápido que compromete la respiración y la circulación, y que puede evolucionar hacia el <em>shock</em> anafiláctico.',
    },
    {
      termino: 'AVDI',
      significado:
        'Escala que clasifica el estado de conciencia en alerta, respuesta a la voz, respuesta al dolor e inconsciente, dentro del componente D del método ABCDE.',
    },
    {
      termino: 'Cianosis',
      significado:
        'Coloración azulada de la piel, los labios o las uñas que indica falta de oxígeno en los tejidos.',
    },
    {
      termino: 'Evaluación primaria (ABCDE)',
      significado:
        'Método sistemático que valora y trata en orden la vía aérea, la respiración, la circulación, el estado neurológico y la exposición, para identificar lo que amenaza la vida.',
    },
    {
      termino: 'Hipovolemia',
      significado:
        'Disminución del volumen de sangre o de líquidos circulantes, generalmente por hemorragia, quemaduras o deshidratación, que puede conducir al <em>shock</em>.',
    },
    {
      termino: 'Llenado capilar',
      significado:
        'Tiempo que tarda la piel o el lecho de la uña en recuperar su color tras presionarla; un valor mayor de dos segundos sugiere compromiso circulatorio.',
    },
    {
      termino: 'Perfusión tisular',
      significado:
        'Llegada de sangre oxigenada a los tejidos y órganos; su falla es la base fisiológica del <em>shock</em>.',
    },
    {
      termino: 'Posición lateral de seguridad',
      significado:
        'Postura de costado que mantiene la vía aérea permeable y facilita el drenaje de fluidos en la persona inconsciente que respira.',
    },
    {
      termino: 'Tracción mandibular',
      significado:
        'Maniobra de apertura de la vía aérea que desplaza la mandíbula hacia adelante sin mover el cuello, indicada ante sospecha de lesión cervical.',
    },
    {
      termino: 'Valoración cefalocaudal',
      significado:
        'Examen ordenado de la cabeza a los pies que se realiza después de la evaluación primaria para detectar lesiones no evidentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'American College of Surgeons. (2018). Advanced Trauma Life Support (ATLS): Student course manual (10.ª ed.). American College of Surgeons.',
      link: '',
    },
    {
      referencia:
        'American Heart Association. (2020). 2020 Guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. American Heart Association.',
      link: '',
    },
    {
      referencia:
        'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja. (2025). International first aid, resuscitation and education guidelines 2025.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Guías básicas de atención médica prehospitalaria (2.ª ed.).',
      link: 'https://www.minsalud.gov.co/Documentos%20y%20Publicaciones/Guias%20Medicas%20de%20Atencion%20Prehospitalaria.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 926 de 2017, por la cual se reglamenta el desarrollo y operación del Sistema de Emergencias Médicas. Ministerio de Salud y Protección Social.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.926%20de%202017.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}

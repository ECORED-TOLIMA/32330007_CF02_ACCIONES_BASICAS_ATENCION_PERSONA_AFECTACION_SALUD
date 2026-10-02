<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Intervenciones, heridas y hemorragias
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img01.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 Valorar sin actuar deja el trabajo a medias. Las acciones que siguen a esa valoración buscan preservar la vida, evitar el deterioro de la persona afectada y favorecer su recuperación mientras llega la atención especializada. Las intervenciones se fundamentan en la valoración previa del paciente y deben ejecutarse sin demora, con seguridad y en orden.
        .cajon.cajon.c01.color-secundario.p-4.mb-3
          p.mb-0 El objetivo principal de las intervenciones en primeros auxilios es estabilizar al lesionado, controlando las condiciones que representan riesgo vital, como la obstrucción de la vía aérea, la dificultad respiratoria o las hemorragias. La estabilización se articula con el método ABCDE, el cual orienta la priorización de las acciones en función de la gravedad de la situación.
        p.mb-0 El recorrido avanza desde la mirada general sobre lo que puede hacerse hasta el gesto preciso que detiene una pérdida de sangre. Cada apartado reduce la distancia entre saber qué hacer y saber cómo hacerlo, y señala hasta dónde llega la responsabilidad del primer respondiente. Cinco apartados lo componen, y avanzan de la clasificación de las acciones hasta la técnica que detiene el sangrado:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img02.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img03.svg", alt="").img100.m-auto
                  h4.text-center Tipos de intervención
                  p.text-center La diferencia entre las acciones inmediatas, las de soporte y las preventivas, que ordena qué se hace primero y qué se hace después.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img04.svg", alt="").img100.m-auto
                  h4.text-center Procedimientos básicos
                  p.text-center Las cuatro maniobras centrales del primer respondiente sobre la vía aérea, la respiración, el sangrado y las lesiones, dentro de los límites de su formación.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img05.svg", alt="").img100.m-auto
                  h4.text-center Heridas
                  p.text-center Su concepto, la clasificación según el mecanismo que las produce y el manejo básico que evita la infección y prepara la atención médica.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="").img100.m-auto
                  h4.text-center Tipos de hemorragia
                  p.text-center La distinción entre sangrado arterial, venoso y capilar, y entre hemorragia externa e interna, que define la urgencia de la respuesta.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="").img100.m-auto
                  h4.text-center Técnicas de control de hemorragias externas
                  p.text-center La presión directa, el vendaje compresivo y el torniquete, en el orden en que se aplican y con las precauciones que exige cada una.
    p Los cinco apartados se ordenan de lo general a lo particular. La clasificación y los procedimientos aportan el marco, mientras que las heridas y las hemorragias constituyen el problema más frecuente al que ese marco se aplica <b>En la práctica</b>.
    p.mb-0 Antes de ejecutar cualquier maniobra conviene saber cuál corresponde y en qué momento, ya que no todas las acciones tienen la misma urgencia. Distinguir lo que se hace de inmediato de lo que puede esperar es la decisión que organiza el resto de la atención.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipos de intervención
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img08.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 No todo lo que se hace por una persona afectada tiene la misma urgencia ni el mismo propósito. Por eso las acciones se agrupan según su finalidad y el momento en que se aplican dentro del proceso de atención. Agruparlas por finalidad posibilita organizar la respuesta de manera lógica, facilitando la toma de decisiones y garantizando que la respuesta se enfoque en las necesidades prioritarias del lesionado.
        br
        br
        p.mb-0 La eficacia de los primeros auxilios depende menos del número de maniobras que del momento en que se aplican. Una acción correcta hecha tarde pierde su efecto, y una acción secundaria hecha antes de tiempo retrasa la que salva la vida.
    p.mb-4 Desde una perspectiva operativa, las intervenciones se pueden agrupar en tres tipos principales, que la tabla 3 describe con ejemplos de aplicación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de las intervenciones en primeros auxilios
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de intervención
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Aplicación en la atención
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Inmediatas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Acciones dirigidas a controlar situaciones que representan riesgo vital.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Apertura de la vía aérea, control de hemorragias, verificación de la respiración.
              tr
                td(data-aos="fade-down") De soporte
                td(data-aos="fade-down") Medidas orientadas a estabilizar la condición del paciente.
                td(data-aos="fade-down") Posición lateral de seguridad, control del entorno, monitoreo del estado del lesionado.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Preventivas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Acciones destinadas a evitar complicaciones adicionales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Uso de elementos de protección, inmovilización, protección térmica del paciente.
    p La clasificación anterior muestra que la atención avanza por etapas, desde las acciones inmediatas hasta las de soporte y prevención, a medida que evoluciona la persona. Reconocer a qué etapa pertenece cada acción evita adelantar cuidados secundarios mientras persiste una condición que compromete la vida.
    p.mb-0 Esa progresión se concreta en un grupo reducido de procedimientos que cualquier primer respondiente puede ejecutar sin equipos especializados. Conocer su técnica y su orden separa una ayuda eficaz de una intención sin resultado.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Procedimientos básicos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img10.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.p-3.mb-2
          p.mb-0 Detrás de cada decisión hay un grupo reducido de maniobras al alcance de cualquier persona formada. Se denominan procedimientos básicos y son las acciones concretas que el respondiente ejecuta para controlar o mitigar las condiciones identificadas en la valoración. Las maniobras se aplican de manera técnica, segura y dentro del alcance de la formación, evitando intervenciones que puedan generar complicaciones.
        p.mb-2 La valoración identifica el problema y cada problema tiene su maniobra. Cuatro de ellas concentran la mayor parte de lo que resuelve un primer respondiente sin equipos especializados, y conviene reconocerlas por su nombre antes de entrar en su ejecución:
        .row.justify-content-center.align-items-center.mb-2
          .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img09.svg', alt='')
          .col.col-lg-8.col-12.order-lg-2.order-2
            .cajon.c02.px-4.py-4.d-flex.align-items-center
              ul.lista-ul--color.lista-ul
                li 
                  i.fas.fa-heart-pulse
                  p.mb-0  La permeabilización de la vía aérea. 
                li 
                  i.fas.fa-heart-pulse
                  p.mb-0 La valoración y el apoyo de la respiración. 
                li 
                  i.fas.fa-heart-pulse
                  p.mb-0 El control de hemorragias. 
                li 
                  i.fas.fa-heart-pulse
                  p.mb-0 La inmovilización de lesiones.
        p.mb-0 Los procedimientos mencionados contribuyen a intervenir de manera directa sobre las condiciones que representan mayor riesgo, reduciendo la probabilidad de deterioro clínico.
    p.mb-4 Cada uno de ellos responde a una prioridad distinta y se ejecuta con una secuencia propia, que conviene conocer antes de intervenir. Distinguir en qué consiste cada maniobra y en qué momento se aplica reduce la improvisación y protege tanto a la persona afectada como a quien asiste:
    .row.justify-content-center.mb.lg-4
      .col.col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/img11.svg', alt='')
          .tarjeta.color-secundario.p-3(x="31%" y="38%" numero="1")
            p Se evalúa la respuesta del paciente, se realiza la maniobra de frente y mentón en ausencia de trauma y se verifica que la vía aérea esté libre de objetos, vómito o secreciones. 
            p.mb-0 <b>En la práctica</b>: ante un comensal que se desploma en un restaurante y no responde, se le inclina la cabeza y se comprueba que la lengua no obstruya el paso del aire.
          .tarjeta.color-secundario.p-3(x="69%" y="38%" numero="2")
            p Se revisa el movimiento del pecho y se percibe el flujo de aire en la mejilla durante diez segundos. Si la persona no respira, se activa el sistema de emergencias y se inicia la reanimación según la formación recibida. 
            p.mb-0 <b>En la práctica</b>: una persona rescatada de una piscina que no respira recibe compresiones y ventilaciones mientras llega la ambulancia.
          .tarjeta.color-secundario.p-3(x="31%" y="89%" numero="3")
            p Se identifica el tipo de sangrado, se aplica presión directa con gasa o paño limpio y se eleva la extremidad si es posible y no hay fractura. 
            p.mb-0 <b>En la práctica</b>: un corte profundo en el antebrazo de un carpintero se cubre con varias gasas y se presiona sin soltar durante diez minutos.
          .tarjeta.color-secundario.p-3(x="69%" y="89%" numero="4")
            p Se evalúa la lesión y la zona afectada, se inmoviliza con férula, vendaje o elementos disponibles y se verifica la circulación, la sensibilidad y el color distales. 
            p.mb-0 <b>En la práctica</b>: un tobillo deforme tras una caída se fija con una revista y dos vendas sin intentar enderezarlo.
    .row.justify-content-center.col-12.mb-4
      figure.movil
        img(src='@/assets/curso/temas/t2/img12.svg', alt='')
    p.mb-4 Los cuatro procedimientos siguen el orden del método ABCDE. La vía aérea va primero porque sin ella no hay respiración; esta va antes que el sangrado porque la hipoxia mata en minutos, y la inmovilización cierra la lista porque protege, pero no salva la vida de inmediato.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img13.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.p-3.mb-3
          p.mb-0 La ejecución de las maniobras se realiza bajo principios de bioseguridad, utilizando elementos de protección personal cuando sea necesario y evitando el contacto directo con fluidos corporales. Además, se mantiene una vigilancia continua del estado del lesionado, ya que la evolución de la condición puede requerir ajustes en la intervención.
        .row.justify-content-center.align-items-center.mb-3
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img14.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            .cajon.cajon.c04.px-3.py-3
              p.mb-0(data-aos="fade-down") Un procedimiento básico no cura, estabiliza. Su éxito no se mide por lo que resuelve, sino por lo que impide que empeore mientras llega la ayuda especializada.
        p.mb-0 Aplicar estos procedimientos con bioseguridad y vigilancia constante forma parte de la técnica misma, y no es un añadido. Unos guantes, una barrera improvisada y una revisión periódica del estado de la persona sostienen el resultado de cada maniobra hasta que llegue la ayuda.
    p.mb-0 Entre esas maniobras, la que actúa sobre la piel abierta exige comprender antes qué ocurre cuando esa piel pierde su continuidad. El tipo de lesión determina el riesgo de sangrado y de infección, y con ello el cuidado que corresponde en cada caso.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Heridas: concepto, tipos y manejo básico
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img15.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Cuando la piel se abre, el cuerpo pierde su primera barrera de defensa. Esa pérdida de continuidad de la piel o de las mucosas, producida por un agente externo, es lo que se denomina herida. Abre una puerta de entrada a los microorganismos y puede comprometer los tejidos situados debajo, como músculos, vasos sanguíneos, nervios o huesos (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2025). Su gravedad depende de la profundidad, la extensión, la localización, el objeto que la produjo y el grado de contaminación.
    p.mb-4 En la atención inicial, las heridas se valoran después de asegurar la vía aérea, la respiración y la circulación. Una herida rara vez mata por sí misma, salvo que sangre en abundancia o afecte el tórax, el abdomen o el cuello. Aun así, su manejo temprano evita la infección, reduce el dolor y facilita el trabajo del personal de salud que continuará la atención.
    .row.justify-content-center.align-items-center.mb-3
      .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img16.svg', alt='')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-3.py-3
          p.mb-0(data-aos="fade-down") La Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja (2020) recomienda limpiar las heridas superficiales con agua limpia a chorro, cubrirlas con un apósito limpio y evitar aplicar sobre ellas sustancias irritantes. El alcohol, las pomadas caseras, el café o la tierra dañan el tejido y favorecen la infección. Los objetos incrustados no se retiran, porque pueden estar taponando un vaso sanguíneo, sino que se fijan en su posición.
    p.mb-4 El agente que produce la lesión determina su aspecto, su profundidad y el riesgo que conlleva, de modo que no todas se atienden de la misma forma. Distinguir unas de otras orienta el cuidado inmediato y advierte cuándo la atención en el lugar resulta insuficiente:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Heridas abrasivas o raspaduras")
            .col-12.mb-4.mb-md-0
              p.mb-0 Producidas por fricción contra una superficie áspera, afectan las capas superficiales de la piel, arden y sangran poco pero suelen estar sucias. Se lavan con abundante agua limpia, se cubren con un apósito y se vigila la aparición de infección. Ejemplo frecuente: el raspón en la rodilla de un niño que cae de la bicicleta en un andén.
          .row(numero="2" titulo="Heridas cortantes")
            .col-12.mb-4.mb-md-0
              p.mb-0 Causadas por objetos con filo, como vidrio o cuchillos, tienen bordes limpios y sangran con facilidad porque seccionan vasos. Se controla el sangrado con presión directa, se lava cuando el sangrado cede y se cubre. Si son profundas o abren la piel más de un centímetro requieren valoración médica. Ejemplo frecuente: el corte con una lata en la mano de una operaria.
          .row(numero="3" titulo="Heridas punzantes")
            .col-12.mb-4.mb-md-0
              p.mb-0 Producidas por objetos afilados y largos, como clavos o puntillas, tienen un orificio pequeño pero pueden ser profundas y contaminadas, con riesgo de tétanos. Se lava la zona sin hurgar, se cubre y se remite para valoración y vacunación. Ejemplo frecuente: la puntilla que atraviesa la suela del zapato de un albañil en una obra.
          .row(numero="4" titulo="Heridas contusas y laceradas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Causadas por golpes con objetos romos o por desgarro, tienen bordes irregulares, tejido machacado y hematoma. Se limpian, se controla el sangrado y se cubren; requieren valoración porque suelen necesitar sutura. Ejemplo frecuente: la herida en el cuero cabelludo tras un golpe contra el borde de una mesa.
          .row(numero="5" titulo="Heridas penetrantes y con objeto incrustado")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ingresan a una cavidad del cuerpo o conservan el objeto dentro. No se retira el objeto; se fija con apósitos a su alrededor, se cubre la herida y se activa el sistema de emergencias de inmediato. Ejemplo frecuente: una varilla que atraviesa el muslo de un trabajador en una construcción.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img17.jpg', alt='')
    p Los cinco tipos comparten tres reglas de manejo. Se lavan las manos y se usan guantes antes de tocar la herida, se lava con agua limpia y no con sustancias irritantes, y se cubre con material limpio para protegerla. Lo que cambia es la urgencia. La raspadura se resuelve en el lugar; la herida penetrante exige ambulancia.
    p.mb-4 No toda herida se resuelve en el lugar. Cuatro criterios indican cuándo conviene remitir a la persona a un servicio de salud, y se relacionan con la zona comprometida, el tamaño, el origen de la lesión y la condición de quien la sufre:
    .row.align-items-center.mb-4
      .col-lg-11.col-12
        LineaTiempoE.color-secundario
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img18.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Heridas en zonas delicadas
              p Comprometen la cara, los ojos, los genitales, las manos o una articulación. Una cortada en la palma puede afectar tendones aunque parezca superficial.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img19.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Heridas amplias o de bordes separados
              p Superan un centímetro, dejan los bordes abiertos o el tejido machacado. Una laceración en la pierna con un machete suele requerir sutura.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img20.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Mordeduras y heridas punzantes
              p Provienen de un animal o de una persona, o de un objeto que penetra profundo. Un clavo oxidado en el pie exige vacuna antitetánica.
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img21.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Heridas en personas con riesgo agregado
              p Quien vive con diabetes cicatriza con dificultad. También requiere valoración la herida cuyo sangrado no cede tras diez minutos de presión directa.
    p.mb-4 Reconocer esos criterios evita dos errores frecuentes, que consisten en minimizar una lesión grave y en llevar a urgencias una herida menor. La decisión no depende del tamaño, sino de la profundidad, la ubicación y la forma en que se produjo la lesión.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img22.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-1
          p.mb-0(data-aos="fade-down") Cuando la sangre sale en abundancia, la limpieza deja de ser la prioridad y el objetivo pasa a ser detener la pérdida. Para lograrlo conviene precisar de dónde proviene el sangrado y con qué rapidez avanza, porque no todas las hemorragias se comportan igual.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipos de hemorragia
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c03.px-4.py-3.h-100.w-100
          p(data-aos="fade-down") La sangre que se pierde no se recupera en el lugar del incidente, y de ahí la urgencia de detenerla. Controlar el sangrado es una de las intervenciones prioritarias de la atención inicial, porque esa pérdida compromete la vida en pocos minutos. En este contexto, identificar y controlar a tiempo una hemorragia contribuyen a prevenir el desarrollo de estados de <em>shock</em> y otras complicaciones asociadas a la disminución del volumen sanguíneo.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img23.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Las hemorragias pueden clasificarse según diferentes criterios que hacen posible identificar su origen, gravedad y forma de manejo. Clasificarlas resulta esencial en la atención inicial, ya que orienta la toma de decisiones y la selección de las medidas que mejor controlan el sangrado.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img24.jpg', alt='') 
    p.mb-4 El color de la sangre y la forma en que sale del cuerpo indican qué vaso resultó comprometido, y ese dato anticipa la rapidez con que puede perderse el volumen. La siguiente tabla reúne esas características junto con su interpretación en la atención:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Clasificación de las hemorragias según el vaso afectado
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de hemorragia
                th(data-aos="fade-down")(style= "width: 40%") Características
                th(data-aos="fade-down")(style= "width: 40%") Interpretación en la atención
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Arterial
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sangre de color rojo brillante, que sale a presión y de forma pulsátil.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indica alta gravedad y requiere control inmediato por riesgo de pérdida rápida de volumen.
              tr
                td(data-aos="fade-down") Venosa
                td(data-aos="fade-down") Sangre de color rojo oscuro, de flujo continuo y abundante.
                td(data-aos="fade-down") Puede generar pérdida significativa de sangre si no se controla oportunamente.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capilar
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sangrado superficial, de baja intensidad y salida uniforme.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Generalmente no representa riesgo vital, pero requiere limpieza y protección.
    p La diferencia entre un sangrado y otro no es un detalle descriptivo, porque marca el tiempo disponible para actuar. Una pérdida arterial exige presión inmediata y traslado urgente, mientras que una venosa admite una compresión sostenida. En ambos casos, la observación del sangrado guía la conducta y la información que recibe el servicio de emergencias.
    p.mb-4 Además del vaso comprometido, importa hacia dónde se dirige la sangre que se pierde, porque de ello depende lo que puede hacerse en el lugar. Esa distinción separa las situaciones que admiten una acción directa de aquellas en que la prioridad consiste en reconocer y trasladar:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img25.svg", alt="alt").img80.m-auto
          h4.text-center Hemorragia externa
          p La sangre sale al exterior a través de una herida, es fácil de identificar y requiere control inmediato para evitar pérdida excesiva de sangre. Son ejemplos los cortes y laceraciones, las raspaduras profundas, el sangrado nasal y las heridas penetrantes.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img26.svg", alt="alt").img80.m-auto
          h4.text-center Hemorragia interna
          p La sangre no sale al exterior y se acumula dentro del cuerpo, es difícil de identificar y tiene alto riesgo de complicaciones. Se sospecha tras golpes fuertes en cabeza, tórax, abdomen o muslo, ante fracturas de huesos largos y cuando aparecen signos de <em>shock</em> sin sangrado externo.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img27.svg", alt="alt").img80.m-auto
          h4.text-center Riesgo principal compartido
          p En ambas la pérdida o acumulación de sangre compromete la circulación y puede causar <em>shock</em>, fallo de órganos o la muerte. La externa se controla en la escena; la interna solo se detiene en un hospital, por lo que exige traslado inmediato.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 La distinción tiene una consecuencia directa sobre la conducta. Frente a la hemorragia externa el primer respondiente puede hacer mucho; frente a la interna lo esencial es reconocerla. Se mantiene a la persona acostada y abrigada, no se le da nada por vía oral y se comunica la sospecha al sistema de emergencias para acelerar el traslado (American College of Surgeons, 2018).
    p.mb-4 La identificación del tipo de hemorragia facilita priorizar la intervención, aplicar la técnica de control que corresponde y reconocer signos de alarma asociados a la pérdida de volumen sanguíneo. Clasificar correctamente el sangrado orienta la elección de las medidas de control y protege la vida durante la atención inicial.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img28.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-3
          p.mb-0(data-aos="fade-down") Toda hemorragia que empapa una prenda o forma un charco se trata como grave, sin detenerse a clasificarla. El color de la sangre importa menos que la velocidad con que se pierde.
    p.mb-4 La cantidad de sangre visible engaña con frecuencia, porque una herida pequeña en una zona muy irrigada puede sangrar más que una extensa. Lo que orienta la conducta es el aspecto del sangrado y la velocidad con que aparece, observados durante unos segundos antes de intervenir. El aspecto y la velocidad del sangrado se reconocen así:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img29.svg', alt='')(style="width: 85%")
            h4.text-center Sangre roja brillante que sale a impulsos
            p.mb-4(data-aos="fade-down") Procede de una arteria, avanza con cada latido y exige presión directa inmediata porque la pérdida ocurre en pocos minutos.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img30.svg', alt='')(style="width: 85%")
            h4.text-center Sangre roja oscura de salida continua
            p.mb-4(data-aos="fade-down") Proviene de una vena, fluye de manera constante y se controla con presión sostenida y elevación de la zona afectada.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img31.svg', alt='')(style="width: 85%")
            h4.text-center Sangre que aflora en toda la superficie
            p.mb-4(data-aos="fade-down") Corresponde a los vasos más finos, cede con facilidad y su riesgo principal no es la pérdida, sino la contaminación. 
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img32.svg', alt='')(style="width: 85%")
            h4.text-center Ausencia de sangre visible con deterioro progresivo
            p.mb-4(data-aos="fade-down") Sugiere un sangrado interno, se acompaña de palidez, sudor frío y sed, y requiere traslado urgente sin dar nada por vía oral.
    p Las cuatro señales se reconocen sin retirar la ropa ni manipular la herida, lo que permite decidir en el mismo lugar del incidente. Cuando coexisten varias, se atiende primero la que pierde sangre con mayor rapidez.
    p.mb-0  Reconocido el origen del sangrado, queda la tarea de detenerlo con lo que haya en el lugar. Las técnicas que lo consiguen se aplican en un orden preciso, de la presión directa a las medidas de último recurso, y ese orden es el contenido que sigue.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Técnicas de control de hemorragias externas
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img33.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.p-3.mb-4
          p.mb-0 Reconocer de dónde sale la sangre no sirve de nada si no se sabe cómo detenerla. Las técnicas que lo logran actúan de forma directa sobre el punto que sangra, con el fin de mantener la perfusión de los tejidos y prevenir complicaciones como el <em>shock</em>. Su aplicación es inmediata y progresiva, en función de la gravedad del sangrado y de la respuesta del paciente.
        p.mb-0(data-aos="fade-down") Las guías internacionales actuales coinciden en que la presión directa firme y sostenida es la medida principal, y que el torniquete se reserva para hemorragias de extremidades que amenazan la vida y no ceden con la presión. La elevación del miembro y la compresión de puntos arteriales se consideran medidas complementarias que nunca reemplazan a la presión directa (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2020).
    p.mb-4 Las medidas para detener un sangrado no se aplican todas a la vez, sino en una progresión que empieza por la más sencilla y avanza solo si la pérdida continúa. La siguiente tabla reúne esas técnicas en ese mismo orden, con su aplicación en la atención:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Técnicas de control de hemorragias externas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Técnica
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Aplicación en la atención
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Presión directa
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aplicación de presión firme sobre la herida utilizando gasas o tela limpia, sin retirar el material empapado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Primera medida en cualquier hemorragia externa.
              tr
                td(data-aos="fade-down") Elevación del miembro
                td(data-aos="fade-down") Elevar la zona afectada por encima del nivel del corazón, si no hay fractura.
                td(data-aos="fade-down") Medida complementaria que apoya la disminución del flujo sanguíneo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Vendaje compresivo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Uso de vendas para mantener presión constante sobre la herida y liberar las manos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cuando la presión directa controla el sangrado y debe mantenerse.
              tr
                td(data-aos="fade-down") Compresión de puntos arteriales
                td(data-aos="fade-down") Presión sobre la arteria principal del miembro, por encima de la herida.
                td(data-aos="fade-down") Medida complementaria en hemorragias severas que no ceden con presión directa.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Torniquete
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Dispositivo que comprime completamente el flujo sanguíneo en una extremidad, con la hora de aplicación anotada.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Solo en hemorragias masivas de extremidades que amenazan la vida.
    p La presión directa constituye la técnica más efectiva y debe aplicarse de forma inmediata, ya que hace posible controlar la mayoría de las hemorragias externas. Si el sangrado persiste, se pueden complementar otras medidas como la elevación del miembro afectado y el uso de vendajes compresivos, siempre evaluando la respuesta del paciente.
    p.mb-4 La aplicación de la presión directa, por ser la técnica principal, se describe en los siguientes pasos:
    .cajon.cajon.c04.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 Cuando la presión directa no controla una hemorragia masiva de una extremidad, las guías actuales recomiendan el torniquete. Se prefiere uno comercial, colocado entre cinco y siete centímetros por encima de la herida, nunca sobre una articulación, y ajustado hasta que el sangrado se detenga. Una vez colocado no se afloja, se anota la hora y se informa al personal de salud.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img40.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-1
          p.mb-0(data-aos="fade-down") Con la sangre bajo control, la siguiente amenaza para la vida es la obstrucción del paso del aire. Reconocerla a tiempo y saber inmovilizar una lesión del aparato locomotor permite sostener a la persona afectada hasta la llegada del personal especializado.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Proteger las manos',
        texto:
          'Se colocan guantes o, en su defecto, se interpone una bolsa plástica o varias capas de tela entre la mano y la sangre. Caso típico: el conductor de un bus que atiende a un pasajero herido usa los guantes del botiquín del vehículo antes de tocar la herida.',
        imagen: '@/assets/curso/temas/t2/img34.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Exponer la herida',
        texto:
          'Se retira o corta la ropa que la cubre para ver su extensión y localizar el punto de sangrado, sin retirar objetos incrustados. Caso típico: se corta la manga de la camisa en lugar de intentar sacarla por la cabeza.',
        imagen: '@/assets/curso/temas/t2/img35.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Aplicar presión firme',
        texto:
          'Se coloca una gasa o tela limpia y se presiona con la palma de la mano o con los dedos, de manera continua y sin interrupciones, durante al menos diez minutos. Caso típico: no se levanta la gasa para comprobar si el sangrado paró, porque eso arrastra el coágulo en formación.',
        imagen: '@/assets/curso/temas/t2/img36.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Añadir material sin retirar el anterior',
        texto:
          'Si la sangre empapa la gasa, se coloca otra encima y se sigue presionando. Caso típico: sobre la primera gasa roja se apilan dos más y se mantiene la mano firme.',
        imagen: '@/assets/curso/temas/t2/img37.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Fijar con vendaje compresivo',
        texto:
          'Cuando el sangrado cede, se sujeta el apósito con una venda ajustada que mantenga la presión y se comprueba el pulso y el color por debajo del vendaje. Caso típico: se verifica que los dedos sigan tibios y rosados y que la persona los sienta.',
        imagen: '@/assets/curso/temas/t2/img38.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Vigilar y comunicar',
        texto:
          'Se revisan el estado de conciencia, el pulso y la piel cada pocos minutos y se informa al 123 la cantidad aproximada de sangre perdida. Caso típico: «se empaparon tres gasas y un pañuelo, la persona está pálida pero responde».',
        imagen: '@/assets/curso/temas/t2/img39.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>

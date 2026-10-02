<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Evaluación, comunicación y traslado
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Ninguna maniobra conserva su valor si la persona queda sola después de aplicarla. Vigilar, informar y preparar el traslado cierran la atención inicial, consolidan la información obtenida durante la valoración y garantizan la continuidad del cuidado hacia los servicios de salud. El cierre de la atención asegura que el paciente reciba atención sin demora y acorde con su estado, en especial en las situaciones que requieren manejo especializado.
    p.mb-4 La comunicación constituye un elemento clave dentro del cierre de la atención, ya que contribuye a transmitir información clara y precisa al sistema de emergencias. La información transmitida incluye el estado del paciente, los signos observados, las intervenciones realizadas y cualquier cambio relevante durante la atención. Una comunicación ordenada facilita la preparación del equipo de respuesta y mejora la calidad de la atención posterior.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-3
          p.mb-0(data-aos="fade-down") En Colombia, esa continuidad se organiza a través del Sistema de Emergencias Médicas, que articula la línea 123, los centros reguladores y las ambulancias (Ministerio de Salud y Protección Social, 2017). 
    p.mb-4 El cierre de la atención reúne cinco asuntos encadenados, que van de la observación sostenida hasta la entrega de la persona al servicio de salud. Recorrerlos en orden muestra cómo se mantiene el cuidado durante la espera y qué información debe acompañar el traslado:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img03.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img04.svg", alt="").img100.m-auto
                  h4.text-center Signos de alarma
                  p.text-center Las manifestaciones respiratorias, circulatorias y neurológicas que anuncian un deterioro y exigen intervención inmediata, en especial después de un procedimiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img05.svg", alt="").img100.m-auto
                  h4.text-center Seguimiento del lesionado
                  p.text-center La reevaluación periódica de los signos vitales, la conciencia y la respuesta a las intervenciones, con una frecuencia que depende de la gravedad del caso.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img06.svg", alt="").img100.m-auto
                  h4.text-center Comunicación con emergencias
                  p.text-center La llamada estructurada a la línea 123, la información que debe entregarse y la notificación de los cambios que se presenten mientras llega la ayuda.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img07.svg", alt="").img100.m-auto
                  h4.text-center Preparación para el traslado
                  p.text-center Las condiciones de seguridad, alineación y posición que deben cumplirse antes y durante la movilización de la persona hacia un servicio de salud.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img08.svg", alt="").img100.m-auto
                  h4.text-center Shock
                  p.text-center La falla de la perfusión de los tejidos, con sus signos de hipovolemia, y las condiciones asociadas de hipotermia y anafilaxia que el primer respondiente debe prevenir y reconocer.
    p Los cinco apartados forman un ciclo. Se vigila, se reconocen los cambios, se informan, se prepara el traslado y, durante todo el proceso, se previene el <em>shock</em>, que es la vía común por la que cualquier lesión grave conduce a la muerte.
    p.mb-0 El ciclo empieza por distinguir qué cambios anuncian un deterioro, porque sin ese reconocimiento la vigilancia se convierte en una rutina sin consecuencia. Algunas señales aparecen incluso cuando los signos vitales todavía se mantienen dentro de rangos aceptables.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Signos de alarma
    p.mb-4 El estado de una persona puede cambiar mientras llega la ambulancia. Las manifestaciones clínicas que anuncian ese deterioro advierten de la necesidad de una intervención inmediata. Su identificación es fundamental en la atención inicial, ya que posibilita reconocer situaciones de riesgo que pueden evolucionar rápidamente hacia una condición crítica.
    figure.mb-4 
      img(src='@/assets/curso/temas/t5/img09.png', alt='')
    p.mb-4 Después de un procedimiento, los signos que más importan son los que revelan que la intervención no logró su objetivo o generó una complicación. Cada uno señala un ajuste concreto sobre lo ya realizado y ninguno se corrige con la espera. Los más frecuentes durante la atención inicial son los siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img10.svg', alt='')(style="width: 85%")
            h4.text-center Dedos fríos o morados
            p.mb-4(data-aos="fade-down") El vendaje quedó muy apretado e interrumpe la circulación. Se afloja de inmediato.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img11.svg', alt='')(style="width: 85%")
            h4.text-center Dolor que aumenta
            p.mb-4(data-aos="fade-down") La férula comprime o desalinea la zona lesionada. Se corrige la posición y se inmoviliza otra vez. 
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img12.svg', alt='')(style="width: 85%")
            h4.text-center Respiración ruidosa
            p.mb-4(data-aos="fade-down") La posición de la cabeza obstruye el paso del aire. Se realinean cabeza y cuello.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img13.svg', alt='')(style="width: 85%")
            h4.text-center Apósito empapado
            p.mb-4(data-aos="fade-down") La presión no controló el sangrado. Se agrega material encima, sin retirar el anterior.
    p.mb-4 Cada uno de estos signos aparece después de una acción bien intencionada, y ahí está su enseñanza: la atención inicial no termina cuando se aplica la maniobra, sino cuando se comprueba que funcionó. Revisar lo hecho pocos minutos después permite corregir a tiempo, mientras el daño todavía es reversible, y esa comprobación distingue una intervención segura de una que agrava en silencio.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Los signos de alarma no se interpretan de manera aislada, sino según el sistema del cuerpo que comprometen. Agruparlos de esa forma permite pasar de la observación a la decisión, porque cada conjunto indica qué función está fallando y con qué urgencia debe actuarse. La figura 3 reúne los signos respiratorios, circulatorios y neurológicos con la interpretación que corresponde a cada grupo, en el mismo orden del método ABCDE.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Signos de alarma según el sistema comprometido
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img14.svg', alt='La figura 3 presenta los signos de alarma respiratorios, circulatorios y neurológicos, junto con su interpretación para reconocer alteraciones que pueden comprometer la vida. Identificarlos oportunamente permite actuar con mayor rapidez y solicitar atención de emergencia cuando la condición lo requiere.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img15.svg', alt='La figura 3 presenta los signos de alarma respiratorios, circulatorios y neurológicos, junto con su interpretación para reconocer alteraciones que pueden comprometer la vida. Identificarlos oportunamente permite actuar con mayor rapidez y solicitar atención de emergencia cuando la condición lo requiere.')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Los tres grupos comparten una misma lectura, ya que cualquiera de ellos, por sí solo, justifica la activación del sistema de emergencias sin esperar a que aparezcan los demás. La utilidad de la agrupación está en nombrar lo observado con precisión al momento de llamar, porque informar que la respiración está ausente, que la piel se encuentra fría y sudorosa o que la persona no responde permite preparar la respuesta antes de llegar al lugar.
    p La presencia de uno o más signos de alarma requiere una intervención inmediata y la activación del sistema de emergencias, ya que pueden indicar el inicio de una condición grave. Los signos observados se comunican con claridad al personal de salud, facilitando la continuidad de la atención.
    p.mb-4 Algunos signos no corresponden a un solo sistema, porque aparecen cuando varias funciones empiezan a fallar al mismo tiempo. Durante la espera conviene vigilarlos con la misma atención que los agrupados por sistema, ya que su aparición cambia la conducta inicial y obliga a revisar lo realizado. Los de mayor utilidad en la atención son los siguientes:
    .row.justify-content-center
      .col-lg-10.col-12
        PasosA.color-secundario.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Dolor que aumenta
              p.mb-0 Crece a pesar de la inmovilización y del reposo, o cambia de lugar. Puede indicar que la lesión avanza o que la férula comprime.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img16.svg', alt="")
          .row.justify-content-center
            .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t5/img17.svg', alt="")
            .col-lg-10(data-aos="fade-left")
              h4 Vómito repetido
              p.mb-0 Aparece sobre todo después de un golpe en la cabeza y sugiere aumento de la presión dentro del cráneo, por lo que exige traslado.
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Sangrado que reaparece
              p.mb-0 Vuelve a salir bajo un vendaje que ya lo había controlado, señal de que la presión cedió o de que el vaso sigue abierto.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img18.svg', alt="")
          .row.justify-content-center
            .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t5/img19.svg', alt="")
            .col-lg-10(data-aos="fade-left")
              h4 Sed intensa
              p Se acompaña de inquietud creciente o de somnolencia progresiva, y anuncia una pérdida de volumen que todavía no se refleja en los signos vitales.
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Cambios en la piel distal
              p.mb-0 El color o la temperatura por debajo de un vendaje o de una férula cambian cuando la circulación se está comprometiendo.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img20.svg', alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0 Los signos de alarma anuncian que la persona empeora, aunque sus signos vitales todavía parezcan aceptables, y por eso se comunican al sistema de emergencias en cuanto aparecen.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img21.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Una intervención bien hecha también se vigila. El vendaje que enfría los dedos, la férula que aumenta el dolor o la posición tras la cual la respiración se vuelve ruidosa son alarmas que exigen revisar lo realizado.
    p.mb-0 Esas señales solo se advierten cuando alguien las busca de manera deliberada y repetida. Esa búsqueda organizada, con intervalos definidos y un registro de lo observado, convierte la espera en un seguimiento útil para quien recibe a la persona.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Seguimiento del lesionado
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img22.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4 Observar una sola vez no basta, porque la condición de una persona lesionada cambia con el paso de los minutos. Esa observación continua durante la atención inicial permite identificar los cambios y ajustar a tiempo las intervenciones. El seguimiento es indispensable, ya que el estado del paciente puede evolucionar rápidamente, incluso después de una valoración inicial aparentemente estable.
        .cajon.cajon.c02.color-primario.px-4.py-3.mb-4
          p.mb-0 El seguimiento debe realizarse de manera constante, especialmente en pacientes con signos de alarma o en aquellos que han sido intervenidos por condiciones críticas como hemorragias, dificultad respiratoria o alteraciones neurológicas. La frecuencia de la reevaluación dependerá de la gravedad del caso, siendo más estricta en situaciones de mayor riesgo.
        .row.justify-content-center.align-items-center.mb-4
          .col.col-12
            .bloque-texto-f.color-secundario.pt-4.px-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto.text-center Las guías de atención prehospitalaria recomiendan repetir la valoración cada cinco minutos en la persona inestable y cada quince minutos en la estable.
              .bloque-texto-f__autor.mb-3
                h3.mb-0.text-ce (American College of Surgeons, 2018).
              .bloque-texto-f__avatar
                .bloque-texto-f__avatar__img
                  img(src='@/assets/curso/temas/t5/img23.svg', alt='')
    p.mb-4 La vigilancia se concreta en acciones breves que se repiten en cada ciclo y que dejan un registro de la evolución. Cumplirlas siempre en el mismo orden facilita advertir un cambio y transmitirlo con precisión al servicio de emergencias:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Repetir el ABCDE")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se verifica de nuevo que la vía aérea esté libre, que la respiración sea adecuada, que no haya sangrado nuevo y que el nivel de conciencia se mantenga o mejore.
          .row(numero="2" titulo="Contar los signos vitales")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se toman el pulso y la respiración, se revisa la piel y se compara con la medición anterior, porque la tendencia dice más que la cifra aislada.
          .row(numero="3" titulo="Revisar las intervenciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se comprueba que el vendaje no esté empapado, que la férula no comprima y que la posición lateral siga siendo estable y con la vía aérea libre.
          .row(numero="4" titulo="Preguntar y escuchar")
            .col-12.mb-4.mb-md-0
              p.mb-0 En la persona consciente se pregunta por el dolor, la sed, las náuseas y el mareo, y se atiende a lo que dice, porque el cambio subjetivo precede al objetivo.
          .row(numero="5" titulo="Registrar la hora y los hallazgos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se anotan en el celular o en un papel la hora, los signos y los cambios, para entregarlos al personal de la ambulancia sin depender de la memoria.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img24.jpg', alt='')
    p.mb-4 Las cinco acciones toman menos de dos minutos y convierten al primer respondiente en la memoria clínica del caso. Cuando la ambulancia llega, la información de mayor valor no es cómo estaba la persona al comienzo, sino cómo ha cambiado desde entonces.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Durante la espera, la escena cambia y la memoria falla. Quien atiende recuerda con nitidez el primer minuto, pero pierde el orden de lo que ocurre después, sobre todo cuando llegan familiares, vecinos o compañeros de trabajo que preguntan al mismo tiempo y mueven las cosas de lugar.
    p.mb-4 Una nota escrita en el celular o en cualquier papel convierte la observación en un dato utilizable. Basta con unas líneas anotadas mientras se vigila para que el personal de la ambulancia reciba una sola versión y no tres relatos distintos. Los datos que conviene registrar son los siguientes:
    .row.justify-content-center.mb-4.g-0
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img25.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.c01.p-4.d-flex.align-items-center
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Hora exacta del inicio del episodio, como el minuto en que la persona se desplomó en la fila de un banco. 
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Cambios en la respiración y en el color de la piel desde ese primer momento.
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Maniobras aplicadas con la hora de cada una, como el vendaje colocado a los diez minutos. 
            li.mb-3
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Medicamentos referidos por la persona o por un familiar, o los envases hallados cerca.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Nombre, edad y contacto de un allegado, obtenidos antes de la llegada de la ambulancia.
    p.mb-4 Los cinco datos se consignan en pocas frases y sin interrumpir la vigilancia. Su valor no está en el detalle clínico, sino en la continuidad, porque permiten reconstruir cómo evolucionó la persona desde el primer minuto. Quien los aporta deja de ser un testigo y pasa a formar parte de la cadena de atención, con información que ninguna valoración posterior puede recuperar.
    .row.justify-content-center.mb-0
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Reunir la información y transmitir son dos tareas distintas. La primera conserva lo ocurrido en la escena y la segunda lo pone en manos de quien decide, con un orden y una brevedad que el operador necesita para clasificar la urgencia. De esa conversación, casi siempre breve y en medio del ruido, depende el tipo de ayuda que se despacha y el tiempo que tarda en llegar al lugar.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Comunicación con emergencias
    p Lo que ocurre en la escena solo sirve cuando llega a quien puede actuar. De esa transmisión de información depende que los servicios de salud respondan a tiempo y con el recurso que corresponde. La transmisión clara y precisa de la información prepara al equipo de respuesta y mejora la continuidad del cuidado del paciente.
    p.mb-4 La comunicación debe ser breve, clara y organizada, evitando información innecesaria o confusa. Es importante mantener la calma durante la llamada y seguir las indicaciones del operador, ya que este puede brindar orientaciones adicionales mientras llega el apoyo especializado.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img26.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En Colombia, el acceso al Sistema de Emergencias Médicas se realiza a través de la línea 123, Número Único de Seguridad y Emergencias, disponible desde cualquier teléfono en los territorios donde se encuentra implementada. La Resolución 926 de 2017 reglamenta el desarrollo y la operación de ese sistema, y asigna a los Centros Reguladores de Urgencias, Emergencias y Desastres la coordinación entre quienes reciben la llamada y las instituciones que prestan la atención. La clasificación de la gravedad determina el recurso que se direcciona al lugar (Ministerio de Salud y Protección Social, 2017).
    p.mb-4 Lo que se dice en esa llamada se organiza en cuatro bloques de información, siempre en el mismo orden. Seguirlos evita omitir datos decisivos y facilita que el centro regulador defina, desde el primer momento, qué recurso corresponde enviar:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img27.svg', alt='')(style="width: 85%")
            h4.text-center ¿Dónde?
            p.mb-4(data-aos="fade-down") Dirección exacta, municipio, barrio o vereda, puntos de referencia y forma de acceso. En zona rural se indica la vía, el kilómetro y un sitio conocido, como una escuela o una tienda.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img28.svg', alt='')(style="width: 85%")
            h4.text-center  ¿Qué ocurrió?
            p.mb-4(data-aos="fade-down") Tipo de evento, mecanismo del trauma o síntomas iniciales, hora de inicio y número de personas afectadas. Se describe lo que se encontró, no lo que se supone.

          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img29.svg', alt='')(style="width: 85%")
            h4.text-center ¿Cómo está la persona?
            p.mb-4(data-aos="fade-down") Edad aproximada, nivel de conciencia según AVDI, respiración, sangrado, signos vitales medidos y cambios desde el inicio. Se usan las palabras de las escalas aprendidas.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img30.svg', alt='')(style="width: 85%")
            h4.text-center ¿Qué se hizo?
            p.mb-4(data-aos="fade-down") Intervenciones realizadas, como presión directa, posición lateral o inmovilización, y quién está a cargo. Se deja un número de contacto y se mantiene la línea abierta.
    p.mb-4 Los cuatro bloques cubren lo que el centro regulador necesita para despachar el recurso que la situación exige. No es lo mismo enviar una ambulancia básica a una persona consciente con un tobillo deforme que una ambulancia medicalizada a un paciente inconsciente con hemorragia. La calidad de la llamada define, en buena medida, la calidad de la respuesta.
    .row.justify-content-center.mb-4.g-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img31.svg', alt='')
      .col.col-lg-5.col-12.order-lg-2.order-2
        .cajon.c01.p-4.py-5.d-flex.align-items-center
          p.mb-0 La comunicación no termina con la primera llamada. Los cambios en la condición del lesionado se notifican de nuevo a la línea de emergencias, en especial si la persona pierde la conciencia, deja de respirar, vuelve a sangrar o convulsiona. Al llegar el personal de respuesta, el primer respondiente informa lo ocurrido y el estado del paciente en menos de un minuto, entrega sus anotaciones y se pone a disposición.
    p.mb-0 Con la ayuda en camino, queda una última tarea, que consiste en dejar a la persona lista para moverse sin perder lo logrado. El abrigo, la alineación del cuerpo, la revisión de las inmovilizaciones y el acompañamiento constante marcan la diferencia en ese momento.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Preparación para el traslado
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img32.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-3
          p.mb-0 Mover a una persona lesionada es, en sí mismo, un riesgo. Reducirlo exige un conjunto de acciones que garantizan una movilización segura hacia el servicio de salud, con la estabilidad conseguida hasta ese momento. La preparación del traslado constituye una fase crítica dentro de la atención inicial, ya que un traslado inadecuado puede generar complicaciones adicionales.
        p.mb-4 El traslado se realiza manteniendo la alineación corporal del paciente, especialmente en casos de trauma, evitando flexiones o movimientos innecesarios que puedan comprometer la columna o las extremidades lesionadas. Conviene además que el paciente se encuentre en la posición que su condición requiere, como posición lateral en caso de inconsciencia o semisentado en dificultad respiratoria.
        .row.justify-content-center.align-items-center.mb-0
          .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img33.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") La regla general es que el primer respondiente prepara el traslado, pero lo ejecuta el personal de la ambulancia, salvo que la escena sea insegura o la ayuda no pueda llegar. La preparación se organiza en los siguientes pasos:
    .cajon.cajon.c04.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 Los cinco pasos aplican una misma idea. Trasladar no es correr, sino mover sin deshacer lo que ya se logró. La prisa es el enemigo más frecuente del traslado, porque lleva a cargar mal, a olvidar la alineación y a dejar de vigilar a la persona justo cuando más puede cambiar.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c01.color-secundario.px-4.py-3
          p.mb-0 El traslado por medios propios es una decisión, no un reflejo. En la mayoría de las situaciones la mejor conducta consiste en esperar a la ambulancia, porque el personal que llega cuenta con equipos de inmovilización y con la posibilidad de iniciar tratamiento durante el recorrido. Mover a una persona lesionada sin esa capacidad convierte un trayecto corto en una fuente de daño adicional.
    p.mb-4 Cuando la espera deja de ser la opción más segura, la decisión se apoya en cuatro condiciones concretas de la escena, que se valoran juntas y no de manera aislada. Ninguna de ellas basta por sí sola para justificar el movimiento, aunque la combinación de dos o más suele inclinar la decisión. Las condiciones que orientan esa valoración son las siguientes:
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c03(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img39.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Seguridad del entorno
                p.mb-0 Presencia de un riesgo activo, como incendio, derrumbe o vía transitada, que amenaza por igual a la persona lesionada y a quien permanece a su lado.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img40.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Tiempo estimado de respuesta
                p.mb-0 Demora que informa el operador durante la llamada, dato que permite comparar el beneficio de esperar con el riesgo de mover a la persona.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img41.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Condiciones de la ruta
                p.mb-0 Estado del recorrido que debe hacerse, porque pendientes, terreno húmedo, escaleras estrechas o puentes peatonales modifican el esfuerzo y la seguridad del trayecto.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta-c03(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img42.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Personas disponibles para apoyar
                p.mb-0 Cantidad de quienes pueden sostener el peso de forma coordinada, ya que un traslado con apoyo insuficiente termina en caídas y en lesiones nuevas.
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t5/img43.png', alt='')
            h4 Seguridad del entorno
            p.mb-0 Presencia de un riesgo activo, como incendio, derrumbe o vía transitada, que amenaza por igual a la persona lesionada y a quien permanece a su lado.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t5/img44.png', alt='')
            h4 Tiempo estimado de respuesta
            p.mb-0 Demora que informa el operador durante la llamada, dato que permite comparar el beneficio de esperar con el riesgo de mover a la persona.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t5/img45.png', alt='')
            h4 Condiciones de la ruta
            p.mb-0 Estado del recorrido que debe hacerse, porque pendientes, terreno húmedo, escaleras estrechas o puentes peatonales modifican el esfuerzo y la seguridad del trayecto.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta-c03.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t5/img46.png', alt='')
            h4 Personas disponibles para apoyar
            p.mb-0 Cantidad de quienes pueden sostener el peso de forma coordinada, ya que un traslado con apoyo insuficiente termina en caídas y en lesiones nuevas.
    p.mb-4 Las cuatro condiciones se valoran en menos de un minuto y su lectura conjunta evita dos errores opuestos, esperar cuando el lugar ya es peligroso o improvisar un traslado cuando la ayuda está por llegar. La decisión correcta rara vez es la más rápida, sino la que conserva el trabajo realizado hasta ese momento.
    .row.justify-content-center.mb-0
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.px-4.py-3
          p.mb-0 Todo lo descrito hasta aquí protege funciones concretas, la vía aérea, la circulación, la alineación del cuerpo. Sin embargo, existe un deterioro que avanza por debajo de todas ellas y que explica por qué una hemorragia, una quemadura o una reacción alérgica pueden terminar igual. Comprender ese mecanismo permite reconocer el momento en que el cuerpo empieza a perder la batalla, aunque la persona todavía hable y responda.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Shock: hipovolemia, hipotermia y anafilaxia
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img47.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4 Una hemorragia, una quemadura o una reacción alérgica pueden desembocar en el mismo desenlace. Ese estado, conocido como <em>shock</em>, aparece cuando el organismo no logra mantener el riego de los tejidos, de modo que los órganos vitales dejan de recibir oxígeno y nutrientes suficientes. El <em>shock</em> genera un deterioro progresivo de las funciones corporales y, si no se interviene a tiempo, puede conducir a la muerte.
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 El <em>shock</em> puede originarse por diferentes causas, entre las que se incluyen la pérdida de sangre o líquidos (<em>shock</em> hipovolémico), fallas en la función cardíaca (<em>shock</em> cardiogénico), reacciones alérgicas graves (<em>shock</em> anafiláctico) o infecciones generalizadas (<em>shock</em> séptico). En la atención prehospitalaria, el más frecuente es el <em>shock</em> hipovolémico, especialmente asociado a hemorragias, lo que refuerza la importancia del control del sangrado como medida prioritaria.
        p.mb-0 El manejo inicial del <em>shock</em> se orienta a mantener la perfusión, prevenir el deterioro y garantizar condiciones mínimas de estabilidad. Para ello, se recomienda colocar al paciente en posición horizontal y, si no existe contraindicación, elevar las piernas para favorecer el retorno venoso. Resulta esencial, además, mantener la vía aérea permeable, controlar hemorragias, abrigar al paciente para prevenir la pérdida de temperatura y activar de manera inmediata el sistema de emergencias.
    p.mb-4 Junto al cuadro descrito aparecen con frecuencia otras dos condiciones que lo acompañan o lo imitan, y que comparten con él signos de alarma y medidas de soporte. Reconocerlas dentro del mismo conjunto evita atribuir al sangrado lo que corresponde al frío o a una reacción alérgica grave:
    .row.justify-content-center.aling-items-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="<em>Shock</em> hipovolémico")
            .col-12.mb-0.mb-md-0
              p Pérdida de sangre o de líquidos por hemorragia, quemaduras, vómito o diarrea intensos. Se reconoce por pulso rápido y débil, piel pálida y fría, respiración rápida e inquietud, y se maneja con control del sangrado, posición acostada, abrigo y activación del 123.
          .row(titulo="Hipotermia")
            .col-12.mb-0.mb-md-0
              p Descenso de la temperatura corporal por exposición al frío, la lluvia o el agua, frecuente en páramos y en lesionados que esperan sobre el suelo. Se reconoce por temblor, piel fría, confusión y somnolencia; se maneja retirando la ropa mojada, aislando del suelo, abrigando incluida la cabeza y trasladando.
          .row(titulo="<em>Shock</em> anafiláctico")
            .col-12.mb-0.mb-md-0
              p Reacción alérgica grave a picaduras, alimentos o medicamentos. Sus signos de alarma son hinchazón de labios, lengua o párpados, ronchas, dificultad para respirar, voz ronca y mareo. Se maneja con activación inmediata del 123, posición acostada o sentada si hay dificultad respiratoria y uso del autoinyector de adrenalina si la persona lo tiene.
          .row(titulo="Prevención de la anafilaxia")
            .col-12.mb-0.mb-md-0
              p Las personas con alergias conocidas evitan el agente, llevan identificación y su autoinyector, e informan a quienes las rodean. En brigadas y eventos se pregunta por alergias antes de administrar cualquier alimento o producto.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img48.png', alt='')
    p.mb-4 Las cuatro situaciones comparten un mismo principio de manejo. El primer respondiente no revierte el <em>shock</em>, sino que lo reconoce temprano, evita que avance y acelera la llegada de la atención especializada. La hipotermia, además, empeora cualquier <em>shock</em> porque el frío altera la coagulación, y por eso abrigar a la persona lesionada es una medida de soporte vital y no solo de comodidad (American College of Surgeons, 2018).
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img49.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") El <em>shock</em> no espera a que la persona parezca grave. Un pulso rápido y una piel fría y pálida bastan para acostar, abrigar, no dar nada por la boca y llamar al 123.
    p.mb-4 La falla circulatoria se instala antes de que la persona parezca grave, y por eso sus primeras manifestaciones pasan inadvertidas con facilidad. Reconocerlas durante la espera permite anticipar el deterioro, sostener las medidas de soporte y advertir al personal de salud sobre un cuadro que avanza, aunque la persona todavía converse. Las señales tempranas más constantes son las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img50.svg' alt='AvatarTop')
          h4.text-center Inquietud y ansiedad iniciales
          p.text-center Estado de agitación sin causa aparente, producido por la disminución de oxígeno que llega al cerebro. En una obra, un trabajador con fractura expuesta que no deja de moverse ni de hablar anuncia un deterioro en curso.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img51.svg' alt='AvatarTop')
          h4.text-center Piel fría, pálida y húmeda
          p.text-center Cambio en el riego de la piel cuando el organismo redirige la sangre hacia los órganos vitales. Tras una quemadura con agua hirviendo en una cocina, la frente sudorosa y la palidez preceden a la caída de la presión.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img52.svg' alt='AvatarTop')
          h4.text-center Pulso rápido y débil
          p.text-center Aceleración del corazón para compensar el volumen perdido, con un latido tan fino que apenas se percibe en la muñeca. En una finca, después de una herida con machete, el pulso sube mientras la persona aún conversa.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img53.svg' alt='AvatarTop')
          h4.text-center Respiración rápida y superficial
          p.text-center Aumento de la frecuencia respiratoria con entradas de aire cortas, señal de que la sangre transporta menos oxígeno del necesario. Durante una reacción alérgica a una picadura, el habla entrecortada acompaña a esa respiración acelerada.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img54.svg' alt='AvatarTop')
          h4.text-center Llenado capilar lento
          p.text-center Retorno demorado del color después de presionar la uña y soltarla, cuando supera los dos segundos. En un accidente de motocicleta en vía rural, el dato orienta la gravedad, aunque el sangrado externo sea escaso.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-4 Ninguna de las cinco señales confirma por sí sola el diagnóstico, y su fuerza está en aparecer juntas mientras los signos vitales todavía se mantienen dentro de rangos aceptables. Quien acompaña no necesita medir presión ni interpretar cifras, solo advertir que la persona cambia y sostener el abrigo y la posición acostada mientras llega la ayuda.
        .row.justify-content-center.mb-4.g-0
          .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t5/img55.svg', alt='')
          .col.col-lg-7.col-12.order-lg-2.order-2
            .cajon.c01.p-4.py-4.d-flex.align-items-center.h-100
              p.mb-0 La atención inicial no termina con la maniobra correcta, sino con el seguimiento sostenido hasta la entrega. Valorar, comunicar y trasladar pierden su efecto cuando ese seguimiento se interrumpe, porque el cuerpo puede cambiar en pocos minutos aun después de una intervención bien realizada. Advertir esos cambios y describirlos con precisión al personal de salud convierte al primer respondiente en un eslabón confiable del sistema de atención.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Evaluar signos vitales y estado general',
        texto:
          'Antes de mover a la persona se repite el ABCDE, se toman el pulso y la respiración y se confirma que no haya un sangrado activo ni un deterioro reciente. Ejemplo real: un lesionado que empeoró en los últimos minutos no se moviliza hasta que llegue la ambulancia.',
        imagen: '@/assets/curso/temas/t5/img34.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Mantener las intervenciones',
        texto:
          'Se verifica que la inmovilización esté firme, que el control del sangrado se conserve y que la vía aérea siga permeable, porque el movimiento puede deshacer lo logrado. Ejemplo real: se revisa la venda del antebrazo y se ajusta antes de levantar a la persona.',
        imagen: '@/assets/curso/temas/t5/img35.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Definir el medio de traslado',
        texto:
          'Se decide si la persona camina asistida, si va en camilla o en un medio improvisado, según la lesión, la distancia y los recursos, y si se espera la ambulancia. Ejemplo real: un esguince de tobillo admite el apoyo de dos personas; una sospecha de lesión de columna, no.',
        imagen: '@/assets/curso/temas/t5/img36.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Movilizar de forma controlada',
        texto:
          'Se mueve a la persona en bloque, con una sola persona que dirige y cuenta, manteniendo cabeza, tronco y piernas alineados, para prevenir el agravamiento de las lesiones. Ejemplo real: tres compañeros giran al trabajador caído al mismo tiempo, a la voz de quien sostiene la cabeza.',
        imagen: '@/assets/curso/temas/t5/img37.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Vigilar durante el traslado',
        texto:
          'Se mantiene la observación del estado de conciencia, la respiración y el sangrado, se abriga a la persona y se detiene el desplazamiento si aparece un signo de alarma. Ejemplo real: en un trayecto en camioneta desde una vereda, alguien viaja atrás junto a la persona y no en la cabina.',
        imagen: '@/assets/curso/temas/t5/img38.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>

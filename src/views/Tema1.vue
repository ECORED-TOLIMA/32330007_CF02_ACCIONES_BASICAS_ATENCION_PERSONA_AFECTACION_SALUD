<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Signos vitales y valoración inicial del lesionado
    p.mb-4 Cada persona atendida entrega, sin necesidad de equipos, un conjunto de datos que revela cómo está funcionando su organismo. Esos datos, conocidos como signos vitales, permiten identificar de manera rápida si existen alteraciones que comprometan la vida. Su valoración es una de las primeras acciones dentro de la atención inicial, ya que proporciona información clave para la toma de decisiones y la priorización de la atención.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c03.px-4.py-3.h-100.w-100
          p(data-aos="fade-down") En el contexto de una emergencia, la evaluación de los signos vitales hace posible reconocer condiciones críticas como dificultad respiratoria, alteraciones circulatorias o cambios en el estado general del paciente. Los signos vitales se valoran apenas la escena resulta segura, con técnicas básicas y criterios claros que orienten la intervención.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img02.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Interpretar bien los signos vitales no solo identifica los problemas inmediatos, sino que también sostiene el seguimiento continuo del estado del lesionado. Así se detectan los cambios y se comunica información precisa al sistema de emergencias, lo que hace la atención más segura y organizada.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img01.jpg', alt='') 
    p.mb-4 El aprendizaje de este tema avanza por capas, desde lo que se percibe con las manos hasta el método que organiza la revisión completa. Cada uno de los cinco momentos que lo componen prepara la decisión que viene después. Conocerlos en conjunto ayuda a situar cada dato dentro del proceso de atención:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img03.svg' alt='AvatarTop')
          h4.text-center Pulso y respiración
          p.text-center Los dos signos que se valoran primero, porque informan sobre la actividad del corazón y sobre la entrada de oxígeno al organismo. Se palpan y se cuentan en menos de un minuto.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img04.svg' alt='AvatarTop')
          h4.text-center Circulación y valores de referencia
          p.text-center El color, la temperatura y el llenado capilar de la piel, junto con los rangos que permiten distinguir lo normal de lo alterado en una persona adulta.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img05.svg' alt='AvatarTop')
          h4.text-center Secuencia de evaluación y valoración cefalocaudal
          p.text-center El orden en que se revisa a la persona, desde la seguridad de la escena hasta el examen de la cabeza a los pies en busca de lesiones.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img06.svg' alt='AvatarTop')
          h4.text-center Evaluación primaria (ABCDE)
          p.text-center El método que prioriza la vía aérea, la respiración, la circulación, el estado neurológico y la exposición del cuerpo en busca de lesiones ocultas.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img07.svg' alt='AvatarTop')
          h4.text-center Estado de conciencia (AVDI)
          p.text-center La escala que gradúa la respuesta de la persona, desde la interacción normal con el entorno hasta la ausencia total de reacción.
    p.mb-4 Los cinco momentos se apoyan entre sí. Los signos vitales aportan los datos y los valores de referencia les dan significado. La secuencia fija el orden de la revisión, el método ABCDE convierte la información recogida en decisiones y la escala de conciencia resume el estado neurológico. El recorrido comienza por el pulso y la respiración, porque son los signos que primero se buscan en una persona que no responde.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img08.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Los datos que el cuerpo entrega primero son el latido y el aire que entra y sale, porque se obtienen sin equipos y en menos de un minuto. De su frecuencia, su ritmo y su fuerza dependen las decisiones siguientes, de modo que conviene conocer cómo se toman y qué indica cada hallazgo.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Pulso y respiración
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Basta poner dos dedos sobre la muñeca o el cuello para obtener el primer dato objetivo de la atención. Ese latido, llamado pulso, informa sobre la actividad cardíaca y el estado de la circulación sanguínea, de modo que su valoración revela con rapidez la perfusión de los tejidos y posibles alteraciones hemodinámicas. En la atención inicial, su evaluación es clave para reconocer condiciones que pueden comprometer la vida, como hemorragias, <em>shock</em> o fallas cardiovasculares (American Heart Association, 2020).
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img10.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.p-4
          p.mb-0 La medición del pulso se realiza mediante la palpación de arterias superficiales, seleccionando el sitio de acuerdo con la condición del lesionado. La arteria radial es la más utilizada en personas conscientes, mientras que la arteria carótida se emplea en situaciones de compromiso vital, ya que proporciona una valoración más confiable en casos de baja perfusión (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2025).
        p.mb-0 Durante la evaluación, el pulso debe analizarse de manera integral considerando la frecuencia, el ritmo y la intensidad. La alteración de estos parámetros puede evidenciar estados de deterioro del funcionamiento del organismo que requieren intervención inmediata.
    p.mb-4 Un valor fuera de rango no siempre indica una condición crítica, porque el cuerpo ajusta el latido y la respiración a lo que ocurre alrededor. Distinguir esos ajustes normales de una alteración verdadera evita alarmas innecesarias y decisiones apresuradas sobre el traslado:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Esfuerzo físico reciente")
            .col-12.mb-4.mb-md-0
              p.mb-0 Tras subir escaleras o correr, el latido y la respiración se aceleran durante varios minutos. Conviene esperar y repetir la comprobación antes de interpretar el dato como una alteración real.
          .row(numero="2" titulo="Miedo y dolor")
            .col-12.mb-4.mb-md-0
              p.mb-0 La tensión emocional acelera ambos signos. Quien presencia un accidente puede respirar rápido y sentir el corazón agitado, sin que exista compromiso de la oxigenación ni pérdida de sangre.
          .row(numero="3" titulo="Fiebre")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada grado de temperatura por encima de lo normal aumenta el número de latidos por minuto. Una persona con infección presenta pulso elevado sin hemorragia ni estado de <em>shock</em>.
          .row(numero="4" titulo="Edad de la persona")
            .col-12.mb-4.mb-md-0
              p.mb-0 Los valores normales cambian con los años. Un niño late y respira más rápido que un adulto, de modo que una misma cifra se interpreta de forma distinta en cada caso.
          .row(numero="5" titulo="Medicamentos de uso habitual")
            .col-12.mb-4.mb-md-0
              p.mb-0 Algunos tratamientos para la presión arterial reducen la frecuencia del pulso. Un adulto mayor que los recibe puede mantener latidos lentos, aunque su estado general permanezca estable.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img11.jpg', alt='')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Reconocer estos factores no resta importancia al hallazgo, sino que impide decidir con un dato incompleto. La comprobación se repite después de unos minutos de reposo y se contrasta con el color de la piel, su temperatura y la respuesta de la persona. Cuando la alteración persiste sin una causa que la explique, corresponde activar el sistema de emergencias.
    p La evaluación de la respiración se realiza mediante la observación directa del movimiento torácico, la percepción del flujo de aire y, en lo posible, la escucha de la respiración. La comprobación se efectúa de manera rápida y precisa, permitiendo determinar si la persona respira por sí misma y sin esfuerzo o presenta signos de dificultad respiratoria.
    p.mb-4 Comprobar si una persona respira exige algo más que mirarla de lejos, porque los movimientos débiles pasan inadvertidos. El procedimiento ocupa menos de diez segundos y se cumple siempre en el mismo orden, de modo que ningún signo quede sin verificar:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img12.svg', alt='')(style="width: 85%")
            h4.text-center Preparar la observación
            p.mb-4(data-aos="fade-down") Se coloca a la persona boca arriba y se aflojan las prendas ajustadas del cuello y del pecho, porque la ropa gruesa oculta movimientos respiratorios superficiales y conduce a conclusiones equivocadas.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img13.svg', alt='')(style="width: 85%")
            h4.text-center Observar el tórax
            p.mb-4(data-aos="fade-down") Se mira el ascenso y el descenso del pecho durante diez segundos y se comprueba que ambos lados se muevan por igual, ya que un movimiento asimétrico sugiere lesión torácica.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img14.svg', alt='')(style="width: 85%")
            h4.text-center Percibir el flujo de aire
            p.mb-4(data-aos="fade-down") Se acerca la mejilla a la boca y a la nariz para sentir la salida del aire, gesto que detecta una respiración débil que la mirada no alcanza a registrar.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img15.svg', alt='')(style="width: 85%")
            h4.text-center Identificar sonidos anormales
            p.mb-4(data-aos="fade-down") Se atiende a ronquidos, silbidos o gorgoteos, porque estos ruidos indican obstrucción parcial y obligan a despejar la vía aérea antes de continuar con cualquier otra maniobra.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img16.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Cuando el procedimiento confirma que la persona respira, queda por precisar cómo lo hace y con qué esfuerzo. Esa descripción es la que convierte una impresión general en información útil para el sistema de emergencias, y enlaza con los datos que se detallan enseguida.
    p.mb-4 La valoración de ambos signos se apoya en un número reducido de parámetros que se observan y se cuentan en pocos segundos, sin necesidad de equipos. Conocer qué indica cada uno evita confundir un hallazgo aislado con un deterioro real y orienta la conducta inmediata:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img17.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Frecuencia del pulso
              p.mb-0.text-center Número de latidos por minuto. Se cuenta durante quince segundos y se multiplica por cuatro. Una frecuencia elevada sugiere alteración circulatoria, hemorragia o estrés; una frecuencia baja, un problema cardíaco o neurológico.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img18.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Ritmo del pulso
              p.mb-0.text-center Regularidad con que se suceden los latidos. Un ritmo irregular, con pausas o latidos adelantados, orienta hacia un problema cardíaco y debe comunicarse al sistema de emergencias.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img19.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center  Intensidad del pulso
              p.mb-0.text-center Fuerza con que la onda se percibe bajo los dedos. Un pulso lleno indica buena perfusión; un pulso débil o filiforme sugiere pérdida de volumen o inicio de <em>shock</em>.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img20.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Frecuencia respiratoria
              p.mb-0.text-center Número de respiraciones por minuto, contadas sin que la persona lo advierta para no modificar el patrón. Se cuenta cada ciclo de inspiración y espiración como uno.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img21.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Ritmo respiratorio
              p.mb-0.text-center Regularidad del patrón. Una respiración irregular, con pausas prolongadas, constituye una condición crítica que exige vigilancia estrecha y activación del sistema de emergencias.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img22.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Esfuerzo respiratorio
              p.mb-0.text-center Trabajo que la persona invierte en respirar. El uso de músculos del cuello y del abdomen, la respiración superficial o agitada y la incapacidad de completar frases indican dificultad.
    p.mb-4 Los seis parámetros se leen en conjunto. Un pulso rápido y débil junto con una respiración rápida y superficial forma un patrón que anuncia hipoxia o <em>shock</em>, aunque cada dato por separado parezca tolerable.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c01.color-secundario.p-4
          p.mb-0 Desde el enfoque de la atención prehospitalaria, la presencia de respiración rápida y superficial puede indicar hipoxia, ansiedad o estado de <em>shock</em>. Una respiración lenta, irregular o ausente constituye una condición crítica que requiere intervención inmediata, especialmente en el manejo de la vía aérea y la activación del sistema de emergencias.
    p.mb-4 La valoración de la respiración debe realizarse de manera integrada con los demás signos vitales, ya que su alteración suele estar asociada a cambios en la circulación y en el estado de conciencia. Su evaluación no solo identifica situaciones de riesgo inmediato, sino que sostiene el seguimiento continuo del lesionado, orienta la toma de decisiones y respalda una atención sin demoras y segura.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img23.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") El pulso se palpa con los dedos índice y medio y nunca con el pulgar, y la respiración se cuenta sin avisar. Dos gestos simples que evitan que el dato quede alterado antes de interpretarlo.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Pulso y respiración se valoran juntos porque expresan el mismo esfuerzo del organismo por sostener la oxigenación. Un latido que se acelera mientras la respiración se vuelve superficial señala que el cuerpo compensa una pérdida, aunque la persona converse y parezca estable. Registrar ambos datos con la hora en que se tomaron hace posible comparar y decidir con criterio, y esa comparación vale más que cualquier cifra aislada.
    p.mb-0 Los valores obtenidos cambian con la edad y con la condición de cada persona, de modo que una misma cifra no significa lo mismo en todos los casos. Sin un punto de comparación, un número alto o bajo no permite concluir nada. Ese punto de comparación, junto con lo que muestra la piel, completa la información que necesita quien atiende.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Circulación y valores de referencia
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12
        .bloque-texto-f.color-secundario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center Un corazón que late no garantiza que la sangre alcance todos los tejidos del cuerpo. Comprobar ese alcance, es decir, valorar la circulación, resulta decisivo para determinar si el organismo transporta sangre, oxígeno y nutrientes hasta donde se necesitan. Valorarla con método facilita identificar alteraciones que comprometen la perfusión y, en consecuencia, el funcionamiento de los órganos vitales.
          .bloque-texto-f__autor.mb-3
            h3.mb-0.text-ce (Ministerio de Salud y Protección Social, 2012).
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/t1/img24.svg', alt='')
    p.mb-4 La circulación no se comprueba solo con los dedos sobre la muñeca. La piel ofrece tres señales que cualquier persona observa en segundos y que muestran si la sangre está alcanzando las zonas más alejadas del cuerpo:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img25.svg", alt="alt").img80.m-auto
          h4.text-center Color de la piel
          p La palidez advierte que el flujo disminuyó y el tono azulado indica falta de oxígeno. En una persona con sangrado, el rostro pierde color antes que el pulso cambie.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img26.svg", alt="alt").img80.m-auto
          h4.text-center Temperatura de la piel 
          p El dorso de la mano sobre la frente y luego sobre el pie revela si el cuerpo está desviando la sangre hacia los órganos y enfriando las extremidades.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t1/img27.svg", alt="alt").img80.m-auto
          h4.text-center Llenado capilar
          p Al presionar una uña durante unos segundos y soltarla, el color debe regresar antes de dos segundos. Una demora mayor sugiere que la circulación está comprometida.
    p.mb-4 Las tres señales se comprueban en menos de un minuto y sin ningún equipo, de modo que pueden repetirse cuantas veces haga falta. Observadas en conjunto, informan sobre el estado de la circulación con más rapidez que cualquier cifra aislada, y su empeoramiento anticipa el deterioro antes de que la persona lo manifieste (Organización Mundial de la Salud, 2016).
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Desde el enfoque de la atención prehospitalaria, las alteraciones en la circulación suelen estar asociadas a condiciones críticas como hemorragias, deshidratación o estados de <em>shock</em>. Una piel fría, pálida y húmeda, acompañada de llenado capilar retardado, constituye un signo de alarma que orienta hacia una posible falla en la perfusión y la necesidad de intervención urgente.
    p.mb-4 Los rangos que se consideran normales funcionan como punto de comparación y no como una frontera exacta entre lo sano y lo grave. Varias circunstancias desplazan esas cifras en personas que se encuentran bien, y conviene tenerlas presentes antes de interpretar un hallazgo:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t1/img28.svg", alt="").img70
          h4.text-center Edad
          br
          p.text-center.mb-0 Un niño presenta pulso y respiración más rápidos que un adulto sano en reposo.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t1/img29.svg", alt="").img70
          h4.text-center Estado físico
          br
          p.text-center.mb-0 Quien entrena con regularidad puede mantener en reposo un pulso más lento de lo habitual.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t1/img30.svg", alt="").img70
          h4.text-center Condiciones ambientales
          br
          p.text-center.mb-0 El calor, el frío y la altura sobre el nivel del mar modifican ambos signos.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t1/img31.svg", alt="").img70
          h4.text-center Situación clínica de la persona
          p.text-center.mb-0 El dolor, la fiebre y el miedo elevan las cifras sin que exista hemorragia.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Los cuatro factores explican por qué dos personas con la misma cifra pueden encontrarse en condiciones distintas. Lo que orienta la atención es la diferencia entre lo hallado y lo esperado para esa persona, y sobre todo el cambio observado entre una comprobación y la siguiente.
    p.mb-4 Aun con esas variaciones, conviene contar con una referencia para la población adulta, que es la que con mayor frecuencia se atiende fuera del ámbito hospitalario. La siguiente tabla reúne cada signo con su rango habitual, la alteración que puede presentar y lo que esa alteración sugiere:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Valores de referencia de signos vitales en adultos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Signo vital
                th(data-aos="fade-down")(style= "width: 25%") Rango normal
                th(data-aos="fade-down")(style= "width: 25%") Alteración
                th(data-aos="fade-down")(style= "width: 25%") Posible interpretación clínica
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Pulso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60 a 100 latidos por minuto
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Taquicardia o bradicardia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hemorragia, <em>shock</em>, estrés, alteraciones cardíacas
              tr
                td(data-aos="fade-down") Respiración
                td(data-aos="fade-down") 12 a 20 respiraciones por minuto
                td(data-aos="fade-down") Taquipnea o bradipnea
                td(data-aos="fade-down") Dificultad respiratoria, hipoxia, fatiga.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Llenado capilar
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Menor de 2 segundos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Retardado
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Compromiso circulatorio, <em>shock</em>
              tr
                td(data-aos="fade-down") Color de la piel
                td(data-aos="fade-down") Rosado
                td(data-aos="fade-down") Pálido o cianótico
                td(data-aos="fade-down") Mala perfusión o falta de oxígeno
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Temperatura de la piel
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tibia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fría o caliente
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alteraciones circulatorias o infecciosas
    p.mb-4 El reconocimiento de las desviaciones frente a estos valores permite identificar de manera temprana unas condiciones críticas. Por ejemplo, una frecuencia respiratoria elevada asociada a un pulso débil puede indicar un estado de compensación ante una pérdida de volumen, mientras que un llenado capilar retardado y piel fría sugieren compromiso circulatorio.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img32.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") El llenado capilar pierde confiabilidad cuando la persona está expuesta al frío o tiene las manos heladas. En esos casos conviene comprobarlo en el pecho o en la frente, donde la temperatura ambiente influye menos.
    p.mb-0 Cada signo aporta información valiosa, aunque tomarlos por separado deja sin revisar buena parte del cuerpo. Después de comprobar cómo está funcionando el organismo, corresponde examinarlo por completo, y ese examen tiene un punto de partida y una ruta establecida.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Secuencia de evaluación y valoración cefalocaudal
    p.mb-4 Al llegar junto a una persona lesionada, el orden en que se hacen las cosas decide qué se encuentra y qué se pasa por alto. Por esa razón la revisión se organiza como un proceso que identifica, de manera rápida y sistemática, las condiciones que pueden comprometer la vida. La revisión ordenada contribuye a establecer prioridades de atención, orientar la intervención y tomar decisiones en el momento en que el estado del paciente lo exige.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img33.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-3.mb-4
          p.mb-0 La revisión inicia con la verificación de la seguridad en la escena, asegurando que no existan riesgos que puedan afectar al respondiente o a la persona lesionada. Posteriormente, se establece el contacto con el paciente, evaluando su respuesta y el nivel de conciencia, lo que facilita determinar su estado general y la necesidad de activar el sistema de emergencias.
        p.mb-0 Una vez descartadas o atendidas las amenazas para la vida, se realiza la valoración secundaria o cefalocaudal. Consiste en examinar a la persona de la cabeza a los pies, de manera ordenada, en busca de heridas, deformidades, dolor, inflamación o sangrado que no se advirtieron al comienzo (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2025). En una persona consciente, la revisión se acompaña de preguntas sobre lo ocurrido, el dolor, las enfermedades previas, los medicamentos y las alergias.
    p.mb-4 El siguiente recurso presenta la secuencia completa. Conviene entenderla como un camino en el que no se avanza al paso siguiente sin haber resuelto el anterior:
    .row.align-items-center.mb-4
      .col-lg-11.col-12
        LineaTiempoE.color-secundario
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Seguridad en la escena
              p Antes de tocar a la persona se revisa el entorno en busca de tránsito, fuego, cables, sustancias o estructuras inestables, y se usan guantes y mascarilla. En el lugar: quien llega a un choque en la vía Ibagué-Girardot ubica primero su vehículo y las señales, y solo después se acerca.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evaluación inicial de la conciencia
              p Se habla a la persona, se le pregunta qué pasó y, si no responde, se le toca con firmeza en los hombros. En el lugar: un vigilante que encuentra a un visitante en el suelo le pregunta su nombre en voz alta antes de moverlo.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img36.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Activación del sistema de emergencias
              p Si la persona no responde o presenta una condición grave, se llama a la línea 123 o se pide a alguien concreto que lo haga. Se indica el lugar, lo ocurrido y el estado de la persona. En el lugar: «señor de camisa azul, llame al 123 y diga que hay un hombre inconsciente en el segundo piso».
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img37.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evaluación de funciones vitales (ABC)
              p Se abre la vía aérea, se verifica que la persona respire y se comprueban el pulso y la ausencia de sangrado abundante. En el lugar: se inclina la cabeza, se revisa el pecho durante diez segundos y se recorre el cuerpo en busca de sangre.
          .row(titulo="5")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img38.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Atención de condiciones críticas
              p Se controla la hemorragia con presión directa, se coloca en posición lateral de seguridad a la persona inconsciente que respira o se inicia la reanimación si no respira. En el lugar: una compañera presiona la herida con una gasa mientras otra persona vigila la respiración.
          .row(titulo="6")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img39.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Valoración cefalocauda
              p Con la vida asegurada, se examina de la cabeza a los pies con ambas manos, comparando un lado del cuerpo con el otro, y se pregunta por dolor, enfermedades, medicamentos y alergias. En el lugar: se revisan cuero cabelludo, cuello, tórax, abdomen, pelvis y extremidades sin mover la columna.
    p.mb-4 Los seis pasos convierten la angustia del primer momento en un procedimiento. Ninguno se omite ni se adelanta, porque examinar una pierna deforme mientras la persona no respira significa atender lo llamativo en lugar de lo mortal.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img40.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-3
          p.mb-0(data-aos="fade-down") Se atiende primero lo que compromete la vida y después lo que causa dolor. Una fractura visible llama la atención, mientras la respiración puede detenerse sin que nadie lo advierta.
    p Los seis pasos se aplican en el mismo orden en cada atención, sin importar la gravedad aparente, porque ese orden impide que una lesión visible desplace a otra que no se ve. Repetirlos convierte la secuencia en un hábito, y el hábito sostiene la calma cuando la escena presiona.
    p.mb-0 Dentro de esa secuencia, un paso concentra las decisiones de las que depende la supervivencia, que es el de las funciones vitales. Para resolverlo se dispone de un método de cinco letras y de una escala breve que gradúa el estado de conciencia, dos herramientas que ordenan la actuación cuando el tiempo apremia.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Evaluación primaria (ABCDE) y estado de conciencia (AVDI)
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c03.px-4.py-3.h-100.w-100
          p.mb-4(data-aos="fade-down") Entre todos los pasos de esa revisión hay uno del que dependen los minutos siguientes. Se conoce como evaluación primaria y consiste en un método sistemático para identificar y tratar de inmediato las condiciones que amenazan la vida. La evaluación primaria se basa en la priorización de funciones vitales, permitiendo intervenir de forma rápida y organizada frente a situaciones críticas.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img42.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") El método ABCDE es ampliamente utilizado en la atención prehospitalaria y en primeros auxilios, ya que establece un orden lógico de evaluación que facilita la toma de decisiones. Evita, además, omitir aspectos fundamentales durante la atención (American College of Surgeons, 2018).
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img41.jpg', alt='') 
    p.mb-4 Cada letra del ABCDE representa un componente clave de la valoración, tal como lo presenta la tabla 2:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Componentes de la evaluación primaria (ABCDE)
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 10%") Letra
                th(data-aos="fade-down")(style= "width: 30%") Componente
                th(data-aos="fade-down")(style= "width: 30%") Evaluación
                th(data-aos="fade-down")(style= "width: 30%") Acción principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") A
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Vía aérea (<em>Airway</em>)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verificar si la vía aérea está libre.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permeabilizar la vía aérea si está obstruida.
              tr
                td(data-aos="fade-down") B
                td(data-aos="fade-down") Respiración (<em>Breathing</em>)
                td(data-aos="fade-down") Comprobar si respira y cómo lo hace.
                td(data-aos="fade-down") Garantizar una ventilación adecuada.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") C
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Circulación (<em>Circulation</em>)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluar pulso y signos de sangrado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Controlar hemorragias y mejorar la perfusión.
              tr
                td(data-aos="fade-down") D
                td(data-aos="fade-down") Estado neurológico (<em>Disability</em>)
                td(data-aos="fade-down") Valorar el nivel de conciencia con la escala AVDI.
                td(data-aos="fade-down") Identificar alteraciones neurológicas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") E
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Exposición (<em>Exposure</em>)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisar el cuerpo del paciente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Detectar lesiones y proteger del entorno.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c01.color-secundario.p-4
          p.mb-0 La aplicación del ABCDE debe realizarse de manera secuencial, sin omitir pasos, ya que cada componente depende del anterior. Por ejemplo, no es posible evaluar la respiración si la vía aérea se encuentra obstruida. El orden del método facilita intervenir primero sobre las condiciones más críticas y estabilizar al paciente progresivamente.
    p.mb-4 La evaluación del estado de conciencia posibilita determinar el nivel de respuesta neurológica del lesionado, constituyendo un indicador clave para identificar posibles alteraciones del sistema nervioso central. La valoración de la conciencia se integra dentro del componente D (<em>Disability</em>) del método ABCDE y permite reconocer de manera rápida si la persona presenta compromiso neurológico.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img43.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-3
          p.mb-0(data-aos="fade-down") En la atención inicial, la valoración del estado de conciencia se realiza mediante el método AVDI, que clasifica la respuesta del paciente según su nivel de interacción con el entorno (Ministerio de Salud y Protección Social, 2012). 
    p.mb-4 Ese método ordena la respuesta de la persona en cuatro categorías sucesivas, que van desde la interacción normal con el entorno hasta la ausencia completa de reacción. Identificar en cuál se encuentra, y hacia cuál se desplaza, resume el estado neurológico en un dato fácil de comunicar:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img44.svg', alt='')(style="width: 85%")
            h4.text-center Alerta
            p.mb-4(data-aos="fade-down") La persona está consciente, responde de forma adecuada y orientada, sabe quién es, dónde está y qué ocurrió. Indica un estado neurológico estable. Un caso: un ciclista que cae en el parque y cuenta lo sucedido con claridad, aunque tenga una herida en la rodilla.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img45.svg', alt='')(style="width: 85%")
            h4.text-center Responde a la voz
            p.mb-4(data-aos="fade-down") Reacciona al estímulo verbal, abre los ojos o contesta cuando se le habla, pero no está completamente consciente ni orientada. Sugiere una alteración neurológica leve. Un caso: un adulto mayor que se desmayó en una fila y responde con frases confusas al preguntarle su nombre.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img46.svg', alt='')(style="width: 85%")
            h4.text-center Responde al dolor
            p.mb-4(data-aos="fade-down") Solo responde ante estímulos dolorosos, como una presión firme sobre el hombro, con un gesto, un quejido o un movimiento. Refleja un compromiso neurológico moderado y exige activar el sistema de emergencias. Un caso: un trabajador golpeado en la cabeza que solo se mueve cuando se le presiona el trapecio.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img47.svg', alt='')(style="width: 85%")
            h4.text-center Inconsciente
            p.mb-4(data-aos="fade-down") No presenta respuesta a ningún estímulo. Constituye una emergencia crítica con riesgo vital, porque la vía aérea puede obstruirse por la caída de la lengua. Un caso: una persona que no reacciona a la voz ni al dolor y a quien se le debe abrir la vía aérea de inmediato.
    p.mb-4 La escala convierte una impresión vaga en una categoría que se comunica con una sola letra. Decir al operador del 123 que la persona está en V o pasó de A a D, transmite el nivel de conciencia y, sobre todo, su tendencia, que es el dato que más orienta la prioridad del despacho.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img48.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") La sigla AVDI corresponde a alerta, respuesta a la voz, respuesta al dolor e inconsciente. Aplicar la escala favorece identificar con rapidez los cambios en el estado neurológico, lo cual resulta clave al decidir. Una persona que pasa de estar alerta a responder solo al dolor muestra un deterioro progresivo que exige intervención inmediata.
    p.mb-0 Valorar es solo el comienzo. Cada hallazgo del ABCDE exige una respuesta, y el conjunto de esas respuestas conforma las intervenciones en primeros auxilios. Entre ellas, las heridas y las hemorragias reclaman la actuación más inmediata, porque comprometen la vida en cuestión de minutos.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>

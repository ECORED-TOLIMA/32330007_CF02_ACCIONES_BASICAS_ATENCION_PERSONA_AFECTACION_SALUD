<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reconocimiento de eventos críticos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Algunas emergencias no dejan una herida a la vista y avanzan en silencio. Identificarlas a tiempo supone reconocer las condiciones clínicas que comprometen de manera inmediata la vida y que exigen respuesta en los primeros minutos. En la atención inicial, esta capacidad es fundamental, ya que facilita detectar signos de alarma y actuar de forma rápida frente a situaciones que pueden evolucionar hacia un deterioro grave.
    p.mb-4 En todos ellos, el tiempo entre el inicio del evento y la llegada de la atención especializada es el factor que más pesa en el pronóstico (American Heart Association, 2020). El tema se desarrolla en cuatro apartados, agrupados por el sistema que se afecta:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img02.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Convulsiones y desmayo
            p.mb-0 Dos eventos neurológicos de inicio súbito que alteran la conciencia, distintos en su origen, su duración y su manejo, y que se confunden con frecuencia.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img03.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Infarto y accidente cerebrovascular
            p.mb-0 Dos emergencias vasculares en las que el flujo de sangre se interrumpe hacia el corazón o hacia el cerebro, y en las que cada minuto cuenta.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img04.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Intoxicaciones
            p.mb-0 La exposición a sustancias nocivas por ingestión, inhalación, contacto o inyección, con el reconocimiento del agente y la protección del respondiente como claves.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img05.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Ahogamiento
            p.mb-0 La dificultad respiratoria por inmersión en un líquido, frecuente en ríos, piscinas y represas del país, en la que el rescate seguro precede a cualquier maniobra.
    p Los cuatro apartados comparten una misma estructura, que consiste en reconocer los signos, aplicar el manejo inicial y seguir unas recomendaciones sobre lo que no debe hacerse. Esa tercera parte es tan importante como las otras dos, porque en los eventos críticos abundan las prácticas populares que agravan la situación.
    p.mb-4 Con el propósito de profundizar en el reconocimiento de las urgencias médicas y en la actuación durante los primeros minutos, se propone un pódcast. La narración recorre tres escenas cotidianas del país, un desmayo en una fila, un dolor en el pecho en una tienda de barrio y una intoxicación durante una jornada de fumigación, con la conducta que corresponde en cada caso.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Pódcast.
          span Antes de que suene la sirena.
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.col-12.order-lg-2.order-2
            .cajon.cajon.c02.p-4
              .col-lg-12.col-12
                .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require_src('@/assets/curso/32330007_CF02_Guion_podcast_01_Antes de que suene la sirena.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img06.svg', alt='')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 El recurso deja una idea común a las tres escenas, y es que la primera decisión acertada suele consistir en no hacer lo que el impulso sugiere. No levantar de inmediato a quien se desmaya, no dejar caminar a quien tiene dolor en el pecho y no provocar el vómito en una intoxicación evitan un daño añadido. A esas conductas se suman el dato de la hora en que empezaron los síntomas y la llamada temprana al 123, que definen buena parte del pronóstico.
    p.mb-0 El desmayo se aborda en primer lugar, porque comparte con la convulsión un mismo rasgo, la pérdida súbita de la conciencia. Lo que separa a uno de la otra es el origen del episodio y, sobre todo, la conducta que cada situación exige de quien está cerca. Confundirlas conduce a maniobras que agravan el cuadro, mientras que distinguirlas permite proteger a la persona sin causar un daño añadido.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Convulsiones y desmayo
    p.mb-4 Dos episodios muy distintos conducen a la misma escena, una persona que cae al suelo y no responde. Ambos tienen origen neurológico, se presentan de manera súbita y comprometen el estado de conciencia. Reconocerlos a tiempo es indispensable en la atención inicial, ya que permite aplicar las medidas que protegen al lesionado y prevenir complicaciones durante el episodio.
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img07.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            p.mb-0 Las <b>convulsiones</b> corresponden a episodios de actividad eléctrica anormal en el cerebro, que se manifiestan mediante movimientos involuntarios, pérdida de conciencia y alteraciones en la conducta. Pueden ser causadas por epilepsia, traumatismos, fiebre, intoxicaciones o trastornos metabólicos.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img08.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            p.mb-0 El <b>desmayo</b> es una pérdida temporal de la conciencia causada por una disminución transitoria del flujo sanguíneo al cerebro. Generalmente es de corta duración y puede estar asociado a factores como fatiga, estrés, deshidratación o cambios bruscos de posición.
    p.mb-4 Ambos episodios terminan con una persona en el suelo que no responde, pero difieren en su origen, en su duración y en lo que corresponde hacer mientras ocurren. Comparar sus signos y su manejo evita confundirlos y aplicar una conducta que no corresponde:
    .row.justify-content-center.aling-items-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="Signos de la convulsión")
            .col-12.mb-0.mb-md-0
              p Pérdida de conciencia, rigidez muscular seguida de movimientos bruscos e involuntarios del cuerpo, posible pérdida de control de esfínteres, salivación y confusión o somnolencia posterior al episodio, que puede durar varios minutos.
          .row(titulo="Manejo de la convulsión")
            .col-12.mb-0.mb-md-0
              p Se retiran objetos con los que pueda golpearse, se protege la cabeza con una prenda doblada, se afloja la ropa del cuello y se cuenta el tiempo. Al terminar, se coloca a la persona de lado, se verifica la respiración y se le acompaña hasta que se oriente.
          .row(titulo="Recomendaciones ante la convulsión")
            .col-12.mb-0.mb-md-0
              p No se sujeta a la persona, no se introduce nada en la boca, no se le da de beber hasta que esté plenamente consciente y no se le deja sola. Si dura más de cinco minutos o se repite, se llama al 123.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img09.png', alt='')
    .row.justify-content-center.aling-items-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="Signos del desmayo")
            .col-12.mb-0.mb-md-0
              p Mareo o sensación previa de debilidad, palidez, sudoración fría, visión borrosa, pérdida breve de la conciencia con caída y recuperación rápida y completa en menos de un minuto.
          .row(titulo="Manejo del desmayo")
            .col-12.mb-0.mb-md-0
              p Se acuesta a la persona boca arriba, se elevan sus piernas unos treinta centímetros, se afloja la ropa y se garantiza aire fresco. Al recuperarse, se mantiene acostada unos minutos y se incorpora despacio
          .row(titulo="Recomendaciones ante el desmayo")
            .col-12.mb-0.mb-md-0
              p No se sienta ni se levanta a la persona de inmediato y no se le dan bebidas mientras esté aturdida. Se activa el sistema de emergencias si no recupera la conciencia en un minuto, si se golpeó la cabeza, si tiene dolor en el pecho o si el episodio ocurre en un adulto mayor.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img10.png', alt='')
    p.mb-4 La comparación deja en claro la diferencia central. En la convulsión se protege y se espera; en el desmayo se acuesta y se eleva. En ambos casos, lo que no se hace pesa tanto como lo que se hace. Las guías internacionales recomiendan activar el sistema de emergencias si la convulsión dura más de cinco minutos se repite o es la primera en la vida de la persona. Así lo señala la Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja (2020).
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img11.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Durante una convulsión nadie sujeta a la persona ni le introduce nada en la boca. Se protege la cabeza, se cuenta el tiempo y, al terminar, se coloca de lado.
    p Reconocer con precisión ambas condiciones facilita aplicar intervenciones seguras y evitar prácticas inadecuadas que puedan agravar la situación. Diferenciar la convulsión del desmayo orienta la conducta en los primeros minutos en la atención inicial.
    p.mb-0 El desmayo y la convulsión ceden por sí solos en pocos minutos. Otras urgencias no conceden ese margen y dejan secuelas permanentes cuando la atención tarda. La diferencia entre una recuperación completa y una discapacidad se juega en los primeros minutos, con el reconocimiento oportuno y la activación de la línea de emergencias.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Infarto y accidente cerebrovascular
    p.mb-4 El corazón y el cerebro toleran muy poco tiempo sin riego sanguíneo. Cuando ese riego se interrumpe aparecen el infarto agudo de miocardio y el accidente cerebrovascular (ACV), que comprometen de manera directa la vida de la persona. Ambos requieren reconocimiento inmediato y activación urgente del sistema de emergencias, ya que el tiempo de intervención es un factor determinante en el pronóstico.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El infarto ocurre cuando se interrumpe el flujo sanguíneo hacia una parte del corazón, generando daño en el músculo cardíaco. El infarto requiere atención inmediata debido a su alta gravedad. Se manifiesta con dolor en el pecho, opresivo e intenso, que puede irradiarse al brazo, al cuello o a la mandíbula, acompañado de dificultad para respirar, sudoración fría, náuseas o malestar general. En mujeres, adultos mayores y personas con diabetes el dolor puede ser leve o estar ausente, y predominan la fatiga y la falta de aire (American Heart Association, 2020).
    p El ACV se produce cuando se interrumpe el flujo sanguíneo hacia el cerebro y ocurre una hemorragia cerebral, afectando las funciones neurológicas. Su reconocimiento temprano es clave para reducir secuelas permanentes. Sus signos son la debilidad o parálisis en un lado del cuerpo, la dificultad para hablar o entender, la desviación de la boca, la pérdida de equilibrio y la alteración del estado de conciencia.
    p.mb-4 El manejo en primeros auxilios de ambos eventos comparte un mismo principio, que consiste en no agravar y en acelerar la llegada de la atención especializada. La tabla 7 lo resume:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Manejo en primeros auxilios del infarto y del accidente cerebrovascular
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 35%") Acción
                th(data-aos="fade-down")(style= "width: 35%") Objetivo
                th(data-aos="fade-down")(style= "width: 30%") Aplicación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener a la persona en reposo, semisentada si tiene dificultad para respirar.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Disminuir la demanda cardíaca y facilitar la respiración.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Infarto y ACV.
              tr
                td(data-aos="fade-down") Aflojar prendas ajustadas.
                td(data-aos="fade-down") Mejorar la ventilación y la comodidad.
                td(data-aos="fade-down") Infarto y ACV.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") No administrar alimentos ni bebidas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Prevenir la aspiración si se altera la conciencia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ACV, y en infarto si hay náuseas.
              tr
                td(data-aos="fade-down") Colocar en posición lateral de seguridad si pierde la conciencia y respira.
                td(data-aos="fade-down") Proteger la vía aérea.
                td(data-aos="fade-down") Infarto y ACV.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Activar el sistema de emergencias e indicar la hora de inicio de los signos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Garantizar atención especializada y orientar el tratamiento.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Infarto y ACV.
              tr
                td(data-aos="fade-down") Vigilar signos vitales y estado de conciencia hasta la llegada de la ayuda.
                td(data-aos="fade-down") Detectar deterioro e iniciar reanimación si deja de respirar.
                td(data-aos="fade-down") Infarto y ACV.
    p En la tabla se precisa que el primer respondiente no trata el infarto ni el accidente cerebrovascular, sino que gana tiempo. El dato de la hora de inicio de los síntomas es decisivo, porque los tratamientos que disuelven el coágulo en el cerebro solo pueden aplicarse dentro de las primeras horas.
    p.mb-4 Para reconocer el ACV en segundos se emplea la regla mnemotécnica FAST, formada por las iniciales de las palabras inglesas <em>face, arms, speech</em> y <em>time</em>, que corresponden a cara, brazos, habla y tiempo. La regla revisa cuatro señales en un orden fijo, cada una asociada a una función que el cerebro pierde cuando el riego se interrumpe, y basta con que una falle para activar el sistema de emergencias.
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t4/img13.svg", alt="").img70
          h4.text-center  Cara 
          p.text-center.mb-0 Se pide a la persona que sonría. Una sonrisa asimétrica, con un lado de la boca caído, sugiere compromiso neurológico.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t4/img14.svg", alt="").img70
          h4.text-center Brazos
          p.text-center.mb-0 Se pide que levante ambos brazos al frente con los ojos cerrados. Si uno cae o no logra elevarse, existe debilidad de un lado del cuerpo.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t4/img15.svg", alt="").img70
          h4.text-center Habla
          p.text-center.mb-0 Se pide que repita una frase sencilla, como «hoy es un día soleado». Las palabras arrastradas o la dificultad para entender indican alteración neurológica.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t4/img16.svg", alt="").img70
          h4.text-center Tiempo
          p.text-center.mb-0 Ante cualquiera de las señales anteriores se llama de inmediato al 123, se anota la hora en que comenzaron y no se espera a que pasen.
    p.mb-4 El reconocimiento temprano de estas condiciones contribuye a reducir significativamente el riesgo de complicaciones y mejorar las probabilidades de recuperación. En ambos casos, la prioridad es activar de manera inmediata el sistema de emergencias y evitar intervenciones que puedan agravar la condición del paciente.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img17.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Ante un dolor opresivo en el pecho o una sonrisa torcida, la conducta es la misma. Reposo, nada por la boca, llamada al 123 con la hora de inicio y vigilancia hasta que llegue la ayuda.
    p.mb-0 No todas las amenazas provienen del interior del cuerpo. Algunas llegan de una sustancia que se ingiere, se inhala o toca la piel, y en esos casos la primera regla protege a quien ayuda, porque acercarse sin precaución suma una segunda persona afectada.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Intoxicaciones
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img18.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4 Un producto de aseo, un medicamento o un plaguicida hacen tanto daño como un golpe. Esa exposición del organismo a sustancias nocivas afecta las funciones vitales y, en los casos graves, compromete la vida. Las sustancias nocivas pueden ingresar al cuerpo por ingestión, inhalación, contacto o inyección, lo que determina la forma de presentación y la gravedad del cuadro clínico.
        .cajon.cajon.c02.color-primario.px-4.py-3.mb-4
          p.mb-0 Las manifestaciones aparecen minutos u horas después del contacto, y su rapidez depende de la cantidad absorbida, de la concentración del producto y de la condición previa de la persona afectada. No todas tienen el mismo peso, porque algunas comprometen funciones vitales y obligan a un traslado inmediato, mientras que otras aportan pistas sobre el agente y permiten al personal de salud anticipar el tratamiento.
        p.mb-0 El reconocimiento de las manifestaciones no exige conocimientos médicos, solo atención a los cambios del cuerpo y al entorno donde ocurrió el contacto, como envases abiertos, restos de producto o ambientes cerrados. Las señales más frecuentes son las siguientes:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img19.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img20.svg", alt="").img100.m-auto
                  h4.text-center Náuseas y vómito
                  p.text-center Malestar del estómago que antecede o acompaña la expulsión del contenido gástrico, señal temprana cuando la sustancia ingresó por la boca.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img21.svg", alt="").img100.m-auto
                  h4.text-center Dificultad respiratoria
                  p.text-center Respiración rápida, ruidosa o con esfuerzo visible, frecuente cuando se inhalan vapores de plaguicidas, monóxido de carbono o productos de aseo mezclados entre sí.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img22.svg", alt="").img100.m-auto
                  h4.text-center Alteración del estado de conciencia
                  p.text-center Somnolencia, confusión o respuesta lenta a las preguntas, que indica compromiso del sistema nervioso y obliga a vigilancia permanente hasta la llegada de la ayuda.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img23.svg", alt="").img100.m-auto
                  h4.text-center Convulsiones
                  p.text-center Movimientos involuntarios y sostenidos del cuerpo, acompañados de pérdida de conciencia, propios de intoxicaciones graves que afectan de manera directa el cerebro.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img24.svg", alt="").img100.m-auto
                  h4.text-center Quemaduras en boca o piel
                  p.text-center Enrojecimiento, ampollas o lesiones en labios, lengua o piel expuesta, que orientan hacia sustancias corrosivas como soda cáustica, blanqueadores o ácidos de uso doméstico.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img25.svg", alt="").img100.m-auto
                  h4.text-center Olor inusual en el aliento
                  p.text-center Rastro de solvente, plaguicida o alcohol que aporta una pista sobre el agente comprometido y se informa a la línea de emergencias.
    p.mb-4 Ninguna de las señales aparece sola ni permite por sí misma identificar la sustancia. Su valor está en el conjunto y en el relato de lo ocurrido, porque el envase hallado cerca, la hora del contacto y la cantidad aproximada completan la información que necesita el personal de salud. Mientras llega la ayuda, la protección de quien asiste antecede a cualquier maniobra, ya que el contacto directo con el producto suma una segunda persona afectada.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img26.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") En Colombia, los plaguicidas agrícolas, los medicamentos, los productos de aseo, el monóxido de carbono de estufas y calentadores, y el alcohol adulterado se cuentan entre los agentes más frecuentes. 
    p.mb-4 La conducta inicial cambia según la manera en que la sustancia entró al organismo, porque cada vía exige medidas de protección y de retiro distintas. Reconocer esa diferencia antes de acercarse protege a quien asiste y evita maniobras que agravan el cuadro:
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img27.jpg', alt='')
      .col.col-lg-9.col-12.order-lg-1.order-2
        TabsA.color-acento-botones.mb-4
          .tarjeta.tarjeta-c06.p-4(titulo="Ingestión")
            p La sustancia entra por la boca, como medicamentos, plaguicidas, productos de limpieza o alcohol. Se identifica el producto y se conserva el envase, no se provoca el vómito ni se dan líquidos. Se vigilan la respiración y la conciencia y se llama al 123 con el nombre de la sustancia, la cantidad y la hora. Situación habitual: un niño que bebió un limpiador de pisos en una casa de Melgar.
          .tarjeta.tarjeta-c06.p-4(titulo="Inhalación")
            p La sustancia entra por las vías respiratorias, como humo, gas de estufas o vapores de pintura. Se retira a la persona a un área ventilada sin exponerse, se afloja la ropa, se coloca semisentada si respira con dificultad y se activa el sistema de emergencias. Situación habitual: una familia con dolor de cabeza y somnolencia en una habitación con calentador de gas.
          .tarjeta.tarjeta-c06.p-4(titulo="Contacto")
            p La sustancia actúa sobre la piel o los ojos, como ácidos, herbicidas o solventes. Se retira la ropa contaminada con guantes, se lava la zona con abundante agua corriente durante al menos veinte minutos y no se aplican cremas ni neutralizantes. Situación habitual: un jornalero salpicado con plaguicida al preparar la mezcla en una finca de Líbano.
          .tarjeta.tarjeta-c06.p-4(titulo=" Inyección")
            p.mb-0 La sustancia entra por picadura, mordedura o aguja, como el veneno de serpientes, escorpiones o abejas. Se mantiene la zona en reposo y por debajo del corazón, se retiran anillos, no se aplica torniquete ni se corta ni se succiona la herida, y se traslada de inmediato. Situación habitual: una mordedura de serpiente en un cultivo de arroz en Saldaña.
    p.mb-4 Las cuatro vías comparten tres reglas. Se protege primero al respondiente, se identifica la sustancia y se conserva el envase, y se comunica al sistema de emergencias el nombre del producto, la cantidad, la vía y la hora. Con esa información, el personal de salud puede consultar la línea de toxicología y definir el tratamiento antes de que la persona llegue al hospital.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Desde el enfoque de la atención prehospitalaria, la intoxicación es una condición que puede evolucionar rápidamente, por lo que requiere vigilancia continua del estado del paciente, especialmente en lo relacionado con la respiración y el nivel de conciencia.
    p.mb-0 El último evento crítico de este recorrido ocurre en el agua. Ríos, quebradas, piscinas y represas hacen parte del paisaje y del descanso en el país, y también de sus emergencias, con una particularidad, y es que quien se ahoga rara vez pide ayuda.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Ahogamiento
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img28.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El agua ahoga en silencio y en pocos minutos. Ese proceso de dificultad respiratoria aparece por inmersión o sumersión en un líquido, y avanza con rapidez. Cuando el agua entra a la vía aérea, se interrumpe la entrada de oxígeno y, en pocos minutos, el corazón se detiene por falta de oxígeno. Por esa razón, el ahogamiento es ante todo una emergencia respiratoria, y el manejo se centra en restablecer la ventilación cuanto antes (American Heart Association, 2020).
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 La Organización Mundial de la Salud (2016) lo señala como una de las principales causas de muerte accidental en el mundo, con especial impacto en niños y en jóvenes. En Colombia, los ríos de corriente fuerte, las piscinas sin vigilancia, los pozos y las represas concentran la mayoría de los casos, muchos de ellos en fines de semana y temporadas de vacaciones.
    p Los signos de una persona que se está ahogando difieren de lo que muestran las películas. La persona rara vez grita o agita los brazos; suele mantenerse vertical en el agua, con la cabeza echada hacia atrás y la boca a nivel de la superficie, en silencio, durante veinte a sesenta segundos antes de hundirse. Una vez rescatada, puede presentar tos, dificultad respiratoria, piel azulada, vómito, confusión o ausencia de respiración.
    p.mb-4 El rescate seguro precede a cualquier maniobra, porque quien entra al agua sin preparación suele convertirse en una segunda víctima. La atención sigue entonces una secuencia fija, que prioriza la vía aérea y la respiración sobre cualquier otra medida:
    .tarjeta.tarjeta--bg03.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="a.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Rescatar sin entrar al agua
            p Se alcanza a la persona con un palo, una toalla o una cuerda, o se le lanza un objeto que flote, como una nevera de icopor o un neumático. Solo entra al agua quien tiene entrenamiento de rescate. Ejemplo: en un balneario del río Coello se lanza un salvavidas atado a una cuerda en lugar de nadar hacia la persona.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img29.jpg', alt='')
        .row(titulo="b.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Activar el sistema de emergencias
            p Mientras se rescata, otra persona llama al 123 e indica el lugar exacto y el estado de la víctima. Ejemplo: se envía a alguien a la portería de la piscina para guiar a la ambulancia.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img30.jpg', alt='')
        .row(titulo="c.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Sacar del agua y acostar boca arriba
            p Se coloca a la persona sobre una superficie firme, con el cuerpo alineado, y se sospecha lesión de columna solo si hubo clavado o golpe. Ejemplo: se arrastra por las axilas, sin doblar el cuello, hasta el borde.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img31.jpg', alt='')
        .row(titulo="d.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Verificar respiración e iniciar reanimación
            p Si no respira, se dan cinco ventilaciones iniciales y se continúa con compresiones y ventilaciones según la formación recibida, sin intentar sacar el agua de los pulmones. Ejemplo: se abre la vía aérea, se sella la boca y se insufla hasta que el pecho se eleve.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img32.jpg', alt='')
        .row(titulo="e.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Colocar de lado si hay respiración
            p Si la persona respira, se coloca en posición lateral de seguridad para que drene el agua y el vómito y se le abriga, porque la hipotermia es frecuente tras la inmersión. Ejemplo: se retira la ropa mojada y se cubre con toallas secas.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img33.jpg', alt='')
        .row(titulo="f.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Trasladar siempre
            p Toda persona rescatada de un ahogamiento requiere valoración médica, aunque parezca recuperada, porque los pulmones pueden inflamarse horas después. Ejemplo: se insiste en el traslado aunque la persona diga que se siente bien.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img34.jpg', alt='')
    p Los seis pasos convierten el ahogamiento en la excepción de la regla general de reanimación, porque aquí las ventilaciones van primero. La falta de oxígeno es la causa del paro y devolver aire a los pulmones es la prioridad. Las maniobras para sacar el agua, como colgar a la persona de los pies o presionarle el abdomen, retrasan la ventilación y provocan vómito. Por ello se desaconsejan (Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja, 2020).
    p.mb-4 La atención de un ahogamiento siempre llega después del hecho, mientras que la prevención actúa antes y evita la mayoría de los casos. Las medidas que la sostienen no exigen equipos costosos ni conocimientos técnicos, sino hábitos constantes en el agua y decisiones tomadas antes de entrar en ella. Su aplicación en entornos familiares, laborales y recreativos reduce el riesgo para niños, jóvenes y adultos por igual. Las recomendaciones de mayor efecto son las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img35.svg' alt='AvatarTop')
          h4.text-center Vigilancia permanente de los niños
          p.text-center Un adulto acompaña dentro del agua y sin distraerse con el celular. La vigilancia no se delega en otros niños ni en hermanos mayores.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img36.svg' alt='AvatarTop')
          h4.text-center Uso de chaleco salvavidas
          p.text-center En lanchas y embarcaciones se usa durante todo el trayecto, incluso en recorridos cortos por ríos tranquilos, porque un vuelco ocurre sin aviso.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img37.svg' alt='AvatarTop')
          h4.text-center Abstención de alcohol y sustancias
          p.text-center Antes de nadar o de navegar alteran el equilibrio, el juicio y el tiempo de reacción, y aumentan la posibilidad de un accidente.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img38.svg' alt='AvatarTop')
          h4.text-center Respeto a las señales de peligro
          p.text-center Las banderas en las playas y las restricciones en ríos crecidos advierten sobre corrientes que no se perciben desde la orilla.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img39.svg' alt='AvatarTop')
          h4.text-center Formación de la comunidad
          p.text-center Aprender rescate seguro y reanimación cardiopulmonar básica permite que quien está cerca actúe sin convertirse en una segunda víctima del mismo incidente.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        p.mb-0 Quien conoce los signos del ahogamiento advierte a tiempo que alguien, en silencio, está en problemas, y esa advertencia vale más que cualquier maniobra posterior. La prevención, en este caso, evita la mayoría de las emergencias antes de que ocurran.
    .row.justify-content-center.mb-0
      .col.col-12.col-lg-10
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 Reconocer el evento y aplicar las primeras medidas resuelve solo una parte de la atención. Lo que viene después decide si ese esfuerzo se conserva, porque la persona necesita vigilancia continua, información transmitida con orden y un traslado preparado. Sin esos tres elementos, el trabajo de los primeros minutos pierde su efecto.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>

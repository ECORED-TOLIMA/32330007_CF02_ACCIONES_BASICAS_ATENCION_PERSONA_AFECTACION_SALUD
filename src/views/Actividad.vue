<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  </template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar los conocimientos sobre valoración inicial y atención básica del lesionado mediante la identificación de signos vitales, el reconocimiento de eventos críticos y la toma de decisiones en situaciones de emergencia, con el fin de responder de manera segura, oportuna y acorde con los principios de los primeros auxilios.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito de la valoración inicial del lesionado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer un diagnóstico médico de la enfermedad que presenta la persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar de manera rápida las condiciones que comprometen la vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Administrar los medicamentos que la persona necesita en el lugar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar a la persona al centro asistencial más cercano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La valoración inicial busca detectar primero lo que amenaza la vida, antes de cualquier otra acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Por qué el pulso se palpa con los dedos índice y medio y nunca con el pulgar?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque el pulgar tiene pulso propio y puede confundirse con el de la persona atendida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque el pulgar ejerce demasiada presión sobre la arteria y la obstruye.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque el pulgar resulta incómodo para sostener el reloj durante el conteo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque el pulgar solo permite valorar el pulso en la muñeca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El pulgar tiene latido propio, de modo que su uso altera el dato obtenido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué indica un llenado capilar que tarda más de dos segundos en recuperar el color?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la persona presenta fiebre en ese momento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que la temperatura del ambiente se encuentra elevada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que existe un posible compromiso de la circulación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que la persona se encuentra deshidratada por falta de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un llenado capilar lento señala que la sangre no está llegando bien a los tejidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Dentro del método ABCDE, ¿qué condición se resuelve antes que las demás?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La hemorragia visible en una extremidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La deformidad de un hueso largo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La pérdida de calor corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La obstrucción de la vía aérea.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Sin paso de aire ninguna otra maniobra tiene efecto, por eso la vía aérea encabeza la secuencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué valora la escala AVDI durante la evaluación primaria?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El estado de conciencia en cuatro niveles de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La intensidad del dolor que refiere la persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de sangre perdida en el incidente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La temperatura corporal medida en la axila.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La escala AVDI clasifica la conciencia en alerta, respuesta verbal, respuesta al dolor e inconsciencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué distingue a una intervención inmediata de una de soporte?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La intervención inmediata la realiza personal de salud y la de soporte, cualquier persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La intervención inmediata controla una condición que compromete la vida en ese momento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La intervención inmediata se aplica solo en la vía pública y la de soporte, en el hogar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La intervención inmediata requiere equipos especializados y la de soporte no los usa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Lo que define la urgencia de una intervención es el riesgo vital que controla, no quién la ejecuta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Por qué la vía aérea se atiende antes que un sangrado visible?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque el sangrado siempre se detiene por sí solo en pocos minutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la falta de oxígeno produce daño en menos tiempo que la pérdida de sangre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque la vía aérea resulta más sencilla de manejar que una hemorragia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque el sangrado requiere autorización del personal de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La hipoxia compromete la vida en minutos, y por eso encabeza el orden de atención.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué medida antecede al manejo de cualquier herida?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar un antiséptico directamente sobre la lesión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retirar los cuerpos extraños que estén incrustados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lavarse las manos y colocarse guantes antes del contacto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cubrir la herida con algodón para absorber la sangre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La barrera protege a la persona atendida y a quien atiende, por eso antecede a toda maniobra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué caracteriza a una hemorragia de origen arterial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La sangre sale a impulsos y presenta un color rojo brillante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La sangre fluye de manera lenta y continua, con color oscuro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sangre aflora en toda la superficie de la piel raspada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La sangre no resulta visible y solo se sospecha por la palidez.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El impulso coincide con el latido del corazón, lo que explica la rapidez de la pérdida.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la primera técnica para controlar una hemorragia externa?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El torniquete colocado por encima de la herida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La presión directa sostenida sobre la herida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La aplicación de hielo sobre la zona afectada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La elevación de la extremidad sin presionar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La presión directa controla la mayoría de las hemorragias externas y se sostiene sin levantar el apósito.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En una persona inconsciente, ¿cuál es la causa más frecuente de obstrucción de la vía aérea?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La presencia de un cuerpo extraño en la garganta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La inflamación producida por una reacción alérgica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La caída de la lengua hacia la parte posterior de la garganta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La acumulación de secreciones en los pulmones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Al perder el tono muscular la lengua cae hacia atrás, y una maniobra sencilla restablece el paso del aire.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuándo se utiliza la posición lateral de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En una persona inconsciente que respira por sí misma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En una persona consciente con dolor en el pecho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En una persona con sospecha de fractura de columna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En una persona que presenta una hemorragia en la pierna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esa posición mantiene la vía aérea abierta y evita la aspiración si la persona vomita.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué conducta corresponde ante una fractura o una luxación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alinear el hueso antes de inmovilizar la zona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recolocar la articulación que se salió de su lugar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inmovilizar la zona en la posición en que se encuentra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicar calor local para disminuir la inflamación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El primer respondiente protege la lesión sin corregirla, porque manipularla puede dañar vasos y nervios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué se debe evitar durante una convulsión?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Retirar los objetos cercanos con los que pueda golpearse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sujetar a la persona e introducirle objetos en la boca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proteger su cabeza con una prenda doblada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contar el tiempo que dura el episodio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Sujetar o introducir objetos produce lesiones adicionales y no detiene la convulsión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es la conducta adecuada ante un desmayo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sentar a la persona y darle una bebida azucarada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Levantarla de inmediato para que recupere el ánimo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acostarla boca arriba y elevarle las piernas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicarle agua fría en el rostro hasta que despierte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esa posición favorece el retorno de sangre al cerebro, que es lo que resuelve el desmayo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Ante la sospecha de un infarto o de un accidente cerebrovascular, ¿qué dato resulta decisivo al llamar a la línea 123?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La hora en que comenzaron los síntomas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La edad exacta de la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nombre del medicamento que toma con frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La distancia que separa el lugar del hospital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los tratamientos que restablecen el flujo sanguíneo dependen del tiempo transcurrido desde el inicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué medida corresponde ante una intoxicación con un producto químico?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Provocar el vómito para expulsar la sustancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar leche o remedios caseros como antídoto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Proteger a quien ayuda y conservar el envase del producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Esperar a que los síntomas desaparezcan por sí solos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La protección de quien ayuda evita una segunda persona afectada, y el envase orienta el tratamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Con qué frecuencia se reevalúa a una persona inestable durante el seguimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cada cinco minutos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cada quince minutos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cada media hora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo cuando aparezca una molestia nueva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La reevaluación cada cinco minutos permite detectar a tiempo el deterioro de una persona inestable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué información se entrega en la llamada al sistema de emergencias?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La opinión sobre el posible diagnóstico de la persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El lugar exacto, lo ocurrido, el estado de la persona y lo que ya se hizo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los datos personales de quien realiza la llamada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El nombre del hospital al que se desea trasladar a la persona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Con esos datos el centro regulador decide qué recurso enviar y con qué prioridad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué se abriga a una persona con signos de <em>shock</em>?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque el abrigo reemplaza la atención especializada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la hipotermia agrava el sangrado y empeora el pronóstico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque el calor detiene el dolor de las lesiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque así se evita que la persona pierda la conciencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La pérdida de calor dificulta la coagulación, de modo que abrigar forma parte del manejo del <em>shock</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad. Sus respuestas demuestran conocimientos sólidos sobre los signos vitales y la valoración inicial, las intervenciones ante heridas y hemorragias, el manejo de la vía aérea y de las lesiones osteomusculares, el reconocimiento de los eventos críticos y la evaluación, la comunicación y el traslado del lesionado.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>

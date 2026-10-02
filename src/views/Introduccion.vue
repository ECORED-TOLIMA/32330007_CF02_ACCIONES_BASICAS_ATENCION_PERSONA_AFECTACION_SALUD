<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 La atención inicial de una persona con afectación de la salud requiere una intervención organizada, rápida y basada en criterios técnicos que permitan identificar rápidamente las condiciones que comprometen la vida. En este contexto, la valoración del lesionado y la aplicación de acciones básicas de primeros auxilios constituyen elementos fundamentales para garantizar una respuesta eficaz y segura.
        p(data-aos="fade-down") El desarrollo de contenidos aborda el reconocimiento de los signos vitales, la valoración inicial del paciente y la ejecución de intervenciones básicas orientadas a estabilizar la condición de la persona afectada. También integra el manejo de situaciones frecuentes en emergencias, como hemorragias, alteraciones de la vía aérea, lesiones osteomusculares y estados de <em>shock</em>, permitiendo una actuación estructurada frente a diferentes escenarios.
        p.mb-0(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RQ22C7k8gk4?si=msGYSL1ghusyGGp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>

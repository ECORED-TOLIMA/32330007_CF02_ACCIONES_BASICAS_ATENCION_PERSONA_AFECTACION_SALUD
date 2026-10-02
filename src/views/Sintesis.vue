<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta la atención inicial como un proceso continuo que va de la lectura del cuerpo a la entrega segura de la persona lesionada. Su recorrido enseña a obtener información confiable con la observación y el tacto, a reconocer con método la condición que compromete la vida y a intervenir sobre ella con los recursos disponibles en el lugar. Cada eje aporta una parte de esa secuencia, desde la valoración de los signos hasta la comunicación con el sistema de emergencias. Lo esencial no consiste en hacer mucho, sino en valorar con orden, actuar dentro del propio alcance, vigilar los cambios y comunicarlos a tiempo. De esa continuidad depende que el esfuerzo del primer respondiente se traduzca en una atención segura y oportuna.
    p.mb-4 A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos del componente y las relaciones que los articulan:
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Valoración inicial y primeros auxilios básicos”, organizado en cinco ejes: signos vitales y valoración inicial del lesionado, intervenciones en primeros auxilios con heridas y hemorragias, manejo de la vía aérea y lesiones osteomusculares, reconocimiento de eventos críticos, y evaluación, comunicación y traslado. Cada eje se une al nodo central con un conector relacional y despliega sus subtemas, en un recorrido que va de la valoración a la entrega segura del lesionado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

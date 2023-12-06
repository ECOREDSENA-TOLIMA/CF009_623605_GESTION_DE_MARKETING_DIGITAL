<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Formalización de ventas y evaluación de resultados, se centra en dos aspectos cruciales para el éxito empresarial. Primero, se aborda el marco normativo, explorando el Código del Comercio, contratos comerciales y el Estatuto del Consumidor. Esta perspectiva asegura que las transacciones se realicen dentro de parámetros legales y éticos. Segundo, se destaca el proceso de mejora continua mediante la implementación de indicadores de gestión, especialmente los KPI. Además, se resalta el ciclo PDCA como una metodología clave para ajustar estrategias y garantizar un rendimiento óptimo. En conjunto, este enfoque proporciona a los profesionales las herramientas esenciales para la conformidad legal, la eficiencia operativa y el logro constante de objetivos comerciales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formalización de ventas y evaluación de resultados, encontramos la importancia de considerar el marco normativo y el proceso de mejora continua, evidentes en la implementación de indicadores de gestión, como elementos clave para aumentar las posibilidades de éxito en el logro de los objetivos de negocio.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Objeciones en la negociación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las objeciones en la negociación son obstáculos que un cliente puede presentar para evitar concretar una compra. Esta situación es común en todos los sectores de ventas y puede considerarse como una defensa natural por parte de los clientes cuando no se sienten seguros en sus decisiones de compra o se utiliza como una estrategia durante las negociaciones. Aunque lo fundamental en una venta radica en la oferta de un producto y en la existencia de un cliente interesado, de vez en cuando surgen objeciones que el negociador debe saber gestionar hábilmente para lograr la concreción de la venta.

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Razones de las objeciones

    p.mb-5 Dentro de las razones más frecuentes que soportan las objeciones de los clientes, se destacan las presentadas en la figura 2, que se acompañan con algunas técnicas de gestión sugeridas al negociador:

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Objeciones de los clientes: razones y técnicas de negociación</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-1-1.svg', alt='En la figura 2 se muestran algunas de las objeciones más comunes de los clientes y la forma de rebatirlas por parte del vendedor.')

    .row.justify-content-center.align-items-center.mt-5.mb-2
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Objeciones de los clientes: razones y técnicas de negociación</em>
        figure
          img.mb-4(src='@/assets/curso/temas/tema2/img-1-2.svg', alt='En la figura 2 se muestran algunas de las objeciones más comunes de los clientes y la forma de rebatirlas por parte del vendedor.') 

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Gestión de objeciones

    p La gestión efectiva de objeciones en el proceso de ventas es esencial para superar las preocupaciones del cliente y cerrar acuerdos exitosos. En este contexto, es crucial abordar algunas de las objeciones más comunes con estrategias específicas. Una de las objeciones frecuentes es el precio elevado, donde resaltar el valor del producto y explicar cómo satisface mejor las necesidades del cliente puede ser clave. Asimismo, cuando surgen dudas sobre la calidad, proporcionar pruebas tangibles como testimonios, garantías o certificaciones puede disipar inquietudes.
    p.mb-5 Otra objeción común es la necesidad de tiempo para reflexionar, ante lo cual es importante comprender y acordar un seguimiento, brindando información adicional según sea necesario. Cuando la competencia parece más atractiva, conocer en profundidad a los competidores y resaltar las ventajas únicas de la oferta puede marcar la diferencia. Además, abordar la falta de urgencia mediante beneficios adicionales o descuentos limitados puede incentivar la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-5
      .col-8(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#E3ECF7")
          p Es fundamental reconocer el miedo al cambio y ofrecer ejemplos de clientes que experimentaron beneficios positivos tras realizar cambios similares. En casos de falta de confianza en la marca, construir esa confianza a través de testimonios, garantías y demostraciones puede ser fundamental. Estas estrategias adaptativas contribuyen a gestionar de manera efectiva las objeciones, construyendo relaciones sólidas con los clientes y facilitando el cierre de ventas.
            br
            br
            | A continuación, se presentan algunas objeciones comunes y estrategias para gestionarlas:

    .row.justify-content-center.mt-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-3.svg' alt='AvatarTop')
          p <strong>“No tengo dinero”</strong>
          p Cuando alguien se interese, pero su justificación es la falta de dinero, se recomienda:
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | Ofrecerle los productos comprometiéndolo a regresar luego.
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | A modo de broma, manifestarle que también se reciben tarjetas, pagar con código QR o monedas. 
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | Presentar productos a bajo costo.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-4.svg' alt='AvatarTop')
          p  <strong>“No tengo tiempo de esperar”</strong>
          p Cuando un cliente está de prisa y no hay posibilidades de atenderlo de manera inmediata, resulta útil…
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | Darle información impresa o links para que vaya leyendo.
            li.mb-0
              i.fas.fa-circle(style="color:#000")
              | Si es el caso que se va del local o del chat, recalcar que se le espera más tarde para atenderlo como se merece.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-5.svg' alt='AvatarTop')
          p <strong>“Si me fía, le compro”</strong>
          p En caso de que no existan productos que se vendan a crédito, responder de manera agradable haciéndole saber al cliente que no está en sus manos vender productos de esa manera.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-6.svg' alt='AvatarTop')
          p <strong>“No necesito nada más”</strong>
          p Es importante ser convincente en el ofrecimiento de productos cruzados y los beneficios. Si no se explica de la manera correcta, el cliente pedirá, por ejemplo, su cambio en vez de un producto y ya será muy difícil que cambie de opinión. Se recomienda ofrecer servicios o productos asociados o complementarios a la compra inicial.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
          p <strong>“Me gusta, pero justo ahora no”</strong>
          p Las plataformas de comercio electrónico detectan al usuario que estuvo viendo un producto por cierto tiempo, por lo que los sistemas lo perfilan y lo asocian con un producto deseado. Es importante configurar y gestionar bien estas herramientas para que, en unos días, se le pueda enviar publicidad motivando a la compra, incluso crear promociones que atraigan a estos interesados.

















</template>

<script>
export default {
  name: 'Tema2',
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

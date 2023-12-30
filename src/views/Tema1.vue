<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad contractual

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde la perspectiva histórica, es crucial distinguir entre el derecho comercial y la historia del comercio en sí mismo. La práctica del comercio se remonta a los primeros seres humanos que reconocieron la necesidad de intercambiar productos con otras comunidades o individuos. Aunque las transacciones comerciales siempre han estado impregnadas de ciertas normas, ya sea a nivel individual o cultural, el contexto actual refleja vestigios de esta normatividad en los negocios. Una de las normas más significativas ha sido la palabra de honor, especialmente evidente en transacciones entre campesinos, donde la palabra comprometida ha sido una ley no escrita, sin necesidad de formalidades documentales.

    p.mb-4 Con el crecimiento exponencial del comercio y la sociedad, la complejidad de estas interacciones también ha aumentado. Por esta razón, es responsabilidad de los Estados regular y legislar las condiciones comerciales. En la actualidad, cualquier acuerdo de negociación debe ajustarse al marco legal nacional e internacional, especialmente cuando se trata de operaciones de comercio exterior. Este proceso de formalización y regulación se ha vuelto esencial para garantizar transacciones justas y equitativas en un entorno comercial en constante evolución.

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Código del comercio

    p.mb-5 Se denomina código de comercio al conjunto de normas que regulan las relaciones mercantiles, consideradas como políticas de obligatorio cumplimiento en actividades de comercio de cada país. En este contexto, intervienen diferentes entes como empresas comerciales, empresas industriales, operaciones de cambio y alquiler de mercancía.

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Código de comercio y entes comerciales</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-2-1.svg', alt='En la figura 1 se muestra el contexto de los entes comerciales según el código de comercio, incluye empresas comerciales, industriales, operaciones de cambio y alquiler de mercancías.')

    .row.justify-content-center.align-items-center.mt-5.mb-2
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Código de comercio y entes comerciales</em>
        figure
          img.mb-4(src='@/assets/curso/temas/tema1/img-2-2.svg', alt='En la figura 1 se muestra el contexto de los entes comerciales según el código de comercio, incluye empresas comerciales, industriales, operaciones de cambio y alquiler de mercancías.') 

    p.mb-4 Al ser un compendio de normas, por lo general son documentos muy vastos, lo que explica la existencia de una rama del Derecho enfocada específicamente al comercio que, a su vez, tendrá otras especialidades según los casos y su naturaleza jurídica.

    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Contratos comerciales

    p Estos son documentos que se utilizan para formalizar y regular acuerdos a los que llegan dos o más partes en una negociación. Dependiendo de la naturaleza del acuerdo comercial o negocio, se requiere un tipo específico de contrato que se acomode a las necesidades y requisitos pactados.
    p.mb-5 A continuación, se presentan los tipos de contratos comerciales más comunes y su respectiva descripción:

    .tarjeta.tarjeta--azul.slyder-b-img.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Compraventa mercantil 
            p Una de las partes vende a la otra una propiedad o cosa y la otra parte se compromete a pagar el valor pactado. Si el pago se pacta en dinero y especie, se entenderá como una permuta, siempre y cuando la especie valga más que el dinero, de lo contrario será venta (Código de Comercio, 1971, Art. 905).  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mandato comercial
            p Una parte se obliga a realizar una serie de actos comerciales a nombre de la otra, de forma remunerada o gratuita (CC, 1971, Art. 905).  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-3.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Comisión
            p Especie de mandato, donde una de las partes es encomendada a realizar ciertas tareas a nombre propio, pero por cuenta ajena (CC, 1971, Art. 1287).  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Suministro
            p Contrato de colaboración empresarial, en el que dos o más negocios forman un vínculo donde una de las partes se compromete a suministrar de forma continua y responsable, bienes o servicios a la otra parte (CC, 1971, Art. 968).  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-5.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Fletamiento
            p Tiene la función de comprometer a una de las partes a realizar labores de transporte de materiales mediante un vehículo, nave o cualquier otro medio de transporte (CC, 1971, Art. 1667). *Nota: la contratación de transporte tiene más normas a considerar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-6.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Arrendamiento de vivienda
            p Regulado por la Ley 820 de 2003, define la relación entre un arrendador y un arrendatario, una de las partes da el goce de una propiedad a la otra para que esta la utilice como vivienda a cambio de una remuneración.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-7.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Comodato
            p Contrato en el que una de las partes entrega un bien de manera gratuita a la otra, que debe ser devuelto una vez finalice el contrato o cuando termine su uso por otra razón. Normalmente se establece para que la parte que recibe el bien, cuide de la propiedad a cambio de vivir en ella (CC, 1971, Art. 2200).  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-8.png', alt='Texto que describa la imagen')

    p.mb-5 Es importante tener en cuenta los elementos que conforman un contrato, como se muestra a continuación:

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Participantes")
            .col-md-12.mb-4.mb-md-0
              p.text-small Contiene toda la información posible que identifique a los que participan del acto contractual (nombres completos, domicilio, documentos de identidad, datos de contacto y notificación, vinculación laboral, etc.).

          .row(numero="2" titulo="Servicio o tipo de contrato")
            .col-md-12.mb-4.mb-md-0
              p.text-small Describe el objeto, cosa o motivo de la formalización del contrato.

          .row(numero="3" titulo="Duración")
            .col-md-12.mb-4.mb-md-0
              p.text-small Por lo general, se registran dos fechas: el momento de inicio y la fecha de finalización.

          .row(numero="4" titulo="Pagos")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se debe establecer el precio pactado, incluyendo impuestos, formas de pago y plazos.

          .row(numero="5" titulo="Resolución de conflictos")
            .col-md-12.mb-4.mb-md-0
              p.text-small En caso de presentarse tropiezos en los que las partes no logran llegar a acuerdos y conciliaciones, se dejan estipuladas las formas de desvinculación o, en su defecto, se establece qué ley se somete al contrato con base en el cumplimiento y la ejecución.

          .row(numero="6" titulo="Otras que consideren las partes")
            .col-md-12.mb-4.mb-md-0
              p.text-small En caso de ser necesario, se consigna algún acuerdo adicional siempre y cuando estas cláusulas o condiciones no afecten o estén prohibidas por la ley.

      .col-lg-3
        img(src='@/assets/curso/temas/tema1/img-9.svg')        

    p.mb-4 Si en las actividades profesionales comerciales, se realiza un contrato mercantil, es muy importante consultar con profesionales especializados en el derecho comercial o, en su defecto, dedicar tiempo a la consulta y estudio de la normativa vigente.

    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Estatuto del Consumidor

    p.mb-5 Mediante la Ley 1480 de 2011 se expidió el Estatuto del Consumidor para proteger, promover y garantizar la efectividad y el libre ejercicio de los derechos de los consumidores. De manera general, este Estatuto contiene disposiciones que permiten a los consumidores ejercer sus derechos en temas como: 

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")
          .row
            .col-lg-7.mb-3
              ul.lista-ul.mb-3
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Garantía legal.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Derecho a la información.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Reparación de los bienes y servicios en caso de fallas. 
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Reversión del pago.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Obligaciones generadas de las relaciones de consumo.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Garantía de bienes inmuebles.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Información para niños, niñas y adolescentes.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Casos en los cuales se puede impedir la comercialización de determinados productos.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Protección contra cláusulas abusivas.
                li.mb-0
                  i.fas.fa-circle(style="color:#000")
                  | Vigilancia y control en materia de reglamentación técnica y metrología legal, entre otros.

            .col-lg-5
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-10.png', alt='Texto que describa la imagen')
              
    p.mb-5 A continuación, se presenta un resumen de la normatividad vigente colombiana, partiendo del Estatuto del Consumidor y los decretos complementarios a la ley.

    .row.align-items-center.mb-5
      .col-auto
        h3 Ley 1480 de 2011. Estatuto del Consumidor

    .row.mb-5
      .col-md-4.mb-3
        figure
            img(src='@/assets/curso/temas/tema1/img-11.svg', alt='')
      .col-md-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Decreto 1413 de 2018: reglamenta la forma en que el prestador de un servicio que supone la entrega de bienes muebles, debe disponer de ellos.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Decreto 587 de 2016: reglamenta las condiciones y el procedimiento para la reversión de los pagos, cuando la adquisición de bienes haya sido realizada a través del comercio electrónico.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Decreto 1499 de 2014: reglamenta las ventas que utilizan métodos no tradicionales y las ventas a distancia.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Decreto 1369 de 2014: establece los requisitos que deberá cumplir la publicidad respecto de las cualidades, características o atributos ambientales, de los productos que generen beneficios ambientales.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Decreto 1368 de 2014: reglamenta las operaciones de crédito otorgadas por personas naturales o jurídicas cuyo control y vigilancia no haya sido asignada a la Superintendencia Financiera.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Decreto 975 de 2014: determina los casos, la forma y el contenido en que se deberá presentar la información y la publicidad.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Decreto 735 de 2013: establece las reglas para hacer efectiva la garantía legal y la suplementaria.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Decreto 704 de 2012: establece los criterios que tendrá en cuenta la Superintendencia de Industria y Comercio para graduar las sanciones administrativas.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#E3ECF7")
          p Recuerde que existen diferentes páginas en internet, donde se podrá obtener información detallada y concreta sobre cada normativa, esto dará más claridad, en el momento de aplicar la legislación en el ámbito organizacional.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

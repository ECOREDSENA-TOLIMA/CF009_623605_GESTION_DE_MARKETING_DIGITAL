(function(e){function o(o){for(var a,i,c=o[0],s=o[1],d=o[2],u=0,l=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(o);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],a=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(a=!1)}a&&(r.splice(o--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5f19811d","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"8883722f",creditos:"e0a862ca",glosario:"6edd37dd",intro:"75c6ed1c",referencias:"7df081ac",sintesis:"4b196da5",tema1:"9d1255c7",tema2:"305ce5cc",tema3:"ef76c509"}[e]+".js"}function s(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var o=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?o.push(i[e]):0!==i[e]&&n[e]&&o.push(i[e]=new Promise((function(o,n){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"26246671","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"f3a189b9","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"a4a9ab68","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"1f457347",creditos:"066770fd",glosario:"8f6aa7b7",intro:"31d6cfe0",referencias:"cf151eaa",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===t))return o()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===a||u===t)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var a=o&&o.target&&o.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var a=t[e];if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(o,n){a=t[e]=[o,n]}));o.push(a[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(o){u.onerror=u.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(o)},s.m=e,s.c=a,s.d=function(e,o,n){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(n,a,function(o){return e[o]}.bind(null,a));return n},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=o,d=d.slice();for(var l=0;l<d.length;l++)o(d[l]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"417a":function(e,o,n){e.exports=n.p+"img/fondo-banner-principal.60a3b765.svg"},"52e5":function(e,o,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("68f3"),i=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),u=d.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");l["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a77"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,o){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===o.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Formalización de ventas y evaluación de resultados",descripcionCurso:"Este material de estudio y formación se centra en aspectos comerciales, incluyendo normativas, técnicas de ventas e indicadores de gestión de la organización.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Normatividad contractual",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Código del comercio",hash:"t_1_1"},{numero:"1.2",titulo:"Contratos comerciales",hash:"t_1_2"},{numero:"1.3",titulo:"Estatuto del consumidor",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Objeciones en la negociación",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Razones de las objeciones",hash:"t_2_1"},{numero:"2.2",titulo:"Gestión de objeciones",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Indicadores de gestión y satisfacción",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Mediciones",hash:"t_3_1"},{numero:"3.2",titulo:"KPI",hash:"t_3_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_09_623605.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1.3 Estatuto del consumidor",referencia:"Vergara, F. (2021). Cómo hacer anuncios en Tik Tok en el 2022 - Curso gratis de TikTok Ads. [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/Pp214DIxfdc"},{tema:"1.3 Estatuto del consumidor",referencia:"Facebook. (s. f.) Marketplace. Facebook.",tipo:"Artículo",link:"https://www.facebook.com/help/1713241952104830/?helpref=uf_share"},{tema:"1.3 Estatuto del consumidor",referencia:"Facebook. (s.f.). ¿Cómo creo una página en Facebook? Facebook,",tipo:"Artículo",link:"https://www.facebook.com/help/104002523024878/?helpref=uf_share"},{tema:"1.3 Estatuto del consumidor",referencia:"Facebook. (s.f.). Información sobre Facebook Reels. Meta.",tipo:"Artículo",link:"https://www.facebook.com/business/help/581040529926114?id=376980407544978"},{tema:"1.3 Estatuto del consumidor",referencia:"Facebook. (s.f.). Meta business suite. Meta.",tipo:"Artículo",link:"https://www.facebook.com/business/tools/meta-business-suite"},{tema:"3.2 KPI",referencia:"Carbellido. C. (s.f.). KPIs en redes sociales: cómo medir los objetivos en social media [Plantillas]. Un Community Manager.",tipo:"Artículo",link:"https://www.uncommunitymanager.es/kpis-redes-sociales/"}],glosario:[{termino:"Ciclo PHVA",significado:"(Planificar-Hacer-Verificar-Actuar). Es una estrategia interactiva de resolución de problemas para mejorar procesos e implementar cambios. Es considerado un método de mejora continua, toda vez que no es un proceso que se ejecuta una sola vez, sino una espiral continua que busca mejorar los procesos e iteraciones."},{termino:"<em>Dashboard</em>",significado:"tablero o cuadro de mandos, en referencia a un documento en el que se reflejan, mediante representación gráfica, las principales métricas o KPI que intervienen en la consecución de los objetivos"},{termino:"Inteligencia de negocio",significado:"<em>Business Intelligence</em> (BI) es el conjunto de conceptos, métodos, aplicaciones, prácticas y capacidades que gestionan la información o los datos de una empresa a través de su recopilación, análisis y transformación con el propósito de mejorar la toma de decisiones estratégicas."},{termino:"<em>Machine learning</em>",significado:"(aprendizaje automático) es la rama de la inteligencia artificial que dota a las máquinas de la habilidad de “aprender” a partir del análisis de datos con el fin de identificar patrones y apoyar en la toma decisiones con la mínima intervención humana."}],referencias:[{referencia:"Congreso de Colombia (2011). Ley 1480 de 2011. Estatuto del consumidor. (12 de octubre de 2011).",link:"http://secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html"},{referencia:"ISOTools. (s.f.). KPI (Key Performance Indicators) indicadores clave de desempeño. ISOTools.",link:"https://co.isotools.us/gestion-procesos-principales-indicadores-desempeno/"},{referencia:"Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (2022, 20 de mayo). Interpretación de indicadores de gestión (KPI) [Archivo de vídeo]. YouTube.",link:"https://www.youtube.com/watch?v=nCUYv5oPwJY"},{referencia:"Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (2022, 16 de septiembre). La validación de la información y diseño de indicadores de gestión [Archivo de vídeo]. YouTube.",link:"https://www.youtube.com/watch?v=_pcuK2pm1UM"},{referencia:"Marketeros Latam. (2021). Ciclo de Deming: etapas e importancia. Marketeros Latam.",link:"https://www.marketeroslatam.com/ciclo-de-deming-etapas-e-importancia/"},{referencia:"Ministerio de Comercio, Industria y Turismo. (s.f.). Protección del consumidor.",link:"https://www.mincit.gov.co/minindustria/estrategia-transversal/regulacion/proteccion-del-consumidor"},{referencia:"Presidencia de Colombia. (1971). Decreto 410 de 1971, por el cual se expide el Código de Comercio. (27 de marzo de 1971).",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de Línea de Producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jaime Hernán Tejada Llano",cargo:"Experto Temático",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Maribel Avellaneda Nieves",cargo:"Diseñadora Instruccional",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesor Metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo de Desarrollo Curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Juan Gilberto Giraldo Cortes",cargo:"Diseñador Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Asesora Metodológica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Aruzidna Sánchez Alonso",cargo:"Diseñador Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador y Productor Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y Vinculación en Plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de Contenidos Accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});a["a"].prototype.$config=v;var k=n("9224");a["a"].prototype.$package=k,new a["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,o,n){e.exports=n.p+"img/banner-principal-decorativo-1.ffe98f44.svg"},"74b5":function(e,o,n){e.exports=n.p+"img/banner-princiapal.47f43eea.png"},"8f04":function(e,o,n){e.exports=n.p+"img/banner-principal-decorativo-2.89f4c9f5.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,o,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,o,n){}});
//# sourceMappingURL=app.7e2bde23.js.map
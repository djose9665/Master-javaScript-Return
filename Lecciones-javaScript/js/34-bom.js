'use strict'
// BOM: Browser Object Model
function getBom(){
  // Para saber que altura y que ancho tiene la pantalla se utiliza  
  console.log("Con window.inner ", window.innerHeight, window.innerWidth);
  
  // Tambien se puede utilizar esto... La diferencia es que este calcula el tamañp completo de la pestaña
  console.log("Con screen.width ",  screen.height, screen.width);

  //Para saber la URL de la pagina actual...
  console.log("URL: ", window.location.href);
}

// Para cambiar a otra pagina...
function redirecTo(url){
  window.location.href = url;
}

//Para abrir una ventana  
function abrirVentana(url){
  // Puede tener hasta 3 parametros, URL, desconocido y la altura/anchura 
  window.open(url,"","width=400,height=400");
}
getBom();
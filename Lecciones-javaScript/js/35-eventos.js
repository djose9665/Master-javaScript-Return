'use strict'

// Eventos del raton

function cambiarColor(){
  var bg = boton.style.background;
  if(bg == "green"){
    boton.style.background = "red";
  }
  else{
    boton.style.background = "green"
  }

  boton.style.padding = "10px";
  boton.style.border = "1px sollid #ccc";
  
  return true;
}

var boton = document.querySelector("#btn_presionar");


// Evento Click
boton.addEventListener('click', ()=>{
  cambiarColor();
});

// Evento Mouse Over
boton.addEventListener('mouseover', ()=>{
  console.log("No hagas eso");
});

// Evento MouseOut
boton.addEventListener('mouseout', ()=>{
  console.log("Saliste del boton");
});
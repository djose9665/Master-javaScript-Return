'use strict'

// Evento Load

window.addEventListener('load',()=>{
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
  boton.addEventListener('click', function(){
    cambiarColor();
    this.style.border = "10px solid black";
  });

  // Evento Mouse Over
  boton.addEventListener('mouseover', ()=>{
    console.log("No hagas eso");
  });

  // Evento MouseOut
  boton.addEventListener('mouseout', ()=>{
    console.log("Saliste del boton");
  });

  var input = document.querySelector("#campo_nombre");

  // Focus
  input.addEventListener('focus', ()=>{
    console.log("[focus] Estas dentro del input");
  });

  // Blur
  input.addEventListener('blur', ()=>{
    console.log("[blur] Estas fuera del input");
  });

  // Keydownw
  input.addEventListener('keydown', (event)=>{
    console.log("[keydow] Estas presionando esta tecla ", String.fromCharCode(event.keyCode));
  });

  // Keypress
  input.addEventListener('keypress', (event)=>{
    console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
  });

  // Keyup
  input.addEventListener('keyup', (event)=>{
    console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
  });
});
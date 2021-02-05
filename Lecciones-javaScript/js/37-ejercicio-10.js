'use strict';

window.addEventListener('load', ()=>{
  var formulario = document.querySelector('#formulario');
  var box_datos = document.querySelector('.dashed');
  box_datos.style.display = "none";
  

  formulario.addEventListener('submit', ()=>{
    var nombre = document.querySelector('#txt_nombre').value;
    var apellidos = document.querySelector('#txt_apellidos').value;
    var edad = document.querySelector('#txt_edad').value;
  /*
    var datos_usuario = [nombre, apellidos, edad];
    for(var usuario in datos_usuario){
      var parrafo = document.createElement("P");
      parrafo.append(datos_usuario[usuario]);
      box_datos.append(parrafo);
    }    
  */

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector('#p_apellidos span');
    var p_edad = document.querySelector('#p_edad span');
    box_datos.style.display = "block";

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
  });


});
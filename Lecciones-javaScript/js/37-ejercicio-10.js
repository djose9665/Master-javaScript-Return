'use strict';

window.addEventListener('load', ()=>{
  var formulario = document.querySelector('#formulario');
  var box_datos = document.querySelector('.dashed');
  box_datos.style.display = "none";

  formulario.addEventListener('submit', ()=>{
    var nombre = document.querySelector('#txt_nombre').value;
    var apellidos = document.querySelector('#txt_apellidos').value;
    var edad = parseInt(document.querySelector('#txt_edad').value);
    console.log("edad" + typeof(edad));
    
    if( nombre.trim() == null || nombre.trim().length == 0 ){
      // alert("Error, campo nombre vacio");
      var error_nombre = document.querySelector("#error_nombre");
      error_nombre.innerHTML = "Error, campo nombre invalido";
      error_nombre.style.color = "red";
      return false;
    }
    else{
      // error_nombre.style.color = "blue";
       document.querySelector("#error_nombre").style.display = "none";
    }
    if(apellidos.trim() == null || apellidos.trim().length == 0){
      // alert("Error, campo apellidos vacio");
      var error_apellidos = document.querySelector("#error_apellidos");
      error_apellidos.innerHTML = "Error, campo apellidos invalido";
      error_apellidos.style.color = "red";
      return false;
    }
    else{
      document.querySelector("#error_apellidos").style.display = "none";
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
      // alert("Error, campo edad vacio");
      var error_edad = document.querySelector("#error_edad");
      error_edad.innerHTML = "Error, campo edad invalido";
      error_edad.style.color = "red";
      return false;
    }
    else{
      document.querySelector("#error_edad").style.display = "none";
    }
  
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
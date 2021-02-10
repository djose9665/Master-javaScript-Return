'use strict'

window.addEventListener('load', function(){

  // LocalStorage

  // Comprovar el localstorage
  if(typeof(Storage) != "undefined"){
    console.log("LocalStorage disponible");
  }
  else{
    console.log("Navegador no compatible con LocalStorage");
  }

  // Guardar datos en localstorage
  localStorage.setItem("actividad", "Ejercicio");

  // recuperar datos del localstorage
  document.querySelector("#bebidas").innerHTML = localStorage.getItem("actividad");

  // Guardar Objeto
  var usuario = {
    nombre: "Daniel Martinez",
    correo: "djson@gmail.com",
    edad: 22
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Recuperar Objeto
  var user = JSON.parse(localStorage.getItem("usuario"));
  console.log(user);
  document.querySelector("#datos").append(user.nombre);


  // Eliminar un elemento del localstorage
  localStorage.removeItem("usuario");

  // Eliminar todos los elementos del localStorage
  localStorage.clear();
});
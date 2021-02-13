'use strict'

window.addEventListener('load', function(){
  // Ejercicio de localstorage
  /**
   * 1. Formulario que nos permita añadir peliculas
   */

   if(typeof(Storage) != "undefined"){
     console.log("Navegador compatible con local Storage");
   }else{
     alert("Navegador compatible con local Storage");
   }

  var form_peliculas = document.querySelector('#form_peliculas');
  form_peliculas.addEventListener('submit', function(){
    var txt_peliculas = document.querySelector('#txt_peliculas').value;
    if(txt_peliculas.trim().length >= 1){
      localStorage.setItem(txt_peliculas, txt_peliculas);
      // document.getElementById("txt_peliculas").value = "";      
    }
  });

  var form_borrar_pelicula = document.querySelector('#form_borrar_pelicula');
  form_borrar_pelicula.addEventListener('submit', function(){
    var txt_borrar_pelicula = document.querySelector('#txt_borrar_pelicula').value;
    if(txt_borrar_pelicula.trim().length >= 1){
      localStorage.removeItem(txt_borrar_pelicula, txt_borrar_pelicula);
      // document.getElementById("txt_peliculas").value = "";      
    }
  });

  var ul = document.querySelector("#peliculas_list" );
    for(var pelicula in localStorage){
      if(typeof localStorage[pelicula] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[pelicula]);
        ul.append(li);
      }
    }



});
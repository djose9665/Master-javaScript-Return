'use strict'

function holaMundo(texto){
  // Una variable  que se define dentro de una funcion no se puede invocar en otras directamente
  var prueba = "Esto es una prueba para probar el comportamiento de una variable";
  console.log(texto);
  console.log(actividad);
  console.log(numero.toString());
}

var texto = "Esto es una variable global";
// Para cambiar un dato a String se utilisa .toString
var numero = 16;
// Una variable que se define de manera globla, si se puede invocar desde otra parte del codigo.
var actividad = "Programacion";


holaMundo(texto);

console.log(prueba);
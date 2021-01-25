'use strict'

// Funciones anonimas
// Es una funcion que no tienen nombre 

/*
var pelicula = function(nombre){
  return "La pelicula es: " + nombre;
}
*/
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
  var sumar = numero1 + numero2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  return sumar;

}
// Callback normal
// sumame(14, 32, 
//   function(dato){
//     console.log("La suma es: " + dato);
// },
//   function(dato){
//     console.log("La suma por 2 es: " + (dato * 2));
//   }
// );

// Callback con flecha
sumame(14, 32, 
  dato => {
    console.log("La suma es: " + dato);
},
  dato => {
    console.log("La suma por 2 es: " + (dato * 2));
  }
);

'use strict'

/**
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.
 */

var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

while(numero1 < numero2){
  numero1 ++;
  if(numero1%2 != 0){
    // console.log(numero1);
    document.write(numero1 + "<br>");
  }
}

// for(var i = numero1; i < numero2; i++){
//   console.log((i%numero1));
//   if(i =! 0){
//     console.log(i);
//   }
// }
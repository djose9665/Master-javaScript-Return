'use strict'

/**
 * Programa que muestr todos los numeros divisores de un numero introducido en un prompt
 */

var numero = parseInt(prompt("Ingresa un numero"));

for(var i = 0; i < numero; i ++){
  if(numero % i == 0){
    // console.log(i);
    document.write(i + "<br>");
  }
}
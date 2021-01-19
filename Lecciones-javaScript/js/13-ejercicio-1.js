'use strict';

/**
 * Programa que pida dos numeros y que nos digo cual es mayor, cual es menor y si son iguales.
 * PLUS: Si los numeros no son un numero o son menores a 0, nos lo vuelva a pedir
 */

var primer_numero = parseInt(prompt("Ingresa un numero"));
var segundo_numero = parseInt(prompt("Ingresa otro numero"));

while(primer_numero < 0 || isNaN(primer_numero)){
  alert("Numero incorrecto, ingresa nuevamente el primer numero");
  primer_numero = parseInt(prompt("Ingresa un numero"));
}

while(segundo_numero < 0 || isNaN(segundo_numero)){
  alert("Numero incorrecto, ingresa nuevamente el segundo numero");
  segundo_numero = parseInt(prompt("Ingresa un numero"));
}

if(primer_numero > segundo_numero){
  alert("El primer numero es mayor que el segundo numero");
  alert(primer_numero + " es mayor que " + segundo_numero);
}
else if(primer_numero < segundo_numero){
  alert("El segundo numero es mayor que el primer numero");
  alert(segundo_numero + " es mayor que " + primer_numero);
}
else if(primer_numero == segundo_numero){
  alert("Los numeros son iguales");
  alert(primer_numero + " es igual a " + segundo_numero);
}
else{
  alert("Error, introduce numeros correctos");
}
  
console.log(primer_numero, segundo_numero);


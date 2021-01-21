'use strict'
/**
 * 
 * Programa que diga si un numero es par o impar.
 * 1. Ventana prompt
 * 2. Si no es valido que nos pida otra vez el numero
 */

 
  var numero = parseInt(prompt("Ingresa un numero"));

  while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un numero"));
  }

  if(numero % 2 == 0){
    alert(numero + " es un numero par")
  }
  else{
    alert(numero + " es un numero impar");
  }

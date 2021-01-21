'use strict'

/**
 * Tabla de multiplicar de un numero introducido por el usuario
 */

 var numero = parseInt(prompt("Ingresa el numero de la tabla de multiplicar que necesitas"));

//  document.write("<h2> Tabla del " + numero + "</h2>");
//  for(var i = 1; i <= 10; i++){
//    document.write(numero + " * " + i + " = " + (i * numero) + "<br>");
//  }

for(var c = 1; c <= 10; c++){
  document.write("<h2> Tabla del " + c + "</h2>");
  for(var i = 1; i <= 10; i++){
    document.write(numero + " * " + i + " = " + (i * numero) + "<br>");
  }
}
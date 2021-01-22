'use strict'

/**
 * Programa de una calculadora
 *  Debe de pedir dos numeros
 *  Si metemos uno mal que lo vuelva a pedir
 *  En el cuerpo de la pagina, en una alerta y en la consola debe mostrar el resultado
 *  de sumar, restar dividir y multiplicar esas dos cifras 
 */

var numero1 = parseInt(prompt("Ingresa el primer numero"));
while(isNaN(numero1)){
  numero1 = parseInt(prompt("Error, ingresa el primer numero nuevamente"));
}

var numero2 = parseInt(prompt("Ingresa el segundo numero"));
while(isNaN(numero2)){
  numero2 = parseInt(prompt("Error, ingresa el segundo numero nuevamente"));
}
var suma = (numero1 + numero2);
var resta = (numero1 - numero2);
var multiplicacion = (numero1 * numero2);
var division = (numero1 / numero2);

alert("La suma = " + suma + "\n" + 
      ", la resta = " + resta + "\n" +
      ", la multiplicacion = " + multiplicacion + "\n" +
      ", la division = " + division
      );

document.write("<h2>" + "Calculadora" + "</h2>");
document.write("<h3>" + "La suma = " + suma + "</h3>");
document.write("<h3>" + "La resta = " + resta + "</h3>");
document.write("<h3>" + "La multiplicacion = " + multiplicacion + "</h3>");
document.write("<h3>" + "La division = " + division + "</h3>");

console.log("Calculadora");
console.log("La suma = " + suma);
console.log("La resta = " + resta);
console.log("La multiplicacion = " + multiplicacion);
console.log("La division = " + division);
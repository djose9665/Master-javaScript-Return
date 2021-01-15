'use strict'

// Operadores 
// Mayor que >
var numero1 = 4;
var numero2 = 7;

// Operadores aritmeticos 
console.log("La suma =" + (numero2 + numero1));
console.log("La resta = " + (numero2 - numero1));
console.log("La multiplicacion = " + (numero2 * numero1));
console.log("La division = " + (numero2 / numero1));

// Tipos de datos
var numero_entero = 87;
var cadena_texto = "Empezamos otra vez";
var numero_decimal = "45";
var verdadero_falso = true;

// Cambiar tipos de datos

// Numero entero a String
console.log(String(numero_entero));

// String a numero entero
console.log(parseInt(numero_decimal));

// String a numero decimal
console.log(parseFloat(numero_decimal));

// Conocer el tipo de dato
console.log(cadena_texto + " es un " + typeof(cadena_texto));
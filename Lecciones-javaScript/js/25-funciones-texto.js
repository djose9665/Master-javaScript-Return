'use strict'

// Transformacion de textos
var numero = 495;
var texto1 = "Esto es el curso de JavaScript";
var texto2 = "ESTOY aprendiendo mucho, es muy ben curso";

// Cambiar un numero a String
console.log(numero.toString());

// Poner un texto solo en mayusculas
console.log(texto1.toUpperCase());

// Poner un texto solo en minusculas
console.log(texto2.toLowerCase());


/**
 * Calcular longitud de un texto
 */

 var nombre = "Daniel Martinez";
 console.log(nombre.length);

/**
 * Concatenar textos - Unir textos
 */

//  var texto_completo = texto1 + " " + texto2;

var texto_completo = texto1.concat(" " + texto2);
 console.log(texto_completo);

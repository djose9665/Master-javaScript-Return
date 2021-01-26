'use strict'

var texto = "Esto es un texto para ver el comportamiento de la busqueda en JavaScript comportamiento texto";

// Encontrar la primera coincidencia con la palabra buscada
var busqueda = texto.indexOf("comportamiento");
// Encontrar la ultima coincidencia de la palabra
busqueda = texto.lastIndexOf("comportamiento");
// Es lo mismo que el primer caso de busqueda
busqueda = texto.search("comportamiento");

//Para encontrar la misma palabra varias veces
busqueda = texto.match(/texto/g);

// Aqui se definen a partir de que caracteres se quiere buscar algo y luego se define cuantos caracteres se deben buscar.
busqueda = texto.substr(14, 6);

// Para encontrar una letra en especifico
busqueda = texto.charAt(55);

// Para buscar un texto se utiliza el siguiente metodo, si lo encuentra regresa True y si no regresa False
busqueda = texto.startsWith("para");

busqueda = texto.includes("JavaScript");

console.log(busqueda);
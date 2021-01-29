'use strict'

/**
 * Programa que: 
 *  pida 6 numeros por pantalla y los meta en un array
 *  mostrar el array entero / todos sus elementos en el cuerpo de la pagina y en la consola
 *  Ordenar el array y mostrarlo
 *  Invertir su orden y mostrarlo
 *  mostrar cuantos elementos tiene el array
 *  buscar un balor introducido por el usuario, que nos diga si lo encuentra y su indice
 *  (se valolara el uso de funciones)
 */
var numeros = [];

function ejercicioArrays(){
  pedirNumeros(); 
  mostrarNumeros();
  ordenarNumeros();
}

ejercicioArrays();

function pedirNumeros(){
  
  var nuevo_numero = "";
  for(let i = 1; i <= 6; i++){
    nuevo_numero = parseInt(prompt("Ingresa un numero"));
    numeros.push(nuevo_numero);
  }
}

function mostrarNumeros(){
  document.write("<h2>"+ "Numeros" +"</h2>");
  document.write("<ul>");
    for(let numero in numeros){
      document.write("<li>" + numeros[numero] +"</li>");
    }
  document.write("</ul>");

  console.log(numeros);
}

function ordenarNumeros(){
  var numeros_ordenados = numeros.sort();
  document.write("<h2>"+ "Numeros Ordenados" +"</h2>");
  document.write("<ul>");
    for(let numero in numeros){
      document.write("<li>" + numeros[numero] +"</li>");
    }
  document.write("</ul>");
  console.log( "Numeros ordenados" + numeros_ordenados)
}
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
  buscador();
  ordenarNumeros();
  numerosInvertidos();
  tamanoArray();
  
}

ejercicioArrays();

function ciclo(){
  document.write("<ul>");
    for(let numero in numeros){
      document.write("<li>" + numeros[numero] +"</li>");
    }
  document.write("</ul>");
}

function pedirNumeros(){
  
  var nuevo_numero = "";
  for(let i = 1; i <= 6; i++){
    nuevo_numero = parseInt(prompt("Ingresa un numero"));
    numeros.push(nuevo_numero);
  }
}

function mostrarNumeros(){
  document.write("<h2>"+ "Numeros" +"</h2>");
  // document.write("<ul>");
  //   for(let numero in numeros){
  //     document.write("<li>" + numeros[numero] +"</li>");
  //   }
  // document.write("</ul>");
  ciclo();
  console.log(numeros);
}

function ordenarNumeros(){
  var numeros_ordenados = numeros.sort(function(a,b){return a-b});
  document.write("<h2>"+ "Numeros Ordenados" +"</h2>");
  // document.write("<ul>");
  //   for(let numero in numeros){
  //     document.write("<li>" + numeros[numero] +"</li>");
  //   }
  // document.write("</ul>");
  ciclo();
  console.log( "Numeros ordenados" + numeros_ordenados);
}

function numerosInvertidos(){
  var numeros_inversos = numeros.reverse();
  document.write("<h2>"+ "Numeros Invertidos" +"</h2>");
  // document.write("<ul>");
  //   for(let numero in numeros){
  //     document.write("<li>" + numeros[numero] + "</li>")
  //   }
  // document.write("</ul>");
  ciclo();

}

function tamanoArray(){
  document.write("<h2> Tamaño del array </h2>");
  document.write("<h2>El array tiene " + numeros.length + " numeros</h2>");
}

function buscador(){
  var busqueda = parseInt(prompt("Busca un numero"));

  busqueda = numeros.find(numero => numero == busqueda);
  console.log("Busqueda = " + busqueda);
  
  if(busqueda == undefined){
    alert("Numero no encontrado")
  }
  else{
    document.write("<h2> El numero que buscaste es el : " + busqueda + "</h2>");
    busqueda = numeros.findIndex(numero => numero == busqueda);
    document.write("<h2> Se encuenta en el lugar " + busqueda + "</h2>");
  }
}
'use strict'

// Los arrays multidimencionales son los que tienen dento otros arrays

var categorias = ["Accion", "Terror", "Comedia", "Drama", "Triller", "Romance", "Suspenso"];
var peliculas = ["El transportador", "La cabaña", "Los miller", "30 dias de oscuridad"];

// Para hacer una busqueda en una array
// var busqueda = peliculas.find(function(pelicula){
  // var busqueda = peliculas.find(pelicula => pelicula == "El transportador");
  var busqueda = peliculas.findIndex(pelicula => pelicula == "El transportador");

  var precios = [15, 40, 74, 36,589];
  var buscar_precio = precios.some(precio => precio > 100);
  console.log(buscar_precio)  

console.log(busqueda);

// Otra manera de recorrer un array
// for(let pelicula in peliculas){
  // document.write(peliculas[pelicula] + "<br>");
// }

// Odenar un array 
// peliculas.sort(); // Orden alfabetico
peliculas.reverse(); // Invirte el array

// console.log(peliculas);

// Este es un array multidimensional
var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][3]);

// Añadir un elemento a un array
// peliculas.push("Superman");

/*
  var nueva_pelicula = "";
  do{
    nueva_pelicula = prompt("Ingresa una nueva pelicula a la lista");
    peliculas.push(nueva_pelicula);
  }
  while(nueva_pelicula != "OK")
*/
// Pop(): Elimina el ultimo elemento de un array
// peliculas.pop();

// Para borrar un elemento de un array que se encuentre en cualquier posision se hace esto...

// 1. Se ubica el elemento que se quiere eliminar utilizando indexOf()
var indice = peliculas.indexOf("El transportador");
// 2. Con una condicion comprobamos que realmente esta el elemento
// La condicion dice si el elemnto es mayor a -1 si se encuentra en el array... Ya que si fuera igual o menor a -1 no se encontraria 
if(indice > -1){
  // Con el numero se indican las posiciones que se quieren eliminar... Si se pone 2, serian dos elementos eliminados
  peliculas.splice(indice, 1);
}

// Convertir un array a texto separado por coma

var lista_pelicula = peliculas.join();

// console.log(lista_pelicula);

// convertir un String a un array

var canciones = "Lovers on the sun, La vuelta al mundo, Rene, La bala";

var array_canciones = canciones.split(", ");

// console.log(array_canciones);
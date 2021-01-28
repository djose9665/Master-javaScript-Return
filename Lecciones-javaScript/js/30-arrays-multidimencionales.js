'use strict'

// Los arrays multidimencionales son los que tienen dento otros arrays

var categorias = ["Accion", "Terror", "Comedia", "Drama", "Triller", "Romance", "Suspenso"];
var peliculas = ["El transportador", "La cabaña", "Los miller", "30 dias de oscuridad"];

// Este es un array multidimensional
var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][3]);
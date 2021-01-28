'use strict'

// Arrays. Arreglos, Matrices

// Arreglo normal
var nombres_hombres = ["Daniel", "Jose", "Fernado", "Rodrigo", "Pedro"];
// document.write(nombres_hombres);

// Objeto
var nombres_mujeres = new Array("Maria", "Jenifer", "Diana", "Andrea");
// console.log(nombres_hombres.length);

// Practica: Mostrar el elemnto del array que el usuario indique
/*
  var elemento = parseInt(prompt("Que elemento del array quieres?"));
  if(elemento >= nombres_hombres.length){
    alert("Numero desconocido, el numero debe se menor a " + nombres_hombres.length);
  }else{
    console.log("El susuario seleccionado es: " + nombres_hombres[elemento]);
  }
*/

var lenguajes_de_programacion = ["JavaScript", "PHP", "JAVA", "C#", "Python"];
document.write("<h2>Lenguajes de programacion del 2021</h2>");
document.write("<ul>");
/*
  for(var i = 0; i < lenguajes_de_programacion.length; i++){
    document.write("<li>" + lenguajes_de_programacion[i] +"</li>");
  }
  document.write("</ol>");
*/

// Otra manera de recorrer el Array es... 
// 
  lenguajes_de_programacion.forEach((elemento, index, otro_elemento)=>{
  console.log(otro_elemento); // Este tercer elemento del bucle es muestra el array completo de la variable seleccionada
  document.write("<li>"+ index + " - " + elemento +"</li>");
});

document.write("</ul>");

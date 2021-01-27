'use strict'

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");


// Manera normal de mostrar variables en pantalla 
// var nombre_completo = "Mi nombre es " + nombre + " y mis apellidos son " + apellidos;
// document.write(nombre_completo);

// Utilizando una plantilla para mostrar datos en pantalla
var nombre_completo = `
  <h2>Me presento </h2>
  <h3>Mi nombre es ${nombre}</h3>
  <h3>Mis apellidos son ${apellidos}</h3>
`;

document.write(nombre_completo);
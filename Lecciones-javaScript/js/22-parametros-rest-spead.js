'use strict'

// Parametros REST y SPREAD

/*REST */

function listadoEdades(edad1, edad2, ...resto_de_edades){
  console.log("Edad 1: " +edad1);
  console.log("Edad 2: " +edad2);
  console.log(resto_de_edades);
}

listadoEdades(15, 18, 21, 19, 17, 20, 21, 22, 20);

/*SPREAD */

var edades = [17, 15, 30];
listadoEdades(...edades, 18, 21, 19, 17, 20, 21, 22, 20);
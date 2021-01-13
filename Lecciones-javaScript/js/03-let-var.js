'use strict'
 // LET es una variable que solo se puede utilizar en el bloque de codigo donde se declara 
 // VAR es una variable global que se puede utilizar en cualquier parte del codigo
 
var cancion = "Vuelta al mundo";
console.log("Primera cacion: " + cancion);

if(true){
  var cancion = "Latinoamerica";
  console.log("Cancion actualizada: " + cancion);
 }

 console.log("Cancion " + cancion);

 var velocidad = 50;
 console.log("Alta velocidad " + velocidad);

 if(velocidad > 45 ){
   let velocidad = 35;
   console.log("Baja velocidad " + velocidad);
 }

 console.log("Alta velocidad otra vez " + velocidad);

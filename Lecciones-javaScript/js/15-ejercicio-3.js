'use strict'
/**
 * Hacer un programa que muestre todos los numeros que hay entre dos numeros introducidos por el usuario 
 */

 var numero1 = parseInt(prompt("Ingresa un numero"));
 
 var numero2 = parseInt(prompt("Ingresa otro numero"));

/*
  if(numero1 > numero2){
    while(numero1 > numero2){
      numero2 ++;
      console.log(numero2);
    }
  }else if(numero1 < numero2){
    while(numero1 <  numero2){
      numero1 ++;
      console.log(numero1);
    }
  }
*/
document.write("<h1>Entre el " + numero1 + " y " + numero2 + " estan estos numeros");
for(var i = numero1; i < numero2; i++ ){
  document.write(i + "<br>");
}

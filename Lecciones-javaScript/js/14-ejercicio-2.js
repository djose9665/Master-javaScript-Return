'use strict'
/**
 * Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */
var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("Ingresa numeros hasta que metas uno negativo"));

  if(isNaN(numero)){
    numero = 0;
  }else if(numero >= 0){
    // suma = suma + numero;
    suma += numero;

    contador ++;
    
    console.log("Suma: " +suma);
    console.log("Contador" + contador);
  }

   
} while (numero >= 0);

contador = suma/ contador;
alert("El resultado de la suma = " + suma + " y la media = " + contador);
console.log("La media = " + contador)
'use strict'

alert("Bucle While");

var edad = 5;

while(edad <= 18){
  console.log("Tienes " + edad + " años");
  edad ++;
  if(edad >= 18){
    alert("Ya eres mayor de edad!!");
  }
}
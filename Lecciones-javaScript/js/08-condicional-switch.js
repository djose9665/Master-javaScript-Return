'use strict'

var bebida = "Agua";
var consola = "";

switch (bebida) {
  case "Agua":
      consola = "Es recomendable tomar 2 litros de " + bebida + " al dia";
    break;
  case "Jugo de naranja":
      consola = bebida +  "De preferencia que sea natural y con poca azucar";
    break;
  case "Cafe":
      consola = "El " + bebida + " te mantiene despierto";
    break;
  case "Alcohol":
      consola = "El " + bebida + " se toma con medida";
    break;
  default:
      consola = "Bebida no definida";
    break;
}

console.log(consola);
'use strict'
// DOM = Document Object Model

function cambiaColor(color){
  caja.style.background = color;
}


// var caja = document.getElementById("dom");

var caja = document.querySelector("#dom")

caja.innerHTML = "Nuevo texto desde JavaScript";
caja.style.background = "red";
caja.style.padding = "50px";
caja.style.color = "green";
caja.className = "txt_new";

console.log(caja);
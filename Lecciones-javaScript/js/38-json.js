'use strict'

// JSON = JavaScript Object Notation 

window.addEventListener('load', function(){
  var computadora = {
    marca: "HP",
    year: 2018,
  };

  // console.log(computadora.year);  

  var bebidas = [
    {nombre: "Indio", capacidad: 1200, tipo: "Cerveza obscura"},
    {nombre: "Victoria", capacidad: 1200, tipo: "Cerveza clara"},
    {nombre: "Corona", capacidad: 1200, tipo: "Cerveza clara"},
  ];

  // console.log(bebida);
  var caja_bebidas = document.querySelector("#bebidas");
  
  for(var bebida in bebidas){
    var p = document.createElement("p");
    p.append(bebidas[bebida].nombre);
    caja_bebidas.append(p);
  }

});
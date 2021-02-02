'use strict'

// Conseguir elementos por su etiqueta
var todos_los_divs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");

for(var valor in todos_los_divs){
  if(typeof todos_los_divs[valor].textContent == "string"){
  // if(todos_los_divs[valor].textContent.length >= 1){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todos_los_divs[valor].textContent);
    parrafo.appendChild(texto);
    // document.querySelector("#miSeccion").appendChild(parrafo);
    seccion.append(parrafo);
  }
}

seccion.append(hr);

var contenido_en_texto = todos_los_divs[3];
contenido_en_texto.innerHTML = "Div Desde JavaScript"
todos_los_divs[3].style.color = "blue";
todos_los_divs[3].style.padding = "12px";


// console.log(contenido_en_texto);


// Conseguir elementos por su clase

var divs_rojos = document.getElementsByClassName("rojo");
for(var div in divs_rojos){
  if(divs_rojos[div].className == "rojo"){
    divs_rojos[div].style.background = 'red';
  }
}

var divs_amarillos  = document.getElementsByClassName('amarillo');
for(var div_amarillo in divs_amarillos){
  if(divs_amarillos[div_amarillo].className == "amarillo"){
    console.log(divs_amarillos[div_amarillo].textContent);
    divs_amarillos[div_amarillo].style.background = "yellow";
  }
}

// Query Selector
var id = document.querySelector("#dom");
console.log(id);
// Nota: Query Selector solo muestra el primer elemento de una clase seleccionada.
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);
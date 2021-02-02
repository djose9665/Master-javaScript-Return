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
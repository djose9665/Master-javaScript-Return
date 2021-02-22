'use strict'

window.addEventListener('load', ()=>{


  var fecha = new Date();
  
  var year = fecha.getFullYear();
  var mes = fecha.getMonth();
  var dia = fecha.getDate();
  
  
  var horaTexto = `
    Año = ${year}
    Mes = ${mes}
    Dia = ${dia}
    `;
  
  // alert(horaTexto);

  // JavaScript Math
  // Funciones Matematicas 
  // El metodo Ceil es para numeros enteros
  console.log(Math.ceil(Math.random()*100));

});
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
  
  alert(horaTexto);

});
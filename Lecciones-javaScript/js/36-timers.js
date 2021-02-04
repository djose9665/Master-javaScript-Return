'use strict'

window.addEventListener('load', ()=>{
  // var tiempo;
  // Timers
  function intervalo(){
     // SetInterval
      var tiempo = setInterval(()=>{
      console.log("Set interval ejecutado");
      var titulo = document.querySelector("#titulo");
      // titulo.style.background = "red";
      if(titulo.style.background == "red"){
        titulo.style.background = "green";
      }else{
        titulo.style.background = "red";
      }
    },1500);
  0
    // SetTimeout
    var evento = setTimeout(()=>{
      titulo.style.fontSize = "50px";
    },1500);

    return tiempo;
  }

  var tiempo = intervalo();

  var btn_stop = document.querySelector('#btn_stop');
  btn_stop.addEventListener('click',()=>{
    clearInterval(tiempo);
  });

  var btn_start = document.querySelector('#btn_start');
  btn_start.addEventListener('click', ()=>{
    intervalo();
  }); 



});
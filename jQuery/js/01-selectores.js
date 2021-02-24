// 'use strict'
// window.addEventListener('load', ()=>{
// });
$(document).ready(function(){
  // console.log("jQuey Listo");

$('#p_rojo').css("background", "red")
            .css("color", "white")
            .css("font-size", "50px");

$('#p_amarillo').css("background", "yellow")
                .css("color", "green")
                .css("font-size", "50px");

$('#p_verde').css("background", "green")
             .css("color", "white")
             .css("font-size", "50px");



  var parrafo = $('.parrafo');
  parrafo.css("border", "2px dashed black");
  
  $('.sin_borde').click(function(){
    console.log("Click");
    $(this).addClass('parrafo');
  });



});

$(document).ready(function(){

  var div_caja = $('#div_caja');
  var btn_mostrar = $('#btn_mostrar');
  var btn_ocultar = $('#btn_ocultar');

  var btn_todo = $('#btn_todo');

  btn_mostrar.hide();

  btn_mostrar.click(function(){
    $(this).hide();
    btn_ocultar.show();
    // div_caja.show('normal');
    // div_caja.fadeIn('slow');
    // div_caja.fadeTo('slow', '1');
    div_caja.slideDown('slow');
  });


  btn_ocultar.click(function(){
    $(this).hide();
    btn_mostrar.show();
    // div_caja.hide('normal');
    // div_caja.fadeOut('slow');
    // div_caja.fadeTo('slow', '0');
    div_caja.slideUp('slow');
  });

  btn_todo.click(function(){
    // div_caja.toggle('normal');
    div_caja.fadeToggle('normal');
    // div_caja.slideToggle('normal');
  });

});
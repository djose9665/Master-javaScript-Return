$(document).ready(function(){

  var div_caja = $('#div_caja');
  var btn_mostrar = $('#btn_mostrar');
  var btn_ocultar = $('#btn_ocultar');

  var btn_todo = $('#btn_todo');
  var btn_animar = $('#btn_animar');

  btn_mostrar.hide();

  btn_mostrar.click(function(){
    $(this).hide();
    btn_ocultar.show();
    // div_caja.show('normal');
    // div_caja.fadeIn('slow');
    // div_caja.fadeTo('slow', '1');
    div_caja.slideDown('slow');
    console.log("");
  });


  btn_ocultar.click(function(){
    $(this).hide();
    btn_mostrar.show();
    // div_caja.hide('normal');
    // div_caja.fadeOut('slow');
    // div_caja.fadeTo('slow', '0');
    div_caja.slideUp('slow', function(){
      console.log("La caja se oculto");
    });
  });

  btn_todo.click(function(){
    // div_caja.toggle('normal');
    div_caja.fadeToggle('normal');
    // div_caja.slideToggle('normal');
  });

  btn_animar.click(function(){
    div_caja.animate({
      marginLeft: '500px',
      fontSize: '40px',
      height: '110px'
    }, 'slow')
      .animate({
        marginTop: '80px',
        borderRadius: '900px',

      },'slow')
      .animate({
        borderRadius: '0px',
        marginLeft: '0px'
      }, 'slow')
      .animate({
        borderRadius: '100px',
        marginTop: '0px'
      }, 'slow')
      .animate({
        marginLeft: '500px'
      });
  });

});
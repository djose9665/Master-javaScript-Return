
$(document).ready(function(){

// Selectores de Id
$('#p_rojo').css("background", "red")
            .css("color", "white");

$('#p_amarillo').css("background", "yellow")
                .css("color", "green");

$('#p_verde').css("background", "green")
             .css("color", "white");


// Selectores de clases
  var parrafo = $('.parrafo');

  parrafo.css("border", "3px dashed black");
  
  $('.sin_borde').click(function(){
    console.log("Click");
    $(this).addClass('parrafo');
  });

// Selectores de etiquetas 
  var etiqueta_parrafo = $('p').css("cursor", "pointer");
  
  etiqueta_parrafo.click(function(){
    var that = $(this);
    if(!that.hasClass('grande')){
      that.addClass("grande");
    }else{
      that.removeClass("grande");
    }
  });

// Selectores por atributo
  $('[title="Google"]').css('background', '#ccc');
  $('[title="Instagram"]').css('background', 'pink');
  $('[title="Facebook"]').css('background', 'blue');
  $('[title="Twitter"]').css('background', 'gray');



});

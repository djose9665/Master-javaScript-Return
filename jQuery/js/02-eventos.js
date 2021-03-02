$(document).ready(function(){

  // MouseOver & MouseOut

  var caja = $('#div_caja');
  
  /*caja.mouseover(function(){
    $(this).css("background", "red");
  });

  caja.mouseout(function(){
    $(this).css("background", "green");
  });*/

  function cambiaRojo(){
    $(this).css("background", "red");
  };

  function cambiaVerde(){
    $(this).css("background", "green");
  };

  caja.hover(cambiaRojo, cambiaVerde);

  // Click y docle click
  caja.click(function(){
    $(this).css("background", "blue")
           .css("color", "white");
  });

  caja.dblclick(function(){
    $(this).css("background", "pink");
  });

  var txt_nombre = $('#txt_nombre');
  var datos = $('#datos');

  txt_nombre.focus(function(){
    $(this).css("border", "2px solid green");
  });

  txt_nombre.blur(function(){
    $(this).css("border", "1px solid #000");
    // $('#datos').css("display", "block");
    datos.text($(this).val()).show();
  });

  // Mousedown & mouseup
  datos.mousedown(function(){
    $(this).css('border-color', 'red');
  });

  datos.mouseup(function(){
    $(this).css('border-color', 'black');
  })

  // Mousemove

  $(document).mousemove(function(){
    console.log("En X" + event.clientX);
    console.log("En Y" + event.clientY);

    $('body').css('cursor', 'none');
    $('#sigueme').css('left', event.clientX)
                .css('top', event.clientY);
  });


});
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

});
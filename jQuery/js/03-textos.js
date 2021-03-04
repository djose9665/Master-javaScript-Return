$(document).ready(function(){

  reloadLinks();
  var btn_link = $('#btn_link');
  var txt_link = $('#txt_link');

  btn_link
    .removeAttr('disabled')
    .click(function(){
      var valor = txt_link.val();
      // $('#menu').html('<li><a href= "' + valor + '"></a></li>'); // crea un elemento en la lista
      // $('#menu').append('<li><a href= "' + valor + '"></a></li>'); // Coloca el elemento al final de la lista 
      $('#menu').prepend('<li><a href= "' + valor + '"></a></li>'); // Coloca el elemento al inicio de la lista
      // $('#menu').before('<li><a href= "' + valor + '"></a></li>'); // Coloca el elemnto al inicio pero afuera de la lista
      // $('#menu').after('<li><a href= "' + valor + '"></a></li>'); // Coloca el elemento al final y afuera de la lista 
      $('#txt_link').val('');
      reloadLinks();
    });

  

});

function reloadLinks(){
  $('a').each(function(){
    var that = $(this);
    var enlace  = that.attr("href");
    that.attr("target", "blank");
    that.text(enlace);
  });
}
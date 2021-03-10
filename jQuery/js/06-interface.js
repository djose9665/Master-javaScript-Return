$(document).ready(function(){
  var elementos = $('.elemento');
  var lista = $('.lista-seleccionable');

  // Evento Draggable (Permite mover elementos de la pagina)
  elementos.draggable();

  // Evento Resizable (Permite cambiar el tamaño de los elementos)
  elementos.resizable();

  // Evento selectable(Permite seleccionar elementos)
  // lista.selectable(); 

  // Evento sortable (Permite cambiar elorden de los elementos)
  lista.sortable({
    update: function(event, ui){
      console.log("La lista ha cambiado");
    }
  });
});
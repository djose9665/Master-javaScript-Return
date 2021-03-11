$(document).ready(function(){
  var elementos = $('.elemento');
  var lista = $('.lista-seleccionable');
  var area = $('#area');
  var elemento =$('#elemento_movido');
  var btn_mostrar = $('#btn_mostrar');
  var caja_efectos = $('.caja_efectos');



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

  elemento.draggable();
  area.droppable({
    drop: function(){
      console.log("Entro un elemento");
    }
  });


  // Efectos
  btn_mostrar.click(function(){
    // caja_efectos.toggle("fade");]
    // caja_efectos.fadeToggle();
    // caja_efectos.effect('explode');
    // caja_efectos.toggle('explode');
    caja_efectos.toggle('blind');
    // caja_efectos.toggle('slide');
    // caja_efectos.toggle('drop');
    // caja_efectos.toggle('puff');
    // caja_efectos.toggle();
  });
});
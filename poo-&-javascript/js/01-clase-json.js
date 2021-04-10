'use strict'
// window.addEventListener('load', function(){
  var cancion = {
    nombre: "The End",
    autor: "Linkin Park",
    album: "Hybrid Theory",
    fecha: "8 de diciembre de 2000",
    cambiarFecha: function(nueva_fecha){
      // cancion.fecha = nueva_fecha;
      this.fecha = nueva_fecha;
    },
  }

  var localidad = {
    nombre: "Rodeo",
    Estado: "Durango",
    numero_habitantes: 10000,
    masHabitantes: function(mas_habitantes){
      // localidad.numero_habitantes = mas_habitantes;
      this.numero_habitantes = mas_habitantes;
    }
  }
// });
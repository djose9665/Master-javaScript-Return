'use strict'
window.addEventListener('load', function(){
  console.log("Clase");

  // Clase(Molde del objeto)
  // Propiedades (Caracteristicas del objeto)
  // Metodos (funciones o acciones del objeto)

  // Clase de una camiseta
  class Clases{
    // Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    public setColor(nuevo_color){
      this.color = nuevo_color; 
    }

    public getColor(){
      return this.color;
    }

  }

  var camiseta = new Clases();
  camiseta.setColor("Verde");
  // camiseta.color = "Negro";
  // camiseta.modelo = "Manga corta";
  // camiseta.marca = "Adidas";
  // camiseta.talla = "S";
  // camiseta.precio = 199;

  // var playera = new Clases();

  // playera.color = "Roja";
  // playera.modelo = "Manga larga";
  // playera.marca = "Nike";
  // playera.talla = "S";
  // playera.precio = 250;

  console.log(camiseta,  );
    
});
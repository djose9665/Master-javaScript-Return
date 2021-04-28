'use strict'
window.addEventListener('load', function(){
  // console.log("Clase");

  // Interface:
  interface CamisetaBase{
    setColor(color);
    getColor();
  }

  // Decorador
  function estampar(logo: string){
    return function(target: Function){
      target.prototype.estampacion = function():void{
        console.log("Camiseta estampada con el logo de " + logo);
      }
    }
  }

  // Clase(Molde del objeto)
  // Propiedades (Caracteristicas del objeto)
  // Metodos (funciones o acciones del objeto)

  // Clase de una camiseta
  @estampar('Nike')
  class Clases implements CamisetaBase{
    [x:string]: any;
    // Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    constructor(color, modelo, marca, talla, precio){
      this.color = color;
      this.modelo = modelo;
      this.marca = marca;
      this.talla = talla;
      this.precio = precio;
    }
    
    public setColor(nuevo_color){
      this.color = nuevo_color; 
    }

    public getColor(){
      return this.color;
    }

  }

  class Sudadera extends Clases{
    public capucha: boolean;

    setCapucha(capucha: boolean){
      this.capucha = capucha;
    }
    getCapucha():boolean{
      return this.capucha;
    }
  }
  var camiseta = new Clases("Rojo", "Manga larga", "Nike", "L", 250);
  console.log(camiseta);
  camiseta.estampacion();
  

  var sudadera_nike = new Sudadera("gris", "Manga Larga", "Nike", "L", 400);
  sudadera_nike.setCapucha(true);
  sudadera_nike.setColor("Negro");
  console.log(sudadera_nike);

  
    
});
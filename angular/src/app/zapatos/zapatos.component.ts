import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
})

export class ZapatosComponent implements OnInit{
  // Propiedades
  public title: string;
  public zapatos: Array<Zapato>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(){
    this.mi_marca = "Adidas";
    this.color = 'blue';
    this.marcas = new Array();
    this.title = "Componente de zapatos";

    this.zapatos = [
      new Zapato('Nike Classic', 'Nike', 'Negro', 50, true),
      new Zapato('Nike Classic', 'Nike', 'Negro', 50, true),
      new Zapato('Adidas Yezzy', 'Adidas', 'Blanco', 120, false),
      new Zapato('Adidas Yezzy', 'Adidas', 'Blanco', 120, true),
    ];
  }

  ngOnInit(){
    console.log(this.zapatos);

    this.getMarcas();
  }

  getMarcas(){
    this.zapatos.forEach((zapato, index)=>{
      if(this.marcas.indexOf(zapato.marca) < 0){
        this.marcas.push(zapato.marca);
      }
    });

    console.log(this.marcas)
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index){
    // delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){
    alert(this.mi_marca);
  }
}
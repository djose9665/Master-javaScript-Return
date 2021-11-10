import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';
import { ZapatoService } from '../services/zapato.service';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
  providers: [ZapatoService]
})

export class ZapatosComponent implements OnInit{
  // Propiedades
  public title: string;
  public zapatos: Array<Zapato>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;
  public slogan: string;

  constructor(
    private _zapatoService: ZapatoService
  ){
    this.slogan = "Compra los mejores tenis de las marcas"
    this.mi_marca = "Adidas";
    this.color = 'blue';
    this.marcas = new Array();
    this.title = "Componente de zapatos";

  }

  ngOnInit(){
    this.zapatos = this._zapatoService.getTenis();
    alert(this._zapatoService.getTexto());
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
import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
})

export class ZapatosComponent implements OnInit{
  // Propiedades
  title: string;
  public zapatos: Array<Zapato>;

  constructor(){
    this.title = "Componente de zapatos";

    this.zapatos = [
      new Zapato('Nike Classic', 'Nike', 'Negro', 50, true),
      new Zapato('Adidas Yezzy', 'Adidas', 'Blanco', 120, true),
    ];
  }

  ngOnInit(){
    console.log(this.zapatos);
  }
}
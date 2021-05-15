import { Component } from '@angular/core';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
})

export class ZapatosComponent{
  // Propiedades
  title: string;

  constructor(){
    this.title = "Componente de zapatos";
  }
}
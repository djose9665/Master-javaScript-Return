import { Injectable } from '@angular/core';
import { Zapato } from '../models/zapato';

@Injectable()

export class ZapatoService{

  public zapatos: Array<Zapato>;

  constructor(){
    this.zapatos = [
      new Zapato('Nike Classic', 'Nike', 'Negro', 50, true),
      // new Zapato('Nike Classic', 'Nike', 'Negro', 50, true),
      new Zapato('Adidas Yezzy', 'Adidas', 'Blanco', 20, true),
      // new Zapato('Adidas Yezzy', 'Adidas', 'Blanco', 120, true),
    ];
  }

  getTexto(){
    return "Este es el servicio de Tenis";
  }

  getTenis(): Array<Zapato>{
    return this.zapatos;
  }

}
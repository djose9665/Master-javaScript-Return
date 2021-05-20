import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Nuevo Proyecto de Angular';
  public mostrar_videojuego: boolean = true;
  public descripcion;
  public config;


  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value){
    this.mostrar_videojuego =  value; 
  }
}

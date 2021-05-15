import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck{
  // Propiedades del componente
  public titulo: string;
  public listado: string;


  // En el constructor se les da el valor a las variables (propiedades que se definieron antes).
  constructor(){
    this.titulo = "Componente de videojuegos";
    this.listado = "Listado de los videojuegos mas populares";
  }

  ngOnInit(){
    console.log("OnInit Ejecutado");
  }

  ngDoCheck(){
    console.log("DoCheck Ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }

}
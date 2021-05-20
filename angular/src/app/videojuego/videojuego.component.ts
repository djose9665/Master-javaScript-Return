import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  // Propiedades del componente
  public titulo: string;
  public listado: string;


  // En el constructor se les da el valor a las variables (propiedades que se definieron antes).
  constructor(){
    this.titulo = "Componente de videojuegos";
    this.listado = "Listado de los videojuegos mas populares";
  }

  ngOnInit(){
    // console.log("OnInit Ejecutado");
  }

  ngDoCheck(){
    // console.log("DoCheck Ejecutado");
  }

  ngOnDestroy(){
    // console.log("OnDestroy Ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }

}
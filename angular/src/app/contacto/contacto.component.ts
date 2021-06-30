import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public c_usuario: ContactoUsuario;

  constructor() { 
    this.c_usuario = new ContactoUsuario('', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.c_usuario);
  }

}

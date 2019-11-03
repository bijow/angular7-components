import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})

export class UsuarioCadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario()

  constructor() { }

  ngOnInit() {
  }

  public salvar() {
    console.log('salva ai mano')
  }

}

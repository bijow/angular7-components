import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario
  public usuarios: Usuario[]
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarios = this._usuarioService.listaUsuario()
  }

}

import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Guilherme"
    usuario.email = "gui@softhero.com.br"

    return usuario

  }

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: "Guilherme",
        email: "guilhermecardoso@softhero.com.br"
      },
      {
        nome: "Diovana",
        email: "diovana@softhero.com.br"
      },
      {
        nome: "Sebastião",
        email: "bastiao@softhero.com.br"
      }
    ]
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioService } from '../usuario.service';
import { UsuarioCadastroComponent } from '../usuario/cadastro/usuario-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ],
  declarations: [
    UsuarioComponent,
    UsuarioCadastroComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }

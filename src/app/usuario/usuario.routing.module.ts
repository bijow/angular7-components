import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';

// Modulo resposavel para fazer o lazzyngload, ou seja carrega o componente de usuario apenas quado for solicitado
const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path: 'add',
    component: UsuarioCadastroComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UsuarioRoutingModule { }

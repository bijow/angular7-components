import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EstadosComponent } from './estados.component';

// Modulo resposavel para fazer o lazzyngload, ou seja carrega o componente de usuario apenas quado for solicitado
const routes: Routes = [
  {
    path: '',
    component: EstadosComponent
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
export class EstadosRoutingModule { }

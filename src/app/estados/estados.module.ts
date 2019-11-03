import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing.module';
import { EstadosService } from '../estados.service';

@NgModule({
  imports: [
    CommonModule,
    EstadosRoutingModule
  ],
  declarations: [EstadosComponent],
  providers: [
    EstadosService
  ]
})
export class EstadosModule { }

import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  estados: any[]

  constructor(private _estadosService: EstadosService) { }

  ngOnInit() {
    this._estadosService.getEstados()
      .subscribe(
        response => {
          this.estados = response
        }
      )
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstadosService {

  url = "http://servicodados.ibge.gov.br/api/v1/localidades/estados/"

  constructor(private _http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this._http.get<any[]>(this.url)
  }

}

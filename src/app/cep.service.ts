import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep.js';
@Injectable({
  providedIn: 'root',
})
export class CepService {
  cepsList: Cep[] = [];

  constructor(private http: HttpClient) {}

  addToCepsList(cep: Cep) {
    this.cepsList.push(cep);
  }

  getCepsList() {
    return this.cepsList;
  }

  clearCepsList() {
    this.cepsList = [];
    return this.cepsList;
  }

  getCeps() {
    return this.http.get<
      {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
      }[]
    >('assets/ceps.json');
  }
}

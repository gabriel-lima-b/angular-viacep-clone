import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep.js';
@Injectable({
  providedIn: 'root',
})
export class CepService {
  cepsList: Cep[] = [];
  apiURL : string = 'http://localhost:8080';
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
    >(`${ this.apiURL }/all`);
  }

  getCepbyCep(icep: string) {
    return this.http.get<
      {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
      }>(`${this.apiURL}/${icep}`);
  }
}

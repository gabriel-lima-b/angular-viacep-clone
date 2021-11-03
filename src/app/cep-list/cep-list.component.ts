import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css'],
})
export class CepListComponent implements OnInit {
  ceps = this.cepService.getCeps();
 
  constructor(
    private cepService: CepService
    ) {}

  ngOnInit() {}
}

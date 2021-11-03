import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cep } from '../cep';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {
  cepParam : string = "";
  cep  = this.cepService.getCepbyCep('90420020');
  constructor(
    private activatedRoute: ActivatedRoute,
    private cepService: CepService) { }

  ngOnInit() { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.cepParam = params['cep'];
    });

   }

}

import { Component, Input, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css'],
})
export class CepDetailsComponent implements OnInit {
  cep: string | null;
  cepDetail: any | undefined;
  error: Error | undefined;
  constructor(private cepService: CepService, private route: ActivatedRoute) {
    this.cep = this.route.snapshot.paramMap.get('cep');
  }

  async getCep() {
    if (this.cep) {
      try {
        this.cepDetail = await this.cepService
          .getCepbyCep(this.cep)
          .toPromise();
      } catch (err: unknown) {
        if (err instanceof Error) {
         this.error = err;
         
        }else if(err instanceof HttpErrorResponse){
          this.error = err;
        }
      }
    }
  }

  ngOnInit() {
    this.getCep();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-cep-finder',
  templateUrl: './cep-finder.component.html',
  styleUrls: ['./cep-finder.component.css']
})
export class CepFinderComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
     ) {}

  cepForm = this.formBuilder.group({
    cep: ''
  });
  
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.router.navigateByUrl(`/details/${this.cepForm.value}`); 
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cep-finder',
  templateUrl: './cep-finder.component.html',
  styleUrls: ['./cep-finder.component.css']
})
export class CepFinderComponent implements OnInit {

  constructor(formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.warn('Aqui vai ser feita a pesquisa.');
  }

}

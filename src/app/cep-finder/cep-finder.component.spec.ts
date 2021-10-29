import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepFinderComponent } from './cep-finder.component';

describe('CepFinderComponent', () => {
  let component: CepFinderComponent;
  let fixture: ComponentFixture<CepFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

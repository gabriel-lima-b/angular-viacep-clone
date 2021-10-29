import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepDetailsComponent } from './cep-details.component';

describe('CepDetailsComponent', () => {
  let component: CepDetailsComponent;
  let fixture: ComponentFixture<CepDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaGastosFijosComponent } from './casa-gastos-fijos.component';

describe('CasaGastosFijosComponent', () => {
  let component: CasaGastosFijosComponent;
  let fixture: ComponentFixture<CasaGastosFijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaGastosFijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaGastosFijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorClothesComponent } from './buscador-clothes.component';

describe('BuscadorClothesComponent', () => {
  let component: BuscadorClothesComponent;
  let fixture: ComponentFixture<BuscadorClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarocchiTemaAstraleComponent } from './tarocchi-tema-astrale.component';

describe('TarocchiTemaAstraleComponent', () => {
  let component: TarocchiTemaAstraleComponent;
  let fixture: ComponentFixture<TarocchiTemaAstraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarocchiTemaAstraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarocchiTemaAstraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

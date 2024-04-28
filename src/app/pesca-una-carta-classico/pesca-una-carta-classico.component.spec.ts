import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaUnaCartaClassicoComponent } from './pesca-una-carta-classico.component';

describe('PescaUnaCartaClassicoComponent', () => {
  let component: PescaUnaCartaClassicoComponent;
  let fixture: ComponentFixture<PescaUnaCartaClassicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PescaUnaCartaClassicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PescaUnaCartaClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

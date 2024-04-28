import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocoGeometricoComponent } from './gioco-geometrico.component';

describe('GiocoGeometricoComponent', () => {
  let component: GiocoGeometricoComponent;
  let fixture: ComponentFixture<GiocoGeometricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiocoGeometricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocoGeometricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

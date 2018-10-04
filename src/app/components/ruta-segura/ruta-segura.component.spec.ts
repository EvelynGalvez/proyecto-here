import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSeguraComponent } from './ruta-segura.component';

describe('RutaSeguraComponent', () => {
  let component: RutaSeguraComponent;
  let fixture: ComponentFixture<RutaSeguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSeguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSeguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCompletosComponent } from './proyectos-completos.component';

describe('ProyectosCompletosComponent', () => {
  let component: ProyectosCompletosComponent;
  let fixture: ComponentFixture<ProyectosCompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosCompletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeciencieComponent } from './expeciencie.component';

describe('ExpeciencieComponent', () => {
  let component: ExpeciencieComponent;
  let fixture: ComponentFixture<ExpeciencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpeciencieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeciencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

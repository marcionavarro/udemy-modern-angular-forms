import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeStepper } from './age-stepper';

describe('AgeStepper', () => {
  let component: AgeStepper;
  let fixture: ComponentFixture<AgeStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeStepper],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

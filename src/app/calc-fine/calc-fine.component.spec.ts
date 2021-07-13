import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFineComponent } from './calc-fine.component';

describe('CalcFineComponent', () => {
  let component: CalcFineComponent;
  let fixture: ComponentFixture<CalcFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

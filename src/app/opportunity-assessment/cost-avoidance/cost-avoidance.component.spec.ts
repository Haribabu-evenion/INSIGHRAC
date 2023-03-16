import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostAvoidanceComponent } from './cost-avoidance.component';

describe('CostAvoidanceComponent', () => {
  let component: CostAvoidanceComponent;
  let fixture: ComponentFixture<CostAvoidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostAvoidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostAvoidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

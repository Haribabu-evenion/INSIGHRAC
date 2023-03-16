import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityAssessmentComponent } from './opportunity-assessment.component';

describe('OpportunityAssessmentComponent', () => {
  let component: OpportunityAssessmentComponent;
  let fixture: ComponentFixture<OpportunityAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

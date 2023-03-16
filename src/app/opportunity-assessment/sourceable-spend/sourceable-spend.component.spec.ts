import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceableSpendComponent } from './sourceable-spend.component';

describe('SourceableSpendComponent', () => {
  let component: SourceableSpendComponent;
  let fixture: ComponentFixture<SourceableSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceableSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceableSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingValueComponent } from './saving-value.component';

describe('SavingValueComponent', () => {
  let component: SavingValueComponent;
  let fixture: ComponentFixture<SavingValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

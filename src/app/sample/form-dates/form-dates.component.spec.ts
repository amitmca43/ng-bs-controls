import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatesComponent } from './form-dates.component';

describe('FormDatesComponent', () => {
  let component: FormDatesComponent;
  let fixture: ComponentFixture<FormDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

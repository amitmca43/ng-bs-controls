import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTimePickerComponent } from './form-time-picker.component';

describe('FormTimePickerComponent', () => {
  let component: FormTimePickerComponent;
  let fixture: ComponentFixture<FormTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

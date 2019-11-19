import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextNumericComponent } from './form-text-numeric.component';

describe('FormTextNumericComponent', () => {
  let component: FormTextNumericComponent;
  let fixture: ComponentFixture<FormTextNumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTextNumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

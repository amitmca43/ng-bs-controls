import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegexComponent } from './form-regex.component';

describe('FormRegexComponent', () => {
  let component: FormRegexComponent;
  let fixture: ComponentFixture<FormRegexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

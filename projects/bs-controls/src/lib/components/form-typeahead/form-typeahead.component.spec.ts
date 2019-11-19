import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeaheadComponent } from './form-typeahead.component';

describe('FormTypeaheadComponent', () => {
  let component: FormTypeaheadComponent;
  let fixture: ComponentFixture<FormTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckBoxComponent } from './form-check-box.component';

describe('FormCheckBoxComponent', () => {
  let component: FormCheckBoxComponent;
  let fixture: ComponentFixture<FormCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

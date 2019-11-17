import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListSelectComponent } from './form-list-select.component';

describe('FormListSelectComponent', () => {
  let component: FormListSelectComponent;
  let fixture: ComponentFixture<FormListSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

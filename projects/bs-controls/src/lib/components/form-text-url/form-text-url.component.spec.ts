import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextUrlComponent } from './form-text-url.component';

describe('FormTextUrlComponent', () => {
  let component: FormTextUrlComponent;
  let fixture: ComponentFixture<FormTextUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTextUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

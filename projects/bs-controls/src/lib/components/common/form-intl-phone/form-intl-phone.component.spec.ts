import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIntlPhoneComponent } from './form-intl-phone.component';

describe('FormIntlPhoneComponent', () => {
  let component: FormIntlPhoneComponent;
  let fixture: ComponentFixture<FormIntlPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIntlPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIntlPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

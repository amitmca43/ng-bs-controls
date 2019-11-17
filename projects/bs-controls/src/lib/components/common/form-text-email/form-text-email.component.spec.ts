import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextEmailComponent } from './form-text-email.component';

describe('FormTextEmailComponent', () => {
  let component: FormTextEmailComponent;
  let fixture: ComponentFixture<FormTextEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTextEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

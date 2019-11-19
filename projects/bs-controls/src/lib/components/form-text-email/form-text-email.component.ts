import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-email',
  templateUrl: './form-text-email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextEmailComponent),
      multi: true
    },
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextEmailComponent),
      multi: true
    }
  ]
})
export class FormTextEmailComponent extends BaseTextControlComponent {
  validInput: any;
  constructor() {
    super();
  }

  public validate(c: FormControl) {
    this.isValid();
    return this.validInput ? null : { stringError: { valid: false } };
  }

  private isValid(): void {
    if (this.value === undefined || this.value === '') {
      this.validInput = true;
      return;
    }

    const regexp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    this.validInput = regexp.test(this.value);
  }
}

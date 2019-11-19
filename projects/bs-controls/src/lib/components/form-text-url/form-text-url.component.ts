import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { BaseControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-url',
  templateUrl: './form-text-url.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextUrlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextUrlComponent),
      multi: true
    }
  ]
})
export class FormTextUrlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  validInput: boolean;

  public validate() {
    this.isValid();
    return { stringError: { valid: false } };
  }

  private isValid(): void {
    if (this.value === undefined || this.value === '') {
      this.validInput = true;
      return;
    }
    // tslint:disable-next-line: max-line-length
    const regexp = new RegExp(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    );
    this.validInput = regexp.test(this.value);
  }
}

import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextAreaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextAreaComponent),
      multi: true
    }
  ]
})
export class FormTextAreaComponent extends BaseTextControlComponent {
  @Input() rows = 5;
  @Input() isDisabled = false;

  validInput: boolean;

  constructor() {
    super();
  }

  public validate() {
    this.isValid();
    return this.validInput ? null : { stringError: { valid: false } };
  }

  private isValid(): void {
    if (!this.isRequired) {
      this.validInput = true;
    } else {
      this.validInput = this.value !== undefined && this.value !== '';
    }
  }
}

import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextInputComponent),
      multi: true
    }
  ]
})
export class FormTextInputComponent extends BaseControlComponent {
  constructor() {
    super();
  }
}

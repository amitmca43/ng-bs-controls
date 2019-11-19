import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-check-box',
  templateUrl: './form-check-box.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCheckBoxComponent),
      multi: true
    }
  ]
})
export class FormCheckBoxComponent extends BaseTextControlComponent {
  constructor() {
    super();
    this.groupClass = 'form-check';
  }
}

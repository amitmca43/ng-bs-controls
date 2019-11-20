import {
  Component,
  forwardRef,
  Injector,
  AfterContentInit,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import * as moment_ from 'moment';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-date-picker',
  templateUrl: './form-date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDatePickerComponent),
      multi: true
    }
  ]
})
export class FormDatePickerComponent extends BaseTextControlComponent
  implements AfterContentInit {
  @Input() max = '2100-12-31';
  @Input() min = '1900-01-01';
  @Input() maxWidth = 500;

  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterContentInit(): void {
    super.ngAfterContentInit();
    if (this.control) {
      this.control.setValidators(this.validators);
    }
  }
}

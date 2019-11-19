import {
  Component,
  forwardRef,
  Injector,
  AfterContentInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

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
export class FormTextInputComponent extends BaseTextControlComponent
  implements AfterContentInit {
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

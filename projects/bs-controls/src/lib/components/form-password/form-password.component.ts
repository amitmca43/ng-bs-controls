import {
  Component,
  forwardRef,
  AfterContentInit,
  Injector
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormPasswordComponent),
      multi: true
    }
  ]
})
export class FormPasswordComponent extends BaseTextControlComponent
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

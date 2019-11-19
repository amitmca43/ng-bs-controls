import {
  Component,
  forwardRef,
  Injector,
  AfterContentInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-email',
  templateUrl: './form-text-email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextEmailComponent),
      multi: true
    }
  ]
})
export class FormTextEmailComponent extends BaseTextControlComponent
  implements AfterContentInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterContentInit(): void {
    super.ngAfterContentInit();
    this.validators.push(Validators.email);
    if (this.control) {
      this.control.setValidators(this.validators);
    }
  }
}

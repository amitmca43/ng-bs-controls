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
  validInput: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterContentInit(): void {
    super.ngAfterContentInit();
    if (this.control) {
      this.control.setValidators([Validators.required, Validators.email]);
      console.log(this.isRequired);
    }
  }
}

import {
  Component,
  forwardRef,
  Input,
  AfterContentInit,
  Injector
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-numeric',
  templateUrl: './form-text-numeric.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextNumericComponent),
      multi: true
    }
  ]
})
export class FormTextNumericComponent extends BaseTextControlComponent
  implements AfterContentInit {
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

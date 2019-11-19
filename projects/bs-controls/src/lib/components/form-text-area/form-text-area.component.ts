import {
  Component,
  Input,
  forwardRef,
  Injector,
  AfterContentInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextAreaComponent),
      multi: true
    }
  ]
})
export class FormTextAreaComponent extends BaseTextControlComponent
  implements AfterContentInit {
  @Input() rows = 5;
  @Input() isDisabled = false;

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

import {
  Component,
  forwardRef,
  Injector,
  AfterContentInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-url',
  templateUrl: './form-text-url.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextUrlComponent),
      multi: true
    }
  ]
})
export class FormTextUrlComponent extends BaseTextControlComponent
  implements AfterContentInit {
  regexp = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );

  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterContentInit(): void {
    super.ngAfterContentInit();
    this.validators.push(Validators.pattern(this.regexp));
    if (this.control) {
      this.control.setValidators(this.validators);
    }
  }
}

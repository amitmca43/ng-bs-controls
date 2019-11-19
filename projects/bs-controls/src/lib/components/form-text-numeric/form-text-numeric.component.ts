import {
  Component,
  forwardRef,
  Input,
  OnInit,
  AfterContentInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';
import { BaseTextControlComponent } from '../base-component';

@Component({
  selector: 'app-form-text-numeric',
  templateUrl: './form-text-numeric.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextNumericComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextNumericComponent),
      multi: true
    }
  ]
})
export class FormTextNumericComponent extends BaseTextControlComponent {
  @Input() maxWidth = 500;

  constructor() {
    super();
  }
}

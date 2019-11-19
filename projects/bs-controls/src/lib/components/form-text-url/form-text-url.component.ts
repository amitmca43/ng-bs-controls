import {
  Component,
  forwardRef,
  Input,
  AfterContentInit,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';

@Component({
  selector: 'app-form-text-url',
  templateUrl: './form-text-url.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextUrlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextUrlComponent),
      multi: true
    }
  ]
})
export class FormTextUrlComponent
  implements ControlValueAccessor, AfterContentInit, OnInit {
  constructor() {}
  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'urltextbox';
  @Input() formLabel = 'urltextbox';
  @Input() placeholder = '';
  @Input() maxLength = 100;
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: string;

  @ViewChild('urlCtrl', { static: false }) urlCtrl: ElementRef;

  validInput: boolean;
  touchedInput: boolean;
  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  ngOnInit(): void {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
  }

  ngAfterContentInit(): void {
    if (this.setAutofocus) {
      setTimeout(() => {
        this.urlCtrl.nativeElement.focus();
      }, 1000);
    }
  }

  onChange(event: { target: { value: any } }) {
    let theVal = this.val;
    if (theVal === undefined) {
      theVal = '';
    }
    this.touchedInput = theVal !== event.target.value;
    this.val = event.target.value;
    this.propagateChange(this.val);
  }
  onBlur(event: { target: { value: any } }) {
    this.val = event.target.value;
    this.touchedInput = true;
    this.propagateChange(this.val);
  }
  private propagateChange = (_: any) => {};

  get value() {
    if (this.val !== undefined) {
      return this.val;
    }
    return '';
  }

  set value(val) {
    this.val = val;
  }

  writeValue(obj: any): void {
    this.val = obj;
    this.isValid();
    this.touchedInput = false;
  }

  public validate(c: FormControl) {
    this.isValid();
    return this.validInput ? null : { stringError: { valid: false } };
  }

  private isValid(): void {
    if (!this.isRequired && (this.val === undefined || this.val === '')) {
      this.validInput = true;
      return;
    }
    if (this.isRequired && (this.val === undefined || this.val === '')) {
      this.validInput = false;
      return;
    }

    // tslint:disable-next-line: max-line-length
    const regexp = new RegExp(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    );
    const validEmail = regexp.test(this.val);

    if (!this.isRequired && validEmail) {
      this.validInput = true;
      return;
    }
    if (!this.isRequired && !validEmail) {
      this.validInput = false;
      return;
    }
    this.validInput = validEmail;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}
}

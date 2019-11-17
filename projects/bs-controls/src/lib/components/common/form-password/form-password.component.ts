import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormPasswordComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormPasswordComponent),
      multi: true
    }
  ]
})
export class FormPasswordComponent implements ControlValueAccessor, OnInit {
  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'pwd';
  @Input() formLabel = 'pwd';
  @Input() maxLength = 250;
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: string;

  validInput: boolean;
  touchedInput: boolean;

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  constructor() {}

  ngOnInit(): void {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
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
    if (!this.isRequired) {
      this.validInput = true;
    } else {
      this.validInput = this.val !== undefined && this.val !== '';
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}
}

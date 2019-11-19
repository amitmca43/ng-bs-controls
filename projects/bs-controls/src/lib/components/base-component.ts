import { Input, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseTextControlComponent
  implements ControlValueAccessor, AfterContentInit {
  constructor() {}

  @Input() isRequired = false;
  @Input() name = 'urltextbox';
  @Input() formLabel = 'urltextbox';
  @Input() placeholder = '';
  @Input() maxLength = 100;
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  private _value: string;

  @ViewChild('ctrl', { static: false }) ctrl: ElementRef;

  groupClass = 'form-group';
  labelClass = '';
  eleClass = '';

  ngAfterContentInit(): void {
    if (this.setAutofocus) {
      setTimeout(() => {
        this.ctrl.nativeElement.focus();
      }, 400);
    }
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
    this.onTouched();
  }

  onChange(event: { target: { value: any } }) {
    this.value = event.target.value;
    console.log(this.ctrl.nativeElement);
  }

  onBlur(event: { target: { value: any } }) {
    this.value = event.target.value;
  }

  writeValue(val: any): void {
    this._value = val;
  }

  private propagateChange = (_: any) => {};

  private onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}

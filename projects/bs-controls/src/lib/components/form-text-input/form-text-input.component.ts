import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextInputComponent),
      multi: true
    }
  ]
})
export class FormTextInputComponent implements ControlValueAccessor {
  @Input() splitCol = false; // for forms with multiple columns of input
  @Input() modalForm = false; // for forms inside a modal popup
  @Input() isRequired = false;
  @Input() name = 'textbox';
  @Input() formLabel = 'textbox';
  @Input() placeholder = '';
  @Input() maxLength = 250;
  @Input() setAutofocus = false;

  private _value: string;

  validInput: boolean;
  touchedInput: boolean;

  groupClass = 'form-group';
  labelClass = '';
  eleClass = '';

  constructor() {}

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

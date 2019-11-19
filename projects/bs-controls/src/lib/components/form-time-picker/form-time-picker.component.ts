import { Component, OnInit, Input,  forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor } from '@angular/forms';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';

@Component({
  selector: 'app-form-time-picker',
  templateUrl: './form-time-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTimePickerComponent),
      multi: true,
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTimePickerComponent),
      multi: true,
    }
  ]
})
export class FormTimePickerComponent implements ControlValueAccessor,  OnInit  {
  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'timepicker';
  @Input() formLabel = 'timepicker';
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: string;

  @Output() timeValue = new EventEmitter<string>();

  validInput: boolean;
  validTime = true;
  touchedInput: boolean;

  constructor() { }

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-6 col-md-5';

  ngOnInit() {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
  }

  get value() {
    if (this.val !== undefined) {
      return this.val;
    }
    return '';
  }

  set value(val: any) {
    this.val = val;
  }

  onChange(event) {
    if (event) {
      let theVal = this.val;
      if (theVal === undefined) { theVal = ''; }
      this.touchedInput = true;
      this.validTime = true;
      this.val = event;
      this.propagateChange(this.val);
      this.getTimeValue();
    } else {
        this.validTime = false;
    }
  }

  private getTimeValue() {
    const newDateTime = new Date(this.val);
    this.timeValue.emit(newDateTime.toLocaleTimeString());
  }

  private propagateChange = (_: any) => { };

  writeValue(obj: string): void {
    this.val = obj;
    this.touchedInput = false;
  }

  public isValid(event: boolean): void {
    if (!event) {
      this.validTime = false;
    } else if (this.isRequired) {
      this.validInput = this.val !== undefined && this.val !== '';
    } else {
      this.validInput = true;
    }
  }

  public validate() {
    return this.validInput ? null : { stringError: { valid: false } };
  }



  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(_fn: any): void { }
  setDisabledState?(_isDisabled: boolean): void { }

}

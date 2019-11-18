import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor
} from '@angular/forms';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'app-form-date-picker',
  templateUrl: './form-date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDatePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormDatePickerComponent),
      multi: true
    }
  ]
})
export class FormDatePickerComponent implements ControlValueAccessor, OnInit {
  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'datepicker';
  @Input() formLabel = 'datepicker';
  @Input() setAutofocus = false;

  value: Date = null;
  constructor() {}

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-6 col-md-5';

  ngOnInit(): void {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
  }

  onChange(changedDate: Date): void {
    console.log('changedDate');
    console.log(changedDate);
    if (
      changedDate === undefined ||
      changedDate === null ||
      changedDate.toString() === 'Invalid Date'
    ) {
      this.propagateChange(null);
    } else {
      const day = moment(changedDate).format('DD'); // day
      const month = moment(changedDate).format('MM'); // month

      const date = `${changedDate.getFullYear()}-${month}-${day}T00:00:00.000`;
      this.propagateChange(date);
    }
  }

  get isValid(): boolean {
    if (
      this.isRequired &&
      (!this.value || this.value.toString() === 'Invalid Date')
    ) {
      return false;
    }
    return true;
  }

  private propagateChange = (_: any) => {};

  writeValue(date: string): void {
    console.log('date');
    console.log(date);
    if (date && moment(date, moment.ISO_8601, true).isValid()) {
      this.value = new Date(date);
    } else {
      this.value = null;
    }
  }

  public validate() {
    return this.isValid ? null : { stringError: { valid: false } };
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}
}

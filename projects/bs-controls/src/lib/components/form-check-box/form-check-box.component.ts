import { Component, Input, forwardRef, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-check-box',
  templateUrl: './form-check-box.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCheckBoxComponent),
      multi: true,
    }
  ]
})
export class FormCheckBoxComponent implements ControlValueAccessor, OnInit {

  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isDisabled = false;
  @Input() name = 'checkbox';
  @Input() formLabel = 'checkbox';
  @Input() color = 'primary';
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: boolean;

  @Output() changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  constructor() { }

  ngOnInit(): void {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
  }

  onChange(event: { checked: any; }) {
    this.val = event.checked;
    this.propagateChange(this.val);
    this.changed.emit(this.val);
  }
  private propagateChange = (_: any) => { };

  get value() {
    if (this.val !== undefined) {
      return this.val;
    }
    return false;
  }

  set value(val) {
    if (val) {
      this.val = val;
    } else {
      this.val = false;
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.val = obj;
    } else {
      this.val = false;
    }
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(_fn: any): void { }
  setDisabledState?(_isDisabled: boolean): void { }
}

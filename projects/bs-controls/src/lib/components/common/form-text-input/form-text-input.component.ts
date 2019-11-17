import { Component, forwardRef, Input, ViewChild, ElementRef, AfterContentInit, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextInputComponent),
      multi: true,
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTextInputComponent),
      multi: true,
    }
  ]
})
export class FormTextInputComponent implements ControlValueAccessor, OnInit, AfterContentInit {

  @Input() splitCol = false; // for forms with multiple columns of input
  @Input() modalForm = false; // for forms inside a modal popup
  @Input() isRequired = false;
  @Input() name = 'textbox';
  @Input() formLabel = 'textbox';
  @Input() placeholder = '';
  @Input() maxLength = 250;
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: string;

  @ViewChild('inputCtrl', { static: false }) theElement: ElementRef;

  validInput: boolean;
  touchedInput: boolean;

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

  ngAfterContentInit(): void {
    if (this.setAutofocus) {
      setTimeout(() => { this.theElement.nativeElement.focus(); }, 1000);
    }
  }

  onChange(event: { target: { value: any; }; }) {
    let theVal = this.val;
    if (theVal === undefined) { theVal = ''; }
    this.touchedInput = theVal !== event.target.value;
    this.val = event.target.value;
    this.propagateChange(this.val);
  }

  onBlur(event: { target: { value: any; }; }) {
    this.val = event.target.value;
    this.touchedInput = true;
    this.propagateChange(this.val);
  }

  private propagateChange = (_: any) => { };

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

  public validate() {
    this.isValid();
    return (this.validInput) ? null : { stringError: { valid: false }, };
  }

  private isValid(): void {
    if (!this.isRequired) {
      this.validInput = true;
    } else {
      this.validInput = this.val !== undefined && this.val !== '';
    }
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(_fn: any): void { }
  setDisabledState?(_isDisabled: boolean): void { }

}

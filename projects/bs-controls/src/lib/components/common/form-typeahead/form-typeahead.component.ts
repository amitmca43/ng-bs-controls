import {
  Component, forwardRef, Input, OnInit, Output, EventEmitter,
  ViewChild, ElementRef, AfterContentInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-form-typeahead',
  templateUrl: './form-typeahead.component.html',
  styleUrls: ['./form-typeahead.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTypeaheadComponent),
      multi: true,
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTypeaheadComponent),
      multi: true,
    }
  ]
})
export class FormTypeaheadComponent implements ControlValueAccessor, OnInit, AfterContentInit {

  optionsList: any[];
  listReady = false;
  initValue: string;

  validInput: boolean;
  touchedInput: boolean;

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  @Input() listData: any[];
  @Input() splitCol = false;
  @Input() isDisabled = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'typeahead';
  @Input() formLabel = 'typeahead';
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  @Input('value') val: string;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('taCtrl', { static: false }) taCtrl: ElementRef;

  constructor() { }

  ngAfterContentInit(): void {
    if (this.setAutofocus) {
      setTimeout(() => { this.taCtrl.nativeElement.focus(); }, 1000);
    }
  }

  ngOnInit() {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
    this.optionsLoaded(this.listData);
  }

  private optionsLoaded(data: any[]) {
    if (!data || data.length === 0) { return; }
    this.optionsList = data;
    this.listReady = true;
    this.writeValue(this.initValue);
    this.isValid();
  }

  onChange(event: { target: { value: any; }; }) {
    let theVal = this.val;
    if (theVal === undefined) { theVal = ''; }
    this.touchedInput = theVal !== event.target.value;
    if (event.target.value !== this.val) {
      this.val = '';
      this.isValid();
      this.propagateChange(this.val);
    }
  }
  onBlur(event: { target: { value: any; }; }) {
    setTimeout(() => {
      this.touchedInput = true;
      if (event.target.value !== this.val) {
        this.val = '';
        this.isValid();
        this.propagateChange(this.val);
      }
    }, 250);
  }

  onOptionSelect(event: TypeaheadMatch): void {
    this.val = event.item.listName;
    this.changed.emit(event.item);
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
    if (obj) {
      this.initValue = obj;
      if (!this.listReady) { return; }
      this.val = obj;
      this.isValid();
    }
    this.touchedInput = false;
  }

  public validate(c: FormControl) {
    this.isValid();
    return (this.validInput) ? null : { stringError: { valid: false }, };
  }

  private isValid(): void {
    if (!this.isRequired || !this.listReady) {
      this.validInput = true;
    } else {
      this.validInput = this.val !== undefined && this.val !== '';
    }
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(_fn: any): void { }
  setDisabledState?(_isDisabled: boolean): void { }

}

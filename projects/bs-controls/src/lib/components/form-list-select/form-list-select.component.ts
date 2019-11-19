import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

export interface Option {
  value: any;
  label: string;
}

@Component({
  selector: 'app-form-list-select',
  templateUrl: './form-list-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormListSelectComponent),
      multi: true
    }
  ]
})
export class FormListSelectComponent
  implements ControlValueAccessor, OnInit, AfterViewInit {
  optionsList: Option[];
  listReady = false;
  initVal: any;
  currentVal: any;
  validInput = false;
  touchedInput: boolean;
  value: any;

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  private _listData: Option[];
  public get listData(): Option[] {
    return this._listData;
  }

  @Input()
  public set listData(value: Option[]) {
    this._listData = value;
    this.optionsLoaded(this._listData);
  }

  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Input() splitCol = false;
  @Input() multiSelect = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() isDisabled = false;
  @Input() name = 'dropdown';
  @Input() formLabel = 'dropdown';
  @Input() setAutofocus = false;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('selectCtrl', { static: false }) selectCtrl: NgSelectComponent;

  constructor() {}

  ngOnInit() {
    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
  }

  ngAfterViewInit(): void {
    if (this.setAutofocus) {
      this.selectCtrl.focus();
    }
    setTimeout(() => {
      this.selectCtrl.setDisabledState(this.isDisabled);
    }, 500);
  }

  private optionsLoaded(data: Option[]) {
    if (!data || data.length === 0) {
      return;
    }
    this.optionsList = data;
    this.listReady = true;
    this.writeValue(this.currentVal);
  }

  onChange() {
    let theVal = this.value;
    if (theVal === undefined) {
      theVal = null;
    }
    this.touchedInput = theVal !== this.initVal;
    this.propagateChange(this.value);
    this.emitChange(this.value);
  }

  emitChange(theVal: any) {
    if (theVal !== this.currentVal) {
      this.currentVal = this.value;
      this.changed.emit(theVal);
    }
  }

  private propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    if (obj) {
      this.currentVal = this.initVal = obj;
      if (!this.listReady) {
        return;
      }
      this.value = obj;
      this.isValid();
    }
  }

  public validate() {
    this.isValid();
    return this.validInput ? null : { stringError: { valid: false } };
  }

  private isValid(): void {
    if (!this.isRequired || !this.listReady) {
      this.validInput = true;
    } else {
      if (!this.multiSelect) {
        this.validInput = this.value !== undefined && this.value !== null;
      } else {
        this.validInput =
          this.value !== undefined &&
          this.value !== null &&
          this.value.length > 0;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}
}

import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO
} from 'ngx-intl-tel-input';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

export class CountryPhone {
  number: string;
  countryCode = 'AU';
  dialCode: string;
}

@Component({
  selector: 'app-form-intl-phone',
  templateUrl: './form-intl-phone.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormIntlPhoneComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormIntlPhoneComponent),
      multi: true
    }
  ]
})
export class FormIntlPhoneComponent implements ControlValueAccessor, OnInit {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.Australia,
    CountryISO.NewZealand
  ];
  selectedCountryISO: CountryISO = CountryISO.Australia;

  groupClass = 'form-group row';
  labelClass = 'col-sm-4 col-md-3 col-lg-2 col-form-label';
  eleClass = 'col-sm-8 col-md-9 col-lg-10';

  @Input() splitCol = false;
  @Input() modalForm = false;
  @Input() isRequired = false;
  @Input() name = 'intlPhone';
  @Input() formLabel = this.name;

  phoneForm: FormGroup;

  constructor() {}

  ngOnInit() {
    const controls: { [controlId: string]: AbstractControl } = {};
    controls[this.name] = new FormControl(undefined);
    this.phoneForm = new FormGroup(controls);

    console.log(this.phoneForm);
    if (this.isRequired) {
      this.phoneForm.get(this.name).setValidators(Validators.required);
    }

    if (this.modalForm) {
      this.labelClass = 'col-3 col-form-label';
      this.eleClass = 'col-8';
    } else if (this.splitCol) {
      this.labelClass = 'col-sm-5 col-form-label';
      this.eleClass = 'col-sm-7';
    }
    this.phoneForm.get(this.name).valueChanges.subscribe(nextValue => {
      this.propagateChange(nextValue);
    });
  }

  writeValue(phone: CountryPhone): void {
    if (phone) {
      this.phoneForm.get(this.name).setErrors(undefined);
      this.phoneForm.get(this.name).setValue(phone.number);
      this.selectedCountryISO = phone.countryCode as CountryISO;
    }
  }

  validate() {
    if (
      this.phoneForm.get(this.name).errors &&
      this.phoneForm.get(this.name).errors.validatePhoneNumber
    ) {
      return { invalidPhone: { valid: false } };
    }

    return null;
  }

  isInvalid() {
    if (
      this.phoneForm.get(this.name).errors &&
      this.phoneForm.get(this.name).errors.validatePhoneNumber
    ) {
      return true;
    }

    return false;
  }

  isRequiredError() {
    if (
      this.phoneForm.get(this.name).errors &&
      this.phoneForm.get(this.name).errors.required
    ) {
      return true;
    }

    return false;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}

  private propagateChange = (_: any) => {};
}

import {
  Input,
  AfterContentInit,
  ViewChild,
  ElementRef,
  Injector,
  Type
} from "@angular/core";
import {
  ControlValueAccessor,
  NgControl,
  FormControl,
  Validators,
  ValidatorFn
} from "@angular/forms";

export abstract class BaseTextControlComponent
  implements ControlValueAccessor, AfterContentInit {
  @Input() isRequired = false;
  @Input() name = "urltextbox";
  @Input() formLabel = "urltextbox";
  @Input() placeholder = "";
  @Input() maxLength = 100;
  @Input() setAutofocus = false;
  // tslint:disable-next-line: no-input-rename
  private _value: string;

  validators: ValidatorFn[] = [];

  @ViewChild("ctrl", { static: false }) ctrl: ElementRef;

  groupClass = "form-group";
  labelClass = "";
  eleClass = "";

  control: FormControl;

  constructor(private injector?: Injector) {}

  ngAfterContentInit(): void {
    if (this.setAutofocus) {
      setTimeout(() => {
        this.ctrl.nativeElement.focus();
      }, 400);
    }

    if (this.injector) {
      const ngControl = this.injector.get<NgControl>(
        NgControl as Type<NgControl>
      );
      if (ngControl) {
        this.control = ngControl.control as FormControl;
      }
    }

    if (this.isRequired) {
      this.validators.push(Validators.required);
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

  onChange(event: any) {
    this.updateValue(event);
    console.log(event);
  }

  onBlur(event: any) {
    this.updateValue(event);
  }

  private updateValue(event: any) {
    if (event.target.type === "checkbox") {
      this.value = event.target.checked;
    } else {
      this.value = event.target.value;
    }
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

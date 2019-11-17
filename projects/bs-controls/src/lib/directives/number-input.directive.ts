import { Directive, ElementRef, HostListener, Input } from '@angular/core';

export class NumberDirectiveConfig {
  decimal?: boolean;
  precision?: number;
}
const decimalSeparator = '.';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[numberInput]'
})
export class NumberInputDirective {
  @Input('numberInput') config: NumberDirectiveConfig = {
    decimal: false,
    precision: 2
  };

  // Allow decimal numbers and negative values
  private decimalRegex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);

  // Allow only numbers and negative values
  private integerRegex: RegExp = new RegExp(/^-?(0|[1-9]\d*)$/g);

  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Delete'
  ];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.areValidKeys(event)) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);

    if (!this.isValidInput(next)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData.getData('text/plain');
    if (this.isValidInput(pastedInput)) {
      document.execCommand('insertText', false, pastedInput);
    }
  }

  private isValidInput(next: string) {
    let isValid = true;
    if (!this.config.decimal && !this.isValidInteger(next)) {
      isValid = false;
    } else if (this.config.decimal && !this.isValidDecimal(next)) {
      isValid = false;
    }
    return isValid;
  }

  // Checks for special keys and key combinations
  private areValidKeys(event: KeyboardEvent) {
    return (
      this.specialKeys.indexOf(event.key) !== -1 || // Allow Backspace, tab, end, Left, Right and home keys
      (event.key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
      (event.key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
      (event.key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
      (event.key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
      (event.key === 'a' && event.metaKey === true) || // Cmd+A (Mac)
      (event.key === 'c' && event.metaKey === true) || // Cmd+C (Mac)
      (event.key === 'v' && event.metaKey === true) || // Cmd+V (Mac)
      (event.key === 'x' && event.metaKey === true) // Cmd+X (Mac)
    );
  }

  // validates that input string is a valid decimal as per configuration
  private isValidDecimal(value: string) {
    let isDecimal = value && String(value).match(this.decimalRegex) !== null;

    if (isDecimal) {
      const [integer, fraction = ''] = (value || '')
        .toString()
        .split(decimalSeparator);
      if (fraction.length > this.config.precision) {
        isDecimal = false;
      }
    }

    return isDecimal;
  }

  // validates that input string is a valid integer
  private isValidInteger(value: string) {
    return value && String(value).match(this.integerRegex);
  }
}

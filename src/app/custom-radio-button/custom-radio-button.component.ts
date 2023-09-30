import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-radio-button',
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioButtonComponent),
      multi: true,
    },
  ],
})
export class CustomRadioButtonComponent implements ControlValueAccessor {
  @Input() options: { value: any; label: string }[] = [];
  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onRadioChange(selectedValue: any) {
    this.value = selectedValue;
    this.onChange(this.value);
    this.onTouched();
  }
}

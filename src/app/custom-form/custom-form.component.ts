import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CustomFormComponent
    }
  ]
})
export class CustomFormComponent implements ControlValueAccessor{

  @Input() control: FormControl= new FormControl();

  constructor() {}

  ngOnInit() {
    this.control.valueChanges.subscribe(() => {
      this.onChange(this.control.value);
    });
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  mostrar = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: ['',[Validators.required]],
    });
  }

  switchMostrar() {
    console.log("Mostrar: ", this.mostrar)
    this.mostrar = !this.mostrar;
  }

  onSubmit() {
    console.log("El formulario es válido: ", this.form.valid);
    console.log("El valor del formulario es: ", this.form.value);
  }

}

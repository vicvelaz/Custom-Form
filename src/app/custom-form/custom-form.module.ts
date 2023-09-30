import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports: [CustomFormComponent]
})
export class CustomFormModule { }

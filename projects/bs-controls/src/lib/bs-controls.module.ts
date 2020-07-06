import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Form Components
import { FormTextUrlComponent } from "./components/form-text-url/form-text-url.component";
import { FormPasswordComponent } from "./components/form-password/form-password.component";
import { FormTextAreaComponent } from "./components/form-text-area/form-text-area.component";
import { FormCheckBoxComponent } from "./components/form-check-box/form-check-box.component";
import { FormTextEmailComponent } from "./components/form-text-email/form-text-email.component";
import { FormTextInputComponent } from "./components/form-text-input/form-text-input.component";
import { FormDatePickerComponent } from "./components/form-date-picker/form-date-picker.component";
import { FormTextNumericComponent } from "./components/form-text-numeric/form-text-numeric.component";

import { NumberInputDirective } from "./directives/number-input.directive";

@NgModule({
  declarations: [
    NumberInputDirective,
    FormCheckBoxComponent,
    FormDatePickerComponent,
    FormPasswordComponent,
    FormTextAreaComponent,
    FormTextEmailComponent,
    FormTextInputComponent,
    FormTextNumericComponent,
    FormTextUrlComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    NumberInputDirective,
    FormCheckBoxComponent,
    FormDatePickerComponent,
    FormPasswordComponent,
    FormTextAreaComponent,
    FormTextEmailComponent,
    FormTextInputComponent,
    FormTextNumericComponent,
    FormTextUrlComponent
  ]
})
export class BsControlsModule {}

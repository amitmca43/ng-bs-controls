import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';

// Form Components
import { FormTextUrlComponent } from './components/common/form-text-url/form-text-url.component';
import { FormPasswordComponent } from './components/common/form-password/form-password.component';
import { FormTextAreaComponent } from './components/common/form-text-area/form-text-area.component';
import { FormCheckBoxComponent } from './components/common/form-check-box/form-check-box.component';
import { FormTypeaheadComponent } from './components/common/form-typeahead/form-typeahead.component';
import { FormIntlPhoneComponent } from './components/common/form-intl-phone/form-intl-phone.component';
import { FormTextEmailComponent } from './components/common/form-text-email/form-text-email.component';
import { FormTextInputComponent } from './components/common/form-text-input/form-text-input.component';
import { FormDatePickerComponent } from './components/common/form-date-picker/form-date-picker.component';
import { FormListSelectComponent } from './components/common/form-list-select/form-list-select.component';
import { FormTimePickerComponent } from './components/common/form-time-picker/form-time-picker.component';
import { FormTextNumericComponent } from './components/common/form-text-numeric/form-text-numeric.component';

import {
  TimepickerModule,
  BsDatepickerModule,
  TypeaheadModule
} from 'ngx-bootstrap';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgSelectModule } from '@ng-select/ng-select';
import { NumberInputDirective } from './directives/number-input.directive';

@NgModule({
  declarations: [
    NumberInputDirective,
    FormCheckBoxComponent,
    FormDatePickerComponent,
    FormIntlPhoneComponent,
    FormListSelectComponent,
    FormPasswordComponent,
    FormTextAreaComponent,
    FormTextEmailComponent,
    FormTextInputComponent,
    FormTextNumericComponent,
    FormTextUrlComponent,
    FormTimePickerComponent,
    FormTypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatCheckboxModule,
    NgSelectModule,
    NgxIntlTelInputModule,
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    NumberInputDirective,
    FormCheckBoxComponent,
    FormDatePickerComponent,
    FormIntlPhoneComponent,
    FormListSelectComponent,
    FormPasswordComponent,
    FormTextAreaComponent,
    FormTextEmailComponent,
    FormTextInputComponent,
    FormTextNumericComponent,
    FormTextUrlComponent,
    FormTimePickerComponent,
    FormTypeaheadComponent
  ]
})
export class BsControlsModule {}

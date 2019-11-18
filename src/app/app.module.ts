import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';

import { FormComponent } from './sample/form/form.component';
import { BsControlsModule } from 'projects/bs-controls/src/public-api';
import { FormTextComponent } from './sample/form-text/form-text.component';
import { FormFormatComponent } from './sample/form-format/form-format.component';
import { FormListsComponent } from './sample/form-lists/form-lists.component';
import { FormDatesComponent } from './sample/form-dates/form-dates.component';
import { FormChecksComponent } from './sample/form-checks/form-checks.component';
import { FormRegexComponent } from './sample/form-regex/form-regex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormTextComponent,
    FormFormatComponent,
    FormListsComponent,
    FormDatesComponent,
    FormChecksComponent,
    FormRegexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BsControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

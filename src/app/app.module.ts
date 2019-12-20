import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FormComponent } from './sample/form/form.component';
import { BsControlsModule } from 'projects/bs-controls/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

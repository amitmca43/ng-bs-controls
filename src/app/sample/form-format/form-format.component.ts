import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-format',
  templateUrl: './form-format.component.html',
  styleUrls: ['./form-format.component.css']
})
export class FormFormatComponent implements OnInit {

  number1: string;
  number2: string;
  number3: string;
  phone1: string;
  phone2: string;
  phone3: string;

  isSaving = false;
  isSaved = false;

  newCountryList = [
    { countryId: '1', name: 'Australia', code: 'AU' },
    { countryId: '2', name: 'New Zealand', code: 'NZ' },
    { countryId: '3', name: 'India', code: 'IN' },
    { countryId: '4', name: 'Austria', code: 'AR' },
    { countryId: '5', name: 'United States', code: 'US' },
    { countryId: '6', name: 'United Kingdom', code: 'UK' },
    { countryId: '7', name: 'Russia', code: 'RU' }
  ];

  ausStateList = [
    {ausStateId: '1', name: 'Australian Capital Territory', code: 'ACT'},
    {ausStateId: '2', name: 'New South Wales', code: 'NSW'},
    {ausStateId: '3', name: 'Northern Territory', code: 'NT'},
    {ausStateId: '4', name: 'Queensland', code: 'QLD'},
    {ausStateId: '5', name: 'South Australia', code: 'SA'},
    {ausStateId: '6', name: 'Tasmania', code: 'TAS'},
    {ausStateId: '7', name: 'Victoria', code: 'VIC'},
    {ausStateId: '8', name: 'Western Australia', code: 'WA'},
    {ausStateId: '9', name: 'Non Australian', code: 'NA'},
  ];

  @ViewChild('addressComponentRef', { static: false }) addressComponent: any;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.initData();
  }

  saveForm() {
    const address  =  this.addressComponent.getFinalAddress();
    this.toastr.info(null, 'Saving...', { disableTimeOut: true });
    this.isSaving = true;
    setTimeout(() => {
      this.isSaved = true;
      this.isSaving = false;
      this.toastr.clear();
      this.toastr.success('Success', 'Form saved successfully', { progressBar: true, closeButton: true });
    }, 1500);
  }

  clearForm() {
    this.toastr.info(null, 'Cancel...', { disableTimeOut: true });
    setTimeout(() => {
      this.initData();
      this.toastr.clear();
      this.toastr.success(null, 'Data has been reset!', { progressBar: true, closeButton: true });
      this.isSaved = false;
    }, 1000);
  }

  initData() {
    this.number1 = '1234';
    this.number2 = undefined;
    this.number3 = undefined;
    this.phone1 = undefined;
    this.phone2 = '(03) 1234 5678';
    this.phone3 = undefined;
  }


  finalAddress(event: any) {
    const address = event;
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-regex',
  templateUrl: './form-regex.component.html',
  styleUrls: ['./form-regex.component.css']
})
export class FormRegexComponent implements OnInit {

  email1: string;
  email2: string;
  url1: string;
  url2: string;

  isSaving = false;
  isSaved = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.initData();
  }

  saveForm() {
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
    this.email1 = 'ghib3003@bigpond.com';
    this.email2 = undefined;
    this.url1 = 'https://resme.ddns.net/';
    this.url2 = undefined;
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-checks',
  templateUrl: './form-checks.component.html',
  styleUrls: ['./form-checks.component.css']
})
export class FormChecksComponent implements OnInit {

  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;

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
    this.check1 = true;
    this.check2 = undefined;
    this.check3 = undefined;
    this.check4 = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Utilities } from '../../../../../projects/framework/src/lib/common/utilities';

@Component({
  selector: 'app-form-dates',
  templateUrl: './form-dates.component.html',
  styleUrls: ['./form-dates.component.css']
})
export class FormDatesComponent implements OnInit {
  date1str: string;
  date2str: string;
  date3str: string;
  date4str: string;

  time: string;
  timestr: string;

  isSaving = false;
  isSaved = false;

  constructor(private toastr: ToastrService) {}

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
      this.toastr.success('Success', 'Form saved successfully', {
        progressBar: true,
        closeButton: true
      });
    }, 1500);
  }

  clearForm() {
    this.toastr.info(null, 'Cancel...', { disableTimeOut: true });
    setTimeout(() => {
      this.initData();
      this.toastr.clear();
      this.toastr.success(null, 'Data has been reset!', {
        progressBar: true,
        closeButton: true
      });
      this.isSaved = false;
    }, 1000);
  }
  public timeValue(event) {
    this.time = event;
  }

  initData() {
    this.date1str = '1969-07-24T14:00:00.000Z';
    this.date2str = '1979-07-24T14:00:00.000Z';
  }
}

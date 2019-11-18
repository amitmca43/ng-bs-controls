import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CountryPhone } from 'bs-controls/lib/components/common/form-intl-phone/form-intl-phone.component';


@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  pwd1: string;
  pwd2: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  phone: CountryPhone = {
    countryCode: 'AU',
    number: '223232132',
    dialCode: '+61'
  };

  isSaving = false;
  isSaved = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.initData();
  }

  save() {
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

  cancel() {
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

  initData() {
    this.text1 = 'Required text box';
    this.text2 = undefined;
    this.text3 = undefined;
    this.text4 = 'Not mandatory text area';
    this.pwd1 = undefined;
    this.pwd2 = undefined;
    this.text5 = undefined;
    this.text6 = undefined;
    this.text7 = 'Read only data';
    this.text8 = 'Looks like a label but allows screen readers to traverse!';
  }

  fileUploaded(event: any) {
    console.log(event);
  }
}

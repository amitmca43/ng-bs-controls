import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email1: string;
  email2: string;
  url1: string;
  url2: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  pwd1: string;
  pwd2: string;

  number1: string;
  number2: string;
  number3: string;

  date2str: string;
  check1: boolean;
  constructor() {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.email1 = 'ghib3003@bigpond.com';
    this.email2 = undefined;
    this.url1 = 'https://resme.ddns.net/';
    this.url2 = undefined;
    this.text1 = 'Required text box';
    this.text2 = undefined;
    this.text3 = undefined;
    this.text4 = 'Not mandatory text area';
    this.pwd1 = undefined;
    this.pwd2 = undefined;
    this.number1 = '1234';
    this.number2 = undefined;
    this.number3 = undefined;
    this.date2str = '1979-07-24T14:00:00.000';
    this.check1 = false;
  }
}

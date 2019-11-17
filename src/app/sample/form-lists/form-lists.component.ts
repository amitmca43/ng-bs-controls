import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-lists',
  templateUrl: './form-lists.component.html',
  styleUrls: ['./form-lists.component.css']
})
export class FormListsComponent implements OnInit {
  list1: string;
  list1Selected: any;
  list2: string;
  list2Selected: any;
  list3: string;
  list3Selected: any;
  list4: string;
  list4Selected: any;
  multiSelect = ['1', '4'];

  list1Data = [
    { value: '1', label: 'List 1 Item 1' },
    { value: '2', label: 'List 1 Item 2' },
    { value: '3', label: 'List 1 Item 3' },
    { value: '4', label: 'List 1 Item 4' },
    { value: '5', label: 'List 1 Item 5' },
    { value: '6', label: 'List 1 Item 6' },
    { value: '7', label: 'List 1 Item 7' }
  ];
  list2Data = [
    { value: '1', label: 'List 2 Item 1' },
    { value: '2', label: 'List 2 Item 2' },
    { value: '3', label: 'List 2 Item 3' },
    { value: '4', label: 'List 2 Item 4' },
    { value: '5', label: 'List 2 Item 5' },
    { value: '6', label: 'List 2 Item 6' },
    { value: '7', label: 'List 2 Item 7' }
  ];
  list3Data = [
    { id: '1', listName: 'Australia' },
    { id: '2', listName: 'New Zealand' },
    { id: '3', listName: 'India' },
    { id: '4', listName: 'Austria' },
    { id: '5', listName: 'United States' },
    { id: '6', listName: 'United Kingdom' },
    { id: '7', listName: 'Russia' }
  ];

  list4Data = [
    { id: '1', listName: 'This' },
    { id: '2', listName: 'Is a Story' },
    { id: '3', listName: 'Of What' },
    { id: '4', listName: 'Can Be' },
    { id: '5', listName: 'Found In' },
    { id: '6', listName: 'The List' },
    { id: '7', listName: 'This Is a Story' },
    { id: '8', listName: 'Of What Can Be Found' },
    { id: '9', listName: 'In The List!' }
  ];

  selectedMuiltList = [
    { value: '4', label: 'List 1 Item 4' },
    { value: '5', label: 'List 1 Item 5' }
  ];

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

  initData() {
    this.list1 = '3';
    this.list1Selected = this.list1Data.filter(lst => lst.value === this.list1);
    this.list2 = '0';
    this.list3 = 'Russia';
    this.list3Selected = this.list3Data.filter(
      lst => lst.listName === this.list3
    );
  }

  list1Changed(selectedObj: any) {
    this.list1Selected = selectedObj;
  }

  list2Changed(selectedObj: any) {
    this.list2Selected = selectedObj;
  }

  list3Changed(selectedObj: any) {
    this.list3 = selectedObj.label;
    this.list3Selected = selectedObj;
  }

  list4Changed(selectedObj: any) {
    this.list4 = selectedObj.list1;
    this.list4Selected = selectedObj;
  }

  MultiselectChanged(selectedObj: any) {
    this.multiSelect = selectedObj;
  }
}

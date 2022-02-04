import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-fields',
  templateUrl: './customer-fields.component.html',
  styleUrls: ['./customer-fields.component.scss'],
})
export class CustomerFieldsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customergroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    // lastName: new FormControl(''),
    //date: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });
}

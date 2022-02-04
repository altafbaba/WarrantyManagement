import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CustomerService } from '../core/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(private _customerService: CustomerService) {}
  isError: boolean = false;
  ngOnInit(): void {}
  customergroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    //date: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });

  save(): void {
    if (this.customergroup.invalid) {
      this.isError = true;
      return;
    }
    console.log(this.customergroup.value);
  }
}

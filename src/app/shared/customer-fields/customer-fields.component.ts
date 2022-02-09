import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/core/customer/customer.service';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-customer-fields',
  templateUrl: './customer-fields.component.html',
  styleUrls: ['./customer-fields.component.scss'],
})
export class CustomerFieldsComponent implements OnInit {
  data: any[] = [];
  filteredOptions: Observable<any[]> | undefined;
  constructor(private _getcustomer: CustomerService) {}

  ngOnInit(): void {
    //get Coustomer data form API
    this._getcustomer.getCustomers().subscribe((Response: any) => {
      this.data = Response.data;
    });
  }

  customergroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    //date: new FormControl(''),
    address1: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });
}

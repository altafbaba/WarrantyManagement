import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {} from '@angular/forms';
import { CustomerService } from '../core/customer/customer.service';
import { CustomerFieldsComponent } from '../shared/customer-fields/customer-fields.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @ViewChild(CustomerFieldsComponent) _cusComp!: CustomerFieldsComponent;
  constructor(private _customerService: CustomerService) {}
  ngAfterViewInit(): void {
    console.log(this._cusComp.customergroup.value);
  }
  isError: boolean = false;
  ngOnInit(): void {}

  save(): void {
    this._cusComp.customergroup.markAllAsTouched();
    // console.log(this._cusComp.customergroup);
    if (this._cusComp.customergroup.invalid) {
      this.isError = true;
      return;
    }
    console.log(this._cusComp.customergroup.value);
  }
}

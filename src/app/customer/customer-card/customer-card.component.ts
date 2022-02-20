import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/core/customer/customer.service';
import { ICustomer } from 'src/app/core/customer/customer.types';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomerCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _customerService: CustomerService
  ) {}
  customerData: ICustomer;

  ngOnInit(): void {
    this._customerService.getCustomerbyId(this.data).subscribe((res: any) => {
      this.customerData = res.data;
    });
  }
}

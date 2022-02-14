import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { CustomerService } from 'src/app/core/customer/customer.service';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @ViewChild(CustomerFieldsComponent) _cusCompt!: CustomerFieldsComponent;
  dealerCtrl: FormControl = new FormControl('');
  isError: boolean = false;
  //auto complate input fild
  options: any[] = [];
  filteredOptions: Observable<any[]> | undefined;
  constructor(
    private _customer: CustomerService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit() {}
  save() {
    this._customer
      .createCustomer(this._cusCompt.customergroup.value)
      .subscribe({
        error: (err) => {
          this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
        },
        next: (res) => {
          this._snackBar.open('User Created', 'Close')._dismissAfter(3500);
          this._router.navigateByUrl('/Customer');
        },
      });
  }
  displayFn(value: any) {
    return value.name;
  }
}

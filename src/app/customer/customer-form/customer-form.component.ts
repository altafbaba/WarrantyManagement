import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { debounceTime, map, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { CustomerService } from 'src/app/core/customer/customer.service';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';
import { DealerService } from 'src/app/core/dealer/dealer.service';
import { Dealer } from 'src/app/dealer/dealer.component';
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
  options: Dealer[] = [];
  filteredOptions: Observable<any[]> | undefined;
  constructor(
    private _customerService: CustomerService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _dealerService: DealerService
  ) {}

  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((res: any) => {
      this.options = res.data;
    });
    this.filteredOptions = this.dealerCtrl.valueChanges.pipe(
      // debounceTime(300),
      map((val) => this._filter(val))
    );
  }
  ngAfterViewInit() {}
  save() {
    this._customerService
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

  _filter(search: string) {
    return this.options.filter((x) => x.name.includes(search));
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../core/customer/customer.service';
import { DealerService } from '../core/dealer/dealer.service';
import { CustomerFieldsComponent } from '../shared/customer-fields/customer-fields.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @ViewChild(CustomerFieldsComponent) _cusComp!: CustomerFieldsComponent;
  data: any[] = [];
  isError: boolean = false;
  //auto complate input fild
  options: any[] = [];
  filteredOptions: Observable<any[]> | undefined;
  dealerCtrl: FormControl = new FormControl('');

  constructor(
    private _customerService: CustomerService,
    private _getdearlerService: DealerService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  // If accessing Child COmponent using VIew Child -----> reference should be in AfterViewInit
  ngAfterViewInit(): void {
    // console.log(this._cusComp.customergroup.value);
    //for get Dealer for dealer services
    this._getdearlerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
    //auto complate dealer input fild
  }

  ngOnInit(): void {
    this.filteredOptions = this.dealerCtrl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      })
    );
    //get dealer form API for DealerNamr
    this._getdearlerService.getDealers().subscribe((_res: any) => {
      //console.log(_res);
      this.options = _res.data;
    });
  }

  private _filter(value: any): any[] {
    if (typeof value == 'object') {
      const filterValue = value.name.toLowerCase();
      //customer auto flied
      this._cusComp.customergroup.patchValue(value);
      return this.options.filter((option: any) =>
        option.name.toLowerCase().includes(filterValue)
      );
    } else {
      const filterValue = value.toLowerCase();
      // console.log(filterValue);
      return this.options.filter((option: any) =>
        option.name.toLowerCase().includes(filterValue)
      );
    }
  }

  save(): void {
    // this._cusComp.customergroup.markAllAsTouched();
    // // console.log(this._cusComp.customergroup);
    // if (this._cusComp.customergroup.invalid) {
    //   this.isError = true;
    //   return;
    // }
    // console.log(this._cusComp.customergroup.value);
    this._customerService
      .createCustomer(this._cusComp.customergroup.value)
      .subscribe({
        error: (err) => {
          this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
        },
        next: (res) => {
          this._snackBar.open('User Created', 'Close')._dismissAfter(3500);
          this._router.navigateByUrl('/Warranty');
        },
      });
  }
  //autofiled
  displayFn(value: any) {
    return value.name;
  }
}

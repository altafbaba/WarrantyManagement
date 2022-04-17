import { Component, OnInit, ViewChild } from '@angular/core';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';
import { error } from '@angular/compiler/src/util';
import { id } from 'date-fns/locale';
import { CustomerService } from 'src/app/core/customer/customer.service';

@Component({
  selector: 'app-warrantyform',
  templateUrl: './warrantyform.component.html',
  styleUrls: ['./warrantyform.component.scss'],
})
export class WarrantyformComponent implements OnInit {
  @ViewChild(CustomerFieldsComponent) _custm: CustomerFieldsComponent;

  constructor(
    private _warrantyService: WarrantyService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _cstmService: CustomerService
  ) {}
  warrantygroup: FormGroup = new FormGroup({
    product: new FormControl('', [Validators.required]),
    modelNo: new FormControl('', [Validators.required]),
    serialNo: new FormControl('', [Validators.required]),
    WSRNo: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  save() {
    this.warrantygroup.markAllAsTouched();
    //Validate form
    if (this.warrantygroup.invalid) return;

    this._cstmService
      .createCustomer(this._custm.customergroup.value)
      .subscribe((val: any) => {
        let wrnty = {
          ...this.warrantygroup.value,
          customer: val._id,
        };

        this._warrantyService.createWarranty(wrnty).subscribe(
          (wrnty) => {
            this._snackBar
              .open('Warranty Created', 'Close')
              ._dismissAfter(3500);
            this._router.navigateByUrl('/Warranty');
          },

          (err) => {
            this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
          }
        );
      });
  }
}

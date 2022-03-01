import { Component, OnInit, ViewChild } from '@angular/core';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';
import { error } from '@angular/compiler/src/util';

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
    private _router: Router
  ) {}
  warrantygroup: FormGroup = new FormGroup({
    contactNo: new FormControl('1231231230', [Validators.required]),
    product: new FormControl('tv', [Validators.required]),
    modelNo: new FormControl('qweasd', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  save() {
    this.warrantygroup.markAllAsTouched();
    //Validate form
    if (this.warrantygroup.invalid) return;
    let wrnty = {
      ...this.warrantygroup.value,
      ...this._custm.customergroup.value,
    };

    this._warrantyService.createWarranty(wrnty).subscribe(
      (wrnty) => {
        this._custm.customergroup.value;

        this._snackBar.open('Warranty Created', 'Close')._dismissAfter(3500);
        this._router.navigateByUrl('/Warranty');
      },

      (err) => {
        this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
      }
    );

    this._router.navigateByUrl('/Warranty');

    // this._warrantyService
    //   .createWarranty(this.warrantygroup.value)
    //   .subscribe((res) => {
    //     this._custm.customergroup.value;
    //   });
    //   error: (err) => {
    //     this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
    //   },
    //   next: (res) => {
    //     this._snackBar.open('Warranty Created', 'Close')._dismissAfter(3500);
    //     this._router.navigateByUrl('/Warranty');
    //   },
    // });
  }
}

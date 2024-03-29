import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isPast } from 'date-fns';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { IWarranty } from 'src/app/core/warranty/warranty.types';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';

@Component({
  selector: 'app-warranty-card',
  templateUrl: './warranty-card.component.html',
  styleUrls: ['./warranty-card.component.scss'],
})
export class WarrantyCardComponent implements OnInit {
  @ViewChild(CustomerFieldsComponent) _custm: CustomerFieldsComponent;

  remark = new FormControl('', [Validators.required]);

  warrantyData: IWarranty;
  isEditMode = false;

  constructor(
    private _warrantyService: WarrantyService,
    private router: Router,
    public dialogRef: MatDialogRef<WarrantyCardComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    this._warrantyService.getWarrantybyId(this.data).subscribe((res: any) => {
      this.warrantyData = res;
    });
  }
  warrantyClam: boolean = false;

  WCBTN() {
    this.warrantyClam = true;
  }
  save() {
    let claim = {
      remark: this.remark.value,
      date: Date.now(),
    };

    let clm = {
      _id: this.warrantyData._id,
      claims: [...this.warrantyData.claims, claim],
    };
    this._warrantyService.clamWarranty(clm).subscribe((resp: any) => {
      this.snackBar
        .open('Warranty Claimed Successfully ! ', 'Close')
        ._dismissAfter(3500);
      this.dialogRef.close();

      // this.remark = resp;
    });
  }

  checkWarrantyExpired() {
    return isPast(new Date(this.warrantyData?.endDate));
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { IWarranty } from 'src/app/core/warranty/warranty.types';
@Component({
  selector: 'app-warranty-card',
  templateUrl: './warranty-card.component.html',
  styleUrls: ['./warranty-card.component.scss'],
})
export class WarrantyCardComponent implements OnInit {
  constructor(
    private _getwrnt: WarrantyService,
    public dialogRef: MatDialogRef<WarrantyCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  warrantyData: IWarranty;
  ngOnInit(): void {
    this._getwrnt.getWarrantybyId(this.data).subscribe((res: any) => {
      this.warrantyData = res.data;
    });
  }
}

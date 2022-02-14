import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
@Component({
  selector: 'app-warranty-card',
  templateUrl: './warranty-card.component.html',
  styleUrls: ['./warranty-card.component.scss'],
})
export class WarrantyCardComponent implements OnInit {
  constructor(public dialog: MatDialog, private _getwrnt: WarrantyService) {}
  data: any;
  openDialog() {
    this.dialog.open(WarrantyCardComponent);
  }

  ngOnInit(): void {
    this._getwrnt.getWarrantybyId().subscribe((res: any) => {
      this.data = res.data;
    });
  }
}

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DealerService } from 'src/app/core/dealer/dealer.service';
import { IDealer } from 'src/app/core/dealer/dealer.types';
import { IWarranty } from 'src/app/core/warranty/warranty.types';

@Component({
  selector: 'app-dealer-card',
  templateUrl: './dealer-card.component.html',
  styleUrls: ['./dealer-card.component.scss'],
})
export class DealerCardComponent implements OnInit {
  constructor(
    private _dealerService: DealerService,
    public dialogRef: MatDialogRef<DealerCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  dealerData: IWarranty;

  ngOnInit(): void {
    this._dealerService.getDealerbyId(this.data).subscribe((resp: any) => {
      this.dealerData = resp.data;
    });
  }
}

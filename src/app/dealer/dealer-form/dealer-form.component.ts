import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DealerService } from 'src/app/core/dealer/dealer.service';

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.scss'],
})
export class DealerFormComponent implements OnInit {
  dealergroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address1: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
  });

  constructor(
    private _dealer: DealerService,
    private _ref: MatDialogRef<DealerFormComponent>
  ) {}

  ngOnInit(): void {}

  save() {
    this._dealer.createDealer(this.dealergroup.value).subscribe((response) => {
      console.log(response);
      this._ref.close();
    });
  }
}
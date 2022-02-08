import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  constructor(private _dealer: DealerService) {}

  dealergroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address1: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
  });

  ngOnInit(): void {}
  save() {
    this._dealer.createDealer(this.dealergroup.value);
  }
}

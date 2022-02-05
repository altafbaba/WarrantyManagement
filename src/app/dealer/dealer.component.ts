import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  constructor() {}

  dealergroup: FormGroup = new FormGroup({
    dealername: new FormControl('', Validators.required),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
  });

  ngOnInit(): void {}
  save() {
    console.log(this.dealergroup.value);
  }
}

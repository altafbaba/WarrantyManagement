import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';
import { WarrantyService } from '../core/warranty/warranty.service';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  data: any[] = [];
  constructor(
    private _dealerService: DealerService,
    private _warrantyService: WarrantyService
  ) {}

  warrantygroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    address1: new FormControl(''),
    email: new FormControl(''),
  });

  isError: boolean = false;
  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
  }
  save() {
    this._warrantyService.createWarranty(this.warrantygroup.value);
    // this.warrantygroup.markAllAsTouched();
    // if (this.warrantygroup.invalid) {
    //   this.isError = true;
    //   return;
    // }
    // console.log(this.warrantygroup.value);
  }
}

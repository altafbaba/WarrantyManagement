import { Component, OnInit } from '@angular/core';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-warrantyform',
  templateUrl: './warrantyform.component.html',
  styleUrls: ['./warrantyform.component.scss'],
})
export class WarrantyformComponent implements OnInit {
  constructor(private _warrantyService: WarrantyService) {}

  ngOnInit(): void {}

  save() {
    this._warrantyService.createWarranty(this.warrantygroup.value);
  }

  warrantygroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    address1: new FormControl(''),
    email: new FormControl(''),
  });
}
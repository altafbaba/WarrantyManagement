import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  constructor() {}

  warrantygroup: FormGroup = new FormGroup({
    productname: new FormControl('', [Validators.required]),
    modealno: new FormControl('', [Validators.required]),
    warrantystartdate: new FormControl(''),
    warrantyenddate: new FormControl(''),
  });
  isError: boolean = false;
  ngOnInit(): void {}
  save() {
    this.warrantygroup.markAllAsTouched();
    if (this.warrantygroup.invalid) {
      this.isError = true;
      return;
    }
    console.log(this.warrantygroup.value);
  }
}

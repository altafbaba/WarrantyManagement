import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  data: any[] = [];
  constructor(private _dealerService: DealerService) {}

  warrantygroup: FormGroup = new FormGroup({
    productname: new FormControl('', [Validators.required]),
    modealno: new FormControl('', [Validators.required]),
    warrantystartdate: new FormControl(''),
    warrantyenddate: new FormControl(''),
  });
  isError: boolean = false;
  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
  }
  save() {
    this.warrantygroup.markAllAsTouched();
    if (this.warrantygroup.invalid) {
      this.isError = true;
      return;
    }
    console.log(this.warrantygroup.value);
  }
}

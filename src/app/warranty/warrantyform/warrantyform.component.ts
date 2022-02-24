import { Component, OnInit } from '@angular/core';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-warrantyform',
  templateUrl: './warrantyform.component.html',
  styleUrls: ['./warrantyform.component.scss'],
})
export class WarrantyformComponent implements OnInit {
  constructor(
    private _warrantyService: WarrantyService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}
  warrantygroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    product: new FormControl('', [Validators.required]),
    modelNo: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  save() {
    this._warrantyService.createWarranty(this.warrantygroup.value).subscribe({
      error: (err) => {
        this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
      },
      next: (res) => {
        this._snackBar.open('Warranty Created', 'Close')._dismissAfter(3500);
        this._router.navigateByUrl('/Warranty');
      },
    });
  }
}

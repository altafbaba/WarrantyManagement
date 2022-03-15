import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DealerService } from 'src/app/core/dealer/dealer.service';

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.scss'],
})
export class DealerFormComponent implements OnInit {
  dealergroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    contactNo: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
    ]),
    gstNo: new FormControl('', [Validators.required]),
  });

  constructor(
    private _dealer: DealerService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  save() {
    this.dealergroup.markAllAsTouched();
    //validatior
    if (this.dealergroup.invalid) return;
    this._dealer.createDealer(this.dealergroup.value).subscribe({
      error: (err) => {
        this._snackBar.open(err.message, 'Close')._dismissAfter(3500);
      },
      next: (res) => {
        this._snackBar.open('Dealer Created', 'Close')._dismissAfter(3500);
        this._router.navigateByUrl('/Dealer');
      },
    });
  }
}

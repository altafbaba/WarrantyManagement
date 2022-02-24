import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  data: any[] = [];
  isError: boolean = false;

  constructor(private _dealerService: DealerService) {}

  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
  }
}

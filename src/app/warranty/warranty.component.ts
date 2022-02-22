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
  //auto filed input
  options: any[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private _dealerService: DealerService) {}

  isError: boolean = false;
  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
  }
  // applyFilter(event: Event) {
  //     const filterValue = (event.target as HTMLInputElement).value;
  //     this.data.filter = filterValue.trim().toLowerCase();
  //   }
}

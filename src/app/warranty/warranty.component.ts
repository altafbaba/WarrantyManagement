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

  searchCtrl: FormControl = new FormControl();

  isError: boolean = false;
  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
    //Autocomplete for input
    this.filteredOptions = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      })
    );
  }
  //Autocomplete for input
  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(value: any) {
    if (value) return value.name;
  }
}

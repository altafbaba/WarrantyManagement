import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CustomerFieldsComponent } from '../shared/customer-fields/customer-fields.component';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from '../core/customer/customer.types';
import { CustomerService } from '../core/customer/customer.service';
@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  @ViewChild(CustomerFieldsComponent) _custm: CustomerFieldsComponent;
  data: any[] = [];
  isError: boolean = false;

  constructor(private _dealerService: DealerService) {}
  dataSource = new MatTableDataSource<ICustomer>([]);
  ngOnInit(): void {
    this._dealerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from '../core/dealer/dealer.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CustomerFieldsComponent } from '../shared/customer-fields/customer-fields.component';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from '../core/customer/customer.types';
import { CustomerService } from '../core/customer/customer.service';
import { IWarranty } from '../core/warranty/warranty.types';
import { WarrantyService } from '../core/warranty/warranty.service';
@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss'],
})
export class WarrantyComponent implements OnInit {
  @ViewChild(CustomerFieldsComponent) _custm: CustomerFieldsComponent;
  data: any[] = [];
  isError: boolean = false;

  constructor(private _warrantyService: WarrantyService) {}
  dataSource = new MatTableDataSource<IWarranty>([]);
  ngOnInit(): void {
    this._warrantyService.getWarranty().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

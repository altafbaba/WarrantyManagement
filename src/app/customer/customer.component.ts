import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../core/customer/customer.service';
import { DealerService } from '../core/dealer/dealer.service';
import { CustomerFieldsComponent } from '../shared/customer-fields/customer-fields.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Router, RouterLinkWithHref } from '@angular/router';
import { WarrantyService } from '../core/warranty/warranty.service';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardComponent } from '../warranty/warranty-card/warranty-card.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { ICustomer } from '../core/customer/customer.types';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @Input() data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(CustomerFieldsComponent) _cusComp!: CustomerFieldsComponent;

  isError: boolean = false;

  //auto complate input fild
  options: any[] = [];
  filteredOptions: Observable<any[]> | undefined;

  displayedColumns: any[] = [
    'position',
    'vName',
    'name',
    'contactNo',
    'state',
    'city',
  ];
  dataSource = new MatTableDataSource<ICustomer>([]);

  constructor(
    private _dialog: MatDialog,
    private _customerService: CustomerService,
    private _getdearlerService: DealerService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _warrantyService: WarrantyService
  ) {}

  // If accessing Child COmponent using VIew Child -----> reference should be in AfterViewInit
  ngAfterViewInit(): void {
    this._getdearlerService.getDealers().subscribe((response: any) => {
      this.data = response.data;
    });
    //auto complate dealer input fild

    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //get dealer form API for DealerNamr
    this._getdearlerService.getDealers().subscribe((_res: any) => {
      this.options = _res.data;
    });
    // get customer for Api for table
    this._customerService.getCustomers().subscribe((res: any) => {
      this.dataSource.data = res.data;
    });
  }

  //search box input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //table open dilogbox
  openDetails(row: any) {
    this._dialog.open(CustomerCardComponent, { data: row._id });
  }
}

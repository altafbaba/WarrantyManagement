import { Component, Input, OnInit } from '@angular/core';
import { DealerService } from 'src/app/core/dealer/dealer.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardComponent } from '../warranty-card/warranty-card.component';
import { IWarranty } from 'src/app/core/warranty/warranty.types';
import { compareAsc, isEqual, isToday } from 'date-fns';
import { CustomerFieldsComponent } from 'src/app/shared/customer-fields/customer-fields.component';
@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.scss'],
})
export class WarrantyListComponent implements OnInit {
  @Input() data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(CustomerFieldsComponent) _custm: CustomerFieldsComponent;
  displayedColumns: any[] = [
    'position',
    'name',
    'contactNo',
    'product',
    'modelNo',
    'srNo',
    'status',
  ];
  dataSource = new MatTableDataSource<IWarranty>([]);

  constructor(
    private _dealerService: DealerService,
    private _warrantyService: WarrantyService,
    private _dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this._warrantyService.getWarranty().subscribe((res: any) => {
      this.dataSource.data = res.data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDetails(row: any) {
    this._dialog.open(WarrantyCardComponent, { data: row._id });
  }
  isWarrantyExp(date: string) {
    if (isToday(new Date(date))) return 0;
    return compareAsc(new Date(date), new Date(Date.now()));
  }
}

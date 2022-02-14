import { Component, Input, OnInit } from '@angular/core';
import { DealerService } from 'src/app/core/dealer/dealer.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WarrantyService } from 'src/app/core/warranty/warranty.service';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardComponent } from '../warranty-card/warranty-card.component';
@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.scss'],
})
export class WarrantyListComponent implements OnInit {
  @Input() data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: any[] = [
    'position',
    'name',
    'contactNo',
    'product',
    'model',
    'wsdate',
    'wedate',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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

  openDetails(raw: any) {
    this._dialog.open(WarrantyCardComponent, { data: raw._id });
  }
}

export interface PeriodicElement {
  position: number;
  name: string;
  contactNo: number;
  product: string;
  model: string;
  wsdate: string;
  wedate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

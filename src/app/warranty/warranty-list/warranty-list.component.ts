import { Component, Input, OnInit } from '@angular/core';
import { DealerService } from 'src/app/core/dealer/dealer.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.scss'],
})
export class WarrantyListComponent implements OnInit {
  @Input() data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'position',
    'name',
    'mobile',
    'product',
    'model',
    'wsdate',
    'wedate',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _dealerService: DealerService) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  name: string;
  mobile: number;
  product: string;
  model: string;
  wsdate: string;
  wedate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

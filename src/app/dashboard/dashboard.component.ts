import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DashboardService } from '../auth/dashboard/dashboard.service';
import { IDashboard } from '../auth/dashboard/dashboard.types';
import { IDTO } from '../core/DTO/DTO.types';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'vName',
    'name',
    'contactNo',
    'state',
    'city',
    'status',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: IDashboard;
  constructor(private _dashboardService: DashboardService) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._dashboardService.getDashboard().subscribe((val: any) => {
      this.data = val;
    });
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

  vName: string;

  contactNo: number;
  state: string;
  city: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

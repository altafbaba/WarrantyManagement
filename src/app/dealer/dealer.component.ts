import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DealerService } from '../core/dealer/dealer.service';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  displayedColumns: any[] = ['name', 'city', 'address1', 'contactNo'];
  dataSource = new MatTableDataSource<Dealer>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _getDealer: DealerService) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //get data from API in Table
    this._getDealer.getDealers().subscribe((resp: any) => {
      this.dataSource.data = resp.data;
    });

    //angular material
    this.dataSource.paginator = this.paginator;
  }
}

export interface Dealer {
  name: string;
}

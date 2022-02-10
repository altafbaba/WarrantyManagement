import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DashboardService } from '../auth/dashboard/dashboard.service';
import { IDashboard } from '../auth/dashboard/dashboard.types';
import { IDTO } from '../core/DTO/DTO.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: IDashboard;
  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this._dashboardService.getDashboard().subscribe((val: IDTO) => {
      this.data = val.data;
    });
  }
}

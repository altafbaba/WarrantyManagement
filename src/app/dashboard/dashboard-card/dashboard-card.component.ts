import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input() title: string = 'N/A';
  @Input() count: number = 0;
  @Input() Icard: any;
  @Input() icon: any;
  @Input() color: any;
  constructor() {}

  ngOnInit(): void {}
}

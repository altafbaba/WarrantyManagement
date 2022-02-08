import { Component, Input, OnInit } from '@angular/core';
import { DealerService } from 'src/app/core/dealer/dealer.service';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.scss'],
})
export class WarrantyListComponent implements OnInit {
  @Input() data: any[] = [];

  constructor(private _dealerService: DealerService) {}

  ngOnInit(): void {}
}

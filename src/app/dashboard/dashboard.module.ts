import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, DashboardCardComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class DashboardModule {}

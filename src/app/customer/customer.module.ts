import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
];
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
    MatButtonModule,
  ],
})
export class CustomerModule {}

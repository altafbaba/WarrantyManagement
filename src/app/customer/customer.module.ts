import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MaterialCustomModule } from '../shared/material.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent,
  },
];
@NgModule({
  declarations: [CustomerComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
    MatButtonModule,
    MaterialCustomModule,
  ],
})
export class CustomerModule {}

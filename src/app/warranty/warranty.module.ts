import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarrantyComponent } from './warranty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialCustomModule } from '../shared/material.module';
const warrantyRoutes: Routes = [
  {
    path: '',
    component: WarrantyComponent,
  },
];

@NgModule({
  declarations: [WarrantyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(warrantyRoutes),
    SharedModule,
    MaterialCustomModule,
  ],
})
export class WarrantyModule {}

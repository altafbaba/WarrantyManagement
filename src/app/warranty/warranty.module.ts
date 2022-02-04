import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarrantyComponent } from './warranty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const worrantycomponent: Routes = [
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
    RouterModule.forChild(worrantycomponent),
    SharedModule,
  ],
})
export class WarrantyModule {}

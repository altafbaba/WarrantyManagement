import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarrantyComponent } from './warranty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialCustomModule } from '../shared/material.module';
import { WarrantyListComponent } from './warranty-list/warranty-list.component';
import { WarrantyformComponent } from './warrantyform/warrantyform.component';
import { WarrantyCardComponent } from './warranty-card/warranty-card.component';
const warrantyRoutes: Routes = [
  {
    path: '',
    component: WarrantyComponent,
  },

  {
    path: 'warrantyform',
    component: WarrantyformComponent,
  },

  {
    path: 'warranty-card',
    component: WarrantyCardComponent,
  },
];

@NgModule({
  declarations: [
    WarrantyComponent,
    WarrantyListComponent,
    WarrantyformComponent,
    WarrantyCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(warrantyRoutes),
    SharedModule,
    MaterialCustomModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class WarrantyModule {}

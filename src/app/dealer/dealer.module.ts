import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCustomModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const dealerRoutess: Routes = [
  {
    path: '',
    component: DealerComponent,
  },
];

@NgModule({
  declarations: [DealerComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(dealerRoutess),
  ],
})
export class DealerModule {}

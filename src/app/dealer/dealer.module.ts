import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCustomModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealerFormComponent } from './dealer-form/dealer-form.component';

const dealerRoutess: Routes = [
  {
    path: '',
    component: DealerComponent,
  },
  {
    path: 'dealer-form',
    component: DealerFormComponent,
  },
];

@NgModule({
  declarations: [DealerComponent, DealerFormComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(dealerRoutess),
  ],
})
export class DealerModule {}

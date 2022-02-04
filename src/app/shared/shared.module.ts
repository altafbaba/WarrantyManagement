import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFieldsComponent } from './customer-fields/customer-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarrantyComponent } from '../warranty/warranty.component';
import { MaterialCustomModule } from './material.module';

@NgModule({
  declarations: [CustomerFieldsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialCustomModule,
  ],
  exports: [CustomerFieldsComponent],
})
export class SharedModule {}

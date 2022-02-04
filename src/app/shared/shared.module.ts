import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFieldsComponent } from './customer-fields/customer-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarrantyComponent } from '../warranty/warranty.component';

@NgModule({
  declarations: [CustomerFieldsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CustomerFieldsComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCustomModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const signinRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
];

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(signinRoutes),
    MaterialCustomModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SigninModule {}

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignoutComponent } from './signout.component';
import { RouterModule, Routes } from '@angular/router';

const signoutRoutes: Routes = [
  {
    path: '',
    component: SignoutComponent,
  },
];

@NgModule({
  declarations: [SignoutComponent],
  imports: [CommonModule, RouterModule.forChild(signoutRoutes)],
})
export class SignoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialCustomModule } from 'src/app/shared/material.module';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    RouterModule.forChild(userRoutes),
  ],
})
export class UserModule {}

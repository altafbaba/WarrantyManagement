import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signout',
    pathMatch: 'full',
  },
  {
    path: 'signout',
    loadChildren: () =>
      import('./signout/signout.module').then((x) => x.SignoutModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((x) => x.SigninModule),
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
})
export class AuthModule {}

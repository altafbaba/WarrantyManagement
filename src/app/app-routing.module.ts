import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { WarrantyModule } from './warranty/warranty.module';
import { WarrantyformComponent } from './warranty/warrantyform/warrantyform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/signin',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./featare/auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'Customer',
        loadChildren: () =>
          import('./customer/customer.module').then((x) => x.CustomerModule),
      },
      {
        path: 'Warranty',
        loadChildren: () =>
          import('./warranty/warranty.module').then((x) => x.WarrantyModule),
      },
      {
        path: 'Dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
      },
      {
        path: 'Dealer',
        loadChildren: () =>
          import('./dealer/dealer.module').then((x) => x.DealerModule),
      },

      {
        path: 'user',
        loadChildren: () =>
          import('./featare/user/user.module').then((x) => x.UserModule),
      },
      {
        path: 'warrantyform',
        loadChildren: () =>
          import('./warranty/warrantyform/warrantyform.component').then(
            (x) => x.WarrantyformComponent
          ),
      },

      {
        path: 'customer-form',
        loadChildren: () =>
          import('./customer/customer-form/customer-form.component').then(
            (x) => x.CustomerFormComponent
          ),
      },
      {
        path: 'warranty-card',
        loadChildren: () =>
          import('./warranty/warranty-card/warranty-card.component').then(
            (x) => x.WarrantyCardComponent
          ),
      },

      // {
      //   path: 'dealer-form',
      //   loadChildren: () =>
      //     import('./dealer/dealer-form/dealer-form.component').then(
      //       (x) => x.DealerFormComponent
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

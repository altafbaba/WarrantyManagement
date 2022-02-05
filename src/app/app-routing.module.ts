import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WarrantyComponent } from './warranty/warranty.component';
import { WarrantyModule } from './warranty/warranty.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard',
    pathMatch: 'full',
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

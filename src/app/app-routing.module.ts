import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WarrantyComponent } from './warranty/warranty.component';
import { WarrantyModule } from './warranty/warranty.module';

const routes: Routes = [
  {
    path: 'Customer',
    loadChildren: () =>
      import('./customer/customer.module').then((x) => x.CustomerModule),
  },
  { path: 'Warranty', component: WarrantyComponent },
  {
    path: 'Dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

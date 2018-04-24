import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {AccountComponent} from './account/account.component';


export const AppRoutes: Routes = [


  {
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
      path:'vehicle/add',
      component: VehicleComponent
    },{
      path:'account',
      component: AccountComponent
    }/*{
      path: 'vehicle',
      loadChildren: './vehicle/vehicle.module#VehiculeModule'
    }*/

  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

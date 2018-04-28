import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {AccountComponent} from './account/account.component';
import {LstvehicleComponent} from './lstvehicle/lstvehicle.component';
import {AuthGuard} from './guards/gard';


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
      loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate :[AuthGuard]
    },{
      path:'vehicle/add',
      component: VehicleComponent,canActivate :[AuthGuard]
    },{
      path:'account',
      component: AccountComponent,canActivate :[AuthGuard]
    },{
      path:'vehicle/list',
      component: LstvehicleComponent,canActivate :[AuthGuard]
    }
    /*{
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

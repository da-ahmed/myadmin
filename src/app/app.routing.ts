import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {AccountComponent} from './account/account.component';
import {LstvehicleComponent} from './lstvehicle/lstvehicle.component';
import {AuthGuard} from './guards/gard';
import {ForgotComponent} from './forgot/forgot.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import {LoginComponent} from './login/login.component';
import {DestinationComponent} from './destination/destination.component';
import {LsdestinationComponent} from './lsdestination/lsdestination.component';
import {SearchsComponent} from './searchs/searchs.component';


export const AppRoutes: Routes = [


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{path:'',
  component: AdminLayoutComponent,
  children: [
     {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'//, canActivate :[AuthGuard]
    },{
      path:'vehicle/add',
      component: VehicleComponent//,canActivate :[AuthGuard]
    },{
      path:'account',
      component: AccountComponent//,canActivate :[AuthGuard]
    },{
      path:'vehicle/list',
      component: LstvehicleComponent//,canActivate :[AuthGuard]
    },{
      path:'destination/add',
      component: DestinationComponent//,canActivate :[AuthGuard]
    },{
      path:'destination/list',
      component:LsdestinationComponent//,canActivate :[AuthGuard]
    },{
      path:'search',
      component:SearchsComponent//,canActivate :[AuthGuard]
    }


  ]
},

  {   path:'login',
      component:LoginComponent
  },
  {   path:'lock',
    component:LockScreenComponent
  },
  {   path:'forgot',
    component:ForgotComponent
  },
  {
  path: '**',
  redirectTo: 'error/404'
}
];

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
import {SearchsComponent} from './searchs/searchs.component';
import {UpadatevehicleComponent} from './upadatevehicle/upadatevehicle.component';
import {LstcompteComponent} from './lstcompte/lstcompte.component';
import {LstinvcompteComponent} from './lstinvcompte/lstinvcompte.component';
import {UpdatecompteComponent} from './updatecompte/updatecompte.component';
import {TrannsactionsComponent} from './trannsactions/trannsactions.component';
import {LstdestinationComponent} from './lstdestination/lstdestination.component';
import {UpdatedestinationComponent} from './updatedestination/updatedestination.component';


export const AppRoutes: Routes = [


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{path:'',
  component: AdminLayoutComponent,
  children: [
     {
       path:'',
       component: LstvehicleComponent//,canActivate :[AuthGuard]
    },{
      path:'vehicle/add',
      component: VehicleComponent//,canActivate :[AuthGuard]
    },{
      path:'account/list',
      component: LstcompteComponent//,canActivate :[AuthGuard]a
    },{
      path:'account/add',
      component: AccountComponent//,canActivate :[AuthGuard]
    },{
      path:'account/invalid',
      component: LstinvcompteComponent//,canActivate :[AuthGuard]
    },{
      path:'account/update',
      component: UpdatecompteComponent//,canActivate :[AuthGuard]
    },{
      path:'vehicle/list',
      component: LstvehicleComponent//,canActivate :[AuthGuard]
    },{
      path:'destination/add',
      component: DestinationComponent//,canActivate :[AuthGuard]
    },{
      path:'destination/list',
      component: LstdestinationComponent//,canActivate :[AuthGuard]
    },{
      path:'destination/update',
      component:UpdatedestinationComponent//,canActivate :[AuthGuard]
    },{
      path:'search',
      component:SearchsComponent//,canActivate :[AuthGuard]
    },{
      path:'vehicle/update',
      component:UpadatevehicleComponent// ,canActivate :[AuthGuard]
    },{
      path:'transaction',
      component:TrannsactionsComponent //,canActivate :[AuthGuard]
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

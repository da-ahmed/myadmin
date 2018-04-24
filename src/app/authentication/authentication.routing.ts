import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import {buildPath} from 'selenium-webdriver/http';


export const AuthenticationRoutes: Routes = [

  {


    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forgot',
        component: ForgotComponent,
        data: {
          breadcrumb: 'Forgot'
        }
      },
      {
      path: 'lock-screen',
      component: LockScreenComponent,
        data: {
          breadcrumb: 'Lock Screen'
        }
    }]
  }
];

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {JsonpModule} from '@angular/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { LstvehicleComponent } from './lstvehicle/lstvehicle.component';
import { LoginComponent } from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import {AuthGuard} from './guards/gard';
import {AccountService} from './service/account.service';
import {AuthService} from './service/auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { SearchsComponent } from './searchs/searchs.component';
import { LsdestinationComponent } from './lsdestination/lsdestination.component';
import { DestinationComponent } from './destination/destination.component';
;


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    VehicleComponent,
    AccountComponent,
    LstvehicleComponent,
    LoginComponent,
    LockScreenComponent,
    ForgotComponent,
    SearchsComponent,
    LsdestinationComponent,
    DestinationComponent,





  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ScrollModule,
    FlashMessagesModule,


  ],
  exports: [ScrollModule],
  providers: [AuthGuard,AccountService,AuthService,
      { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

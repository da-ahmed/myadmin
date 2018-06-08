import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {AuthService} from './service/auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { SearchsComponent } from './searchs/searchs.component';

import { DestinationComponent } from './destination/destination.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { UpadatevehicleComponent } from './upadatevehicle/upadatevehicle.component';
import {DataService} from './service/data.service';
import {RequestsService} from './service/requests.service';
import {TokenService} from './service/token.service';
import { LstcompteComponent } from './lstcompte/lstcompte.component';
import { LstinvcompteComponent } from './lstinvcompte/lstinvcompte.component';
import { UpdatecompteComponent } from './updatecompte/updatecompte.component';
import { LstdestinationComponent } from './lstdestination/lstdestination.component';
import { UpdatedestinationComponent } from './updatedestination/updatedestination.component';
import { TrannsactionsComponent } from './trannsactions/trannsactions.component';




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
    DestinationComponent,
    UpadatevehicleComponent,
    LstcompteComponent,
    LstinvcompteComponent,
    UpdatecompteComponent,
    LstdestinationComponent,
    UpdatedestinationComponent,
    TrannsactionsComponent






  ],
  imports: [
    ReactiveFormsModule,
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
  providers: [AuthGuard,AuthService,DataService,RequestsService,TokenService,
      { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

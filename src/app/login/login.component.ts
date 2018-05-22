import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-with-social',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
user: User=new User();
  errorMessage:String;
  constructor(private authService : AuthService,private router:Router,private _flashMessagesService: FlashMessagesService) {

  }

  ngOnInit() {


  }
  login(){

    this.authService.logIn(this.user)
      .subscribe(data=>{
          this.router.navigate(['/dashboard']);
        },err=>{
          this.errorMessage="error :  Username or password is incorrect";
        this._flashMessagesService.show("error :  Username or password is incorrect", { cssClass: 'alert-success', timeout: 6000 });
        }
      )
  }



}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-with-social',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
user: User=new User();
  errorMessage:String;
  constructor(private authService : AuthService,private router:Router) {

  }

  ngOnInit() {
  }

  login(){

    this.authService.logIn(this.user)
      .subscribe(data=>{
          this.router.navigate(['/dashboard']);
        },err=>{
          this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }



}

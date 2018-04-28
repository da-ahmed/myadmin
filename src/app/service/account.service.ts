import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxj/add/operator/map'

@Injectable()
export class AccountService {

  constructor(public http:Http) { }




  getUser(){
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .map
  }













}



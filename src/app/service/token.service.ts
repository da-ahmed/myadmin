import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class TokenService {

  str=localStorage.getItem('token');

  constructor() {



  }

  getOption ()
  {
    let headers = new Headers();
    headers.append("Authorization","Basic "+this.str)
    let options = new RequestOptions();
    options.headers=headers;
    return options;
  }
}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {TokenService} from './token.service';

@Injectable()
export class RequestsService {

  constructor(private http:Http, private tokenservice:TokenService) { }



 get(url){
   return this.http.get(url,this.tokenservice.getOption())
 }


  post(url,body) {
    return this.http.post(url,body,this.tokenservice.getOption())
  }

  delete(url){
    this.http.delete(url,this.tokenservice.getOption())
  }

}


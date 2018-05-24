import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Headers, Http, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

import {RequestsService} from '../service/requests.service';
import {TokenService} from '../service/token.service';

import {Vehicle} from '../models/Vehicle';

@Component({
  selector: 'app-lstvehicle',
  templateUrl: './lstvehicle.component.html',
  styleUrls: ['./lstvehicle.component.css'],
  providers:[RequestsService,TokenService]
})
export class LstvehicleComponent implements OnInit {

  vehicles;
  vehicle: Vehicle=new Vehicle();
  closeResult: string;
  constructor(private tolen:TokenService, private request:RequestsService,private http:Http){}




  ngOnInit() {
    this.request.get('http://localhost:8091/vehicle/liste').subscribe(data => {
    console.log(data);this.vehicles=data.json();
    });
  }


  deletevehicle(id) {
    this.vehicle.id_vehicle=id
    this.request.post('http://localhost:8091/vehicle/delete',this.vehicle).subscribe()
   this.ngOnInit();
    this.ngOnInit();

  }







}

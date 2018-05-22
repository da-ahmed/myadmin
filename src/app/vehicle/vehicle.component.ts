import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Http, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import { Headers } from '@angular/http';

import {User} from '../models/user';
import {Vehicle} from '../models/Vehicle';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenKey} from '@angular/core/src/view';
import {TokenService} from '../service/token.service';
import {RequestsService} from '../service/requests.service';
import {vehiculeCategorie} from '../models/vehiculeCategorie';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers:[RequestsService,TokenService]

})
export class VehicleComponent implements OnInit {

  vehiclescategorie:any [];


  vehicle: Vehicle=new Vehicle();
  vehiculeCat :vehiculeCategorie=new vehiculeCategorie()


  constructor(private reqservice:RequestsService) {

    this.reqservice.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data.json();
    });


  }

  ngOnInit() {


  }


  addvehicle(t)
  {


    console.log(t);

    this.vehiculeCat.id_categorie=t
    this.vehicle.vehiculeCategorie=this.vehiculeCat;
     console.log(this.vehicle)
    this.reqservice.post('http://localhost:8091/vehicle/add',this.vehicle).subscribe(data =>{
      console.log(data)
    })
  }



}

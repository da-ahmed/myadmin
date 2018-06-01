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
import {FlashMessagesService} from 'angular2-flash-messages';



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
id:number;
  errorMessage:String;

  constructor(private reqservice:RequestsService,private _flashMessagesService: FlashMessagesService) {

    this.reqservice.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data.json();
    });


  }

  ngOnInit() {


  }


  addvehicle(id)
  {
    this.vehiculeCat.id_categorie=id
    this.vehicle.vehiculeCategorie=this.vehiculeCat;
     console.log(this.vehicle)
    this.reqservice.post('http://localhost:8091/vehicle/add',this.vehicle).subscribe(data =>{
      console.log(data)
    });
    console.log(this.vehicle);
  }


  ajou(t)
  {
    this.vehiculeCat.id_categorie=t
    this.vehicle.vehiculeCategorie=this.vehiculeCat;
    console.log(this.vehicle)
    this.reqservice.post('http://localhost:8091/vehicle/add',this.vehicle).subscribe(data =>{
      console.log(data)
    },err=>{
      this.errorMessage="error :  erreur: matricule existe déjà";
      this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-danger', timeout: 3000 });
    })
    console.log(this.vehicle);
  }



}

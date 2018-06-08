import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Vehicle} from '../models/Vehicle';
import {RequestsService} from '../service/requests.service';
import {vehiculeCategorie} from '../models/vehiculeCategorie';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-upadatevehicle',
  templateUrl: './upadatevehicle.component.html',
  styleUrls: ['./upadatevehicle.component.css']
})
export class UpadatevehicleComponent implements OnInit {
  vehicleup : any;
  rForm : FormGroup;
vehicle:Vehicle=new Vehicle();
  vehiclescategorie :any [];
  vehiculeCat :vehiculeCategorie=new vehiculeCategorie()
  errorMessage

  constructor(private data:DataService,private reqservice :RequestsService,private router :Router,private _flashMessagesService: FlashMessagesService, private fb: FormBuilder) {
    this.reqservice.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data.json();
    });

    this.rForm = fb.group({
      'immatricule': [null, Validators.compose([Validators.required])],
      'model': [null, Validators.compose([Validators.required])],
      'contact': [null, Validators.compose([Validators.required,])],

    })
  }

  ngOnInit() {
this.data.currentMessage.subscribe(message=>{this.vehicleup=message;console.log(this.vehicleup)});
this.vehicle=this.vehicleup;
console.log(this.vehicle);

  }


  update(id)
  {
    this.vehiculeCat.id_categorie=id
    this.vehicle.vehiculeCategorie=this.vehiculeCat;
    console.log(this.vehicle)
    this.reqservice.post('http://localhost:8091/vehicle/add',this.vehicle).subscribe()
    this.errorMessage="véhicule modifié avec succès";
    this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 1000 });
    this.data.changeMessage(null)

  }






}

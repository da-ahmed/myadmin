import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Vehicle} from '../models/Vehicle';
import {RequestsService} from '../service/requests.service';
import {vehiculeCategorie} from '../models/vehiculeCategorie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upadatevehicle',
  templateUrl: './upadatevehicle.component.html',
  styleUrls: ['./upadatevehicle.component.css']
})
export class UpadatevehicleComponent implements OnInit {
  vehicleup : any;
vehicle:Vehicle=new Vehicle();
  vehiclescategorie :any [];
  vehiculeCat :vehiculeCategorie=new vehiculeCategorie()

  constructor(private data:DataService,private reqservice :RequestsService,private router :Router) {
    this.reqservice.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data.json();
    });
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
    this.router.navigate(['/vehicle/list'])

  }

}

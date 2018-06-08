import {Component, OnInit,OnDestroy, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {AppComponent} from '../app.component';
import {Headers, Http, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import {RequestsService} from '../service/requests.service';
import {TokenService} from '../service/token.service';
import {Vehicle} from '../models/Vehicle';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-lstvehicle',
  templateUrl: './lstvehicle.component.html',
  styleUrls: ['./lstvehicle.component.css'],

})
export class LstvehicleComponent implements OnInit ,OnDestroy  {
  private sub: ISubscription;
  vehiclescategorie;
  vehicles;
  vehicle: Vehicle=new Vehicle();
  closeResult: string;
  constructor( private request:RequestsService,private data:DataService,private router:Router,private cdRef: ChangeDetectorRef){
    this.request.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data.json();
    });
  }




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




  updatevehicle(vehicle){
 this.vehicle=vehicle;
    this.data.changeMessage(this.vehicle)

    this.router.navigate(['/vehicle/update'])
  }

  ngOnDestroy() {
    this.cdRef.detach(); // try this
    // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    // this.authObserver.unsubscribe();
    this.cdRef.markForCheck();

  }

}


import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehiclescategorie;

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8091/categorie/liste').subscribe(data => {
      console.log(data);this.vehiclescategorie=data;
    });

  }

  ngOnInit() {


  }

}

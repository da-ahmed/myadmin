import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {HttpClient} from '@angular/common/http';
import {RequestsService} from '../service/requests.service';
import {TokenService} from '../service/token.service';

@Component({
  selector: 'app-lstvehicle',
  templateUrl: './lstvehicle.component.html',
  styleUrls: ['./lstvehicle.component.css'],
  providers:[RequestsService,TokenService]
})
export class LstvehicleComponent implements OnInit {

vehicles;
  constructor( private request:RequestsService){


  }


deletevehicle(id)
{

}

  ngOnInit() {
    this.request.get('http://localhost:8091/categorie/liste').subscribe(data => {
    console.log(data);this.vehicles=data.json();
  });
  }





}

import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lstvehicle',
  templateUrl: './lstvehicle.component.html',
  styleUrls: ['./lstvehicle.component.css']
})
export class LstvehicleComponent implements OnInit {

vehicles;
  constructor( private http:HttpClient){


  }


deletevehicle(id)
{
  this.http.delete('http://localhost:8091/vehicle/delete/'+id).subscribe(data => {
    console.log(data);
  });
}

  ngOnInit() { this.http.get('http://localhost:8091/categorie/liste').subscribe(data => {
    console.log(data);this.vehicles=data;
  });
  }





}

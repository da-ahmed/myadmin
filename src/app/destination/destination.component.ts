import { Component, OnInit } from '@angular/core';
import {Direction} from '../models/Direction';
import {FlashMessagesService} from 'angular2-flash-messages';
import {RequestsService} from '../service/requests.service';
import {Town} from '../models/Town';
import {Airport} from '../models/Airport';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  rForm : FormGroup;
  direction: Direction=new Direction();
  errorMessage;
  airposts;
  towns;
  town:Town=new Town();
  airport: Airport=new Airport();



  constructor(private request:RequestsService,private _flashMessagesService: FlashMessagesService,private router :Router) { }

  ngOnInit() {
    this.request.get('http://localhost:8091/search/listeairport').subscribe(data => {
      console.log(data);this.airposts=data.json();
    });


    this.request.get('http://localhost:8091/search/listetown').subscribe(data => {
      console.log(data);this.towns=data.json();
    });



  }



  addclient(air,tow)
  {
    this.airport.code=air;
    this.town.id=tow;
    this.direction.airport=this.airport;
    this.direction.town=this.town;
    console.log(this.direction)
    this.request.post('http://localhost:8091/direction/add',this.direction).subscribe(data=>{
      this.errorMessage="destination ajouté avec succès";
      this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 3000 });});
    this.request.get('http://localhost:8091/direction/liste').subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/destination/list'])
  }




















}

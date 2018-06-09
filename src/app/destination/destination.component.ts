import { Component, OnInit } from '@angular/core';
import {Direction} from '../models/Direction';
import {FlashMessagesService} from 'angular2-flash-messages';
import {RequestsService} from '../service/requests.service';
import {Town} from '../models/Town';
import {Airport} from '../models/Airport';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  bForm : FormGroup;
  direction: Direction=new Direction();
  errorMessage;
  airposts;
  towns;
  town:Town=new Town();
  airport: Airport=new Airport();



  constructor(private request:RequestsService,private _flashMessagesService: FlashMessagesService,private router :Router, private fb: FormBuilder) {
    this.bForm = fb.group({
      'distance': [null, Validators.compose([Validators.required])],
      'adultes': [null, Validators.compose([Validators.required])],
      'enfant': [null, Validators.compose([Validators.required,Validators.maxLength(3)])],
      'prix': [null, Validators.compose([Validators.required,Validators.maxLength(3)])],


    })
  }

  ngOnInit() {
    this.request.get('http://localhost:8091/search/listeairport').subscribe(data => {
      console.log(data);this.airposts=data.json();
    });


    this.request.get('http://localhost:8091/search/listetown').subscribe(data => {
      console.log(data);this.towns=data.json();
    });



  }



  adddesti(air,tow)
  {
    this.airport.code=air;
    this.town.id=tow;
    this.direction.airport=this.airport;
    this.direction.town=this.town;
    console.log(this.direction)
    this.request.post('http://localhost:8091/direction/add',this.direction).subscribe(data=>{
      this.errorMessage="destination ajouté avec succès";
      this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 1000 });});
    this.request.get('http://localhost:8091/direction/liste').subscribe(data => {
      console.log(data);
    });


  }








  add(air,tow)
  {
    this.airport.code=air;
    this.town.id=tow;
    this.direction.airport=this.airport;
    this.direction.town=this.town;
    this.request.post('http://localhost:8091/direction/add',this.direction).subscribe();
    this.errorMessage="destination ajouté avec succès";
    this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout:1000 });

  }











}

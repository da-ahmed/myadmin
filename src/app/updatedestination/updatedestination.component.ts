import { Component, OnInit ,OnDestroy} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {RequestsService} from '../service/requests.service';
import {Direction} from '../models/Direction';
import {Town} from '../models/Town';
import {Airport} from '../models/Airport';
import {DataService} from '../service/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-updatedestination',
  templateUrl: './updatedestination.component.html',
  styleUrls: ['./updatedestination.component.css']
})
export class UpdatedestinationComponent implements OnInit {
  bForm : FormGroup;
  dist;
  direction: Direction=new Direction();
  errorMessage;
  airposts;
  towns;
  town:Town=new Town();
  airport: Airport=new Airport();
  constructor(private data:DataService,private request:RequestsService,private _flashMessagesService: FlashMessagesService,private router :Router, private fb: FormBuilder) {
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

    this.data.currentMessage.subscribe(message=>{this.dist=message;});
    this.direction=this.dist;


  }



  update(air,tow)
  {
    this.airport.code=air;
    this.town.id=tow;
    this.direction.airport=this.airport;
    this.direction.town=this.town;
    console.log(this.direction)
    this.request.post('http://localhost:8091/direction/add',this.direction).subscribe();
    this.errorMessage="destination modifié avec succès";
    this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout:1000 });










  }
}


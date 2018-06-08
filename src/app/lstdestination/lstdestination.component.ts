import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {RequestsService} from '../service/requests.service';
import {Vehicle} from '../models/Vehicle';
import {Direction} from '../models/Direction';

@Component({
  selector: 'app-lstdestination',
  templateUrl: './lstdestination.component.html',
  styleUrls: ['./lstdestination.component.css']
})
export class LstdestinationComponent implements OnInit {
destination;
  direction: Direction=new Direction();
  errorMessage;

  constructor(private request:RequestsService,private data:DataService,private router:Router,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.request.get('http://localhost:8091/direction/liste').subscribe(data => {
      console.log(data);this.destination=data.json();
    });
  }




  deleteclient(direction)
  {this.direction=direction;
    this.request.post('http://localhost:8091/direction/delete',direction).subscribe()
    this.errorMessage="client est supprimé";
    this.ngOnInit();
    this.ngOnInit();
  }


  updatevehicle(dirction){
    this.direction=dirction;
    this.data.changeMessage(this.direction)

    this.router.navigate(['/destination/update'])
  }




}

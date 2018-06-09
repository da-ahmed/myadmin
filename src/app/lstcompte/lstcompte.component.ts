import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {RequestsService} from '../service/requests.service';
import {Vehicle} from '../models/Vehicle';
import {Client} from '../models/Client';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-lstcompte',
  templateUrl: './lstcompte.component.html',
  styleUrls: ['./lstcompte.component.css']
})
export class LstcompteComponent implements OnInit , OnDestroy{
clients;
  client: Client=new Client();
  errorMessage:string;
  constructor(private request:RequestsService,private data:DataService,private router:Router,private _flashMessagesService: FlashMessagesService,private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.request.get('http://localhost:8091/client/valid').subscribe(data => {
      console.log(data);this.clients=data.json();
    });

  }


  updateClient(client){
    this.client=client;
    this.data.changeMessage(this.client);

    this.router.navigate(['account/update'])
  }

deleteclient(client)
{this.client=client;
  this.request.post('http://localhost:8091/client/delete',this.client).subscribe(data=>console.log(data))
  this.ngOnInit();
  this.ngOnInit();
}

  ngOnDestroy() {
    this.cdRef.detach(); // try this
    // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    // this..unsubscribe();
  }

}

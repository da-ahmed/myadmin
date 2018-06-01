import { Component, OnInit } from '@angular/core';
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
export class LstcompteComponent implements OnInit {
clients;
  client: Client=new Client();
  errorMessage:string;
  constructor(private request:RequestsService,private data:DataService,private router:Router,private _flashMessagesService: FlashMessagesService) {
    this.request.get('http://localhost:8091/client/valid').subscribe(data => {
      console.log(data);this.clients=data.json();
    });
  }

  ngOnInit() {
  }


  updateClient(client){
    this.client=client;
    this.data.changeMessage(this.client);

    this.router.navigate(['account/update'])
  }

deleteclient(client)
{this.client=client;
  this.request.post('http://localhost:8091/client/valid',client).subscribe()
  this.errorMessage="client est supprimé";
  this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-danger', timeout: 3000 });
}



}

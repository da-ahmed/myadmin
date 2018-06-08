import {ChangeDetectorRef, Component, OnInit,OnDestroy} from '@angular/core';
import {RequestsService} from '../service/requests.service';
import {Client} from '../models/Client';

@Component({
  selector: 'app-lstinvcompte',
  templateUrl: './lstinvcompte.component.html',
  styleUrls: ['./lstinvcompte.component.css']
})
export class LstinvcompteComponent implements OnInit {

  clients;
  client:Client=new Client()
  constructor(private request:RequestsService,private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.request.get('http://localhost:8091/client/invalid').subscribe(data => {
      console.log(data);this.clients=data.json();
    });
  }





  valid(client)
  {this.client=client;
    this.request.post('http://localhost:8091/client/add',client)
    this.ngOnInit();
    this.ngOnInit();
  }


  ngOnDestroy() {
    this.cdRef.detach(); // try this
    // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    // this.authObserver.unsubscribe();
  }

}

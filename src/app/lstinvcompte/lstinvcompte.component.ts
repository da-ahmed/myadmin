import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../service/requests.service';

@Component({
  selector: 'app-lstinvcompte',
  templateUrl: './lstinvcompte.component.html',
  styleUrls: ['./lstinvcompte.component.css']
})
export class LstinvcompteComponent implements OnInit {

  clients;
  constructor(private request:RequestsService) {
    this.request.get('http://localhost:8091/client/invalid').subscribe(data => {
      console.log(data);this.clients=data.json();
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../service/requests.service';
import {Client} from '../models/Client';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  client: Client=new Client();
  constructor(private request:RequestsService) { }

  ngOnInit() {
  }



  addclient()
  {
    console.log(this.client)
this.request.post('http://localhost:8091/client/add',this.client).subscribe(data=>console.log(data));

  }
}

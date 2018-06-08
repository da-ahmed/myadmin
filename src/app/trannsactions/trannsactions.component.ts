import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../service/requests.service';

@Component({
  selector: 'app-trannsactions',
  templateUrl: './trannsactions.component.html',
  styleUrls: ['./trannsactions.component.css']
})
export class TrannsactionsComponent implements OnInit {
clients;
trnasactions;

  constructor(private request:RequestsService) { }

  ngOnInit() {
    this.request.get('http://localhost:8091/client/valid').subscribe(data => {
      console.log(data);this.clients=data.json();
    });

    this.request.get('http://localhost:8091/transsaction/liste').subscribe(data => {
      console.log(data);this.trnasactions=data.json();
    });

  }




  trier(t)
  {
    this.request.post('http://localhost:8091/transsaction/listename',t).subscribe(data => {
      console.log(data);this.trnasactions=data.json();
    });
  }

}

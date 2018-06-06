import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import {RequestsService} from '../service/requests.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit {
searchs;
  constructor(private request:RequestsService,private router:Router ){ }

  ngOnInit() {

    this.request.get('http://localhost:8091/search/liste').subscribe(data => {
      console.log(data);this.searchs=data.json();
    });
  }

}

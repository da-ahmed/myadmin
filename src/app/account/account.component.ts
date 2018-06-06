import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../service/requests.service';
import {Client} from '../models/Client';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  client: Client=new Client();
  rForm : FormGroup
  errorMessage
  constructor(private request:RequestsService,private _flashMessagesService: FlashMessagesService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
      'nom': [null, Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
      'prenom': [null, Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
      'adresse': [null, Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
      'numTel': [null, Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(20)])],
      'solde': [null, Validators.compose([Validators.required])]

    })
  }

  ngOnInit() {
  }



  addclient()
  {
    console.log(this.client)
this.request.post('http://localhost:8091/client/add',this.client).subscribe(data=>{
  this.errorMessage="client ajouté avec succès";
  this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 3000 });});

  }
}

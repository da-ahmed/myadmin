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
  aForm : FormGroup
  errorMessage
  constructor(private request:RequestsService,private _flashMessagesService: FlashMessagesService, private fb: FormBuilder) {
    this.aForm = fb.group({
      'username': [null, Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,4}$")])],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(4)])],
      'nom': [null, Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
      'prenom': [null, Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
      'adresse': [null, Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
      'numTel': [null, Validators.compose([Validators.required,Validators.minLength(8)])],
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
  this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 1000 });},err=>{
    this.errorMessage="error :  cette adresse email est déjà utilisée";
    this._flashMessagesService.show("erreur: nom d'utilisateur ou mot de passe incorrect", { cssClass: 'alert-danger', timeout: 1555 });
  }
  );

  }
}

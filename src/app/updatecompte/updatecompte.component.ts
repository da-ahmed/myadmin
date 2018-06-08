import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Client} from '../models/Client';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import {RequestsService} from '../service/requests.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-updatecompte',
  templateUrl: './updatecompte.component.html',
  styleUrls: ['./updatecompte.component.css']
})
export class UpdatecompteComponent implements OnInit ,OnDestroy {
  rForm : FormGroup
  clientn : any;
  client: Client=new Client();
  errorMessage;
  constructor(private _flashMessagesService: FlashMessagesService,private data:DataService,private request :RequestsService,private router :Router , private fb: FormBuilder,private cdRef: ChangeDetectorRef) {
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
    this.data.currentMessage.subscribe(message=>{this.clientn=message;});
    this.client=this.clientn;
    console.log(this.client);
  }



 upclient()
  {
    this.request.post('http://localhost:8091/client/add',this.client).subscribe(data=>console.log(data))
    this.errorMessage="compte modifié avec succès";
    this._flashMessagesService.show(this.errorMessage.toString(), { cssClass: 'alert-success', timeout: 1000 });


}
  ngOnDestroy() {
    this.cdRef.detach(); // try this
    // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    // this..unsubscribe();
  }


}

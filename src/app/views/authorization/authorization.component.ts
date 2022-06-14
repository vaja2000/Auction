import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { CommunicationService } from 'src/app/services/communication.service';
import { MyErrorStateMatcher } from './error-state-matcher';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  active:string = ''

  constructor(
    private communication:CommunicationService
  ) { }

  ngOnInit(): void {
    this.communication.definingTheForm.subscribe((resp:string) => {
      this.active = resp
    })
  }

}

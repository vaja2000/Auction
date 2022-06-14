import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';
import { MyErrorStateMatcher } from '../error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  login:any
  hide:boolean = true
  emailFormControl:any

  constructor(
    private communication:CommunicationService
  ) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl('', [ Validators.required, Validators.email]),
      'password': new FormControl(null, [ Validators.required, Validators.minLength(6) ])
    })
    this.emailFormControl = this.login.get('email')
  }
  onSubmit() {
    console.log(this.login.value)
  }
  registracionClick() {
    this.communication.definingTheForm.emit('registracion')
  }
  forgotPasswordClick() {
    this.communication.definingTheForm.emit('forgot password')
  }
}

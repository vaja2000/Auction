import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../error-state-matcher';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.scss']
})
export class RegistracionComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  login:any
  hide:boolean = true
  hide1:boolean = true
  emailFormControl:any

  constructor() { }

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

}

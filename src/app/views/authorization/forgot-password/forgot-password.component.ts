import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  code!:string

  constructor() { }

  randomSymbols(): string {
    let code:string = ''
    let char:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 6; i++) {
      code += char.charAt(Math.floor(Math.random() * char.length))
    }
    return code
  }
  ngOnInit(): void {
    this.code = this.randomSymbols()
  }
  changeCode() {
    this.code = this.randomSymbols()
  }
}

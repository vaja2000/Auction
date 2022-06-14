import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private matDialog:MatDialog,
    private communication:CommunicationService
  ) { }

  ngOnInit(): void {
  }
  openAuthorizationModal() {
    this.matDialog.open(AuthorizationComponent)
    this.communication.definingTheForm.emit('')
  }
}

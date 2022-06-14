import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/navbar/navbar.component';

import { ShearchSizeDirective } from './directives/shearch-size.directive';
import { MainComponent } from './views/main/main.component';
import { ListComponent } from './views/main/list/list.component';
import { UserPageComponent } from './views/user-page/user-page.component';
import { UserMenuComponent } from './views/user-page/user-menu/user-menu.component';
import { AddItemComponent } from './views/user-page/add-item/add-item.component';
import { MyStatementsComponent } from './views/user-page/my-statements/my-statements.component';
import { FinancesComponent } from './views/user-page/finances/finances.component';
import { MessagesComponent } from './views/user-page/messages/messages.component';
import { CartComponent } from './views/user-page/cart/cart.component';
import { FavouritesComponent } from './views/user-page/favourites/favourites.component';
import { PersonalDataComponent } from './views/user-page/personal-data/personal-data.component';
import { AuthorizationComponent } from './views/authorization/authorization.component';
import { LoginComponent } from './views/authorization/login/login.component';
import { RegistracionComponent } from './views/authorization/registracion/registracion.component';
import { ForgotPasswordComponent } from './views/authorization/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShearchSizeDirective,
    MainComponent,
    ListComponent,
    UserPageComponent,
    UserMenuComponent,
    AddItemComponent,
    MyStatementsComponent,
    FinancesComponent,
    MessagesComponent,
    CartComponent,
    FavouritesComponent,
    PersonalDataComponent,
    AuthorizationComponent,
    LoginComponent,
    RegistracionComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

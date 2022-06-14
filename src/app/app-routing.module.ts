import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './views/authorization/authorization.component';
import { LoginComponent } from './views/authorization/login/login.component';
import { MainComponent } from './views/main/main.component';
import { AddItemComponent } from './views/user-page/add-item/add-item.component';
import { CartComponent } from './views/user-page/cart/cart.component';
import { FavouritesComponent } from './views/user-page/favourites/favourites.component';
import { FinancesComponent } from './views/user-page/finances/finances.component';
import { MessagesComponent } from './views/user-page/messages/messages.component';
import { MyStatementsComponent } from './views/user-page/my-statements/my-statements.component';
import { PersonalDataComponent } from './views/user-page/personal-data/personal-data.component';
import { UserPageComponent } from './views/user-page/user-page.component';

const routes: Routes = [
  { path: '', component:MainComponent },
  { 
    path: 'user-page', component:UserPageComponent,
    children: [
      { path: 'add-item', component:AddItemComponent },
      { path: 'statements', component:MyStatementsComponent },
      { path: 'finances', component:FinancesComponent },
      { path: 'messages', component:MessagesComponent },
      { path: 'cart', component:CartComponent },
      { path: 'favourites', component:FavouritesComponent },
      { path: 'personal-data', component:PersonalDataComponent }
    ]
  },
  {
    path: 'authorization', component:AuthorizationComponent,
    children: [
      { path: 'login', component:LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

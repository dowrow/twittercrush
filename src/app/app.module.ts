import { BrowserModule } from '@angular/platform-browser';
import {NgModule, enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {AngularFire, AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import 'hammerjs';
import {FollowersService} from "./followers.service";
import { FriendsService } from "./friends.service";
import { UsersService } from "./users.service";
import { PositiveVotesService } from "./positive-votes.service";
import { NegativeVotesService } from "./negative-votes.service";

const firebaseConfig = {
    apiKey: "AIzaSyC1vfJNQvyzdEB6bBPCzbmc5rdiQ3KHYks",
    authDomain: "twinder-517fa.firebaseapp.com",
    databaseURL: "https://twinder-517fa.firebaseio.com",
    storageBucket: "twinder-517fa.appspot.com",
    messagingSenderId: "307487647250"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }),
    JsonpModule
  ],
  providers: [
    AngularFire, 
    FollowersService, 
    FriendsService,
    UsersService,
    PositiveVotesService,
    NegativeVotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

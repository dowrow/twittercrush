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
    apiKey: "AIzaSyDJkQ-IdBZvXxiEIBcTyG7iJA81PYc8FVg",
    authDomain: "twittercrush-47430.firebaseapp.com",
    databaseURL: "https://twittercrush-47430.firebaseio.com",
    storageBucket: "twittercrush-47430.appspot.com",
    messagingSenderId: "423758509117"
};

enableProdMode();

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

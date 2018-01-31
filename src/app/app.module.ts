import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";
import { AuthGuard } from "./guards/auth.guard";
import { HttpUtilService } from "./services/http-util-service";
import { LoginComponent } from './login/login.component';
import { LoginService } from "./services/login-service";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";


export const firebaseConfig = {

  apiKey: "AIzaSyD-nLOmQ0x5YbIIgYuOgn8d2b7P8hwqV2M",
  authDomain: "teste-2e0e1.firebaseapp.com",
  databaseURL: "https://teste-2e0e1.firebaseio.com",
  projectId: "teste-2e0e1",
  storageBucket: "teste-2e0e1.appspot.com",
  messagingSenderId: "170093851815"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard, HttpUtilService, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HereMapComponent } from './components/here-map/here-map.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';
import { LoginComponent } from './login/login.component';
// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
// form
import { ReactiveFormsModule } from '@angular/forms';

// auth
import {AuthService} from './auth.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HereMapComponent,
    MenuNavbarComponent,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

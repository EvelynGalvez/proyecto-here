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
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { InteresComponent } from './components/interes/interes.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LugaresCercanosComponent } from './components/lugares-cercanos/lugares-cercanos.component';
import { GpsComponent } from './components/gps/gps.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { RutaSeguraComponent } from './components/ruta-segura/ruta-segura.component';
import { FooterComponent } from './components/footer/footer.component';
import { PoliceComponent } from './components/police/police.component';
import { AmbulanciaComponent } from './components/ambulancia/ambulancia.component';
import { BomberosComponent } from './components/bomberos/bomberos.component';


@NgModule({
  declarations: [
    AppComponent,
    HereMapComponent,
    MenuNavbarComponent,
    LoginComponent,
    UserComponent,
    InteresComponent,
    InformacionComponent,
    LugaresCercanosComponent,
    GpsComponent,
    ConfiguracionComponent,
    AyudaComponent,
    RutaSeguraComponent,
    FooterComponent,
    RutaSeguraComponent,
    PoliceComponent,
    AmbulanciaComponent,
    BomberosComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

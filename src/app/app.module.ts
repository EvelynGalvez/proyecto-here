import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HereMapComponent } from './components/here-map/here-map.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HereMapComponent,
    MenuNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

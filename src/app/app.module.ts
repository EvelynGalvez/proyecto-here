import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Para ruteo
import { RouterModule, Routes } from '@angular/router';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';

// Componentes
import { MapsComponent } from './components/maps/maps.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MapsComponent
  },
  {
    path: 'mapas',
    component: MapsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from "@angular/router";

import { HereMapComponent } from './components/here-map/here-map.component';
import { LoginComponent } from './login/login.component';
import { InteresComponent } from './components/interes/interes.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LugaresCercanosComponent } from './components/lugares-cercanos/lugares-cercanos.component';
import { GpsComponent } from './components/gps/gps.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { RutaSeguraComponent } from './components/ruta-segura/ruta-segura.component';
import { PoliceComponent } from './components/police/police.component';




export const app_routes: Routes = [
    {path:'', component: RutaSeguraComponent},
    {path: 'interes', component: InteresComponent},
    {path: 'informacion', component: InformacionComponent},
    {path: 'lugares-cercanos', component: LugaresCercanosComponent},
    {path: 'gps', component: GpsComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'policia', component: PoliceComponent },
    {path: '**', component: RutaSeguraComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}
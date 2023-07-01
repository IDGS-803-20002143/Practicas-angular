import { RouterModule, Routes } from "@angular/router";
import {NgModule} from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { distanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
const routes:Routes=[

     {path: '', redirectTo: '/home',pathMatch:'full'},
     {path:'Cine', component:CinepolisComponent},
     {path:'Distancia',component:distanciaComponent},
     {path:'Resistencia',component:ResistenciasComponent}
    //  {path:'**', component: PagenotfoutComponet}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
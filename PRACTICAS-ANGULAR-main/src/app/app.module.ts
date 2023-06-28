import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CinepolisModule} from './cinepolis/cinepolis/cinepolis.module';
import { ResistenciasModule } from './resistencias/resistencias/resistencias.module';
import { DistanciaModule } from './distancia/distancia/distancia.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CinepolisModule,
    ResistenciasModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

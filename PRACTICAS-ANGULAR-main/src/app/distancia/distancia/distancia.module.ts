import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaComponent } from '../distancia.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    DistanciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    DistanciaComponent
  ]
})
export class DistanciaModule { }

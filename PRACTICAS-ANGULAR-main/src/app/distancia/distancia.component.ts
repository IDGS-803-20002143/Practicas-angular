import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class distanciaComponent {
  x1!: number;
  x2!: number;
  y1!: number;
  y2!: number;
  res: number=0;

  calcularDistancia() {
    const r = Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2);
    this.res = Math.sqrt(r);
  }
  limpiar(){
    this.x1=0;
    this.x2=0;
    this.y1=0;
    this.y2=0;
    this.res=0;
  }
}

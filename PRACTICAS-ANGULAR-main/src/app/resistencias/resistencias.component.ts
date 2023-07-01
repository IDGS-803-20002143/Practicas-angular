import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  banda1!: string;
  banda2!: string;
  banda3!: string;
  banda4!: string;

  resistencia!: string;

  banda1Select = '';
  banda2Select = '';
  banda3Select = '';
  banda4Select = '';

  colores = [
    { value: 'black', name: 'Negro' },
    { value: 'brown', name: 'Marrón' },
    { value: 'red', name: 'Rojo' },
    { value: 'orange', name: 'Naranja' },
    { value: 'yellow', name: 'Amarillo' },
    { value: 'green', name: 'Verde' },
    { value: 'blue', name: 'Azul' },
    { value: 'violet', name: 'Violeta' },
    { value: 'grey', name: 'Gris' },
    { value: 'white', name: 'Blanco' },
  ];

  tolerancia = [
    { value: 'gold', name: 'Dorado' },
    { value: 'silver', name: 'Plateado' },
  ];

 calcularResistencias() {
    switch (this.banda1Select) {
      case 'black': this.banda1 = '0'; break;
      case 'brown': this.banda1 = '1'; break;
      case 'red': this.banda1 = '2'; break;
      case 'orange': this.banda1 = '3'; break;
      case 'yellow': this.banda1 = '4'; break;
      case 'green': this.banda1 = '5'; break;
      case 'blue': this.banda1 = '6'; break;
      case 'violet': this.banda1 = '7'; break;
      case 'grey': this.banda1 = '8'; break;
      case 'white': this.resistencia = this.banda1 = '9'; break;
    }

    switch (this.banda2Select) {
      case 'black': this.banda2 = '0'; break;
      case 'brown': this.banda2 = '1'; break;
      case 'red': this.banda2 = '2'; break;
      case 'orange': this.banda2 = '3'; break;
      case 'yellow': this.banda2 = '4'; break;
      case 'green': this.banda2 = '5'; break;
      case 'blue': this.banda2 = '6'; break;
      case 'violet': this.banda2 = '7'; break;
      case 'grey': this.banda2 = '8'; break;
      case 'white': this.banda2 = this.banda1 = '9'; break;
    }

    this.resistencia = this.banda1 + this.banda2;

    switch (this.banda4Select) {
      case 'gold': this.banda4 = ' con 5%'; break;
      case 'silver': this.banda4 = ' con 10%'; break;
    }

    switch (this.banda3Select) {
      case 'black': this.resistencia += 'Ω' + this.banda4; break;
      case 'brown': this.resistencia += '0Ω' + this.banda4; break;
      case 'red': this.resistencia += '00Ω' + this.banda4; break;
      case 'orange': this.resistencia += '000Ω' + this.banda4; break;
      case 'yellow': this.resistencia += '0000Ω' + this.banda4; break;
      case 'green': this.resistencia += '00000Ω' + this.banda4; break;
      case 'blue': this.resistencia += '000000Ω' + this.banda4; break;
      case 'violet': this.resistencia += '0000000Ω' + this.banda4; break;
      case 'grey': this.resistencia += '00000000Ω' + this.banda4; break;
      case 'white': this.resistencia += '000000000Ω' + this.banda4; break;
    }
  }
  limpiarFormulario() {
    this.banda1Select = '';
    this.banda2Select = '';
    this.banda3Select = '';
    this.banda4Select = '';
    this.resistencia = '';
  }
  
}

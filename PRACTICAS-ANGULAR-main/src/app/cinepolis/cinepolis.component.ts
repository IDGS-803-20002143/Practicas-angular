import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cantidadCompradores!: number;
  cantidadBoletos!: number;
  cantidadBoletosOriginales: number = 0;
  nombreCliente: string = "";
  totalPagar!: number | string;

  nombre!: string;
  tieneTarjetaCineco: string = 'No';

  opciones = [
    'Si',
    'No'
  ];

  realizarCompra() {
    var cantidadMaximaBoletos = this.cantidadCompradores * 7;
    if (this.cantidadBoletos > cantidadMaximaBoletos) {
      this.cantidadBoletosOriginales = this.cantidadBoletos;
      this.totalPagar = "No se pueden vender más de 7 boletos por persona";
    } else {
      this.totalPagar = this.cantidadBoletos * 12;
      if (this.cantidadBoletos > 5) {
        this.totalPagar = this.totalPagar - (this.totalPagar * 0.15);
      } else if (this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5) {
        this.totalPagar = this.totalPagar - (this.totalPagar * 0.10);
      }
      if (this.tieneTarjetaCineco == 'Si') {
        this.totalPagar = this.totalPagar - (this.totalPagar * 0.10);
      }
      this.cantidadBoletosOriginales = this.cantidadBoletos;
      this.nombreCliente = this.nombre;
    }
    return this.totalPagar;
  }

  limpiar() {
    this.nombreCliente = '';
    this.cantidadBoletosOriginales = 0;
    this.nombre = '';
    this.cantidadBoletos = 0;
    this.cantidadCompradores = 0;
    this.totalPagar = '';
  }
}

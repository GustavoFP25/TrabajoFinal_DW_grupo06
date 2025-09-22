// pages/payments/payments.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  pagos = [
    {
      id: 'pago1',
      nombre: 'Pensión Abril',
      monto: 120,
      vencimiento: '30/07/2025',
      seleccionado: false
    },
    {
      id: 'pago2',
      nombre: 'Actividades Extra',
      monto: 50,
      vencimiento: '05/08/2025',
      seleccionado: false
    }
  ];

  constructor(private router: Router) {}

  irAMensajes() {
    this.router.navigate(['/message']);  

    }
  togglePago(pago: any) {
    pago.seleccionado = !pago.seleccionado;
  }

  getMontoTotal(): number {
    return this.pagos
      .filter(p => p.seleccionado)
      .reduce((total, p) => total + p.monto, 0);
  }

  pagar() {
    const totalSeleccionado = this.getMontoTotal();
    if (totalSeleccionado > 0) {
      localStorage.setItem('montoSeleccionado', totalSeleccionado.toString());
      // Redirigir a la plataforma de pago
      this.router.navigate(['/paymentplatform']);
    } else {
      alert('Selecciona al menos un pago');
    }

  }
}


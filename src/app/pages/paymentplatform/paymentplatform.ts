import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paymentplatform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paymentplatform.html',
  styleUrl: './paymentplatform.css'
})
export class Paymentplatform implements OnInit {
  monto: number = 0;
  numTarjeta = '';
  fechaVenc = '';
  cvv = '';
  nombre = '';
  apellido = '';
  correo = '';
  enviarComprobante = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const montoGuardado = localStorage.getItem('montoSeleccionado');
    this.monto = montoGuardado ? parseFloat(montoGuardado) : 0;
  }

  formatearFecha(): void {
    const v = this.fechaVenc.replace(/[^\d]/g, '').slice(0, 6);
    this.fechaVenc = v.length >= 2 ? v.slice(0, 2) + '/' + v.slice(2) : v;
  }

  formatearCVV(): void {
    this.cvv = this.cvv.replace(/[^\d]/g, '').slice(0, 3);
  }

confirmarPago(): void {
  if (
    this.numTarjeta.trim() &&
    this.fechaVenc.trim() &&
    this.cvv.trim() &&
    this.nombre.trim() &&
    this.apellido.trim() &&
    this.correo.trim()
  ) {
 
    this.router.navigate(['/paymentsuccess']);
  } else {
    alert('Por favor complete todos los campos obligatorios.');
  }
}
  
}
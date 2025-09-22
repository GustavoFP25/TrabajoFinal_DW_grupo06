
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css']
})
export class Cabecera {
  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/profile']); 
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  irAMensajes() {
    this.router.navigate(['/message']);
  }
}
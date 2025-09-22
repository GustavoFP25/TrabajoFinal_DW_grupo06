// pages/selector/selector.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './selector.html',
  styleUrl: './selector.css'
})
export class Selector {
  selectedStudent: string | null = null;

  students = [
    { name: 'Juan David, Hernandez Cortez', img: 'assets/img/alumno.png' },
    { name: 'Carla Sofía, Hernandez Cortez', img: 'assets/img/alumna.png' }
  ];

  constructor(private router: Router) {}

ingresar() {
  if (this.selectedStudent) {
    localStorage.setItem('alumnoSeleccionado', this.selectedStudent);

    const route = this.selectedStudent === 'Juan David, Hernandez Cortez' ? '/profile' : '/profile2';
    this.router.navigate([route], {
      queryParams: { alumno: this.selectedStudent }
    });
  } else {
    alert('Por favor selecciona un alumno');
  }
}


  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}


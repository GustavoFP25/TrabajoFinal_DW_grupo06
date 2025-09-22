import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, CommonModule, NgIf, NgFor],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  constructor(private route: Router) {}

    
  irAMensajes() {
    this.route.navigate(['/message']);
  }
  irAPagos() {
    this.route.navigate(['/payment']); 
  }
  irAAgenda() {
    this.route.navigate(['/calendar']); 
  }
  irACursos() {
    this.route.navigate(['/courses']); 
  }

  irATramites() {
    this.route.navigate(['/paperwork']); 
  }

  irAInicio() {
    this.route.navigate(['/profile']);
  }
  irASeleccion() {
    this.route.navigate(['/selector']);

  }
tareas = [
    {
      id: 1,
      nombre: 'Historia: Lectura',
      descripcion: 'Para el día martes 14/10\nLeer el capítulo sobre La Cultura Chavín',
      completada: false
    },
    {
      id: 2,
      nombre: 'Matemática',
      descripcion: '- Resolver libro páginas 89-95\n- Estudiar para la práctica calificada 07/10',
      completada: false
    }
  ];

  marcarComoHecho(tarea: any) {
    tarea.completada = true;
  }

  marcarComoPendiente(tarea: any) {
    tarea.completada = false;
}

}
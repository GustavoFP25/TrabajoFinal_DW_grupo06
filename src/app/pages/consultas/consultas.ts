import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultas',
  imports: [CommonModule, FormsModule],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css'
})
export class Consultas {
comando: string = '';
  historial: string[] = [];

  ejecutarComando() {
    if (!this.comando.trim()) return;

    switch (this.comando.toLowerCase()) {
      case 'cursos':
        this.historial.push("Cursos: Matemáticas, Lengua, Ciencias");
        break;
      case 'pagos':
        this.historial.push("Pagos pendientes: Matrícula 2025");
        break;
      case 'profesores':
        this.historial.push("Profesores: Juan Pérez, María López");
        break;
      default:
        this.historial.push(`No se reconoce el comando: ${this.comando}`);
    }

    this.comando = ''; // limpia el input
  }
}

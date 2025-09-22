import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  profesor: string = '';
  curso: string = '';
  asunto: string = '';
  contenido: string = '';
  mensajeEnviado = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.profesor = params['profesor'] || '';
      this.curso = params['curso'] || '';
    });
  }

 enviarMensaje() {
  console.log('Formulario enviado');
  console.log('Profesor:', this.profesor);
  console.log('Curso:', this.curso);
  console.log('Asunto:', this.asunto);
  console.log('Contenido:', this.contenido);
}
irAMensajes() {
    this.router.navigate(['/message']);
}
  irAInicio() {
    this.router.navigate(['/profile']);
}
  irASeleccion() {
    this.router.navigate(['/selector']);

}
}

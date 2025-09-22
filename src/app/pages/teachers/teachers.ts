import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Evento {
  fecha: string;
  descripcion: string;
}

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css']
})
export class teachers {
  
}


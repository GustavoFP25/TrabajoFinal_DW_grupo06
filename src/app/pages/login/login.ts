import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.css']   
})
export class Login {
  userCode: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  onLogin() {
    this.error = '';

    // Mock de validación
    if (this.userCode === 'admin' && this.password === '1234') {
      localStorage.setItem('user', this.userCode); 
      this.router.navigate(['/selector']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile2.html',
  styleUrl: './profile2.css'
})
export class Profile2 {
  constructor(private route: Router) {}

  irAMensajes() {
    this.route.navigate(['/message']);
  }
   irAPagos() {
    this.route.navigate(['/payment']); 

  }
  irACursos() {
    this.route.navigate(['/courses']); 
}

  irATramites() {
    this.route.navigate(['/paperwork']); 
}
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [FormsModule,RouterModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  constructor(private route: Router) {}


  irAMensajes() {
    this.route.navigate(['/message']);

}
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paperwork',
  imports: [RouterModule],
  templateUrl: './paperwork.html',
  styleUrl: './paperwork.css'
})
export class Paperwork {

  constructor(private route: Router) {}

  irAMensajes() {
    this.route.navigate(['/message']);

}
}

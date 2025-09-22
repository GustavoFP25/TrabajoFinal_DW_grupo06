import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  imports: [FormsModule],
  templateUrl: './paymentsuccess.html',
  styleUrl: './paymentsuccess.css'
})
export class Paymentsuccess {
   constructor(private router: Router) {}
  

}


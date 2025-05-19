import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './tela-home.component.html',
  styleUrl: './tela-home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  irParaChat() {
    this.router.navigate(['/chat']);
  }
}

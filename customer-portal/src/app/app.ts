import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('customer-portal');
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(
      (isAuth: boolean) => this.isLoggedIn = isAuth
    );
  }

  logout() {
    this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService, Customer } from '../../services/auth';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class WelcomeComponent implements OnInit {
  customer: Customer | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.customer = this.authService.getCurrentCustomer();
  }
}

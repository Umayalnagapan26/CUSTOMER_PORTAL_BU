import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.scss'
})
export class CustomerDashboardComponent {
  // Dashboard functionality will be implemented here
  // This component serves as the main dashboard overview
}

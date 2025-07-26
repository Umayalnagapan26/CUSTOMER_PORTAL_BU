import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginCredentials {
  customerId: string;
  password: string;
}

export interface Customer {
  customerId: string;
  name: string;
  email: string;
  company: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentCustomerSubject = new BehaviorSubject<Customer | null>(null);

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentCustomer$ = this.currentCustomerSubject.asObservable();

  constructor(private router: Router) {}

  login(credentials: LoginCredentials): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // 🔗 Backend integration will be added here later
      // For now, return false or true based on future logic
      resolve(false); // Always fail (or return true for testing UI flow)
    });
  }

  logout(): void {
    this.currentCustomerSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getCurrentCustomer(): Customer | null {
    return this.currentCustomerSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}

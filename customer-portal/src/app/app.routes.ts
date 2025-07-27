import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) 
  },
  { 
    path: 'welcome', 
    loadComponent: () => import('./components/welcome/welcome').then(m => m.WelcomeComponent),
    canActivate: [() => {
      const isLoggedIn = localStorage.getItem('currentCustomer') !== null;
      if (!isLoggedIn) {
        window.location.href = '/login';
        return false;
      }
      return true;
    }]
  },
  { 
    path: 'profile', 
    loadComponent: () => import('./components/customer-profile/customer-profile').then(m => m.CustomerProfileComponent),
    canActivate: [() => {
      const isLoggedIn = localStorage.getItem('currentCustomer') !== null;
      if (!isLoggedIn) {
        window.location.href = '/login';
        return false;
      }
      return true;
    }]
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/customer-dashboard/customer-dashboard').then(m => m.CustomerDashboardComponent),
    canActivate: [() => {
      const isLoggedIn = localStorage.getItem('currentCustomer') !== null;
      if (!isLoggedIn) {
        window.location.href = '/login';
        return false;
      }
      return true;
    }]
  },
  { 
    path: 'financial', 
    loadComponent: () => import('./components/financial-sheet/financial-sheet').then(m => m.FinancialSheetComponent),
    canActivate: [() => {
      const isLoggedIn = localStorage.getItem('currentCustomer') !== null;
      if (!isLoggedIn) {
        window.location.href = '/login';
        return false;
      }
      return true;
    }]
  },
  { path: '**', redirectTo: '/login' }
];
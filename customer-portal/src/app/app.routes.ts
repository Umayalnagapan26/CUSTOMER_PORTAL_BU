import { Routes } from '@angular/router';

const authGuard = () => {
  const isLoggedIn = localStorage.getItem('currentCustomer') !== null;
  if (!isLoggedIn) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) 
  },
  { 
    path: 'welcome', 
    loadComponent: () => import('./components/welcome/welcome').then(m => m.WelcomeComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'profile', 
    loadComponent: () => import('./components/customer-profile/customer-profile').then(m => m.CustomerProfileComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/customer-dashboard/customer-dashboard').then(m => m.CustomerDashboardComponent),
    canActivate: [authGuard]
  },
  // Dashboard child routes
  { 
    path: 'dashboard/inquiry', 
    loadComponent: () => import('./components/customer-dashboard/inquiry-data/inquiry-data').then(m => m.InquiryData),
    canActivate: [authGuard]
  },
  { 
    path: 'dashboard/sales', 
    loadComponent: () => import('./components/customer-dashboard/sale-order-data/sale-order-data').then(m => m.SaleOrderData),
    canActivate: [authGuard]
  },
  { 
    path: 'dashboard/delivery', 
    loadComponent: () => import('./components/customer-dashboard/delivery-list/delivery-list').then(m => m.DeliveryList),
    canActivate: [authGuard]
  },
  { 
    path: 'financial', 
    loadComponent: () => import('./components/financial-sheet/financial-sheet').then(m => m.FinancialSheetComponent),
    canActivate: [authGuard]
  },
  // Financial child routes
  { 
    path: 'financial/invoice', 
    loadComponent: () => import('./components/financial-sheet/invoice-details/invoice-details').then(m => m.InvoiceDetails),
    canActivate: [authGuard]
  },
  { 
    path: 'financial/payments', 
    loadComponent: () => import('./components/financial-sheet/payments-aging/payments-aging').then(m => m.PaymentsAging),
    canActivate: [authGuard]
  },
  { 
    path: 'financial/memo', 
    loadComponent: () => import('./components/financial-sheet/credit-debit-memo/credit-debit-memo').then(m => m.CreditDebitMemo),
    canActivate: [authGuard]
  },
  { 
    path: 'financial/sales', 
    loadComponent: () => import('./components/financial-sheet/overall-sales-data/overall-sales-data').then(m => m.OverallSalesData),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];

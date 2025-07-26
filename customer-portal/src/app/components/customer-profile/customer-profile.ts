import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, Customer } from '../../services/auth';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-profile.html',
  styleUrl: './customer-profile.scss'
})
export class CustomerProfileComponent implements OnInit {
  profileForm: FormGroup;
  isEditing = false;
  originalData: any = {};

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      customerId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadCustomerData();
  }

  loadCustomerData() {
    const customer = this.authService.getCurrentCustomer();
    if (customer) {
      this.profileForm.patchValue({
        customerId: customer.customerId,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        company: customer.company
      });
      
      // Store original data for cancel functionality
      this.originalData = { ...customer };
    }
  }

  toggleEdit() {
    if (this.isEditing) {
      this.saveProfile();
    } else {
      this.isEditing = true;
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.profileForm.patchValue(this.originalData);
  }

  saveProfile() {
    if (this.profileForm.valid) {
      // In a real application, you would call an API to update the profile
      const updatedData = this.profileForm.value;
      
      // Update local storage and service
      const currentCustomer = this.authService.getCurrentCustomer();
      if (currentCustomer) {
        const updatedCustomer: Customer = {
          ...currentCustomer,
          ...updatedData
        };
        
        localStorage.setItem('currentCustomer', JSON.stringify(updatedCustomer));
        
        // Show success message (in a real app, you'd use a toast service)
        alert('Profile updated successfully!');
        
        this.isEditing = false;
        this.originalData = { ...updatedData };
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.profileForm.controls).forEach(key => {
      const control = this.profileForm.get(key);
      control?.markAsTouched();
    });
  }
}

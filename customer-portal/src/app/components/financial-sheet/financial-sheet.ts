import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-financial-sheet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './financial-sheet.html',
  styleUrl: './financial-sheet.scss'
})
export class FinancialSheetComponent {
  // Financial sheet functionality will be implemented here
  // This component serves as the main financial overview
}

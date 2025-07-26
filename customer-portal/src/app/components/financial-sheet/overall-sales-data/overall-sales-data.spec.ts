import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallSalesData } from './overall-sales-data';

describe('OverallSalesData', () => {
  let component: OverallSalesData;
  let fixture: ComponentFixture<OverallSalesData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallSalesData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallSalesData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

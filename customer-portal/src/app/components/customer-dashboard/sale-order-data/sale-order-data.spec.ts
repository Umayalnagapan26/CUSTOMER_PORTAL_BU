import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderData } from './sale-order-data';

describe('SaleOrderData', () => {
  let component: SaleOrderData;
  let fixture: ComponentFixture<SaleOrderData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleOrderData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleOrderData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

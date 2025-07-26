import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAging } from './payments-aging';

describe('PaymentsAging', () => {
  let component: PaymentsAging;
  let fixture: ComponentFixture<PaymentsAging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsAging]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsAging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

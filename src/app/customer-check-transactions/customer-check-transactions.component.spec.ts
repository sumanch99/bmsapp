import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCheckTransactionsComponent } from './customer-check-transactions.component';

describe('CustomerCheckTransactionsComponent', () => {
  let component: CustomerCheckTransactionsComponent;
  let fixture: ComponentFixture<CustomerCheckTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCheckTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCheckTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

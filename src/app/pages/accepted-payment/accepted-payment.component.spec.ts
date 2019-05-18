import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPaymentComponent } from './accepted-payment.component';

describe('AcceptedPaymentComponent', () => {
  let component: AcceptedPaymentComponent;
  let fixture: ComponentFixture<AcceptedPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentplatform } from './paymentplatform';

describe('Paymentplatform', () => {
  let component: Paymentplatform;
  let fixture: ComponentFixture<Paymentplatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paymentplatform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paymentplatform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

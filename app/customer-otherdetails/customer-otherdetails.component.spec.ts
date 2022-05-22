import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOtherdetailsComponent } from './customer-otherdetails.component';

describe('CustomerOtherdetailsComponent', () => {
  let component: CustomerOtherdetailsComponent;
  let fixture: ComponentFixture<CustomerOtherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOtherdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

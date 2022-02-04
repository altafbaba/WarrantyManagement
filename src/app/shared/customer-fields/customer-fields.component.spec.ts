import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFieldsComponent } from './customer-fields.component';

describe('CustomerFieldsComponent', () => {
  let component: CustomerFieldsComponent;
  let fixture: ComponentFixture<CustomerFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

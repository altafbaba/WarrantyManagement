import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyCardComponent } from './warranty-card.component';

describe('WarrantyCardComponent', () => {
  let component: WarrantyCardComponent;
  let fixture: ComponentFixture<WarrantyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

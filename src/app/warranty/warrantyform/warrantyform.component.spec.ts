import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyformComponent } from './warrantyform.component';

describe('WarrantyformComponent', () => {
  let component: WarrantyformComponent;
  let fixture: ComponentFixture<WarrantyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

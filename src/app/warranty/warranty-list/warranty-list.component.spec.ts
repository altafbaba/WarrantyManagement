import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyListComponent } from './warranty-list.component';

describe('WarrantyListComponent', () => {
  let component: WarrantyListComponent;
  let fixture: ComponentFixture<WarrantyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

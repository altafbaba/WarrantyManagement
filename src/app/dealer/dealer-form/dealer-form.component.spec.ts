import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerFormComponent } from './dealer-form.component';

describe('DealerFormComponent', () => {
  let component: DealerFormComponent;
  let fixture: ComponentFixture<DealerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLstComponent } from './property-lst.component';

describe('PropertyLstComponent', () => {
  let component: PropertyLstComponent;
  let fixture: ComponentFixture<PropertyLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

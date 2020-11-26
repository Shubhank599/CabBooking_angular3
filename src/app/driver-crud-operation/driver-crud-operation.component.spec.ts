import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCrudOperationComponent } from './driver-crud-operation.component';

describe('DriverCrudOperationComponent', () => {
  let component: DriverCrudOperationComponent;
  let fixture: ComponentFixture<DriverCrudOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverCrudOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCrudOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDriverComponent } from './insert-driver.component';

describe('InsertDriverComponent', () => {
  let component: InsertDriverComponent;
  let fixture: ComponentFixture<InsertDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DriverInsertionService } from './driver-insertion.service';

describe('DriverInsertionService', () => {
  let service: DriverInsertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverInsertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

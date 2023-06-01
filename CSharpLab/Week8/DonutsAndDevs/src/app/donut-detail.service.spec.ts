import { TestBed } from '@angular/core/testing';

import { DonutDetailService } from './donut-detail.service';

describe('DonutDetailService', () => {
  let service: DonutDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FamousPersonService } from './famous-person.service';

describe('FamousPersonService', () => {
  let service: FamousPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamousPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

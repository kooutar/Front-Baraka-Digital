import { TestBed } from '@angular/core/testing';

import { VerementService } from './verement-service';

describe('VerementService', () => {
  let service: VerementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

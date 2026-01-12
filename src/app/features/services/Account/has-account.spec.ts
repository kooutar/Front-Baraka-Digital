import { TestBed } from '@angular/core/testing';

import { HasAccount } from './has-account';

describe('HasAccount', () => {
  let service: HasAccount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasAccount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

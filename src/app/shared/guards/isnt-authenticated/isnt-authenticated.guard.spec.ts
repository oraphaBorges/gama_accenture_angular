import { TestBed } from '@angular/core/testing';

import { IsntAuthenticatedGuard } from './isnt-authenticated.guard';

describe('IsntAuthenticatedGuard', () => {
  let guard: IsntAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsntAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

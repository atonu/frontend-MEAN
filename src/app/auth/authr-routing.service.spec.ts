import { TestBed } from '@angular/core/testing';

import { AuthrRoutingService } from './authr-routing.service';

describe('AuthrRoutingService', () => {
  let service: AuthrRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

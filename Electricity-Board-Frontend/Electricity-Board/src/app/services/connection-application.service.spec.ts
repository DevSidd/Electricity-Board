import { TestBed } from '@angular/core/testing';

import { ConnectionApplicationService } from './connection-application.service';

describe('ConnectionApplicationService', () => {
  let service: ConnectionApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

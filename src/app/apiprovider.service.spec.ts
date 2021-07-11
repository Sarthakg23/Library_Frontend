import { TestBed } from '@angular/core/testing';

import { ApiproviderService } from './apiprovider.service';

describe('ApiproviderService', () => {
  let service: ApiproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

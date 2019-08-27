import { TestBed } from '@angular/core/testing';

import { CryptReserveRestAPIService } from './crypt-reserve-rest-api.service';

describe('CryptReserveRestAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptReserveRestAPIService = TestBed.get(CryptReserveRestAPIService);
    expect(service).toBeTruthy();
  });
});

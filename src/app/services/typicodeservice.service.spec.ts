import { TestBed } from '@angular/core/testing';

import { TypicodeserviceService } from './typicodeservice.service';

describe('TypicodeserviceService', () => {
  let service: TypicodeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicodeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

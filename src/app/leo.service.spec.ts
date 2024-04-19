import { TestBed } from '@angular/core/testing';

import { LeoService } from './leo.service';

describe('LeoService', () => {
  let service: LeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

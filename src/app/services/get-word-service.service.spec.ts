import { TestBed } from '@angular/core/testing';

import { GetWordServiceService } from './get-word-service.service';

describe('GetWordServiceService', () => {
  let service: GetWordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

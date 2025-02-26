import { TestBed } from '@angular/core/testing';

import { CrudAuthorsService } from './crud-authors.service';

describe('CrudAuthorsService', () => {
  let service: CrudAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

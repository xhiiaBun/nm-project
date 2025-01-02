import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { wordGuardResolver } from './word-guard.resolver';

describe('wordGuardResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => wordGuardResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

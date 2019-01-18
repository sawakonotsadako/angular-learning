import { TestBed } from '@angular/core/testing';

import {Logger} from './logger.service';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logger = TestBed.get(Logger);
    expect(service).toBeTruthy();
  });
});

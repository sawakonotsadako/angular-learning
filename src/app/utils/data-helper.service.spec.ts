import { TestBed } from '@angular/core/testing';

import {DataHelper} from './data-helper.service';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('SampleDataHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHelper = TestBed.get(DataHelper);
    expect(service).toBeTruthy();
  });
});

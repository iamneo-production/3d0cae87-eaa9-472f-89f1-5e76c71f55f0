import { TestBed } from '@angular/core/testing';

import { DataCommmunicationService } from './data-commmunication.service';

describe('DataCommmunicationService', () => {
  let service: DataCommmunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommmunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetProgrammeService } from './get-programme.service';

describe('GetProgrammeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProgrammeService = TestBed.get(GetProgrammeService);
    expect(service).toBeTruthy();
  });
});

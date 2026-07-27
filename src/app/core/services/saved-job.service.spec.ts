import { TestBed } from '@angular/core/testing';

import { SavedJobService } from './saved-job.service.js';

describe('SavedJobService', () => {
  let service: SavedJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

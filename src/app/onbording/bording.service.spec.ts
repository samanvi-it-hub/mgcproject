import { TestBed } from '@angular/core/testing';

import { BordingService } from './bording.service';

describe('BordingService', () => {
  let service: BordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

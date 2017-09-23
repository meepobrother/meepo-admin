import { TestBed, inject } from '@angular/core/testing';

import { LogDefaultService } from './log-default.service';

describe('LogDefaultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDefaultService]
    });
  });

  it('should be created', inject([LogDefaultService], (service: LogDefaultService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LogChildService } from './log-child.service';

describe('LogChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogChildService]
    });
  });

  it('should be created', inject([LogChildService], (service: LogChildService) => {
    expect(service).toBeTruthy();
  }));
});

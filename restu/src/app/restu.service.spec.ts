import { TestBed } from '@angular/core/testing';

import { RestuService } from './restu.service';

describe('RestuService', () => {
  let service: RestuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

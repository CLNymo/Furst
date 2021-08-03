import { TestBed } from '@angular/core/testing';

import { HandlekurvService } from './handlekurv.service';

describe('HandlekurvService', () => {
  let service: HandlekurvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlekurvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

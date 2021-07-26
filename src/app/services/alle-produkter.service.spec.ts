import { TestBed } from '@angular/core/testing';

import { AlleProdukterService } from './alle-produkter.service';

describe('AlleProdukterService', () => {
  let service: AlleProdukterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlleProdukterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

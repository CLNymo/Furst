import { TestBed } from '@angular/core/testing';

import { kategorimenyListenerService } from './produkt-meny-listener.service';

describe('kategorimenyListenerService', () => {
  let service: kategorimenyListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(kategorimenyListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

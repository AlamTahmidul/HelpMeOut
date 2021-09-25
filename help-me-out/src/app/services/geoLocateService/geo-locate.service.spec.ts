import { TestBed } from '@angular/core/testing';

import { GeoLocateService } from './geo-locate.service';

describe('GeoLocateService', () => {
  let service: GeoLocateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

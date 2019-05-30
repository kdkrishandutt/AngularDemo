import { TestBed } from '@angular/core/testing';

import { SortingSearchingServiceService } from './sorting-searching-service.service';

describe('SortingSearchingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingSearchingServiceService = TestBed.get(SortingSearchingServiceService);
    expect(service).toBeTruthy();
  });
});

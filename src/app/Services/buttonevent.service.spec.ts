import { TestBed } from '@angular/core/testing';

import { ButtoneventService } from './buttonevent.service';

describe('ButtoneventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtoneventService = TestBed.get(ButtoneventService);
    expect(service).toBeTruthy();
  });
});

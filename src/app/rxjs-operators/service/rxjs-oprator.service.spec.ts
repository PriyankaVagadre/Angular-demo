import { TestBed } from '@angular/core/testing';

import { RxjsOpratorService } from './rxjs-oprator.service';

describe('RxjsOpratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsOpratorService = TestBed.get(RxjsOpratorService);
    expect(service).toBeTruthy();
  });
});

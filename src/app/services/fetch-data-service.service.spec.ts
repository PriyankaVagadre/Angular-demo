import { TestBed } from '@angular/core/testing';
import { FetchDataServiceService } from './fetch-data-service.service';
import { from } from 'rxjs';

describe('FetchDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDataServiceService = TestBed.get(FetchDataServiceService);
    expect(service).toBeTruthy();
  });
});

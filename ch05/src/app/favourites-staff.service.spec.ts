import { TestBed } from '@angular/core/testing';

import { FavouritesStaffService } from './favourites-staff.service';

describe('FavouritesStaffService', () => {
  let service: FavouritesStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

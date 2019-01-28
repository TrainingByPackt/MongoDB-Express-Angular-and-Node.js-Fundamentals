import { TestBed, inject } from '@angular/core/testing';

import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersListService]
    });
  });

  it('should be created', inject([UsersListService], (service: UsersListService) => {
    expect(service).toBeTruthy();
  }));
});

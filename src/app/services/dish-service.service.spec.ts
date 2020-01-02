import { TestBed } from '@angular/core/testing';

import { DishServiceService } from './dish-service.service';

describe('DishServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishServiceService = TestBed.get(DishServiceService);
    expect(service).toBeTruthy();
  });
});

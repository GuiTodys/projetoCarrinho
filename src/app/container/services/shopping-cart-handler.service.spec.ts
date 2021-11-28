import { TestBed } from '@angular/core/testing';

import { ShoppingCartHandlerService } from './shopping-cart-handler.service';

describe('ShoppingCartHandlerService', () => {
  let service: ShoppingCartHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

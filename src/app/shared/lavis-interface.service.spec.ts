/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LavisInterfaceService } from './lavis-interface.service';

describe('Service: LavisInterface', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LavisInterfaceService]
    });
  });

  it('should ...', inject([LavisInterfaceService], (service: LavisInterfaceService) => {
    expect(service).toBeTruthy();
  }));
});

 /*
* File: api.service.spec.ts
* Author: Boros Zoltán
* Copyright: 2023 Borosfather
* Group: Szoft II N
* Date: 2023-03-08
* Github: https://github.com/borosfather
* Licenc: GNU GPL
*/ 

import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BasicAuthInterceptorService } from './basic-auth-interceptor.service';

describe('BasicAuthInterceptorService', () => {
  let service: BasicAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(BasicAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

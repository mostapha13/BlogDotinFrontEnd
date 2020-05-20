import { TestBed } from '@angular/core/testing';

import { ShowBlogService } from './show-blog.service';

describe('ShowBlogService', () => {
  let service: ShowBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

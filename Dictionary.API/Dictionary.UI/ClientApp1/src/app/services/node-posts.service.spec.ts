import { TestBed } from '@angular/core/testing';

import { NodePostsService } from './node-posts.service';

describe('NodePostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodePostsService = TestBed.get(NodePostsService);
    expect(service).toBeTruthy();
  });
});

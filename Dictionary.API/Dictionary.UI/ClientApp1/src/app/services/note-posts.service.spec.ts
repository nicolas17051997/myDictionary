import { TestBed } from '@angular/core/testing';

import { NotePostsService } from './note-posts.service';

describe('NotePostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotePostsService = TestBed.get(NotePostsService);
    expect(service).toBeTruthy();
  });
});

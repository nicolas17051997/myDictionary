import { TestBed } from '@angular/core/testing';

import { NotePostService } from './note-post.service';

describe('NotePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotePostService = TestBed.get(NotePostService);
    expect(service).toBeTruthy();
  });
});

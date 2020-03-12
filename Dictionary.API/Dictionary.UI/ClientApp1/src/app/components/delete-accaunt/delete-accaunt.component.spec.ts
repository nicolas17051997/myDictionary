import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccauntComponent } from './delete-accaunt.component';

describe('DeleteAccauntComponent', () => {
  let component: DeleteAccauntComponent;
  let fixture: ComponentFixture<DeleteAccauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

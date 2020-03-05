import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddminComponent } from './management-addmin.component';

describe('ManagementAddminComponent', () => {
  let component: ManagementAddminComponent;
  let fixture: ComponentFixture<ManagementAddminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementAddminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementAddminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

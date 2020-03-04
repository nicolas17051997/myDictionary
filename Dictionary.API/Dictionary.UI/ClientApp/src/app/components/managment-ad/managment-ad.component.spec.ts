import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentAdComponent } from './managment-ad.component';

describe('ManagmentAdComponent', () => {
  let component: ManagmentAdComponent;
  let fixture: ComponentFixture<ManagmentAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

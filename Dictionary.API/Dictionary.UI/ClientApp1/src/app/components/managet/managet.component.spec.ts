import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetComponent } from './managet.component';

describe('ManagetComponent', () => {
  let component: ManagetComponent;
  let fixture: ComponentFixture<ManagetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

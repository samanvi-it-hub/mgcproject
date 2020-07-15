import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminownerreportsComponent } from './adminownerreports.component';

describe('AdminownerreportsComponent', () => {
  let component: AdminownerreportsComponent;
  let fixture: ComponentFixture<AdminownerreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminownerreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminownerreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

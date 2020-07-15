import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresidentreportsComponent } from './adminresidentreports.component';

describe('AdminresidentreportsComponent', () => {
  let component: AdminresidentreportsComponent;
  let fixture: ComponentFixture<AdminresidentreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminresidentreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminresidentreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

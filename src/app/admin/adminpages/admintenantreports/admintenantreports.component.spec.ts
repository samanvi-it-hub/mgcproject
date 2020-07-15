import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintenantreportsComponent } from './admintenantreports.component';

describe('AdmintenantreportsComponent', () => {
  let component: AdmintenantreportsComponent;
  let fixture: ComponentFixture<AdmintenantreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintenantreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintenantreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

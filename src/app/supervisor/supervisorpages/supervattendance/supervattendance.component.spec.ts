import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervattendanceComponent } from './supervattendance.component';

describe('SupervattendanceComponent', () => {
  let component: SupervattendanceComponent;
  let fixture: ComponentFixture<SupervattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

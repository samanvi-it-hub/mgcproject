import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminemployeeComponent } from './adminemployee.component';

describe('AdminemployeeComponent', () => {
  let component: AdminemployeeComponent;
  let fixture: ComponentFixture<AdminemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

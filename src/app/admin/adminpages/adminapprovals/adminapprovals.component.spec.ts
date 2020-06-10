import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapprovalsComponent } from './adminapprovals.component';

describe('AdminapprovalsComponent', () => {
  let component: AdminapprovalsComponent;
  let fixture: ComponentFixture<AdminapprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminapprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

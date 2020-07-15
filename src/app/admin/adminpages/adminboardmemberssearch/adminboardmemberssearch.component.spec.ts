import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminboardmemberssearchComponent } from './adminboardmemberssearch.component';

describe('AdminboardmemberssearchComponent', () => {
  let component: AdminboardmemberssearchComponent;
  let fixture: ComponentFixture<AdminboardmemberssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminboardmemberssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminboardmemberssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

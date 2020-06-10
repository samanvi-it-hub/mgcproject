import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminboardmembersComponent } from './adminboardmembers.component';

describe('AdminboardmembersComponent', () => {
  let component: AdminboardmembersComponent;
  let fixture: ComponentFixture<AdminboardmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminboardmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminboardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincommunitylistComponent } from './admincommunitylist.component';

describe('AdmincommunitylistComponent', () => {
  let component: AdmincommunitylistComponent;
  let fixture: ComponentFixture<AdmincommunitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincommunitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincommunitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

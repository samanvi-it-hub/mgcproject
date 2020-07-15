import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantboardmembersComponent } from './tenantboardmembers.component';

describe('TenantboardmembersComponent', () => {
  let component: TenantboardmembersComponent;
  let fixture: ComponentFixture<TenantboardmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantboardmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantboardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

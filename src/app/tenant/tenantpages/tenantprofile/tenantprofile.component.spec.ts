import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantprofileComponent } from './tenantprofile.component';

describe('TenantprofileComponent', () => {
  let component: TenantprofileComponent;
  let fixture: ComponentFixture<TenantprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

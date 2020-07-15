import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantmaintenanceComponent } from './tenantmaintenance.component';

describe('TenantmaintenanceComponent', () => {
  let component: TenantmaintenanceComponent;
  let fixture: ComponentFixture<TenantmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

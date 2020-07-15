import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantdashboardComponent } from './tenantdashboard.component';

describe('TenantdashboardComponent', () => {
  let component: TenantdashboardComponent;
  let fixture: ComponentFixture<TenantdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

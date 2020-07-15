import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantpaymentsComponent } from './tenantpayments.component';

describe('TenantpaymentsComponent', () => {
  let component: TenantpaymentsComponent;
  let fixture: ComponentFixture<TenantpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

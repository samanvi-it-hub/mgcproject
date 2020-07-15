import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantreceiptsComponent } from './tenantreceipts.component';

describe('TenantreceiptsComponent', () => {
  let component: TenantreceiptsComponent;
  let fixture: ComponentFixture<TenantreceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantreceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantreceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

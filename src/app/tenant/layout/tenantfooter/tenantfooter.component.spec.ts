import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantfooterComponent } from './tenantfooter.component';

describe('TenantfooterComponent', () => {
  let component: TenantfooterComponent;
  let fixture: ComponentFixture<TenantfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

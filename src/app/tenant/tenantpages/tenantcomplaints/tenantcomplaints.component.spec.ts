import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantcomplaintsComponent } from './tenantcomplaints.component';

describe('TenantcomplaintsComponent', () => {
  let component: TenantcomplaintsComponent;
  let fixture: ComponentFixture<TenantcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

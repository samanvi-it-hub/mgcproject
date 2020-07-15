import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantpagesComponent } from './tenantpages.component';

describe('TenantpagesComponent', () => {
  let component: TenantpagesComponent;
  let fixture: ComponentFixture<TenantpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

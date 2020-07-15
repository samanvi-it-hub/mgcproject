import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsidenavComponent } from './tenantsidenav.component';

describe('TenantsidenavComponent', () => {
  let component: TenantsidenavComponent;
  let fixture: ComponentFixture<TenantsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

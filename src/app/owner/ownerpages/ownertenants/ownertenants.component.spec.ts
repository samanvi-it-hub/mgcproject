import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnertenantsComponent } from './ownertenants.component';

describe('OwnertenantsComponent', () => {
  let component: OwnertenantsComponent;
  let fixture: ComponentFixture<OwnertenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnertenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnertenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

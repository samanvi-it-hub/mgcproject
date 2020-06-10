import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervmaintananceComponent } from './supervmaintanance.component';

describe('SupervmaintananceComponent', () => {
  let component: SupervmaintananceComponent;
  let fixture: ComponentFixture<SupervmaintananceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervmaintananceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervmaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

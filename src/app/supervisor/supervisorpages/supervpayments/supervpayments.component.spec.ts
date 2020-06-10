import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervpaymentsComponent } from './supervpayments.component';

describe('SupervpaymentsComponent', () => {
  let component: SupervpaymentsComponent;
  let fixture: ComponentFixture<SupervpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

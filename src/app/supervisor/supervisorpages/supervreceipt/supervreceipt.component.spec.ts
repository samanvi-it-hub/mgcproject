import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervreceiptComponent } from './supervreceipt.component';

describe('SupervreceiptComponent', () => {
  let component: SupervreceiptComponent;
  let fixture: ComponentFixture<SupervreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

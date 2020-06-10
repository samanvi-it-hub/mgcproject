import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervemployeeComponent } from './supervemployee.component';

describe('SupervemployeeComponent', () => {
  let component: SupervemployeeComponent;
  let fixture: ComponentFixture<SupervemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

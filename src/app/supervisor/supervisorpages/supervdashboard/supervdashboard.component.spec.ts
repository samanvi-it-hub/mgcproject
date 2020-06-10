import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervdashboardComponent } from './supervdashboard.component';

describe('SupervdashboardComponent', () => {
  let component: SupervdashboardComponent;
  let fixture: ComponentFixture<SupervdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

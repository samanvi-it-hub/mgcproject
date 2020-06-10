import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervfooterComponent } from './supervfooter.component';

describe('SupervfooterComponent', () => {
  let component: SupervfooterComponent;
  let fixture: ComponentFixture<SupervfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

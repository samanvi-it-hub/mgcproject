import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorpagesComponent } from './supervisorpages.component';

describe('SupervisorpagesComponent', () => {
  let component: SupervisorpagesComponent;
  let fixture: ComponentFixture<SupervisorpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

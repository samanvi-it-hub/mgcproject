import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervcomplaintsComponent } from './supervcomplaints.component';

describe('SupervcomplaintsComponent', () => {
  let component: SupervcomplaintsComponent;
  let fixture: ComponentFixture<SupervcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

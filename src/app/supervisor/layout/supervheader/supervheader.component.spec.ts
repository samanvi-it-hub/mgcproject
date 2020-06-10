import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervheaderComponent } from './supervheader.component';

describe('SupervheaderComponent', () => {
  let component: SupervheaderComponent;
  let fixture: ComponentFixture<SupervheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

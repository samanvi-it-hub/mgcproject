import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervsidenavComponent } from './supervsidenav.component';

describe('SupervsidenavComponent', () => {
  let component: SupervsidenavComponent;
  let fixture: ComponentFixture<SupervsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

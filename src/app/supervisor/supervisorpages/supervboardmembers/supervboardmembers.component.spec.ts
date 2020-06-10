import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervboardmembersComponent } from './supervboardmembers.component';

describe('SupervboardmembersComponent', () => {
  let component: SupervboardmembersComponent;
  let fixture: ComponentFixture<SupervboardmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervboardmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervboardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

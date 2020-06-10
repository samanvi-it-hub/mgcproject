import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervvendorsComponent } from './supervvendors.component';

describe('SupervvendorsComponent', () => {
  let component: SupervvendorsComponent;
  let fixture: ComponentFixture<SupervvendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervvendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

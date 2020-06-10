import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnercomplaintComponent } from './ownercomplaint.component';

describe('OwnercomplaintComponent', () => {
  let component: OwnercomplaintComponent;
  let fixture: ComponentFixture<OwnercomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnercomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnercomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

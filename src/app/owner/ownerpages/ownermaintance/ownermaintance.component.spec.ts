import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnermaintanceComponent } from './ownermaintance.component';

describe('OwnermaintanceComponent', () => {
  let component: OwnermaintanceComponent;
  let fixture: ComponentFixture<OwnermaintanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnermaintanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnermaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

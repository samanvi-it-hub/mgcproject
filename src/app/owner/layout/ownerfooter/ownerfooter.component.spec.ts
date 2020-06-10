import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerfooterComponent } from './ownerfooter.component';

describe('OwnerfooterComponent', () => {
  let component: OwnerfooterComponent;
  let fixture: ComponentFixture<OwnerfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

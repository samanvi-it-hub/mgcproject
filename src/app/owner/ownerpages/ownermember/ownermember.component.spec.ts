import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnermemberComponent } from './ownermember.component';

describe('OwnermemberComponent', () => {
  let component: OwnermemberComponent;
  let fixture: ComponentFixture<OwnermemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnermemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnermemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

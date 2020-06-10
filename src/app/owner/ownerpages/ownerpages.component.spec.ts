import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerpagesComponent } from './ownerpages.component';

describe('OwnerpagesComponent', () => {
  let component: OwnerpagesComponent;
  let fixture: ComponentFixture<OwnerpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

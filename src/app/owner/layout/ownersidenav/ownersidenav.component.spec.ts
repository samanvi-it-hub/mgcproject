import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersidenavComponent } from './ownersidenav.component';

describe('OwnersidenavComponent', () => {
  let component: OwnersidenavComponent;
  let fixture: ComponentFixture<OwnersidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

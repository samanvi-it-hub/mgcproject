import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerreportsComponent } from './ownerreports.component';

describe('OwnerreportsComponent', () => {
  let component: OwnerreportsComponent;
  let fixture: ComponentFixture<OwnerreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

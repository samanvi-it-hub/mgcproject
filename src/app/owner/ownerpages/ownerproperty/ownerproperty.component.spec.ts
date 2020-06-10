import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerpropertyComponent } from './ownerproperty.component';

describe('OwnerpropertyComponent', () => {
  let component: OwnerpropertyComponent;
  let fixture: ComponentFixture<OwnerpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

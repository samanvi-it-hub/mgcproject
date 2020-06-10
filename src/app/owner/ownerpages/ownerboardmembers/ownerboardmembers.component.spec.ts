import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerboardmembersComponent } from './ownerboardmembers.component';

describe('OwnerboardmembersComponent', () => {
  let component: OwnerboardmembersComponent;
  let fixture: ComponentFixture<OwnerboardmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerboardmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerboardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

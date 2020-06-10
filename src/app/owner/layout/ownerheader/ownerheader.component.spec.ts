import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerheaderComponent } from './ownerheader.component';

describe('OwnerheaderComponent', () => {
  let component: OwnerheaderComponent;
  let fixture: ComponentFixture<OwnerheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

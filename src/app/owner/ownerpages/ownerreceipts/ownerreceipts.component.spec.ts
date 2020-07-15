import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerreceiptsComponent } from './ownerreceipts.component';

describe('OwnerreceiptsComponent', () => {
  let component: OwnerreceiptsComponent;
  let fixture: ComponentFixture<OwnerreceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerreceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerreceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

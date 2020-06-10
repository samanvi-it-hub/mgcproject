import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbroadcastComponent } from './adminbroadcast.component';

describe('AdminbroadcastComponent', () => {
  let component: AdminbroadcastComponent;
  let fixture: ComponentFixture<AdminbroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

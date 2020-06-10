import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresidentComponent } from './adminresident.component';

describe('AdminresidentComponent', () => {
  let component: AdminresidentComponent;
  let fixture: ComponentFixture<AdminresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantheaderComponent } from './tenantheader.component';

describe('TenantheaderComponent', () => {
  let component: TenantheaderComponent;
  let fixture: ComponentFixture<TenantheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

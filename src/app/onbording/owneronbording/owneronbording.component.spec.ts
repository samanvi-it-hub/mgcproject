import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwneronbordingComponent } from './owneronbording.component';

describe('OwneronbordingComponent', () => {
  let component: OwneronbordingComponent;
  let fixture: ComponentFixture<OwneronbordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwneronbordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwneronbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCol9Component } from './body-col9.component';

describe('BodyCol9Component', () => {
  let component: BodyCol9Component;
  let fixture: ComponentFixture<BodyCol9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCol9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCol9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
